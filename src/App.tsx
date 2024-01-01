import { animated, useSpring } from "react-spring";
import { useEffect, useState } from "react";

import AboutMe from "./components/AboutMe";
import ApplicationBar from "./components/ApplicationBar";
import ApplicationFooter from "./components/ApplicationFooter";
import { Box } from "@mui/material";
import InitialLoader from "./components/InitialLoader";

function App() {
    const [isMainRendered, setMainRendered] = useState(false);
    const [isInitialLoaderRendered, setInitialLoaderRendered] = useState(true);

    const startAnim = useSpring({
        "from": { "opacity": 0 }, 
        "height": "100vh",
        "opacity": 1,
        "overflow": "hidden",
    });

    useEffect(() => {
        setTimeout(() => {
            setMainRendered(true);
        }, 2700);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setInitialLoaderRendered(false);
        }, 3000);
    }, []);

    return (
        <animated.div style={startAnim}>
            {
                (isInitialLoaderRendered) &&
                <Box position="relative" zIndex={15}>
                    <InitialLoader/>
                </Box>
            }

            <main>
                {
                    (isMainRendered) &&
                    <Box
                        left={0}
                        top={0}
                        position="absolute"
                        width="100%"
                        zIndex={0}
                        sx={{ "backgroundColor": "white" }}
                    >
                        <ApplicationBar/>

                        <AboutMe/>

                        <ApplicationFooter/>
                    </Box>
                }
            </main>
        </animated.div>
    );
}

export default App;
