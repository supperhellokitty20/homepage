import { ParsedUrlQuery } from 'querystring'
import { MDXFrontMatter } from '@/lib/types'
import {MDXRemote} from 'next-mdx-remote'
import {serialize } from 'next-mdx-remote/serialize'
import { getAllMdx } from '@/lib/mdx';
import { GetStaticPaths, GetStaticProps ,NextPage } from 'next';
import Layout from '@/components/layouts/article' ;
import {
    Container,
    Heading,
    Box ,
    Badge
} from '@chakra-ui/react'
import {
    Title
} from '@/components/post' ;


interface ContextProps extends ParsedUrlQuery {
    slug:string;
} 
interface PostProps { 
    frontMatter: MDXFrontMatter ; 
    mdx : any 
}

const Post:NextPage<PostProps> =  ({frontMatter,mdx})  => { 
    return (
        <Layout title={frontMatter.title}> 
            <Container>
                <Title>
                    {frontMatter.title} <Badge>{frontMatter.date}</Badge> 
                </Title>
                {/* Addd custom components here maybe*/}
                <MDXRemote {...mdx} /> 
            </Container>
        </Layout>
    )
} 
export const getStaticPaths: GetStaticPaths = async () => {
    const mdxFiles = getAllMdx();
    return {
      paths: mdxFiles.map((file) => ({
        params: { slug: file.frontMatter.slug },
      })),
      fallback: false,
    };
};

export const getStaticProps:GetStaticProps = async (context)  => { 
    const {slug} = context.params as ContextProps ;
    const mdxFiles = getAllMdx() ;
    const postIndex = mdxFiles.findIndex((post) => post.frontMatter.slug === slug) ;
    const post = mdxFiles[postIndex] ;
    const {frontMatter, content} =post ;
    const mdxContent = await  serialize(content,{scope:frontMatter}) ;
    return { 
        props: { 
            frontMatter,
            mdx:mdxContent
        }
    }
}

export default Post ;