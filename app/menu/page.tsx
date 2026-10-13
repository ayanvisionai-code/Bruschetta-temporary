import type { Metadata } from "next";
import { MenuClient } from "./MenuClient";

export const metadata: Metadata = {
  title: "Full Menu | Bruschetta by Food Cabaret Leeds",
  description:
    "Explore the full menu at Bruschetta by Food Cabaret: breakfast, croissants, French toast, brunch, Algerian crêpes, bruschettas, specialty coffee and drinks.",
};

export default function MenuPage() {
  return <MenuClient />;
}
