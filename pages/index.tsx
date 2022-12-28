import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Recoil Spike</title>
        <meta name="description" content="Recoil spike" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Recoil Spike Home Page</h1>
      </main>
    </>
  )
}
