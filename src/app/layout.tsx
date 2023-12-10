import "@fontsource/inter/400.css"
import "@fontsource/jost/400.css"
import type { Metadata } from 'next'
import * as stylex from "@stylexjs/stylex";
import './globals.css'

const styles = stylex.create({
  body: {
    fontFamily: "'Inter', 'sans-serif'",
    fontWeight: 400,
  },
});

export const metadata: Metadata = {
  title: 'Clock',
  description: 'Clock',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body {...stylex.props(styles.body)}>
        {children}
      </body>
    </html>
  )
}
