import { Stack, Typography } from "@mui/material";
import { animated, useSpring } from "react-spring";

import Box from "@mui/material/Box";
import InitialLoaderProps from "./InitialLoaderProps";
import doubleRing from "../../assets/double_ring.svg";
import logo from "../../assets/logo.svg";

const loaderScale = 4;
const logoScale = 10;

const InitialLoader: React.FC<InitialLoaderProps> = () => {
    const loaderAnim = useSpring({
        "delay": 2000,
        "from": {
            "opacity": 1,
            "transform": "translate3d(0, 0%, 0)"
        },
        "opacity": 1,
        "transform": "translate3d(0, -100%, 0)",
    });

    const textAnim = useSpring({
        "from": {
            "opacity": 0,
            "transform": "translate3d(-200%, 0, 0)"
        },
        "opacity": 1,
        "transform": "translate3d(0%, 0, 0)"
    });

    const logoAnim = useSpring({
        "from": {
            "opacity": 0,
            "transform": "translate3d(0, 100%, 0) scale(0)",
        },
        "opacity": 1,
        "transform": "translate3d(0, 0%, 0) scale(1)"
    });

    return (
        <animated.div
            style={loaderAnim}
        >
            <Box 
                style={{
                    "alignItems": "center",
                    "backgroundColor": "#F5F5F5",
                    "display": "flex",
                    "height": "100vh",
                    "justifyContent": "center",
                    "left": 0,
                    "margin": 0,
                    "padding": 0,
                    "top": 0,
                    "width": "100vw",
                }}
            >
                <Stack>
                    <Box height="33vh" width="100vw">1</Box>

                    <Box 
                        height="33vh" 
                        width="100vw"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <animated.div style={logoAnim}>
                            <img
                                src={logo} 
                                alt="logo" 
                                style={{
                                    "height": `${logoScale * 10}px`,
                                    "width": `${logoScale * 10}px`,
                                }}
                            />
                        </animated.div>
                    </Box>
                    
                    <Box 
                        height="33vh" 
                        width="100vw"
                        display="flex"
                        alignItems="flex-end"
                        paddingLeft="50px"
                        paddingBottom="50px"
                    >
                        <animated.div style={textAnim}>
                            <Stack direction="column" spacing={-1}>
                                <Box>
                                    <Typography 
                                        style={{
                                            "color": "black",
                                            "fontFamily": "Monda",
                                            "fontSize": "20px",
                                            "fontWeight": 600,
                                            "letterSpacing": "4px",
                                            "textTransform": "uppercase",
                                            "wordSpacing": "5px"
                                        }}
                                    >
                                        Welcome to my portfolio
                                    </Typography>
                                </Box>

                                <Box>
                                    <Stack
                                        display="flex"
                                        alignItems="center"
                                        direction="row" 
                                        spacing={2}
                                    >
                                        <Typography
                                            style={{
                                                "color": "black",
                                                "fontFamily": "Monda",
                                                "fontSize": "50px",
                                                "fontWeight": 800,
                                                "letterSpacing": "2px",
                                                "textTransform": "uppercase",
                                            }}
                                        >
                                            Hang tight
                                        </Typography>

                                        <img
                                            src={doubleRing} 
                                            alt="loading..." 
                                            style={{
                                                "height": `${loaderScale * 10}px`,
                                                "paddingTop": "5px",
                                                "width": `${loaderScale * 10}px`,
                                            }}
                                        />
                                    </Stack>
                                </Box>
                            </Stack>
                        </animated.div>
                    </Box>
                </Stack>
            </Box>
        </animated.div>
    );
};

export default InitialLoader;
