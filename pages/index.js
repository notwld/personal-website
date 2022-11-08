import { Box, Container, Heading, useColorMode, useColorModeValue, Link, Button, LinkOverlay, LinkBox } from "@chakra-ui/react"
import Paragraph from "../components/Paragraph"
import Section from "../components/Section"
import NextLink from "next/link"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/Bio"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin, faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons"
const Page = () => {
    return (
        <Container>

            <Box display={{ md: 'flex' }} mt={5}>
                <Box flexGrow={1}>
                    <Heading as={"h2"} variant="page-title">
                        Muhammad Waleed
                    </Heading>
                    <p>
                        Web Developer / Designer / Programmer / Software Engineer
                    </p>
                </Box>
            </Box>
            <Box borderRadius={15} bgColor={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')} align='center' p={3} mt={5}>
                Hi 👋 I'm a full stack web developer and designer ✨🚀
            </Box>
            <Section delay={0.5}>
                <Heading as={"h3"} variant="section-title">
                    About
                </Heading>
                <Paragraph>A Software Engineering student from Pakistan. I aim to deepen my understanding in various areas of technology and product development.</Paragraph>
                <Box align="center" mt={4} justifyContent="center" alignItems={"center"}>
                    <NextLink href="/works" passHref>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme={"teal"}>My Portfolio</Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.5}>
                <Heading as={"h3"} variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2000</BioYear> Born in Karachi (کراچی), Pakistan
                </BioSection>
                <BioSection>
                    <BioYear>2017</BioYear> Completed Matriculation from The Educators
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear> Completed College from The Punjab Group of Colleges
                </BioSection>
                <BioSection>
                    <BioYear>Present</BioYear> Doing Bachelor's in Software Engineering from Usman Institute of Technology
                </BioSection>
            </Section>
            <Section delay={0.5}>
                <Heading as={"h3"} variant="section-title">
                    I 🧡
                </Heading>
                <p>Music, Movies, Art, Learning, Technology...</p>
            </Section>
            <Section delay={0.5}>
                <Heading as={"h3"} variant="section-title">
                    On the Web
                </Heading>
                <LinkBox>
                    <Box mt={2}>
                        <FontAwesomeIcon icon={faGithub} color="purple" style={{ marginRight: 5 }} />
                        <Link style={{ textDecoration: "none" }} href="https://www.github.com/notwld" target="_blank"><span>blurryface92</span></Link>
                    </Box>
                    <Box mt={2}>
                        <FontAwesomeIcon icon={faLinkedin} color="purple" style={{ marginRight: 5 }} />
                          <Link style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/mwfarrukh/" target="_blank"><span>Muhammad Waleed</span></Link>  
                    </Box>
                    <Box mt={2}>
                        <FontAwesomeIcon icon={faInstagram} color="purple" style={{ marginRight: 5 }} />
                        <Link style={{ textDecoration: "none" }} href="www.instagram.com/notwld" target="_blank"> <span>notwld</span></Link>
                    </Box>
                    <Box align="center" mt={4} justifyContent="center" alignItems={"center"}>
                        <Link href="/posts" passHref style={{ textDecoration: "none" }}>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme={"teal"}>Popular Posts</Button>
                        </Link>
                    </Box>
                </LinkBox>
            </Section>
        </Container>
    )
}

export default Page
