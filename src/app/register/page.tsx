import type { Metadata } from "next";
import { AuthScreen } from "@/components/auth/auth-screen";

export const metadata: Metadata = { title: "Ro‘yxatdan o‘tish" };
export default function RegisterPage() {
  return <AuthScreen mode="register" />;
}
