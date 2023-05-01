import {Box} from '@chakra-ui/react'

export default function Footer() { 
    return ( 
        <Box textAlign={'center'} fontSize={'small'}  opacity={0.4} color={'gray.100'}>
            &copy; {new Date().getFullYear()} Tuan Nguyen Duc Quang
        </Box> 
    )
}