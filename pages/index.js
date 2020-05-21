import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSS Module Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          CSS Modules anyone?
        </h1>

        <ul>
          <li>
            <Link href="/button"><a>Button</a></Link>
          </li>
          <li>
            <Link href="/alert"><a>Alert</a></Link>
          </li>
        </ul>
      </main>

      <footer>
       Made with ❤️ by TransferWise
      </footer>
    </div>
  )
}
