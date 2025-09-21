"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { Eye, EyeOff, Plane } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the signup data to your backend
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!agree) {
      alert("You must agree to the terms");
      return;
    }
    console.log("Signup with", fullname, email, password);
    // For this example, we'll just redirect to the login page
    router.push("/login");
  };

  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="flex flex-col items-center justify-center">
          <Link href="/" className="flex items-center space-x-2 mb-2">
            <Plane className="h-6 w-6" />
            <span className="font-bold text-xl">TravelEase</span>
          </Link>
          <CardTitle className="text-center w-full">
            Create your account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                id="fullname"
                type="text"
                placeholder="Enter your full name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 pr-10"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 pr-10"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="agree" checked={agree} onCheckedChange={setAgree} />
              <Label htmlFor="agree" className="text-sm">
                I agree to the{" "}
                <a href="#" className="underline">
                  Terms & Conditions
                </a>
              </Label>
            </div>
            <Button type="submit" className="w-full mt-2">
              Sign Up
            </Button>
          </form>
          <div className="my-6 flex items-center gap-2">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">
              or sign up with
            </span>
            <Separator className="flex-1" />
          </div>
          <div className="flex gap-3 mb-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <img
                src="https://res.cloudinary.com/dxu5abgqw/image/upload/v1758453895/devicon_google_cxs9oc.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Google
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <img
                src="https://res.cloudinary.com/dxu5abgqw/image/upload/v1758453895/logos_facebook_uexmzv.svg"
                alt="Facebook"
                className="h-5 w-5"
              />
              Facebook
            </Button>
          </div>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-primary underline font-medium">
              Sign in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
