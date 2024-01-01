import { Stack, Typography } from "@mui/material";

const LINK_STYLE: React.CSSProperties = {
    "color": "inherit",
    "margin": "0 5px",
    "textDecoration": "none",
};

const StartSection = () => {
    return (
        <Stack spacing={2}>
            <Typography variant="infoHeading" textTransform="capitalize">
                Hi !
            </Typography>

            <Typography variant="infoBody">
                I'm Siddhant Thakare
            </Typography>

            <Typography variant="infoSubBody" px="2%" py="15px">
                I am a dedicated Software Developer currently doing my Master's studies at the University of California, Riverside. 
                My expertise lies in designing and implementing full-stack web applications that seamlessly integrate frontend and backend technologies.
                {/* In my two-year software development journey, 
                I've led teams and played a pivotal role in creating innovative features for full-stack web applications */}
            </Typography>

            {/* <Typography variant="infoSubBody" px="15%" py="20px">
                In my two-year software development journey, 
                I've led teams and played a pivotal role in creating innovative features for full-stack web applications. 
                Beyond coding, you can find me on
                <a href="https://codeforces.com/profile/byt3z" target="_blank" style={LINK_STYLE}><u>Codeforces</u></a>
                and
                <a href="https://leetcode.com/Byt3z/" target="_blank" style={LINK_STYLE}><u>Leetcode</u></a>, 
                engaging in competitive coding challenges. 
                I also enjoy team-based FPS games, and you can catch me in the gaming world under the username <b>Byt3z</b>.
            </Typography> */}
        </Stack>
    );
};

export default StartSection;
