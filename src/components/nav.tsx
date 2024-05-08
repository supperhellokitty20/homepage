import { ReactNode, forwardRef } from 'react';
import { 
  AnimatePresence,
  motion 
} from 'framer-motion'
import NextLink from 'next/link';
import Logo from './logo';
import { 
  HamburgerIcon
} from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
 IconButton, 
 Icon, 
 Heading,
 Spacer
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IoLogoGithub } from 'react-icons/io5';

const NavLink = ({ href,children,path,...props }: { children: ReactNode , href:any, path:any}) => {
  const active = path === href; 
  return (<Link
    as = {NextLink}
    p={3}
    textDecoration={'none !important'}  
    color = {useColorModeValue('gray.800', 'whiteAlpha.900')} 
    bg = {active?'#edc48e':undefined }
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('#edc48e', '#9c7b4e'),
    }}
    href={href}
    {...props}
    >
    {children}
  </Link>
  )};
const ThemeToggleButton= () => { 
  const {toggleColorMode} = useColorMode() ;
  return( 
    <AnimatePresence  initial={false}
    >
    <motion.div
      style={{ display: 'inline-block' }}
      key={useColorModeValue('light', 'dark')}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <IconButton
        aria-label="Toggle theme"
        colorScheme={useColorModeValue('blue', 'orange')}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      ></IconButton>
    </motion.div>
  </AnimatePresence>    
  )
}


export default function Nav(props:any) {
  const {path} = props ; 
  return (
      <Box 
        position='fixed'
        as = "nav"
        bg={useColorModeValue('#daebf2', '#20202380')}
        px={4} 
        w='100%' 
        zIndex={2}
        opacity={0.9}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Container 
        maxW={'container.md'} 
        display={'flex'}
        p={2}
        alignItems={'center'} 
        alignContent={'center'}
        justifyContent={'space-between'}
        >
          <Flex  
          mr={5} 
          alignItems={'center'} 
          justifyContent={'space-between'}
          >
            <Heading
              as ='h1'
            >
              <Logo/>
            </Heading>
          </Flex>
          <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <NavLink href="/works" path={path}>
            Works
          </NavLink>
          {/* <NavLink href="/posts" path={path}>
            Posts 
          </NavLink> */}
          <NavLink
            href="http://blog.master-rizz.lol" 
            display= "inline-flex"
            alignItems="center"
            style = {{gap:4}}
            pl= {2}
          > 
            Blog
          </NavLink>
          <NavLink
            href = "https://github.com/supperhellokitty20/homepage"
            path = {path}
            display= "inline-flex"
            alignItems="center"
            style = {{gap:4}}
            pl= {2}
          > 
          <IoLogoGithub/> Source
          </NavLink>
        </Stack>
        <Box 
        flex={1} 
        textAlign="right"
        >
           <ThemeToggleButton/>
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}
          >
            <Menu isLazy id="navbar-menu"
            >
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={NextLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={NextLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="http://blog.master-rizz.lol"
                >
                Blog 
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/supperhellokitty20/homepage"
                >
                Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        </Container>
      </Box>
  );
}

