import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'user app'
}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World</h1>

      <Link href="/users">users</Link>
    </main>
  )
}
