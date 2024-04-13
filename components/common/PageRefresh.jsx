import { useRouter } from 'next/router';
import { useEffect } from 'react';

function refreshPage() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      router.reload();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return null;
}

export default refreshPage;
