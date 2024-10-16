"use client"
import React from 'react'
import isAuth from "@/hooks/isAuth";
function Driver() {
  return (
    <div>Driver</div>
  )
}

export default isAuth(Driver)