import { animated, useSpring } from "react-spring";
import { useEffect, useState } from "react";

import ApplicationBar from "./components/ApplicationBar";
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
        }, 2000);
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
                        height="500vh"
                        width="100%"
                        zIndex={0}
                        sx={{ "backgroundColor": "white" }}
                    >
                        <ApplicationBar/>
                    </Box>
                }
            </main>
        </animated.div>
    );
}

export default App;
