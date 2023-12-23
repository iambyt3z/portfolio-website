import { Stack, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import InitialLoaderProps from "./InitialLoaderProps";
import { animated } from "react-spring";
import loader from "../../assets/ripple.svg";
import logo from "../../assets/logo_light.svg";
import useInitialLoaderAnims from "../../hooks/useInitialLoaderAnims";
import whiteCrossFilled from "../../assets/white_cross_filled.svg";
import whiteCrossHollow from "../../assets/white_cross_hollow.svg";
import whiteHaflCrossHollow from "../../assets/white_half_cross_hollow.svg";
import whiteHeart from "../../assets/white_heart.svg";

const LOADER_SCALE = 7;
const LOGO_SCALE = 12;
const CROSS_SCALE = 7;

const InitialLoader: React.FC<InitialLoaderProps> = () => {
    const {
        crossAnim1,
        crossAnim2,
        crossAnim3,
        crossAnim4,
        crossAnim5,
        crossAnim6,
        crossAnim7,
        crossAnim8,
        crossAnim9,
        loaderAnim,
        logoAnim,
        textAnim,
    } = useInitialLoaderAnims();

    return (
        <animated.div style={loaderAnim}>
            <Box 
                style={{
                    "alignItems": "center",
                    "backgroundColor": "#18191f",
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
                    <Box height="33vh" width="100vw">
                        <Stack
                            height="33vh"
                            spacing={3}
                            display="flex"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            paddingLeft="20px"
                        >
                            <Stack 
                                direction="row" 
                                spacing={3} 
                                display="flex" 
                                justifyContent="flex-end"
                                paddingTop="20px"
                            >
                                <animated.div style={crossAnim8}>
                                    <Box>
                                        <img
                                            src={whiteCrossHollow}
                                            style={{
                                                "height": `${CROSS_SCALE * 10}px`,
                                                "width": `${CROSS_SCALE * 10}px`,
                                            }}
                                        />
                                    </Box>
                                </animated.div>
                                
                                <animated.div style={crossAnim7}>
                                    <Box>
                                        <img
                                            src={whiteCrossFilled}
                                            style={{
                                                "height": `${CROSS_SCALE * 10}px`,
                                                "width": `${CROSS_SCALE * 10}px`,
                                            }}
                                        />
                                    </Box>
                                </animated.div>
                                
                                <animated.div style={crossAnim6}>
                                    <Box>
                                        <img
                                            src={whiteHeart}
                                            style={{
                                                "height": `${CROSS_SCALE * 10}px`,
                                                "width": `${CROSS_SCALE * 10}px`,
                                            }}
                                        />
                                    </Box>
                                </animated.div>
                            </Stack>

                            <animated.div style={crossAnim9}>
                                <Box 
                                    display="flex" 
                                    justifyContent="flex-end"
                                >
                                    <img
                                        src={whiteCrossFilled}
                                        style={{
                                            "height": `${CROSS_SCALE * 10}px`,
                                            "width": `${CROSS_SCALE * 10}px`,
                                        }}
                                    />
                                </Box>
                            </animated.div>
                        </Stack>
                    </Box>

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
                                    "height": `${LOGO_SCALE * 10}px`,
                                    "width": `${LOGO_SCALE * 10}px`,
                                }}
                            />
                        </animated.div>
                    </Box>
                    
                    <Box height="33vh" width="100vw">
                        <Stack
                            direction="row"
                            width="100%"
                        >
                            <Box
                                height="33vh"
                                width="50%"
                                display="flex"
                                alignItems="flex-end"
                                paddingLeft="10px"
                            >
                                <animated.div style={textAnim}>
                                    <Stack 
                                        direction="row" 
                                        spacing={-3} 
                                        paddingBottom="20px"
                                    >
                                        <Box>
                                            <img
                                                src={loader} 
                                                alt="loading..." 
                                                style={{
                                                    "height": `${LOADER_SCALE * 10}px`,
                                                    "width": `${LOADER_SCALE * 10}px`,
                                                }}
                                            />
                                        </Box>

                                        <Stack
                                            direction="column"
                                            spacing={-0.5}
                                            pl={3}
                                            height="100%"
                                            display="flex"
                                            justifyContent="center"
                                        >
                                            <Typography 
                                                style={{
                                                    "color": "whitesmoke",
                                                    "fontFamily": "Jura Variable",
                                                    "fontSize": "15px",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "7px",
                                                    "textTransform": "uppercase",
                                                    "wordSpacing": "0px"
                                                }}
                                            >
                                                {/* Welcome to my portfolio */}
                                            </Typography>

                                            <Typography
                                                style={{
                                                    "color": "whitesmoke",
                                                    "fontFamily": "Jura Variable",
                                                    "fontSize": "30px",
                                                    "fontWeight": 700,
                                                    "letterSpacing": "15px",
                                                    "textTransform": "uppercase",
                                                }}
                                            >
                                                {/* Hang tight */}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </animated.div>
                            </Box>

                            <Box 
                                height="33vh" 
                                width="50%"
                            >
                                <Stack
                                    height="33vh"
                                    spacing={3}
                                    display="flex"
                                    justifyContent="flex-end"
                                    alignItems="flex-end"
                                    paddingRight="20px"
                                >
                                    <animated.div style={crossAnim5}>
                                        <Box 
                                            display="flex" 
                                            justifyContent="flex-end"
                                        >
                                            <img
                                                src={whiteHaflCrossHollow}
                                                style={{
                                                    "height": `${CROSS_SCALE * 10}px`,
                                                    "width": `${CROSS_SCALE * 10}px`,
                                                }}
                                            />
                                        </Box>
                                    </animated.div>

                                    <animated.div style={crossAnim4}>
                                        <Box 
                                            display="flex" 
                                            justifyContent="flex-end"
                                        >
                                            <img
                                                src={whiteCrossHollow}
                                                style={{
                                                    "height": `${CROSS_SCALE * 10}px`,
                                                    "width": `${CROSS_SCALE * 10}px`,
                                                }}
                                            />
                                        </Box>
                                    </animated.div>

                                    <Stack 
                                        direction="row" 
                                        spacing={3} 
                                        display="flex" 
                                        justifyContent="flex-end"
                                        paddingBottom="20px"
                                    >
                                        <animated.div style={crossAnim1}>
                                            <Box>
                                                <img
                                                    src={whiteCrossFilled}
                                                    style={{
                                                        "height": `${CROSS_SCALE * 10}px`,
                                                        "width": `${CROSS_SCALE * 10}px`,
                                                    }}
                                                />
                                            </Box>
                                        </animated.div>
                                        
                                        <animated.div style={crossAnim2}>
                                            <Box>
                                                <img
                                                    src={whiteCrossHollow}
                                                    style={{
                                                        "height": `${CROSS_SCALE * 10}px`,
                                                        "width": `${CROSS_SCALE * 10}px`,
                                                    }}
                                                />
                                            </Box>
                                        </animated.div>
                                        
                                        <animated.div style={crossAnim3}>
                                            <Box>
                                                <img
                                                    src={whiteCrossFilled}
                                                    style={{
                                                        "height": `${CROSS_SCALE * 10}px`,
                                                        "width": `${CROSS_SCALE * 10}px`,
                                                    }}
                                                />
                                            </Box>
                                        </animated.div>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </animated.div>
    );
};

export default InitialLoader;
