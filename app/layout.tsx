import '../styles/style.scss'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@/components/theme-provider'

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

