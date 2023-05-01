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
                <Heading>Works</Heading>
            </Box>
        </Layout>
    )
}
export default Works
export {getServerSideProps} from '../components/chakra'