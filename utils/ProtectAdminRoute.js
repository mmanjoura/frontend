import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProtectAdminRoute = () => {
 
  const router = useRouter();
  const { push } = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);  
  const token = process.env.NEXT_PUBLIC_JWT;

  useEffect(() => {
    if (window.localStorage.getItem('token') !== token) {
      push('/login');
    } else {
      setIsAdmin(true);
    }
  }, []);

  return isAdmin;

};

export default ProtectAdminRoute;
