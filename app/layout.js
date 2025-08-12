import './globals.css'

export const metadata = {
  title: 'Enhanced Deployment Pipeline Test',
  description: 'This is the ultimate test of our enhanced automated deployment system\!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
