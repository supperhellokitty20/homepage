import {
    Container,
    Badge,
    List,
    ListItem ,
    Link
} from '@chakra-ui/react'
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
                            React , WebRTC , PeerJS , Chakra UI 
                        </span>                    
                    </ListItem>
                    <ListItem>
                        <ArticleInfoBadge>Dev logs</ArticleInfoBadge> 
                        <Link href="/" >How i create Moice ? <ExternalLinkIcon mx={2}/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <ArticleInfoBadge
                        >Demo</ArticleInfoBadge> 
                        <Link href="/" >Check it out <ExternalLinkIcon mx={2}/></Link>
                    </ListItem>
                    <ListItem> 
                        <ArticleInfoBadge>Source</ArticleInfoBadge>
                        <Link href="https://github.com/supperhellokitty20/moice-react" >Github <ExternalLinkIcon mx={2}/></Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
} 


export default Work 
export {getServerSideProps} from '../../components/chakra'