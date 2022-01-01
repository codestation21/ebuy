import { Container } from "@mui/material";

//Layout
import Layout from "Layout/Layout";

//Components
import NewsChip from "Components/News/NewsChip";
import NewsFilter from "Components/News/NewsFilter";
import Newses from "Components/News/Newses";

//Subscribe & Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip"

const News = () => {
    return (
        <Layout>
            <Container sx={{ px: { lg: "4em", sm: "2em", xs: "1em" }, mt: "80px" }} maxWidth={false} disableGutters>
                <NewsChip />
                <NewsFilter />
                <Newses />
                <Subscribe />
                <Clip />
            </Container>
        </Layout>
    );
};
export default News;