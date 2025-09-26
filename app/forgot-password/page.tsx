"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    router.push(`/email-verification?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center flex flex-col items-center justify-center">
          <img
            src="https://res.cloudinary.com/dxu5abgqw/image/upload/v1758480091/email-message-svgrepo-com_rmjbjt.svg"
            alt="Email Icon"
            className="h-16 w-16 mb-4 mx-auto"
          />
          <CardTitle className="text-2xl font-bold mb-2">
            Forgot your password?
          </CardTitle>
          <p className="text-muted-foreground text-base font-normal">
            Enter your email to get a reset code
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full">
              Send
            </Button>
          </form>
          <div className="text-center mt-6">
            <Link
              href="/login"
              className="text-primary underline text-sm font-medium"
            >
              Go back to Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
