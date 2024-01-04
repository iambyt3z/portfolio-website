import { Stack, Typography } from "@mui/material";

// const LINK_STYLE: React.CSSProperties = {
//     "color": "inherit",
//     "margin": "0 5px",
//     "textDecoration": "none",
// };

const StartSection = () => {
    return (
        <Stack spacing={2}>
            <Typography variant="infoHeading" textTransform="capitalize">
                Hi !
            </Typography>

            <Typography variant="infoBody">
                I'm Siddhant Thakare
            </Typography>

            <Typography variant="infoSubBody" px="4%" py="15px">
                I'm a dedicated Software Developer currently doing my Master's studies at the University of California, Riverside. 
                My expertise lies in designing and implementing full-stack web applications that seamlessly integrate frontend and backend technologies.
            </Typography>
        </Stack>
    );
};

export default StartSection;
