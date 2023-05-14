import NextLink from 'next/link';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import {Global} from "@emotion/react"

import { 
    Box,
    Text, 
    LinkOverlay, 
    LinkBox
} from '@chakra-ui/react'

export interface IWorkGridItem {
    children:any,
    title:string,
    id:string ,
    thumbnails: StaticImageData,

}
export interface IPostGridItem {
    children:any,
    title:string,
    id:string ,
    thumbnails: StaticImageData,

}

export const WorkGridItem = ({children,title ,id,thumbnails}:IWorkGridItem) => {
    return(
        <Box 
        w='100%'
        textAlign={'center'}
        >
            <LinkBox
                as={NextLink} 
                href ={`/works/${id}`}
                scroll={false} 
                cursor="pointer"
            > 
            <Image src={thumbnails} 
                alt={title}
                className="grid-item-thumb"
            />
            <LinkOverlay 
                as="div" 
                href={`/works/${id}`}
            >
                <Text fontSize={20}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children as string }</Text>
            </LinkBox> 
        </Box>
    )
} 
export const PostGridItem= ({children,title ,id,thumbnails}:IPostGridItem) => {
    return(
        <Box 
        w='100%'
        textAlign={'center'}
        >
            <LinkBox
                as={NextLink} 
                href ={`/posts/${id}`}
                scroll={false} 
                cursor="pointer"
            > 
            <Image src={thumbnails} 
                alt={title}
                className="grid-item-thumb"
            />
            <LinkOverlay 
                as="div" 
                href={`/posts/${id}`}
            >
                <Text fontSize={20}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children as string }</Text>
            </LinkBox> 
        </Box>
    )
} 

// Style image border-radius
export const WorkGridItemThumbStyle = () =>{ 
    return <Global 
        styles= { `
            .grid-item-thumb{
                border-radius: 10px;
            }
        `}
    /> 
}

export default WorkGridItem