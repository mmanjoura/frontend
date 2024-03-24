import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProtectAdminRoute = () => {
 
  const router = useRouter();
  const { push } = useRouter();
  let isAdmin = false;


  try {
    isAdmin = window.localStorage.getItem('isAdmin') === '1';
    useEffect(() => {
      if (!isAdmin) {
        push('/login');
      }

    }, [isAdmin, router]);
  
    return isAdmin;
  } catch (error) {
    // The catch block is optional or can be left empty to ignore the error
    // If you want to do nothing or just log the error, you can leave it empty
  }
  
};

export default ProtectAdminRoute;
