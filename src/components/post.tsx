import NextLink from 'next/link'
import { 
    Heading , 
    Box , 
    Link, 
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ReactNode } from 'react'

export const Title = ({children}:{ 
    children: ReactNode
}) => { 
    return( 
        <Box>
            <Link as={NextLink} href="/posts">Posts</Link>
            <span>
                {' '} <ChevronRightIcon/> {' '}
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

