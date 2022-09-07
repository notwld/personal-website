import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: (props) => ({
        body: {
            bg: mode("#F0E7DB", "#202023")(props),
            color: mode("gray.600", "whiteAlpha.900")(props),
        },
    }),
};

const components = {
    Heading : {
        variants: {
            "section-title": {
                fontSize: 20,
                textDecoration: "underline",
                textUnderlineOffset: 6,
                textDecorationColor: "#525252",
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            },
        }
    },
    Link : {
       baseProps: props => ({
              color: mode("#3d7aed", "#ff63c3")(props),
              textUnderlineOffset: 3,

       }),
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'",
};

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
};

const colors = {
    glassTeal: "#88ccca",
}

const theme = extendTheme({
    styles,
    components,
    fonts,
    config,
    colors
});

export default theme;