import {
    Container,
    Badge,
    List,
    ListItem ,
    Link
} from '@chakra-ui/react'
import exampleImage from '/public/works/wolf-1.png'
import exampleImage2 from '/public/works/wolf-2.png'
import Image from 'next/image'
import { 
    Title ,
    ArticleInfoBadge,
} from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '@/components/paragraph'

import Layout from '../../components/layouts/article'

const Work = ()=> { 
    return ( 
        <Layout title="black-wolf">
            <Container
            >
                <Title>
                    Black Wolf<Badge>2021</Badge>
                </Title>
                <P>
                    A landing page for a local cowboy style restaurant in Orangeville,Canada. BTW the food was delicous and the owner was very nice. 
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
                        <Link href="https://theblackwolf.ca" >Check it out <ExternalLinkIcon mx={2}/></Link>
                    </ListItem>
                    <Image src={exampleImage} alt="Picture of the author" />
                    <Image src={exampleImage2} alt="Picture of the author" />
                </List>
            </Container>
        </Layout>
    )
} 


export default Work 
export {getServerSideProps} from '../../components/chakra'