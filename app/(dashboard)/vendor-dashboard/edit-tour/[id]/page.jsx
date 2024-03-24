'use client'
import dynamic from "next/dynamic";
import DashboardPage from "../../../../../components/dashboard/vendor-dashboard/edit-tour";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectAdminRoute from "../../../../../utils/ProtectAdminRoute";

const page = ({params}) => {

  const isAdmin = ProtectAdminRoute();
  console.log("isAdmain", isAdmin);
  // const router = useRouter();
  // let isAdmin = window.localStorage.getItem("isAdmin");
  // if (isAdmin === "1") {
  //   isAdmin = true;
  //   console.log("isAdmin", isAdmin);
  // }

  // const { push } = useRouter();

  // useEffect(() => {
     
  //   if (!isAdmin) {
  //     push('/login');
  //   }
  // }, []);

  return isAdmin ? (
    <>
      <DashboardPage params = {params} />
    </>
  ) : null;
}

export default dynamic(() => Promise.resolve(page), {
  ssr: false,
});
