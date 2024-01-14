import {
    Box,
    Link,
    Stack,
    Typography
} from "@mui/material";
import {
    CODEFORCES_PROFILE,
    GITHUB_PROFILE,
    LEETODE_PROFILE,
    LINKEDIN_PROFILE
} from "../../constant/links";

import { DARK_COLOR } from "../../constant";

const ApplicationFooter = () => {
    return (
        <Box
            height="180px"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            paddingTop="50px"
            sx={{ "background": DARK_COLOR }}
        >
            <Stack 
                direction="row"
                width="70%"
                spacing={70}
            >
                <Stack
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Typography variant="contactInfoHeading" mb={2}>
                        Contact Information
                    </Typography>

                    <Typography variant="contactInfoBody" mb={1} width="400px">
                        Feel free to contact me whenever you'd like. <br/>
                        I prefer communication via email.
                    </Typography>

                    <Typography variant="contactInfoBody">
                        {`Email: `} 
                        <Link 
                            href="mailto:siddhant.thakare@outlook.com"
                            underline="hover" 
                            color="inherit"
                        >
                            siddhant.thakare@outlook.com
                        </Link>
                    </Typography>

                    <Typography variant="contactInfoBody">
                        Phone: +1 (951)-544-8606
                    </Typography>
                </Stack>

                <Stack
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Typography variant="contactInfoHeading" mb={2}>
                        Find me on
                    </Typography>

                    <Link href={LINKEDIN_PROFILE} target="_blank" underline="hover" color="inherit">
                        <Typography variant="contactInfoBody">
                            LinkedIn
                        </Typography>
                    </Link>

                    <Link href={GITHUB_PROFILE} target="_blank" underline="hover" color="inherit">
                        <Typography variant="contactInfoBody">
                            GitHub
                        </Typography>
                    </Link>

                    <Link href={CODEFORCES_PROFILE} target="_blank" underline="hover" color="inherit">
                        <Typography variant="contactInfoBody">
                            Codeforces
                        </Typography>
                    </Link>

                    <Link href={LEETODE_PROFILE} target="_blank" underline="hover" color="inherit">
                        <Typography variant="contactInfoBody">
                            Leetcode
                        </Typography>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    );
};

export default ApplicationFooter;
