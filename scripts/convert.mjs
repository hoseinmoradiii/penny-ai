// One-off converter: Stitch HTML export -> TSX component (class strings copied verbatim).
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const ROUTES = {
  product: '/product', features: '/features', pricing: '/pricing',
  'security-and-trust': '/security-and-trust', security: '/security-and-trust',
  company: '/company', 'sign-in': '/sign-in', 'get-started': '/get-started',
  'features-ai-technology': '/features', 'penny-ai-home': '/', 'pricing-plans': '/pricing',
  'security-trust': '/security-and-trust',
};

const VOID = new Set(['area','base','br','col','embed','hr','img','input','link','meta','source','track','wbr']);
const INLINE = new Set(['a','span','strong','em','b','i','u','img','button','input','label','code','small','sup','sub','select','textarea','abbr','mark','kbd','svg','br','time','s','del','ins']);
const ATTR = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', maxlength: 'maxLength',
  minlength: 'minLength', autocomplete: 'autoComplete', autofocus: 'autoFocus', crossorigin: 'crossOrigin',
  colspan: 'colSpan', rowspan: 'rowSpan', srcset: 'srcSet', enctype: 'encType', novalidate: 'noValidate',
  spellcheck: 'spellCheck', contenteditable: 'contentEditable', datetime: 'dateTime', inputmode: 'inputMode',
  enterkeyhint: 'enterKeyHint', 'accept-charset': 'acceptCharset', allowfullscreen: 'allowFullScreen',
  frameborder: 'frameBorder', 'xlink:href': 'xlinkHref', 'xmlns:xlink': 'xmlnsXlink', 'xml:space': 'xmlSpace',
  referrerpolicy: 'referrerPolicy', fetchpriority: 'fetchPriority',
};
const BOOL = new Set(['disabled','required','multiple','hidden','readonly','autofocus','novalidate','allowfullscreen','open','loop','muted','autoplay','controls','playsinline']);

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const str = (s) => JSON.stringify(s);

function styleObj(css) {
  const parts = css.split(';').map((p) => p.trim()).filter(Boolean).map((p) => {
    const i = p.indexOf(':');
    const k = p.slice(0, i).trim(); const v = p.slice(i + 1).trim();
    const key = k.startsWith('--') ? str(k) : camel(k.toLowerCase().replace(/^-ms-/, 'ms-'));
    return `${key}: ${str(v)}`;
  });
  return `{{ ${parts.join(', ')} }}`;
}

let handlers = [];

function attrs(node) {
  const out = [];
  const tag = node.tagName;
  for (const { name, value } of node.attrs) {
    if (/^on[a-z]+$/.test(name)) {
      if (name === 'onsubmit' && /^event\.preventDefault\(\);?$/.test(value.trim())) {
        out.push('onSubmit={(e) => e.preventDefault()}');
      } else {
        handlers.push(`${name}="${value}"`);
        out.push(`/* TODO ${name}: ${value.replace(/\*\//g, '* /')} */`);
      }
      continue;
    }
    if (name === 'style') { out.push(`style=${styleObj(value)}`); continue; }
    if ((tag === 'input' || tag === 'textarea') && name === 'value') { out.push(`defaultValue=${str(value)}`); continue; }
    if (tag === 'input' && name === 'checked') { out.push('defaultChecked'); continue; }
    if (tag === 'option' && name === 'selected') { out.push('/* selected */'); continue; }
    if (name === 'href' && value.startsWith('javascript:')) { out.push('href="#"'); continue; }
    let key = ATTR[name] ?? name;
    if (!ATTR[name] && name.includes('-') && !name.startsWith('data-') && !name.startsWith('aria-')) key = camel(name);
    if (BOOL.has(name) && (value === '' || value === name)) { out.push(key); continue; }
    if (['colSpan','rowSpan','tabIndex','maxLength','minLength','rows','cols','size'].includes(key) && /^-?\d+$/.test(value)) { out.push(`${key}={${value}}`); continue; }
    out.push(`${key}=${str(value)}`);
  }
  return out;
}

function textOut(raw) {
  const t = raw.replace(/\s+/g, ' ');
  if (/[{}<>&]|\/\/|\/\*/.test(t)) return `{${str(t)}}`;
  return t;
}

function isInlineNode(n) {
  return n && (n.nodeName === '#text' ? n.value.trim() !== '' : INLINE.has(n.tagName));
}

let usesLink = false;

function render(nodes, depth, parentTag) {
  const kids = nodes.filter((n) => n.nodeName !== 'script');
  const out = [];
  kids.forEach((n, i) => {
    if (n.nodeName === '#text') {
      if (parentTag === 'textarea') return;
      const v = n.value;
      if (v.trim() === '') {
        const prev = kids[i - 1], next = kids[i + 1];
        if (prev && next && (isInlineNode(prev) || isInlineNode(next))) out.push('{" "}');
        return;
      }
      const lead = /^\s/.test(v) && i > 0;
      const trail = /\s$/.test(v) && i < kids.length - 1;
      let t = textOut(v.trim());
      if (parentTag === 'pre' || parentTag === 'code') t = `{${str(v)}}`;
      out.push((lead ? '{" "}' : '') + t + (trail ? '{" "}' : ''));
      return;
    }
    if (n.nodeName === '#comment') { out.push(`{/* ${n.data.trim().replace(/\*\//g, '* /')} */}`); return; }
    out.push(el(n, depth));
  });
  return out.join('\n');
}

function el(n, depth) {
  let tag = n.tagName;
  const a = attrs(n);
  if (tag === 'a') {
    const dp = n.attrs.find((x) => x.name === 'data-path')?.value;
    const href = n.attrs.find((x) => x.name === 'href')?.value;
    if (dp && ROUTES[dp] && href === '#') {
      tag = 'Link'; usesLink = true;
      const i = a.indexOf('href="#"'); a[i] = `href=${str(ROUTES[dp])}`;
    }
  }
  if (tag === 'select') {
    const opts = (n.childNodes || []).filter((c) => c.tagName === 'option');
    const sel = opts.find((o) => o.attrs.some((x) => x.name === 'selected'));
    if (sel) { const v = sel.attrs.find((x) => x.name === 'value')?.value ?? sel.childNodes.map((c) => c.value || '').join('').trim(); a.push(`defaultValue=${str(v)}`); }
  }
  if (tag === 'textarea') {
    const v = (n.childNodes || []).map((c) => c.value || '').join('');
    if (v.trim()) a.push(`defaultValue=${str(v.trim())}`);
  }
  if (n.tagName === 'img' && !n.attrs.some((x) => x.name === 'alt')) a.push('alt=""');
  const open = `<${tag}${a.length ? ' ' + a.join(' ') : ''}`;
  const children = n.tagName === 'template' ? n.content.childNodes : n.childNodes || [];
  if (VOID.has(n.tagName) || (n.tagName !== 'textarea' && children.filter((c) => c.nodeName !== 'script').length === 0) || n.tagName === 'textarea') return `${open} />`;
  return `${open}>\n${render(children, depth + 1, n.tagName)}\n</${tag}>`;
}

export function convert(file, name) {
  handlers = []; usesLink = false;
  const html = fs.readFileSync(file, 'utf8');
  const doc = parse(html);
  const htmlEl = doc.childNodes.find((n) => n.tagName === 'html');
  const head = htmlEl.childNodes.find((n) => n.tagName === 'head');
  const body = htmlEl.childNodes.find((n) => n.tagName === 'body');
  const styles = head.childNodes.filter((n) => n.tagName === 'style').map((s) => s.childNodes.map((c) => c.value).join(''));
  const bodyClass = body.attrs.find((x) => x.name === 'class')?.value ?? '';
  const jsx = render(body.childNodes, 2, 'body');
  const css = styles.map((s) => s.trim()).join('\n');
  const src = `${handlers.length ? "'use client';\n\n" : ''}${usesLink ? "import Link from 'next/link';\n" : ''}
const pageStyles = ${str(css)};

export default function ${name}() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
${jsx}
    </>
  );
}
`;
  return { src, handlers, bodyClass };
}

const [, , srcDir, outDir] = process.argv;
const MAP = {
  penny_ai_home_page: ['home', 'HomeDesktop'], penny_ai_home_mobile: ['home', 'HomeMobile'],
  product_overview_penny_ai: ['product', 'ProductDesktop'], product_penny_ai_mobile: ['product', 'ProductMobile'],
  features_ai_technology: ['features', 'FeaturesDesktop'], features_ai_technology_mobile: ['features', 'FeaturesMobile'],
  pricing_plans: ['pricing', 'PricingDesktop'], pricing_plans_mobile: ['pricing', 'PricingMobile'],
  security_trust_penny_ai: ['security-and-trust', 'SecurityDesktop'], security_trust_penny_ai_mobile: ['security-and-trust', 'SecurityMobile'],
  company_about_us_penny_ai: ['company', 'CompanyDesktop'], company_about_us_penny_ai_mobile: ['company', 'CompanyMobile'],
  sign_in_penny_ai: ['sign-in', 'SignInDesktop'], sign_in_penny_ai_mobile: ['sign-in', 'SignInMobile'],
  get_started_penny_ai: ['get-started', 'GetStartedDesktop'], get_started_penny_ai_mobile: ['get-started', 'GetStartedMobile'],
};
const bodyClasses = {};
for (const [dir, [route, comp]] of Object.entries(MAP)) {
  const { src, handlers, bodyClass } = convert(path.join(srcDir, dir, 'code.html'), comp);
  fs.mkdirSync(path.join(outDir, route), { recursive: true });
  const variant = comp.endsWith('Mobile') ? 'Mobile' : 'Desktop';
  fs.writeFileSync(path.join(outDir, route, `${variant}.tsx`), src);
  (bodyClasses[route] ??= {})[variant.toLowerCase()] = bodyClass;
  console.log(route, variant, 'handlers:', handlers.length);
}
fs.writeFileSync(path.join(outDir, '..', '..', 'lib', 'bodyClasses.ts'),
  `import type { Variant } from './variant';\n\nexport const bodyClasses: Record<string, Record<Variant, string>> = ${JSON.stringify(bodyClasses, null, 2)};\n`);
