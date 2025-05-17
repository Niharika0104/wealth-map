import AuthLayout from "./_components/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | Wealth Map",
  description: "Sign in or create an account for Wealth Map",
};

export default function AuthPage() {
  return <AuthLayout />;
}