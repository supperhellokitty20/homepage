import Head from 'next/head'
import type Router from 'next/router';
import {
    Box,
    Container
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import DiamondLoader from '../diamondhand/diamond-loader';
import Nav from '../nav';
import Footer from '../footer';
const LazyLoad = dynamic(
    () => import('../diamondhand/diamond'),
    {
      ssr: false,
      loading: () => <DiamondLoader />
    }
  );
  

export default function RootLayout({
    children,
    router 
}: {
    children: React.ReactNode
    router :any 
}) {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Tuan Nguyen homepage" />
                <meta name="author" content="Nguyen Duc Quang Tuan" />
                <meta name="author" content="bunbo_tainam" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="og:title" content="Tuan Nguyen" />
                <meta property="og:type" content="website" />
                <title>Tuan Nguyen- Homepage</title>
            </Head>
            <Nav path={router.asPath}></Nav>
            <Container maxW="container.md" pt={20}> 
                <LazyLoad/>
                <br/><br/> 
                {children}
            </Container>
            <Footer></Footer>
        </Box>
    )
}