import './globals.css'

export const metadata = {
  title: 'Kotroba',
  description: 'İnşaat Yönetim Sistemi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
