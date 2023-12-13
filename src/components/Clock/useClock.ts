'use client';

import { useEffect, useState } from 'react';
import dayjs from '@/lib/dayjs';

export const useClock = (interval = 1000, tz = 'Asia/Tokyo') => {
  const [now, setNow] = useState<dayjs.Dayjs | null>(null);

  useEffect(() => {
    const intervalId = setInterval(
      () => setNow(dayjs().tz(tz)),
      interval,
    );

    return () => clearInterval(intervalId);
  }, [interval, setNow, tz]);

  return now;
};
