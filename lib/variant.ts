import { headers } from "next/headers";
import { userAgent } from "next/server";

export type Variant = "desktop" | "mobile";

export async function getVariant(): Promise<Variant> {
  const { device } = userAgent({ headers: await headers() });
  return device.type === "mobile" ? "mobile" : "desktop";
}
