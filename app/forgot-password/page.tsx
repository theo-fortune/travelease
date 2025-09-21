"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setSent(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold mb-2">
            Forgot your password?
          </CardTitle>
          <p className="text-muted-foreground text-base font-normal">
            Enter your email to get a reset code
          </p>
        </CardHeader>
        <CardContent>
          {sent ? (
            <div className="text-center py-8">
              <p className="text-green-600 font-medium mb-2">
                If your email is registered, a reset link has been sent.
              </p>
            </div>
          ) : (
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
          )}
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
