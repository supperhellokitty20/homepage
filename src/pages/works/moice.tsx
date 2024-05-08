import {
    Container,
    Badge,
    List,
    ListItem ,
    Link,
} from '@chakra-ui/react'
import Image from "next/image"
import { 
    Title ,
    ArticleInfoBadge,
} from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '@/components/paragraph'
import moiceExample from "/public/works/moice-1.png"
import Layout from '../../components/layouts/article'

const Work = ()=> { 
    return ( 
        <Layout title="moice">
            <Container
            >
                <Title>
                    Moice <Badge>2019</Badge>
                </Title>
                <P>
                    A decentralized video and messaging app (p2p) built on top of the WebRTC platform. 
                    Now you can call your friends without big company selling your data or listen to, sweets :D   
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
                            HTML,CSS,JS
                        </span>                    
                    </ListItem>
                    <ListItem>
                        <ArticleInfoBadge
                        >Demo</ArticleInfoBadge> 
                        <Link href="https://moinc-c34cc.web.app/" >Check it out <ExternalLinkIcon mx={1}/></Link>
                    </ListItem>
                    <ListItem> 
                        <ArticleInfoBadge>Source</ArticleInfoBadge>
                        <Link href="https://github.com/supperhellokitty20/Moice" >Github <ExternalLinkIcon mx={1}/></Link>
                    </ListItem>

                    <Image src={moiceExample} alt="Moice demo"></Image>
                </List>
            </Container>
        </Layout>
    )
} 


export default Work 
export {getServerSideProps} from '../../components/chakra'