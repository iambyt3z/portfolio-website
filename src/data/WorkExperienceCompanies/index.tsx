import { ReactNode } from "react";

interface WorkExperienceCompany {
    gridItemSizeLg: 4 | 6 | 12;
    gridItemSizeMd: 4 | 6 | 12;
    gridItemSizeSm: 4 | 6 | 12;
    gridItemSizeXl: 4 | 6 | 12;
    gridItemSizeXs: 4 | 6 | 12;
    id: string;
    logo: ReactNode;
}

const WORK_EXPERIENCE_COMPANIES: WorkExperienceCompany[] = [
    {
        "gridItemSizeLg": 4,
        "gridItemSizeMd": 4,
        "gridItemSizeSm": 6,
        "gridItemSizeXl": 4,
        "gridItemSizeXs": 12,
        "id": "kfintech-logo",
        "logo": <></>
    },
    {
        "gridItemSizeLg": 4,
        "gridItemSizeMd": 4,
        "gridItemSizeSm": 6,
        "gridItemSizeXl": 4,
        "gridItemSizeXs": 12,
        "id": "amazon-logo",
        "logo": <></>
    },
    {
        "gridItemSizeLg": 4,
        "gridItemSizeMd": 4,
        "gridItemSizeSm": 6,
        "gridItemSizeXl": 4,
        "gridItemSizeXs": 12,
        "id": "tech-mahindra-logo",
        "logo": <></>
    },
];

export default WORK_EXPERIENCE_COMPANIES;
