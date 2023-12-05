import styles from './page.module.css'
import { Title } from '@/components/Title'

export default function Home() {
  return (
    <main className={styles.main}>
      <Title />
    </main>
  )
}
