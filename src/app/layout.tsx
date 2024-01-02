"use client"
import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { MantineProvider } from '@mantine/core'

const inter = Inter({ subsets: ['latin'] })

export type BaseLayoutProps = {
  children: React.ReactNode
  params?: any
}

export type RootLayoutProps = BaseLayoutProps & {
  auth: React.ReactNode
  public: React.ReactNode
  protected: React.ReactNode
}
const RootLayout: React.FC<RootLayoutProps> = (props) => {
  return (
    <html lang="en">
      <head>
        <title>App</title>
        <meta name='description' content='Description' />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7716621560312383" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <MantineProvider>
          {props.auth}
        </MantineProvider>
      </body>
    </html>
  )
}

export default RootLayout;
