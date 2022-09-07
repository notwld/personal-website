import { Container, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/Section";
import { WorkGridItem } from "../components/grid-item";
import netflix from "../public/netflix.jpg";
import apriori from "../public/apriori.jpg";
import locum from "../public/locum.jpg";
import airforshare from "../public/airforshare.jpg";
import blog from "../public/blog.jpg";
import newsapp from "../public/newsapp.jpg";

const Works = () => {
    return (
        <Container maxW="container.md" pt={14}>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} spacing={6}>
                <Section>
                    <WorkGridItem id="netflix" title="Netflix Clone" thumbnail={netflix} childern="A clone of Netflix built with React.js" />
                </Section>
                <Section>
                    <WorkGridItem id="apriori" title="Frequent Itemset Generator" thumbnail={apriori} childern="A Frquent Itemsett Generation using Apriori's Pricipal made with React.js and Python" />
                </Section>
                <Section>
                    <WorkGridItem id="locum" title="LocumApp" thumbnail={locum} childern="A website for a medical institute." />
                </Section>
                <Section>
                    <WorkGridItem id="airforshare" title="AirForShare clone" thumbnail={airforshare} childern="A clone of AirforShare built with Flask Framework" />
                </Section>
                <Section>
                    <WorkGridItem id="blog" title="Blog Website" thumbnail={blog} childern="A blog website using flask framework." />
                </Section>
                <Section>
                    <WorkGridItem id="newsapp" title="News App" thumbnail={newsapp} childern="An urdu news app built with react native" />
                </Section>
            </SimpleGrid>
        </Container>
    );
}

export default Works;