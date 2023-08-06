import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import PageInfoCard from '@/components/PageInfoCard';

import LoginPage from './login';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Soudia Furniture</title>
        <meta name="description" content="Soudia Furniture" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className='main'>
        {/* <PageInfoCard
          imgUrl={'/static/increase 1.png'}
          value={8000}
          title="Total Sales"
        /> */}
      </main>
    </>
  )
}
