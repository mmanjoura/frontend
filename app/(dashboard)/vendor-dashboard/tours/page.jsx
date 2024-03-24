'use client';
import React from "react";
import DashboardPage from "../../../../components/dashboard/vendor-dashboard/tours";
import ProtectAdminRoute from "@/utils/ProtectAdminRoute";


export default function page() {
  const isAdmin = ProtectAdminRoute();
  console.log("isAdmain", isAdmin);
  return (
    <>
      <DashboardPage />
    </>
  );
}
