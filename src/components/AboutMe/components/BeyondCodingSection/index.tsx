import { 
    Box, 
    Stack, 
    Typography 
} from "@mui/material";

import redHeart from "../../../../assets/red_heart.svg";

const LINK_STYLE: React.CSSProperties = {
    "color": "inherit",
    "margin": "0 5px",
    "textDecoration": "none",
};

const BeyondCodingSection = () => {
    return (
        <Stack spacing={2}>
            <Typography variant="infoHeading">
                Beyond coding
            </Typography>

            <Typography variant="infoBody">
                Competitive Coding & Gaming
            </Typography>

            <Box
                width="100%"
                display="flex"
                justifyContent="center"
            >
                <img
                    src={redHeart}
                    style={{
                        "height": `${30}px`,
                        "padding": "10px",
                        "width": `${30}px`,
                    }}
                />
            </Box>

            <Typography variant="infoSubBody" px="15%">
                Beyond coding, you can find me on
                <a href="https://codeforces.com/profile/byt3z" target="_blank" style={LINK_STYLE}><u>Codeforces</u></a>
                and
                <a href="https://leetcode.com/Byt3z/" target="_blank" style={LINK_STYLE}><u>Leetcode</u></a>, 
                engaging in competitive coding challenges. 
                I also enjoy team-based FPS games, and you can catch me in the gaming world under the username <b>Byt3z</b>.
            </Typography>
        </Stack>
    );
};

export default BeyondCodingSection;
