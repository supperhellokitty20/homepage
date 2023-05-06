import React from 'react'
import Layout from '@/components/layouts/article'
import {
    Container,
    Heading,
    Box
} from '@chakra-ui/react'
import Section from '@/components/section'
import Head from 'next/head'
const Posts: React.FC = () => {
    return (
        <Layout>
            <Container>
               <span>Posts</span> 
            </Container>
        </Layout>
    )
}
export default Posts
export { getServerSideProps } from '../components/chakra'