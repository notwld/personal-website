import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
// import { AnimatePresence, motion } from "framer-motion";

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode();

    return (
        // <AnimatePresence mode={"wait"} initial={false}>
        //     <motion.div style={{
        //         display: 'inline-block'
        //     }}
        //         key={useColorModeValue('light', 'dark')}
        //         initial={{ y:-20,opacity: 0 }}
        //         animate={{ y:0,opacity: 1 }}
        //         exit={{ y:-20,opacity: 0 }}
        //         transition={{ duration: 0.2 }}
        //         >
                <IconButton
                    aria-label="Toggle Theme"
                    colorScheme={useColorModeValue("orange", "purple")}
                    icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
                    onClick={toggleColorMode}
                >

                </IconButton>
        //     </motion.div>
        // </AnimatePresence>
    );
}

export default ThemeToggleButton;