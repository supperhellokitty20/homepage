import {
    Heading,
    Link,
} from '@chakra-ui/react'
import NextLink from 'next/link'

//Draw logo here
const Logo = () => { 
    return ( 
        <Link as={NextLink} href="/"
        style ={{
            textDecoration: 'none',
            color: 'inherit', 
            letterSpacing: 'tight',
        }} 
        >Tuan Nguyen
        </Link>
    )
}


export default Logo ;