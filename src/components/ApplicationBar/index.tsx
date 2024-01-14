import {
    AppBar,
    Box,
    Link,
    Stack,
    Toolbar
} from "@mui/material";
import { animated, useSpring } from "react-spring";
import { DARK_COLOR } from "../../constant";

import githubLogo from "../../assets/github_logo_light.svg";
import linkedinLogo from "../../assets/linkedin_logo_light.svg";
import logo from "../../assets/logo_light.svg";

const SOCIAL_HANDLE_SIZE = 40;
const LOGO_SIZE = 50;

const ApplicationBar = () => {
    const appBarElementAnim = useSpring({
        "delay": 0,
        "from": {
            "opacity": 0,
        },
        "opacity": 1,
    });

    return (
        <animated.div style={appBarElementAnim}>
            <AppBar
                position="relative"
                elevation={0}
                sx={{ 
                    "background": DARK_COLOR,
                    "height": "100px",
                }}
            >
                <Toolbar 
                    disableGutters 
                    style={{ 
                        "height": "100%",
                        "width": "100%",
                    }}
                >
                    <Box
                        width="100%"
                        height="100%"
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        paddingLeft="40px"
                    >
                        
                        <Box 
                            height="100%"
                            width="100%"
                            display="flex"
                            alignItems="center"
                            flexDirection="row"
                        >
                            <Box 
                                display="flex" 
                                alignItems="center"
                                width="50%"
                                pl={5}
                            >
                                <img
                                    src={logo} 
                                    alt="logo" 
                                    style={{
                                        "height": `${LOGO_SIZE}px`,
                                        "width": `${LOGO_SIZE}px`,
                                    }}
                                />
                            </Box>

                            <Box 
                                display="flex" 
                                alignItems="center"
                                justifyContent="flex-end"
                                width="50%"
                                pr={20}
                            >
                                <Stack
                                    direction="row"
                                    spacing={4}
                                >
                                    <Link href="https://www.linkedin.com/in/siddhant-thakare/" target="_blank">
                                        <img
                                            src={linkedinLogo} 
                                            alt="logo" 
                                            style={{
                                                "height": `${SOCIAL_HANDLE_SIZE}px`,
                                                "width": `${SOCIAL_HANDLE_SIZE}px`,
                                            }}
                                        />
                                    </Link>

                                    <Link href="https://github.com/iambyt3z" target="_blank">
                                        <img
                                            src={githubLogo} 
                                            alt="logo"
                                            style={{
                                                "height": `${SOCIAL_HANDLE_SIZE}px`,
                                                "width": `${SOCIAL_HANDLE_SIZE}px`,
                                            }}
                                        />
                                    </Link>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </animated.div>
    );
};

export default ApplicationBar;
