"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import * as React from "react";

export default function EmailVerificationPage() {
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", "", ""]);
  const inputRefs = [0, 1, 2, 3, 4].map(() =>
    React.useRef<HTMLInputElement>(null)
  );
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email") || "your@email.com";

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digits

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Auto-focus next input
    if (value !== "" && index < 4) {
      inputRefs[index + 1]?.current?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Handle backspace
    if (e.key === "Backspace" && index > 0 && otpValues[index] === "") {
      inputRefs[index - 1]?.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otpValues.join("");
    if (code === "58400") {
      router.push("/reset-password");
    } else {
      alert("Invalid code. Please try 58400.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center flex flex-col items-center justify-center">
          <img
            src="https://res.cloudinary.com/dxu5abgqw/image/upload/v1758480896/email-message-svgrepo-com-1_ttsgtl.svg"
            className="h-20 w-20 mb-4 mx-auto rounded-full bg-background"
          />
          <CardTitle className="text-3xl font-bold mb-2">
            Check Your Email
          </CardTitle>
          <p className="text-muted-foreground text-base font-normal">
            We&apos;ve sent a code to{" "}
            <span className="font-semibold text-foreground">{email}</span>
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center gap-2">
              {otpValues.map((value, index) => (
                <Input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-14 h-14 text-center text-2xl border-2 border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              ))}
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white text-lg rounded-xl py-6"
            >
              Verify
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
