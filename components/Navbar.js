import NextLink from 'next/link';
import {
    Box,
    Container,
    Flex,
    Link,
    Heading,
    Stack,
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem,
    useColorModeValue,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './ThemeToggleButton';

const LinkItems = ({ href, path, children }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray.600', 'whiteAlpha.900');
    return (
        <NextLink href={href} passhref>
            <Link p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
                _hover={{
                    textDecoration: 'none',
                    color: 'teal.500',
                }}
                borderRadius={7}
            >
                {children}
            </Link>
        </NextLink>
    );
}

const Navbar = props => {
    const { path } = props;
    return (
        <Box
            as='nav' position={'fixed'}
            bg={useColorModeValue('#ffffff40', '#20202c')}
            style={{ backdropFilter: 'blur(10px)' }}
            width={'100%'}
            zIndex={1}
            {...props}>
            <Container
                maxW={'container.md'}
                display="flex"
                p={2}
                wrap="wrap"
                align="center"
                justifyContent="space-between">
                <Flex align="center" mr={5}>
                    <NextLink href="/" passhref>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'} cursor={"pointer"}>
                        notwld
                       </Heading>
                    </NextLink>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItems href="/works" path={path}>Works</LinkItems>
                    <LinkItems href="/posts" path={path}>Posts</LinkItems>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton/>
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<HamburgerIcon />}
                                variant="outline"
                            />
                            <MenuList>
                               <NextLink href="/works" passhref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passhref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink>
                                <NextLink href="https://www.github.com/notwld" passhref>
                                    <MenuItem as={Link}>View Source</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Navbar;
