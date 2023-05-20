import {
    Container,
    Badge,
    List, 
    ListItem,
    Center,
    Heading,
    Link
} from '@chakra-ui/react'
import { 
    Title,
    ArticleInfoBadge
} from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '@/components/paragraph'

import Layout from '../../components/layouts/article'

const Work = ()=> { 
    return ( 
        <Layout title="safenight">
            <Container
            >
                <Title>
                    Safe Night <Badge>2022</Badge>
                </Title>
                <P>
                    Building a system with an advanced algorithm with real-time data to analyze the availability of beds in shelters.
                    Using RFID technology that the provider issues to the user will give them access to the facility
                </P>
                <P>
                    Due to personal reason , i can't public the code or give demo   
                </P>
                <List ml={4} my={3}>
                    <ListItem>
                        <ArticleInfoBadge>Platform</ArticleInfoBadge>
                        <span>Custom hardware</span>
                    </ListItem>
                    <ListItem>
                        <ArticleInfoBadge>Stack</ArticleInfoBadge>
                        <span>RFID,C++</span>
                    </ListItem>
                </List>
                <Heading as='h3' fontSize={16} my={6}> 
                    <Center>Media coverage</Center>
                    <List>
                        <ListItem>
                            <Link href="https://lassonde.yorku.ca/best-startup-experience-2022">
                                <Badge mr={2}>BEST Lassonde's article</Badge>
                                BEST Startup Experience 2022
                                <ExternalLinkIcon mx={2} />
                            </Link>
                        </ListItem>
                    </List>
                </Heading>
            </Container>
        </Layout>
    )
} 


export default Work 
export {getServerSideProps} from '../../components/chakra'