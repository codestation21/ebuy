import { useState } from "react";
import { Box, Avatar, Typography, ButtonBase } from "@mui/material";
import { useForm } from "react-hook-form";

//Styles
import useStyles from "Styles/Profile/Profile.styles";

//Components
import ProfileDetails from "./Profile/ProfileDetails";
import EditProfile from "./Profile/EditProfile";

const Profile = () => {
    const [edit, setEdit] = useState(false);
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
            {!edit &&
                <ProfileDetails />
            }
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                {edit &&
                    <EditProfile register={register} />
                }
                {!edit &&
                    <Box>
                        <ButtonBase onClick={() => setEdit(true)} className={classes.EditAndSaveButton}>
                            <Typography variant="body1" component="p">
                                Edit
                            </Typography>
                        </ButtonBase>
                    </Box>
                }
                {edit &&
                    <Box>
                        <ButtonBase type="submit" className={classes.EditAndSaveButton}>
                            <Typography variant="body1" component="p">
                                Save
                            </Typography>
                        </ButtonBase>
                        <ButtonBase onClick={() => setEdit(false)} className={classes.CancelButton}>
                            <Typography variant="body1" component="p">
                                Cancel
                            </Typography>
                        </ButtonBase>
                    </Box>
                }
            </Box>
        </Box>
    );
};
export default Profile;