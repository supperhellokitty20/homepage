import React from 'react'
import Layout from '@/components/layouts/article'
import Section from '@/components/section'
import avatarThumb from '/public/avatar.png'
import oldPortThumb from '/public/works/old-port-thumb.png'
import safeNightThumb from '/public/works/safe-night-thumb.png'
import wolfThumb from '/public/works/wolf-thumb.png'

import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {HiRocketLaunch } from "react-icons/hi2";
import {
    Container,
    Heading,
    Box ,
    SimpleGrid,
    Divider ,
    Link,
    List, 
    ListItem,
    ListIcon
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
                            <WorkGridItem   title={'Moice'} id={'moice'} thumbnails={avatarThumb}> 
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
                            <WorkGridItem   title={'StableVision Dungeonizer'} id={'dungeon'}  thumbnails={avatarThumb}> 
                                Using Deep Learning to transform video into Rock and Roll Dungeons Image sequel demo 
                            </WorkGridItem>
                        </Section>
                        <Section delay={0.1}> 
                            <WorkGridItem   title={'Old portfolio'} id={'oldport'}  thumbnails={oldPortThumb}> 
                                My old portfolio site
                            </WorkGridItem>
                        </Section>
                    </SimpleGrid>
                    <Section delay={0.2}>
                        <Divider my={5} mb={4} />
                        <Heading as='h3' mb={6}>Achievements</Heading>
                            <List spacing={3}> 
                                <ListItem>
                                    <ListIcon as={HiRocketLaunch} color="green.500" />
                                    <Link href="/works/safenight">Safe Night</Link> won 2nd place at 2022 Lassonde's <Link href=""> BEST Lab</Link>&apos;s Start Up Experience(
                                        <Link as={NextLink} href="https://lassonde.yorku.ca/best-startup-experience-2022">Article<ExternalLinkIcon mx={1}/></Link>
                                        {" "}/{" "}  
                                        <Link as={NextLink} href="https://lassonde.yorku.ca/best/">Certificate<ExternalLinkIcon mx={1}/></Link> 
                                    )
                                </ListItem>
                            </List>
                    </Section>

                </Box>
            </Container>
        </Layout>
    )
}
export default Works
export {getServerSideProps} from '../components/chakra'