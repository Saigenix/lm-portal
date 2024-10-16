"use client";
import isAuth from "@/hooks/isAuth";
function User() {
  return <div>User</div>;
}

export default isAuth(User);
