import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import  Chakra from '@/components/chakra' 
import RootLayout from '@/components/layouts/main'
export default function App({ Component, pageProps }: AppProps) {
  return (
  <Chakra cookies={pageProps.cookies}>
    <RootLayout>

     <AnimatePresence
      initial={true} 
      onExitComplete={() => { 
        if(typeof window !== 'undefined') window.scrollTo(0, 0)
      }}> 
        <Component {...pageProps} />
      </AnimatePresence>

    </RootLayout>
  </Chakra>
  )
}
