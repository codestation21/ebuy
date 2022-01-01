import { Container, Box } from "@mui/material";

//Layout
import Layout from "Layout/Layout";
//Breadcrumb
import Breadcrumb from "Utilis/Breadcrumb";
//Components
import ProfileInfo from "Components/Profile/ProfileInfo";
//Subscribe & Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const Profile = () => {
    return (
        <Layout>
            <Box sx={{ mt: "80px" }}>
                <Breadcrumb
                    category="User"
                    title="Profile"
                />
                <Container sx={{ px: { lg: "4em", sm: "2em", xs: "1em" } }} maxWidth={false} disableGutters>
                    <ProfileInfo />
                    <Subscribe />
                    <Clip />
                </Container>
            </Box>
        </Layout>
    );
};
export default Profile;