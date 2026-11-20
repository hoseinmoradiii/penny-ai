import type { Metadata } from "next";
import Desktop from "@/components/pages/security-and-trust/Desktop";
import Mobile from "@/components/pages/security-and-trust/Mobile";
import { getVariant } from "@/lib/variant";

export const metadata: Metadata = {
  title: "Penny AI - AI Personal Finance Assistant",
};

export default async function SecurityAndTrustPage() {
  return (await getVariant()) === "mobile" ? <Mobile /> : <Desktop />;
}
