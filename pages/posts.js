import { Container,Heading,SimpleGrid } from "@chakra-ui/react";
import { GridItem } from "../components/grid-item";
import flask from "../public/flask.png";

const Posts = () => {
    return (
        <Container maxW="container.md" pt={14}>
            <Heading as="h3" fontSize={20} mb={4}>
                Posts
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} spacing={6}>
                <GridItem id="flask" title="How to make an API using Flask" href = {"https://medium.com/@mwfarrukh/how-to-make-an-api-using-flask-6547d1492bce"} thumbnail={flask} childern="Hi, today i’ll guide you how to make a simple API using flask. Requirements: Python (above 3.7) pip (python package manager) Flask Visual Studio Code Step 1: Now first we’ll have to install flask module..." />
            </SimpleGrid>
        </Container>
    );
}

export default Posts;