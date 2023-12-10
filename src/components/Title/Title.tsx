import React from 'react';
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  title: {
    fontFamily: "'Jost', 'sans-serif'",
    fontWeight: 400,
  },
});

export const Title: React.FC = () => {
  return (
    <div>
      <h1 {...stylex.props(styles.title)}>Clock</h1>
    </div>
  );
};
