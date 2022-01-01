import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: "Inter",
        thin: 100,
        extraLight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
    },
    breakpoints: {
        values: {
            xs: 0,
            lxs: 360,
            sms: 480,
            sm: 640,
            mds: 768,
            md: 992,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: "#222529", // Main Document Color
            light: '#ffffff', // Document background color
            black_opacity: "#222529cc", // Searchbar background color opacity 0.6 ---black
            black_opacity_secondary: "#00000036", // BorderColorer for searchBar
            black_opacity_tartiary: "#A5A5A5", // Sub Category color in searchbar
            black_opacity_quaternary: "#F4F4F4", //Category page filter bg
            facebook: "#4267B2", //Login button with facebook bg
            main_primary: "#232020", // Main Category color in searchbar
            main_secondary: "#727475", // Register and other text color
            main_tartiary: "#8E8E8E", //Rating point and other color == blacky
            main_quaternary: "#7F7F7F", //Breadcrumb text Color--- blacky
            bagItem_count: "#FF4040", // Cart or bag icon color-- Red
            delete_color: "#FF4747", // Data table deleicon color
            box_shadow: "#0000001a", //Box Shaddow--- footer and where need box shadow
            box_shadow_secondary: "#00000005", /// Category page filter searchbar
            black_hover: "#515151", // Black hover on black text --- black
            eyeIcon: "#CECECE", // Register eyeicon color
            dot_button: "#686767", // Dot button color when it is unactive
            image_hover: "linear-gradient(to right, transparent, white, transparent)",//Image hover gradient color
            product_box_shadow: "#0000000f", //Product card box shadow
            product_box_shadow_hover: "#00000030", //Product card box shadow Hover
            star: "#B7B7B7", //Star infilled color
            star_fill: "#FDC040", //Star fill color--- uses for yellow color
            border_bottom: "#D6D6D6", //Top Component title border bottom --blacky
            top_hover_bg: "#5b5b5b2b", //Top products card hover bg
            plane: "#232020", // Subscribe component plane icon color---blacky
            gray_primary: "#BAC9D6", // For single, cart, profile page color primary --- gray and Border color
            gray_secondary: "#73828E", // Gray Secondary uses gray-primary
            gray_tertiary: "#AAC9E2", //Color for about contact us page- title color
            product_detail_border: "#73828E42", // For Single product details border
            profile_tab: "#AAC9E2", // Profile tab active color bg--
            input_bg: "#F1F8FF", // Input filed bg color,
            column_color: "linear-gradient(to right, white 0 20%, transparent 20% 40%, white 40% 60%, transparent 60% 80%, white 80% 100%)", // Column Color for categories filter and searchbar
            column_color2: "linear-gradient(to right, white 0 25%, transparent 25% 50%, white 50% 75%, transparent 75% 100%)" // Column Color for categories filter and searchbar
        }
    }
});
export default theme;