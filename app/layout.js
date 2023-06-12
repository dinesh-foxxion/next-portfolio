import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Created by Foxxion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
