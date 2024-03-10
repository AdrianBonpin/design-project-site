import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/nav/navbar'
import Footer from '@/components/footer/footer'

const noto = Noto_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Design Project G2 - Trailblazers',
    description:
        'A website dedicated to showcase our 2 projects created for our Design Project class.',
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={noto.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
