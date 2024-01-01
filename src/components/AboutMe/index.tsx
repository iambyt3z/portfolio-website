import { 
    Box,
    Container, 
    Divider, 
    Stack, 
} from "@mui/material";

import { animated, useSpring } from "react-spring";
import BeyondCodingSection from "./components/BeyondCodingSection";
import StartSection from "./components/StartSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import blueCrossHollow from "../../assets/blue_cross_hollow.svg";

const CROSS_SCALE = 3;

const AboutMe = () => {
    const aboutMeAnim = useSpring({
        "delay": 250,
        "from": {
            "opacity": 0,
            "transform": "scale(0.95)" 
        },
        "opacity": 1,
        "transform": "scale(1)"
    });

    return (
        <animated.div style={aboutMeAnim}>
            <Container
                maxWidth="lg"
                sx={{
                    "display": "flex",
                    "justifyContent": "center",
                    "marginBottom": "100px",
                    "paddingTop": "7%",
                }}
            >
                <Stack>
                    
                    <StartSection/>

                    <Box mb="100px" mt="50px">
                        <Divider>
                            <img
                                src={blueCrossHollow}
                                style={{
                                    "height": `${CROSS_SCALE * 10}px`,
                                    "width": `${CROSS_SCALE * 10}px`,
                                }}
                            />
                        </Divider>
                    </Box>

                    <WorkExperienceSection/>

                    <Box mb="100px" mt="50px">
                        <Divider>
                            <img
                                src={blueCrossHollow}
                                style={{
                                    "height": `${CROSS_SCALE * 10}px`,
                                    "width": `${CROSS_SCALE * 10}px`,
                                }}
                            />
                        </Divider>
                    </Box>

                    <BeyondCodingSection/>
                </Stack>
            </Container>
        </animated.div>
    );
};

export default AboutMe;
