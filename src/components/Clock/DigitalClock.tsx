import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { useClock } from './useClock';

const styles = stylex.create({
  container: {
    height: '200px',
    width: '200px',
    borderRadius: '8px',
    padding: '56px 16px',
    backgroundColor: '#1b1d1eb3',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: '1',
  },
  sub: {
    fontFamily: "'Orbitron Variable', 'sans-serif'",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '20px',
  },
  main: {
    fontFamily: "'DSEG7 Modern Mini', 'sans-serif'",
    display: 'flex',
    alignItems: 'baseline',
  },
  hourMinute: {
    fontSize: '40px',
  },
  amPm: {
    fontFamily: "'Orbitron Variable', 'sans-serif'",
    fontSize: '20px',
  },
  second: {
    fontSize: '20px',
  },
  gray: {
    color: '#333',
  },
});

export const DigitalClock: React.FC = () => {
  const now = useClock();

  return (
    <div {...stylex.props(styles.container)}>
      {now === null
        ? 'Loading...'
        : (
          <>
            <div {...stylex.props(styles.sub)}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}>
                <span>JST</span>
                <span>{now.format('ddd')}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}>
                <span>TYO</span>
                <span>{now.format('MM')}/{now.format('DD')}</span>
              </div>
            </div>
            <div {...stylex.props(styles.main)}>
              <div {...stylex.props(styles.hourMinute)}>
                <span>{now.format('HH')}</span>:<span>{now.format('mm')}</span>
              </div>
              <div style={{
                position: 'relative',
                top: '-29px',
                left: '-2px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}>
                <div {...stylex.props(styles.amPm)}>
                  {now.format('a')}
                </div>
                <div {...stylex.props(styles.second)}>
                  {now.format('ss')}
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
};
