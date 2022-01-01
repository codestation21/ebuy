import { Box, Typography, Rating, ButtonBase, InputBase } from "@mui/material";
import { useForm } from "react-hook-form";

//Styles
import useStyles from "Styles/Product/AddRevews.styles";

const AddReviews = () => {
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
            <Typography variant="h5" component="h5" className={classes.Title}>
                Add Reviews
            </Typography>
            <Rating name="size-medium" onChange={(e, value) => console.log(value)} />
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <InputBase
                    multiline
                    minRows={7}
                    className={classes.Textarea}
                    placeholder="Write Comments"
                />
                <Box>
                    <ButtonBase type="submit" className={classes.SubmitButton}>
                        Submit Review
                    </ButtonBase>
                </Box>
            </Box>
        </Box>
    );
};
export default AddReviews;