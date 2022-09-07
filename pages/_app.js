import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../components/layouts/Fonts";
import Layout from "../components/layouts/main";
import theme from "../lib/theme";
import { GridStyle } from "../components/grid-item";
const Website = ({ Component, pageProps, router }) => {
    return (      
        <ChakraProvider theme={theme}>
            <Fonts/>
            <GridStyle/>
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    );
};

export default Website;