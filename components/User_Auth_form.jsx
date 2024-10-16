"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { KeyRound } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, LoginWithGoogle, SignOut } from "@/lib/Auth";
import { useEffect } from "react";

export function UserAuthForm({ className, userTyp, ...props }) {
  const [user, loading, error] = useAuthState(auth);
  const [isLoading, setIsLoading] = React.useState(false);
  const [userType, setUserType] = React.useState(userTyp);
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 3000)
  }
  useEffect(() => {
    // console.log(user)
    if (user) {
      if (userType === "user") router.push("/user");
      if (userType === "driver") router.push("/driver");
    }
  }, [user]);
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          {/* <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div> */}
          <Button
            disabled={isLoading}
            onClick={() => {
              setUserType("user");
              LoginWithGoogle();
            }}
          >
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.google className="mr-5 pr-4 h-4 w-4" />
            )}{" "}
            Sign In AS User
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="secondary"
        type="button"
        disabled={isLoading}
        onClick={() => {
          setUserType("driver");
          LoginWithGoogle();
        }}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          //   <Icons.google className="mr-2 h-4 w-4" />
          <KeyRound className="mr-2" />
        )}{" "}
        Sign In As Driver
      </Button>
    </div>
  );
}