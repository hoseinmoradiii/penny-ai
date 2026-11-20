import type { Metadata } from "next";
import Desktop from "@/components/pages/get-started/Desktop";
import Mobile from "@/components/pages/get-started/Mobile";
import { getVariant } from "@/lib/variant";

export const metadata: Metadata = {
  title: "Penny AI - Authentication & Setup",
};

export default async function GetStartedPage() {
  return (await getVariant()) === "mobile" ? <Mobile /> : <Desktop />;
}
