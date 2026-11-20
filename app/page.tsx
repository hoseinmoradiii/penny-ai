import type { Metadata } from "next";
import Desktop from "@/components/pages/home/Desktop";
import Mobile from "@/components/pages/home/Mobile";
import { getVariant } from "@/lib/variant";

export const metadata: Metadata = {
  title: "Penny AI - AI Personal Finance Assistant",
};

export default async function HomePage() {
  return (await getVariant()) === "mobile" ? <Mobile /> : <Desktop />;
}
