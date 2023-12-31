import { DARK_COLOR } from "../../constant";
import React from "react";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { infoFontFamily } from "./fontFamily";

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        infoBody: true;
        infoHeading: true;
        infoSubBody: true;
        workExperienceColumn: true;
    }
}

interface ExtendedTypographyOptions extends TypographyOptions {
    infoBody: React.CSSProperties;
    infoHeading: React.CSSProperties;
    infoSubBody: React.CSSProperties;
    workExperienceColumn: React.CSSProperties;
}

export const typography = {
    "infoBody": {
        "color": DARK_COLOR,
        "fontFamily": infoFontFamily,
        "fontSize": "30px",
        "fontStyle": "normal",
        "fontWeight": 700,
        "lineHeight": "40px",
        "textAlign": "center",
    },

    "infoHeading": {
        "color": DARK_COLOR,
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
