'use client';
import React from "react";
import DashboardPage from "../../../../components/dashboard/vendor-dashboard/dashboard";
import ProtectAdminRoute from "@/utils/ProtectAdminRoute";



export default function page() {
  const isAdmin = ProtectAdminRoute();
  return (
    <>

      <DashboardPage />
    </>
  );
}
