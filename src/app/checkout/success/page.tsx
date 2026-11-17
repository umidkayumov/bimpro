import type { Metadata } from "next";
import { CheckoutShell } from "@/components/checkout/checkout-shell";
import { SuccessPreview } from "@/components/checkout/success-preview";

export const metadata: Metadata = {
  title: "Buyurtma tasdiqlash — namuna",
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPage() {
  return (
    <CheckoutShell>
      <SuccessPreview />
    </CheckoutShell>
  );
}
