import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Inter } from "next/font/google"
import './globals.css'
import React from "react";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] })

export const metadata :Metadata = {
    title: "Nathan Sterling - Web Developer & Designer",
    description:
        "Portfolio of Nathan Sterling, a professional web developer and designer specializing in modern, responsive web solutions.",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-quaternary text-primary`}>{children}</body>
        </html>
    )
}
