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
                    Black Wolf<Badge>2019</Badge>
                </Title>
                <P>
                    A landing page for a local cowboy style restaurant in Orangeville,Canada. 
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
                            Square
                        </span>                    
                    </ListItem>
                    <ListItem>
                        <ArticleInfoBadge
                        >Live website</ArticleInfoBadge> 
                        <Link href="/" >Check it out <ExternalLinkIcon mx={2}/></Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
} 


export default Work 
export {getServerSideProps} from '../../components/chakra'