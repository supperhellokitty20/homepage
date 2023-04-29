import { ReactNode } from 'react';
import { 
  AnimatePresence,
  motion 
} from 'framer-motion'
import {
  Box,
  Flex,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
 IconButton, 
 Icon
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);
const ThemeToggleButton= () => { 
  const {toggleColorMode} = useColorMode() ;
  return( 
    <AnimatePresence initial={false}
    >
    <motion.div
      style={{ display: 'inline-block' }}
      key={useColorModeValue('light', 'dark')}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      transition={{ duration: 0.2 }}
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

export default function Nav() {
  return (
    <>
      <Box 
        bg={useColorModeValue('#ffffff40', '#20202380')}
        px={4} 
        w='100%' 
        zIndex={3}
      >
        <Flex 
        h={16} 
        alignItems={'center'} 
        justifyContent={'space-between'}
        >
          <Box>Logo</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <ThemeToggleButton />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

