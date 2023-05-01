import React from 'react'
import Layout from '@/components/layouts/article'
import {
    Container,
    Heading,
    Box
 } from '@chakra-ui/react'

const Works:React.FC = ()=> { 
    return (
        <Layout>
            <Box 
                display={{ md: 'flex' }}
                textAlign={'center'}
            > 
                <Heading as='h1'>Anh YEUU e luu KIM NGANN HIHI</Heading>
            </Box>
        </Layout>
    )
}
export default Works
export {getServerSideProps} from '../components/chakra'