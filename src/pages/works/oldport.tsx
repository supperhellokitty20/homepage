import {
    Container,
    Badge,
    List,
    ListItem ,
    Link
} from '@chakra-ui/react'
import Image from 'next/image'
import exampleImage from '/public/works/old-port-1.png'
import exampleImage2 from '/public/works/old-port-2.png' 
import { 
    Title ,
    ArticleInfoBadge,
} from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Section from '@/components/section'
import P from '@/components/paragraph'

import Layout from '../../components/layouts/article'

const Work = ()=> { 
    return ( 
        <Layout title="oldport">
            <Container
            >
                <Title>
                    Old portfolio <Badge>2018</Badge>
                </Title>
                <P>
                    My old portfolio page.
                </P>
                <List ml={4} my={3}>
                    <ListItem>
                        <ArticleInfoBadge>Platform</ArticleInfoBadge> 
                        <span>
                            Web 
                        </span>
                    </ListItem>
                    <ListItem>
                        <ArticleInfoBadge>Stack</ArticleInfoBadge> 
                        <span>
                            HTML, CSS , Javascript,Firebase hosting 
                        </span>                    
                    </ListItem>
                    <ListItem>
                        <ArticleInfoBadge
                        >Live website</ArticleInfoBadge> 
                        <Link href="https://shecking-9983f.web.app/index.html" >Check it out <ExternalLinkIcon mx={2}/></Link>
                    </ListItem>
                    <Image src={exampleImage} alt="example image" />
                    <Image src={exampleImage2} alt="example image" />

                </List>
            </Container>
        </Layout>
    )
} 


export default Work 
export {getServerSideProps} from '../../components/chakra'