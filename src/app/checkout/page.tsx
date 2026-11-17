import type { Metadata } from "next";
import { CheckoutShell } from "@/components/checkout/checkout-shell";
import { CheckoutForm } from "@/components/checkout/checkout-form";

export const metadata: Metadata = {
  title: "Kursni sotib olish",
  description: "Revit MEP O‘ViK kursi: buyurtma tafsilotlari va to‘lov usullari.",
};

export default function CheckoutPage() {
  return (
    <CheckoutShell>
      <CheckoutForm />
    </CheckoutShell>
  );
}
