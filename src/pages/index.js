import { Container } from "@mui/material";

// Layout
import Layout from "Layout/Layout";
//Components
import Carousels from "Components/Home/Carousels";
import Category from "Components/Home/Category";
import FeaturesProduct from "Components/Home/FeaturesProduct";
import Collections from "Components/Home/Collections";
import Top from "Components/Home/Top";
//Common Components
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const index = () => {
  return (
    <Layout>
      <Container maxWidth={false} disableGutters>
        <Carousels />
      </Container>
      <Container sx={{ px: { md: "4em", lxs: "1.5em", xs: "0.5em" } }} maxWidth={false} disableGutters>
        <Category />
        <FeaturesProduct />
        <Collections />
        <Top />
        <Subscribe />
        <Clip />
      </Container>
    </Layout>
  );
};
export default index;