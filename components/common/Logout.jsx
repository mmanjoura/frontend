import { useState } from 'react';
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  const handleLogout = async () => {
    try {
      const response = await fetch(baseURL + '/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      window.localStorage.removeItem('token');
      window.localStorage.removeItem('user_id');
      window.localStorage.removeItem('first_name');
      window.localStorage.removeItem('last_name');
      window.localStorage.removeItem('user_email');
      
      router.push('/'); // Redirect to login page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <button onClick={handleLogout}  aria-label="Close">Logout</button>
    </div>
  );
};

export default Logout;
