import { CSSProperties, TypographyOptions } from "@mui/material/styles/createTypography";

import { infoFontFamily } from "./fontFamily";

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        contactInfoBody: true;
        contactInfoHeading: true;
        infoBody: true;
        infoHeading: true;
        infoSubBody: true;
        workExperienceColumn: true;
    }
}

interface ExtendedTypographyOptions extends TypographyOptions {
    contactInfoBody: CSSProperties;
    contactInfoHeading: CSSProperties;
    infoBody: CSSProperties;
    infoHeading: CSSProperties;
    infoSubBody: CSSProperties;
    workExperienceColumn: CSSProperties;
}

export const typography = {
    "contactInfoBody": {
        "color": "#f5f5f5",
        "fontFamily": infoFontFamily,
        "fontSize": "15px",
        "fontStyle": "normal",
        "fontWeight": 400,
        "lineHeight": "25px",
        "textAlign": "left",
        "textTransform": "none",
    },

    "contactInfoHeading": {
        "color": "#f5f5f5",
        "fontFamily": infoFontFamily,
        "fontSize": "20px",
        "fontStyle": "normal",
        "fontWeight": 600,
        "lineHeight": "25px",
        "textAlign": "center",
        "textTransform": "none",
    },

    "infoBody": {
        "color": "#00ADB5",
        "fontFamily": infoFontFamily,
        "fontSize": "30px",
        "fontStyle": "normal",
        "fontWeight": 500,
        "lineHeight": "40px",
        "textAlign": "center",
    },

    "infoHeading": {
        "color": "#222831",
        "fontFamily": infoFontFamily,
        "fontSize": "20px",
        "fontStyle": "normal",
        "fontWeight": 400,
        "lineHeight": "25px",
        "textAlign": "center",
        "textTransform": "uppercase",
    },

    "infoSubBody": {
        "color": "#848898",
        "fontFamily": infoFontFamily,
        "fontSize": "20px",
        "fontStyle": "normal",
        "fontWeight": 500,
        "lineHeight": "30px",
        "textAlign": "center",
    },

    "workExperienceColumn": {
        "color": "black",
        "fontFamily": infoFontFamily,
        "fontSize": "20px",
        "fontStyle": "normal",
        "fontWeight": 500,
        "lineHeight": "30px",
        "textAlign": "center",
    },
} as ExtendedTypographyOptions;
