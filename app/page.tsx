import styles from './page.module.css'
import GetAssetsPage from "@/components/getAssetsPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <GetAssetsPage />
    </main>
  )
}
