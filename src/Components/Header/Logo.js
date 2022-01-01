import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Logo Image
import LogoImage from "Assets/Logo.png"

const Logo = () => {
    return (
        <Box sx={{ mt: "5px" }}>
            <Link href="/">
                <a><Image src={LogoImage} width={108} height={40.8} alt="Logo" /></a>
            </Link>
        </Box>
    );
};
export default Logo;