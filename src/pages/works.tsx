import React from 'react'
import Layout from '@/components/layouts/article'
import Section from '@/components/section'
import avatarThumb from '/public/avatar.png'
import {
    Container,
    Heading,
    Box ,
    SimpleGrid,
    Divider
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
                    <Heading as='h3'> Works  </Heading>
                    <SimpleGrid columns={[1,1,2]} gap={6}>
                        {
                            /**
                             * Works done personally
                             */
                        }
                        <Section>
                            <WorkGridItem   title={'Moice'} id={'moice'} thumbnails={avatarThumb}> 
                                Moice
                            </WorkGridItem>
                        </Section>
                        <Section delay={0.1}> 
                            <WorkGridItem   title={'Cybernetic transform'} id={''}  thumbnails={avatarThumb}> 
                                A cybernetic transform
                            </WorkGridItem>
                        </Section>
                        <Section delay={0.1}> 
                            <WorkGridItem   title={'Art transformer'} id={''}  thumbnails={avatarThumb}> 
                                Art transformer transform your art 
                            </WorkGridItem>
                        </Section>
                        <Section delay={0.1}> 
                            <WorkGridItem   title={'Lorem ispum'} id={''}  thumbnails={avatarThumb}> 
                                Art transformer transform your art 
                            </WorkGridItem>
                        </Section>
                        {
                            /**
                             * Collaborations
                             */
                        }
                        <Section delay={0.2}>
                            <Divider my={5} />
                            <Heading as='h3'>Achievements</Heading>
                        </Section>
                    </SimpleGrid>
                </Box>
            </Container>

        </Layout>
    )
}
export default Works
export {getServerSideProps} from '../components/chakra'