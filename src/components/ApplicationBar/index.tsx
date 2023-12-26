import {
    AppBar,
    Box,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";

import { animated, useSpring } from "react-spring";
import logo from "../../assets/logo_dark.svg";

const DARK_COLOR = "#18191f";

const ApplicationBar = () => {
    const appBarElementAnim = useSpring({
        "delay": 500,
        "from": {
            "opacity": 0,
            "transform": "scale(0.95)" 
        },
        "opacity": 1,
        "transform": "scale(1)"
    });

    return (
        <AppBar 
            position="sticky"
            color="transparent"
            elevation={0}
            sx={{ "height": "100px" }}
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
                    <animated.div style={appBarElementAnim}>
                        <Stack 
                            direction="row" 
                            height="100%"
                            spacing={1}
                            display="flex"
                            alignItems="center"
                        >
                            <Box display="flex" alignItems="center">
                                <img
                                    src={logo} 
                                    alt="logo" 
                                    style={{
                                        "height": `${40}px`,
                                        "width": `${40}px`,
                                    }}
                                />
                            </Box>

                            <Box
                                height="45px"
                                width="3px"
                                sx={{ "backgroundColor": DARK_COLOR }}
                            />

                            <Stack spacing="-5px">
                                <Typography
                                    style={{
                                        "color": DARK_COLOR,
                                        "fontFamily": "Jura Variable",
                                        "fontSize": "20px",
                                        "fontWeight": 700,
                                        "letterSpacing": "1px",
                                        "textTransform": "uppercase",
                                        "wordSpacing": "2px",
                                    }}
                                >
                                    SIDDHANT THAKARE
                                </Typography>

                                <Typography
                                    style={{
                                        "color": DARK_COLOR,
                                        "fontFamily": "Jura Variable",
                                        "fontSize": "20px",
                                        "fontWeight": 500,
                                        "letterSpacing": "1px",
                                        "textTransform": "uppercase",
                                        "wordSpacing": "5px",
                                    }}
                                >
                                    SOFTWARE DEVELOPER
                                </Typography>
                            </Stack>
                        </Stack>
                    </animated.div>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default ApplicationBar;
