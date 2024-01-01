import { ReactNode } from "react";
import amazonLogo from "../../assets/amazon_logo.svg";
import kfintechLogo from "../../assets/kfintech_logo.svg";
import techMahindraLogo from "../../assets/tech_mahindra_logo.svg";

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
        "logo": 
            <img 
                src={kfintechLogo}
                style={{
                    "height": "60px",
                    "marginLeft": "-40px",
                    "marginTop": "-20px",
                    "width": "auto",
                }}
            />
    },
    {
        "gridItemSizeLg": 4,
        "gridItemSizeMd": 4,
        "gridItemSizeSm": 6,
        "gridItemSizeXl": 4,
        "gridItemSizeXs": 12,
        "id": "amazon-logo",
        "logo":
            <img 
                src={amazonLogo}
                style={{
                    "height": "60px",
                    "width": "auto",
                }}
            />
    },
    {
        "gridItemSizeLg": 4,
        "gridItemSizeMd": 4,
        "gridItemSizeSm": 12,
        "gridItemSizeXl": 4,
        "gridItemSizeXs": 12,
        "id": "tech-mahindra-logo",
        "logo": 
            <img 
                src={techMahindraLogo}
                style={{
                    "height": "60px",
                    "width": "auto",
                }}
            />
    },
];

export default WORK_EXPERIENCE_COMPANIES;
