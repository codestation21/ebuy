import { Box } from "@mui/material";
import Head from "next/head";

//Header and Footer
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title = "eBuy- Best fashion marketplace", description }) => {
    return (
        <Box>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
            <Footer />
        </Box>
    );
};
export default Layout;