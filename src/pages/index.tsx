import {
  Container,
  Box,
  useColorModeValue,
  Heading,
  Link,
  Button,
  chakra,
  List,
  ListItem,
  Divider,
  ListIcon ,
} from '@chakra-ui/react'
import {HiRocketLaunch } from "react-icons/hi2";
import {ExternalLinkIcon} from '@chakra-ui/icons'
import { IoLogoInstagram, IoLogoGithub, IoMail } from 'react-icons/io5'
import {
  ChevronRightIcon
} from '@chakra-ui/icons'
import Layout from '@/components/layouts/article'
import Section from '@/components/section'
import Paragraph from '@/components/paragraph'
import Image from 'next/image'
import { BioSection, BioYear } from '@/components/bio'
import NextLink from 'next/link';

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
            I work as a System Administrator, and I have a strong interest in information security (infosec) and cybersecurity.
            Additionally, I participate in Capture The Flag (CTF) competitions, i'm known as <Link href="">FireLord</Link>.
            Feel free to check out my team <Link href="https://ctftime.org/team/266022">@ResetSec</Link>
          </Paragraph>
          <Paragraph>
            I also write <Link href="http://blog.master-rizz.lol">blogs post</Link> about cyber security topics and write ups for CTF challenge.
            Check it out if you interested
          </Paragraph>
          <Box textAlign={'center'} my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
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
            Software Production Intern at  <Link
              as={NextLink}
              href='https://www.smartpayvn.com/'
            >
              SmartPay fintech
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Application Management Engineer  working for <Link href='https://www.endava.com'>Endava</Link>.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            Hobby
          </Heading>
          Coding, 3D modelling  and Traveling
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
                  leftIcon={<IoMail />}
                >
                  bebi2k_vip@master-rizz.lol
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Section delay={-2.2}>
          <Divider my={3} mb={4} />
          <Heading as='h3' variant={'section-title'}>Achievements</Heading>
          <List spacing={1}>
            <ListItem>
              <ListIcon as={HiRocketLaunch} />
              <Link href="/works/safenight">Safe Night</Link> won 2nd place at 2022 Lassonde's <Link href=""> BEST Lab</Link>&apos;s Start Up Experience&nbsp; 
              &nbsp;(
              <Link as={NextLink} href="/best_startup_cert.pdf">Certificate<ExternalLinkIcon mx={1} /></Link> 
              /&nbsp;<Link as={NextLink} href="https://lassonde.yorku.ca/best-startup-experience-2022">Article<ExternalLinkIcon mx={1} /></Link>
              )  
              
            </ListItem>
            <ListItem>
              <ListIcon as={HiRocketLaunch}/>
              Ranked <strong>7/467</strong> in <Link href="https://ctftime.org/event/2067/"> Urmia CTF 2023 </Link>
              &nbsp;("Reset" team)
            </ListItem>
            <ListItem>
              <ListIcon as={HiRocketLaunch}/>
              Ranked <strong>16/398</strong> in <Link href="https://ctftime.org/event/2288">cr3 CTF 2024</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={HiRocketLaunch} />
              Ranked <strong>23/987</strong> in <Link href="https://ctftime.org/event/2030"> Patriot CTF 2023</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={HiRocketLaunch} />
              Ranked <strong>106/3101</strong>in <Link href="https://ctftime.org/event/2255">Cyber Apocalypse 2024: Hacker Royale</Link>
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