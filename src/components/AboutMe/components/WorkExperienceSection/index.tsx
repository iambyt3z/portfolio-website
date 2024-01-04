import { 
    Box, 
    Grid, 
    Typography 
} from "@mui/material";

import workExpereinceCompanies from "../../../../data/WorkExperienceCompanies";

const WorkExperienceSection = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
        >
            <Box 
                width="100%"
                display="flex"
                justifyContent="center"
            >
                <Typography variant="infoHeading">
                    Work Experience
                </Typography>
            </Box>

            <Box 
                width="100%"
                display="flex"
                justifyContent="center"
                pt={3}
            >
                <Typography variant="infoBody">
                    2 years of work experience
                </Typography>
            </Box>

            <Box 
                width="100%"
                display="flex"
                justifyContent="center"
                pt={3}
            >
                <Typography variant="infoSubBody" px="5%">
                    In my professional journey, I teamed up with industry leaders to create products and services 
                    using technologies like React, Lambda Functions, Containerized APIs, PostgreSQL, MongoDB, etc. 
                    I've leveraged AWS and it's services for deploying and hosting services and products. 
                    I have experience working with Java, Python, C/C++, with a soft spot for TypeScript.
                </Typography>
            </Box>

            <Box 
                width="100%"
                display="flex"
                justifyContent="center"
                pt={15}
            >
                {/* Work Experience Companies */}
                <Grid 
                    container
                    px="5%"
                    alignItems="center"
                    rowSpacing={10}
                    mb={5}
                >
                    {workExpereinceCompanies.map((workExperienceCompany) => {
                        return (
                            <Grid
                                item
                                id={workExperienceCompany.id}
                                xs={workExperienceCompany.gridItemSizeXs}
                                sm={workExperienceCompany.gridItemSizeSm}
                                md={workExperienceCompany.gridItemSizeMd}
                                lg={workExperienceCompany.gridItemSizeLg}
                                xl={workExperienceCompany.gridItemSizeXl}
                            >
                                <Box
                                    height="100%"
                                    width="100%"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {workExperienceCompany.logo}
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
};

export default WorkExperienceSection;
