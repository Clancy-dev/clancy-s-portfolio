import '../styles/style.scss'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clancy Ssekisambu - Full Stack Developer',
  description: 'Portfolio of Clancy Ssekisambu, a professional Full Stack Developer specializing in building websites, web applications, and systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen dark:bg-gray-900 dark:text-white`}>
        <ThemeProvider attribute="class">
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

