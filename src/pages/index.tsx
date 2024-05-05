import {
  Container,
  Box,
  useColorModeValue,
  Heading,
  Link,
  Button,
  chakra, 
  List, 
  ListItem
} from '@chakra-ui/react'
import { IoLogoInstagram, IoLogoGithub, IoMail} from 'react-icons/io5'
import { 
  ChevronRightIcon
} from '@chakra-ui/icons'
import Layout from '@/components/layouts/article'
import Section from '@/components/section'
import Paragraph from '@/components/paragraph'
import Image from 'next/image'
import { BioSection, BioYear } from '@/components/bio'
import NextLink from 'next/link' ;

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

export default function Home() {
  return (
    <Layout>
    <Container>
    <Box
        borderRadius="lg"
        mb={6}
        mt={1}
        p={3}
        textAlign="center"
        bg={useColorModeValue('blueAlpha.200', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello there 👋 I&apos;m a developer and a hobby photographer  from Viet Nam 🇻🇳  
    </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} textAlign={'center'}>
          <Heading as="h2" variant="page-title">
            Tuan Nguyen
          </Heading>
          <p>Daydreaming( 👨‍💻/💭 )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/avatar.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
    </Box>

    <Section delay={0.1}> 
      <Heading as='h3' variant='section-title'>About</Heading> 
      <Paragraph>
        I'm currently a System Administrator, but i have great passion for infosec and cybersecurity matters .
        I also compete in CTF, checkout my team <Link href="https://ctftime.org/team/266022">ResetSec</Link> 
      </Paragraph>
      <Box  textAlign={'center'} my={4}> 
        <Button 
        as={NextLink}
        href="/works"
        scroll={false}
        rightIcon={<ChevronRightIcon/>}
        colorScheme='teal'
        >
          My Projects 
        </Button>
      </Box>
    </Section>
    <Section delay={0.2}>
      {/* <AnimatedTitle input_text='Bio' /> */}
      <Heading as='h3' variant='section-title'> 
        Bio
      </Heading>
      <BioSection>
        <BioYear>2000</BioYear>
        Born in Ho Chi Minh City , Viet Nam 
      </BioSection>
      <BioSection> 
        <BioYear>2019</BioYear>
        Studied Computer Science at <Link as={NextLink} href="https://www.yorku.ca/">York University , Toronto , Canada 🧑‍🎓</Link>
      </BioSection>
      <BioSection> 
        <BioYear>2021</BioYear>
        Software Production intern at  <Link 
        as= {NextLink}
        href='https://www.smartpayvn.com/'
        >
        SmartPay fintech
        </Link>
      </BioSection>
      <BioSection> 
        <BioYear>2022</BioYear>
       Application Management Engineer  working for <Link href='https://www.endava.com'>Endava</Link>.
       My daily responsibility is to maintain and response to emergency incident for the customer's infrastructure
      </BioSection>
    </Section>
    <Section delay={0.3}> 
      <Heading as='h3' variant='section-title'>
        Hobby
      </Heading>
      3D modelling , <Link 
      as={NextLink}
      href=''
      >
        Photography
       </Link> and Traveling
    </Section>
    <Section delay={0.4}>
      <Heading as='h3' variant={'section-title'}>
          On the web
       </Heading>
       <List>
          <ListItem>
            <Link href="https://github.com/supperhellokitty20" target="_blank">
              <Button
                variant="ghost"
                colorScheme="orange"
                leftIcon={<IoLogoGithub />}
              >
                @bunbo_tainam
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:bebi2k_vip@master-rizz.lol" target="_blank">
              <Button
               variant="ghost"
               colorScheme="orange"
               leftIcon={<IoMail/>} 
              > 
                bebi2k_vip@master-rizz.lol
              </Button>
            </Link>
          </ListItem>
        </List> 
    </Section>
    <Section>
      <Heading as='h3' variant={'section-title'}>
        CV
      </Heading>
      Check out my <Link href="/cv">CV</Link> in case you want to know more about me 
    </Section>
    </Container>
    </Layout>
  )
}
export { getServerSideProps } from '../components/chakra'