import {
    Container,
    Badge
} from '@chakra-ui/react'
import { 
    Title 
} from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = ()=> { 
    return ( 
        <Layout title="safenight">
            <Container
            >
                <Title>
                    Safe Night <Badge>2022</Badge>
                </Title>
            </Container>
        </Layout>
    )
} 


export default Work 
export {getServerSideProps} from '../../components/chakra'