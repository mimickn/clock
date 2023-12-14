'use client';

import styles from './page.module.css';
import { DigitalClock } from '@/components/Clock';
import { Title } from '@/components/Title';

export default function Home() {
  return (
    <main className={styles.main}>
      <Title />
      <DigitalClock />
    </main>
  )
}
