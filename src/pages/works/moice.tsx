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
        <Layout title="moice">
            <Container
            >
                <Title>
                    Moice <Badge>2019</Badge>
                </Title>
            </Container>
        </Layout>
    )
} 


export default Work 
export {getServerSideProps} from '../../components/chakra'