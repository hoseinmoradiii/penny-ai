import type { Metadata } from "next";
import Desktop from "@/components/pages/sign-in/Desktop";
import Mobile from "@/components/pages/sign-in/Mobile";
import { getVariant } from "@/lib/variant";

export const metadata: Metadata = {
  title: "Penny AI - Authentication & Setup",
};

export default async function SignInPage() {
  return (await getVariant()) === "mobile" ? <Mobile /> : <Desktop />;
}
