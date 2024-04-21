'use client';
import React from "react";
import DashboardPage from "../../../../components/dashboard/vendor-dashboard/add-golf";
import ProtectAdminRoute from "@/utils/ProtectAdminRoute";
export default function page() {
  const token = ProtectAdminRoute();
  return (
    token ? (
      <>
        <DashboardPage />
      </>
    ) : null
  );
}