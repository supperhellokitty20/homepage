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
        <Layout title="docInspector">
            <Container
            >
                <Title>
                    DocInspector <Badge>2023</Badge>
                </Title>
                <P>
                    Using the power of LLM (large language model) to inspect your uploaded document and answer your question about the document.
                    100% local support,no data leaks  

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
                            Python, Langchain, pytorch,streamlit,HuggingFace
                        </span>                    
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