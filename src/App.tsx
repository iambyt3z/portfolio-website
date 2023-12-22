import { animated, useSpring } from "react-spring";

import { Box } from "@mui/material";
import InitialLoader from "./components/InitialLoader";

function App() {
    const startAnim = useSpring({
        "from": { "opacity": 0 }, 
        "height": "100vh",
        "opacity": 1,
        "overflow": "hidden",
    });

    return (
        <animated.div style={startAnim}>
            <Box position="relative" zIndex={15}>
                <InitialLoader/>
            </Box>

            <Box
                left={0}
                top={0}
                position="absolute"
                height="100vh"
                width="100vw"
                sx={{ "zIndex": 0 }}
            >
                Hello World!
            </Box>
        </animated.div>
    );
}

export default App;
