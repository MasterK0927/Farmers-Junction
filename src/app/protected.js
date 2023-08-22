// pages/protected.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ProtectedPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div>
      <h1>Protected Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProtectedPage;
