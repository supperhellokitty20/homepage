import { 
  ChakraProvider ,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react'
import theme from '../lib/theme'

export default function Chakra({ 
    children, 
    cookies
  }: { 
  children: React.ReactNode 
  cookies?: any 
  }) {
    const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager

  return (
      <ChakraProvider theme={theme} colorModeManager={colorModeManager} cssVarsRoot='body'>
        {children}
      </ChakraProvider>
  )
}
export async function getServerSideProps({ req}:{req:any}) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}