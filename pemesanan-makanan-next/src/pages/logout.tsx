import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { clearAuthSession } from 'lib/auth';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    clearAuthSession();
    router.push('/auth/signin');
  }, [router]);

  return '';
}
