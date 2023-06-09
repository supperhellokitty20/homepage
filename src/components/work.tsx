import NextLink from 'next/link'
import {
    Heading , 
    Box , 
    Image , 
    Link, 
    Badge
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { color } from 'framer-motion'

export const ArticleInfoBadge= ({children}:{children:any}, color?:string) => {
    return (
        <Badge
            colorScheme="teal"      
            mr={2}
            mx={5}
        >
            {children}
        </Badge>
    )
}  

/**
 * Works > Title components 
 * @returns 
 */
export const Title = ({children}:{
    children: any 
}) => { 
    return ( 
        <Box> 
            <Link as={NextLink} href="/works"> 
                Works
            </Link>  
            <span>
                {' '}
                <ChevronRightIcon/>{' '}
            </span>
            <Heading 
                as="h3"
                display={'inline-block'} 
                fontSize={20} 
                mb={6}
                mt={10}
            >
               {children}
            </Heading> 
        </Box>
    )
}