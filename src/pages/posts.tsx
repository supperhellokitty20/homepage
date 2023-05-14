import React from 'react'
import Layout from '@/components/layouts/article'
import {
    Container,
    Heading,
} from '@chakra-ui/react'

import { getAllMdx } from '@/lib/mdx'
import { GetStaticProps,NextPage } from 'next'
import { MDXFrontMatter } from '@/lib/types'
import { PostList } from '@/components/posts-list'

interface PostProps { 
    posts:Array<MDXFrontMatter>;
}


const Posts:NextPage<PostProps>  = ({posts}) => {
    return (
        <Layout title="Posts">
            <Container>
                <Heading as='h3' fontSize={20} mb={2}>Posts</Heading>
                <PostList posts={posts} />
            </Container>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
    return {
      props: {
        posts: mdxFiles,
      },
    };
  };

export default Posts
// export { getServerSideProps } from '../components/chakra'