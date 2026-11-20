import type { Metadata } from "next";
import Desktop from "@/components/pages/company/Desktop";
import Mobile from "@/components/pages/company/Mobile";
import { getVariant } from "@/lib/variant";

export const metadata: Metadata = {
  title: "Penny AI - AI Personal Finance Assistant",
};

export default async function CompanyPage() {
  return (await getVariant()) === "mobile" ? <Mobile /> : <Desktop />;
}
