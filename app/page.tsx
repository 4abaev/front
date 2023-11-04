import styles from './page.module.css'
import GetAssetsPage from "@/components/getAssetsPage";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Get assets from website',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <GetAssetsPage />
    </main>
  )
}
