import type { Metadata } from "next";
import Desktop from "@/components/pages/pricing/Desktop";
import Mobile from "@/components/pages/pricing/Mobile";
import { getVariant } from "@/lib/variant";

export const metadata: Metadata = {
  title: "Penny AI - AI Personal Finance Assistant",
};

export default async function PricingPage() {
  return (await getVariant()) === "mobile" ? <Mobile /> : <Desktop />;
}
