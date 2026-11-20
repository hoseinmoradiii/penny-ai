import type { Metadata } from "next";
import Desktop from "@/components/pages/product/Desktop";
import Mobile from "@/components/pages/product/Mobile";
import { getVariant } from "@/lib/variant";

export const metadata: Metadata = {
  title: "Penny AI - AI Personal Finance Assistant",
};

export default async function ProductPage() {
  return (await getVariant()) === "mobile" ? <Mobile /> : <Desktop />;
}
