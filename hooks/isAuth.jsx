"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/Auth";


export default function isAuth(Component) {
  return function IsAuth(props) {
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();
    useEffect(() => {
      if (!user && !loading) {
        router.push("/");
      }
    }, [user, loading]);

    if (!user && !loading) {
      return (
        <div>
          <p className="text-center">login to use...</p>
        </div>
      );
    }

    return <Component {...props} user={user} />;
  };
}
