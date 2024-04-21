'use client'
import dynamic from "next/dynamic";
import DashboardPage from "../../../../../components/dashboard/vendor-dashboard/edit-activity";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectAdminRoute from "../../../../../utils/ProtectAdminRoute";

const page = ({params}) => {
  const token = ProtectAdminRoute();

  return token ? (
    <>
      <DashboardPage params = {params} />
    </>
  ) : null;
}



export default dynamic(() => Promise.resolve(page), {
  ssr: false,
});
