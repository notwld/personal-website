import {Box,Container,Heading,LinkBox,LinkOverlay,Link,Text}from"@chakra-ui/react";
import { Global } from "@emotion/react";
import NextLink from "next/link";
import Image from "next/image";

export const GridItem = ({childern,thumbnail,href,title}) => {
    
    return (
        <Box w={"100%"} align="center">
            <LinkBox cursor={"pointer"}>
                <Image src={thumbnail} alt={title} placeholder={"blur"} loading="lazy" className="grid-item-thumbnail" />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2} mb={2}>{title}</Text>
            </LinkOverlay>
                <Text fontSize={14} textAlign="justify">{childern}</Text>
            </LinkBox>

        </Box>
    );
}

export const WorkGridItem = ({childern,id,thumbnail,title}) => {
    return (
        <Box w={"100%"} align="center">
            <NextLink href={`/works/${id}`} passHref>
                <LinkBox cursor={"pointer"}>
                    <Image src={thumbnail} alt={title} placeholder={"blur"} loading="lazy" className="grid-item-thumbnail" />
                    <LinkOverlay href={`/works/${id}`} target="_blank">
                        <Text mt={2} fontSize={20}>{title}</Text>
                    </LinkOverlay>
                    <Text fontSize={14}>{childern}</Text>
                </LinkBox>
            </NextLink>
        </Box>
    );
}

export const GridStyle = () => {
    return (
        <Global
            styles={`
                .grid-item-thumbnail {
                    border-radius: 12px;
                }
            `}
        />
    );
}