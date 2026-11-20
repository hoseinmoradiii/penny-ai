import type { Metadata } from "next";
import Desktop from "@/components/pages/features/Desktop";
import Mobile from "@/components/pages/features/Mobile";
import { getVariant } from "@/lib/variant";

export const metadata: Metadata = {
  title: "Penny AI - AI Personal Finance Assistant",
};

export default async function FeaturesPage() {
  return (await getVariant()) === "mobile" ? <Mobile /> : <Desktop />;
}
