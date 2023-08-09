import { Box, Container, Heading, useColorMode, useColorModeValue, Link, Button, LinkOverlay, LinkBox } from "@chakra-ui/react"
import Paragraph from "../components/Paragraph"
import Section from "../components/Section"
import NextLink from "next/link"
import bg from "../public/bg.png"
import Image from "next/image";
import { ChevronRightIcon,DownloadIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/Bio"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin, faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons"
const Page = () => {
    const myLoader=({src})=>{
        return `https://skillicons.dev/icons?i=python,flask,html,css,js,jquery,nodejs,express,react,mongodb,dotnet,mysql,prisma,netlify,heroku,git,figma,bootstrap&theme=dark&perline=9`;
      }
    return (
        <Container>

            <Box display={{ md: 'flex' }} mt={5}>
                <Box flexGrow={1}>
                    <Image src={bg} alt={"cover"} placeholder={"blur"} loading="lazy" className="grid-item-thumbnail" ></Image>
                    <Heading as={"h2"} variant="page-title">
                        Muhammad Waleed
                    </Heading>
                    <p>
                    Software Engineer / Web Developer 
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
                <Paragraph>A Software Engineering student at Usman Institute of Technology. I am proficient in various programming languages including Python, React, JavaScript, Node/Express, SQL, Prisma, Dotnet, MongoDB, Flask and have experience using platforms such as Heroku and Netlify. I am also skilled in using Git for version control. I am excited to continue learning and growing as a developer and am eager to contribute to projects on GitHub. I aim to deepen my understanding in various areas of technology and product development.</Paragraph>
                <Box align="center" mt={4} justifyContent="center" alignItems={"center"}>
                    <NextLink href="/works" passhref>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme={"teal"}>My Portfolio</Button>
                    </NextLink>
                    <a href="https://drive.google.com/file/d/1iMc7dBA7B0ZSTrgqF0R2uHQBeDfWXoyJ/view?usp=sharing" download>
                        <Button style={{marginLeft:"10px"}} rightIcon={<DownloadIcon />} colorScheme={"teal"}>My Resume</Button>
                    </a>
    
                </Box>
            </Section>
            <Section delay={0.5}>
                <Heading as={"h3"} variant="section-title">
                    Technology Stack
                </Heading>
                <Box>
                    <Image loader={myLoader} src={"https://skillicons.dev/icons?i=python,flask,html,css,js,jquery,nodejs,express,react,mongodb,dotnet,mysql,prisma,netlify,heroku,git,figma,bootstrap&theme=dark&perline=9"} width={500}
                    height={150} alt="Technology Stack"></Image>
                </Box>
                <Heading as={"h3"} variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>Present</BioYear> Doing Bachelor's in Software Engineering from Usman Institute of Technology
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear> Completed College from The Punjab Group of Colleges
                </BioSection>
                <BioSection>
                    <BioYear>2017</BioYear> Completed Matriculation from The Educators
                </BioSection>
                <BioSection>
                    <BioYear>2000</BioYear> Born in Karachi (کراچی), Pakistan
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
                        <FontAwesomeIcon icon={faGithub} color="sky" style={{ marginRight: 5 }} />
                        <Link style={{ textDecoration: "none" }} href="https://www.github.com/notwld" target="_blank"><span>notwld</span></Link>
                    </Box>
                    <Box mt={2}>
                        <FontAwesomeIcon icon={faLinkedin} color="sky" style={{ marginRight: 5 }} />
                          <Link style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/mwfarrukh/" target="_blank"><span>Muhammad Waleed</span></Link>  
                    </Box>
                    <Box mt={2}>
                        <FontAwesomeIcon icon={faInstagram} color="sky" style={{ marginRight: 5 }} />
                        <Link style={{ textDecoration: "none" }} href="www.instagram.com/notwld" target="_blank"> <span>notwld</span></Link>
                    </Box>
                    <Box align="center" mt={4} justifyContent="center" alignItems={"center"}>
                        <Link href="/posts" passhref style={{ textDecoration: "none" }}>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme={"teal"}>Popular Posts</Button>
                        </Link>
                    </Box>
                </LinkBox>
            </Section>
        </Container>
    )
}

export default Page
