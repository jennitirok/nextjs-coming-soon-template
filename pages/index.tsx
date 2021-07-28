import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Durian and Frontier Market
        </p>
        <h1 className={styles.title}>
          Coming Soon!
        </h1>
        <p className={styles.description}>
          Want to know more?
          <br />
          <a href="https://github.com">Download the whitepaper here</a>
        </p>
      </main>

      <footer className={styles.footer}>
        Copyright &copy; 2021 Bitwyre
      </footer>
    </div>
  )
}
