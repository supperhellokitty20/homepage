import React from 'react'
import Layout from '@/components/layouts/article'
import Section from '@/components/section'
import oldPortThumb from '/public/works/old-port-thumb.png'
import safeNightThumb from '/public/works/safe-night-thumb.png'
import wolfThumb from '/public/works/wolf-thumb.png'
import moiceThumb from '/public/works/moice-thumb.png'
import {
    Container,
    Heading,
    Box ,
    SimpleGrid,
 } from '@chakra-ui/react'

import WorkGridItem from '@/components/grid-items'


const Works:React.FC = ()=> { 
    return (
        <Layout title="Works">
            <Container>
                <Box
                    mb={6}
                    pt={10}
                > 
                    <Heading as='h3' fontSize={20}> Works  </Heading>
                    <SimpleGrid columns={[1,1,2]} gap={6}>
                        <Section>
                            <WorkGridItem   title={'Moice'} id={'moice'} thumbnails={moiceThumb}> 
                                A P2P video and messaging chat app used WebRTC technology  
                            </WorkGridItem>
                        </Section>
                        <Section delay={0.1}> 
                            <WorkGridItem   title={'Safe Night'} id={'safenight'}  thumbnails={safeNightThumb}> 
                                Advance space management solution for shelter homes for savings lives  
                            </WorkGridItem>
                        </Section>
                        <Section delay={0.1}> 
                            <WorkGridItem   title={'Blackwolf BBQ site'} id={'blackwolf'}  thumbnails={wolfThumb}> 
                                Freelance job for a local restaurant in Orangville , Toronto
                            </WorkGridItem>
                        </Section>
                        <Section delay={0.1}> 
                            <WorkGridItem   title={'Old portfolio'} id={'oldport'}  thumbnails={oldPortThumb}> 
                                My old portfolio site
                            </WorkGridItem>
                        </Section>
                    </SimpleGrid>
                </Box>
            </Container>
        </Layout>
    )
}
export default Works
export {getServerSideProps} from '../components/chakra'