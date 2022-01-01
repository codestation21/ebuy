import { Container } from "@mui/material";

//Layout
import Layout from "Layout/Layout";

//Components
import FilterChip from "Components/Category/FilterChip";
import Filters from "Components/Category/Filters";
import Result from "Components/Category/Result";

//Subscribe & Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const Category = () => {
    return (
        <Layout>
            <Container sx={{ px: { lg: "4em", sm: "2em", xs: "1em" }, mt: "80px" }} maxWidth={false} disableGutters>
                <FilterChip />
                <Filters />
                <Result />
                <Subscribe />
                <Clip />
            </Container>
        </Layout>
    );
};
export default Category;