import Link from 'next/link'
import { MDXFrontMatter } from '@/lib/types'
import avatartThumb from '/public/avatar.png'
import { 
    Heading,
    SimpleGrid ,
} from '@chakra-ui/react'
import {PostGridItem} from './grid-items'

interface PostListProps { 
    posts:Array<MDXFrontMatter>;
}

export const PostList:React.FC<PostListProps> = ({posts}) => {
    return (
        <SimpleGrid columns={[1,1,2]} gap={6}>
            {
                posts.map((post) => { 
                    return (
                    <PostGridItem title={post.title} id={post.slug}  thumbnails={avatartThumb} key={post.slug}>
                        {post.description}
                    </PostGridItem>
                    ) 
                }) 
            }
        </SimpleGrid>
    )
}