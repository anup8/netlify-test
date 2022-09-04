import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ranjita Pokhrel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hello ! I am Padee 🤣 🤣" />
        <p className="description">
          <code>My Website coming soon. STAY TUNED !!!</code>
        </p>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
