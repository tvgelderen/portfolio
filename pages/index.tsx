import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useAppContext } from '../context/AppContext'

export default function Home() {
  let { language } = useAppContext();

  const router = useRouter();

  if (language === null)
    language = 'en'
    
  useEffect(() => {
    router.push(`/${language}`);
  }, []);

  return <div></div>
}
