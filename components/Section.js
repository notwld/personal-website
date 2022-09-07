import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, { 
    shouldForwardProp: (prop) => shouldForwardProp(prop) || prop === "initial" || prop === "animate" || prop === "transition"
});

const Section = ({ children, delay = 0}) => {
    return (
        <StyledDiv
            initial={{ y: 10, opacity: 1 }}
            animate={{ y: 10, opacity: 1 }}
            transition={{ duration: 0.8 , delay }}
            mb={7}
        >
            {children}
        </StyledDiv>
    );
}

export default Section;