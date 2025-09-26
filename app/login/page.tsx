"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Plane } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically validate the login credentials
    console.log("Login with", email, password);
    // For this example, we'll just set a user in localStorage
    localStorage.setItem("user", JSON.stringify({ email }));
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="flex flex-col items-center justify-center">
            <Link href="/" className="flex items-center space-x-2 mb-2">
              <Plane className="h-6 w-6" />
              <span className="font-bold text-xl">TravelEase</span>
            </Link>
            <CardTitle className="text-center w-full">Welcome Back!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">You are now logged in.</p>
            <Button onClick={() => router.push("/services/ai-planner")}>
              Go to AI Planner
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="flex flex-col items-center justify-center">
          <Link href="/" className="flex items-center space-x-2 mb-2">
            <Plane className="h-6 w-6" />
            <span className="font-bold text-xl">TravelEase</span>
          </Link>
          <CardTitle className="text-center w-full">
            Sign in to your account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <span className="text-sm font-medium">Password</span>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1"
              />
              <div className="flex justify-end mt-1">
                <Link
                  href="/forgot-password"
                  className="text-xs text-primary underline hover:text-primary/80"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <Button type="submit" className="w-full mt-2">
              Login
            </Button>
          </form>
          <div className="my-6 flex items-center gap-2">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">
              or continue with
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
              {/* Facebook SVG */}
              <img
                src="https://res.cloudinary.com/dxu5abgqw/image/upload/v1758453895/logos_facebook_uexmzv.svg"
                alt="Facebook"
                className="h-5 w-5"
              />
              Facebook
            </Button>
          </div>
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary underline font-medium">
              Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
