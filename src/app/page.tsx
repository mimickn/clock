'use client';

import styles from './page.module.css';
import { Title } from '@/components/Title';
import { useTime } from '@/hooks/useTime';

export default function Home() {
  const now = useTime(1000)

  return (
    <main className={styles.main}>
      <Title />
      {now === '' ? 'Loafing...' : now}
    </main>
  )
}
