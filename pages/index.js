import Head from 'next/head' 
import NewsletterSubscribe from '../components/NewsletterSubscribe'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs Newsletter</title>
        <meta name="description" content="Sample NextJs App with Newsletter functionality via Mailchimp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NewsletterSubscribe />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
