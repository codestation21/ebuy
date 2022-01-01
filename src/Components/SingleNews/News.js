import { Box, Stack, Typography, InputBase, ButtonBase } from "@mui/material";
import { RemoveRedEyeOutlined, ModeCommentOutlined, AccessTimeOutlined } from '@mui/icons-material';

//Styles
import useStyles from "Styles/SingleNews/News.styles";
import { useForm } from "react-hook-form";

//Components
import Reviews from "Components/Common/Reviews";

//Data
import SingleNewsData from "Data/SingleNews.data";

const News = () => {
    const classes = useStyles();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
    }
    return (
        <Box>
            <Box>
                <Box component="img" className={classes.Images} src={SingleNewsData.image} alt="Single News" />
                <Typography variant="h6" component="h6" className={classes.NewsTitle}>
                    {SingleNewsData.title}
                </Typography>
                <Stack direction="row">
                    <Typography className={classes.ViewsAndComment}>
                        <RemoveRedEyeOutlined /> 22k
                    </Typography>
                    <Typography className={classes.ViewsAndComment}>
                        <ModeCommentOutlined /> 45k
                    </Typography>
                    <Typography className={classes.ViewsAndComment}>
                        <AccessTimeOutlined /> 11 Dec 2021
                    </Typography>
                </Stack>
                <Typography variant="body1" component="p" className={classes.NewsDescription}>
                    {SingleNewsData.description}
                </Typography>
            </Box>
            <Box sx={{ mt: "2em" }}>
                <Typography variant="h5" component="h5" className={classes.Title}>
                    Comments
                </Typography>
                <Reviews />
                <Box>
                    <Typography variant="h5" component="h5" className={classes.Title}>
                        Add Comment
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                        <InputBase
                            multiline
                            minRows={7}
                            className={classes.Textarea}
                            placeholder="Write Comments"
                        />
                        <Box>
                            <ButtonBase type="submit" className={classes.SubmitButton}>
                                Submit Comment
                            </ButtonBase>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
export default News;