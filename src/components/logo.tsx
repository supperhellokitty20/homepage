import {
    Heading,
    Link,
} from '@chakra-ui/react'
import NextLink from 'next/link'

// const LogoSymbol = (props:any)=>{ 
//     return ( 
//            <svg
//             {...props}
//             > 
            
//             </svg> 
//     )
// }


//Draw logo here
const Logo = () => { 
    return ( 
        <Link as={NextLink} href="/"
        style ={{
            textDecoration: 'none',
            color: 'inherit', 
            letterSpacing: 'tight',
        }} 
        > TN 
        </Link>
    )
}


export default Logo ;