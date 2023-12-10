'use client';

import { useEffect, useState } from 'react';
import dayjs from '@/lib/dayjs';

export const useTime = (interval = 1000, tz = 'Asia/Tokyo') => {
  const [now, setNow] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(
      () => setNow(dayjs().tz(tz).format('YYYY-MM-DD HH:mm:ss')),
      interval,
    );

    return () => clearInterval(intervalId);
  }, [interval, setNow, tz]);

  return now;
};
