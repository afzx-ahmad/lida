import localFont from "next/font/local";
import "./globals.css";

const primaryFont = localFont({
    src: "./fonts/Plus Jakarta Sans/PlusJakartaSans.ttf",
    variable: "--font-primary",
    display: 'swap',
})

export const metadata = {
  title: 'Lida',
  description: 'Best book reviewer website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body
            className={primaryFont.variable}
        >
            {children}
        </body>
    </html>
  )
}
