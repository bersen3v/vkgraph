'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import AuthPage from './auth/page';
import HomePage from './home/page';

export default function Home() {
  const [id, setId] = useState<string | null>(null);

  useLayoutEffect(() => {
    setId(localStorage.getItem('authKey'));
  }, []);

  return <div>{id ? <HomePage></HomePage> : <AuthPage></AuthPage>}</div>;
}
