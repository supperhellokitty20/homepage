import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import  Chakra from '@/components/chakra' 
import RootLayout from '@/components/layouts/main'
import Fonts from '@/components/font'
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

export default function App({ Component, pageProps,router }: AppProps) {
  return (
  <Chakra cookies={pageProps.cookies}>
    <Fonts />
    <RootLayout router={router}>
     <AnimatePresence
      initial={true} 
      onExitComplete={() => { 
        if(typeof window !== 'undefined') window.scrollTo({top:0})
      }}> 
        <Component {...pageProps} />
      </AnimatePresence>

    </RootLayout>
  </Chakra>
  )
}
