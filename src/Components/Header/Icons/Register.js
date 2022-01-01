import { useState, useEffect } from "react";
import { Box, Typography, ButtonBase, SvgIcon } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
//Custom icon
import { GoogleIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Header/Register.styles";

//Components
import Signup from "./Register/Signup";
import Login from "./Register/Login";
//Forget Password
import ForgetPassword from "./Register/ForgetPassword";

//Logo
import Logo from "Assets/Logo.png"

const Register = ({ registerPop }) => {
    const [register, setRegister] = useState("signup");
    const classes = useStyles();
    const responseGoogle = (response) => {
        console.log(response);
    }
    const responseFacebook = (response) => {
        console.log(response);
    }
    useEffect(() => {
        if (!registerPop) {
            setRegister("signup")
        }
    }, [registerPop])
    return (
        <Box className={classes.RegisterContainer}>
            <Box sx={{ textAlign: "center" }}>
                <Box component="img" width="25%" src={Logo} alt="Logo" />
            </Box>
            {register === "signup" &&
                <Signup />
            }
            {register === "login" &&
                <Login setRegister={setRegister} />
            }
            {register === "forgetpass" &&
                <ForgetPassword />
            }
            <Box>
                <Box className={classes.OrText}>
                    <Typography variant="body1" component="p" className="OrTectst">
                        Or
                    </Typography>
                </Box>
                {register !== "forgetpass" &&
                    <>
                        <Box>
                            <FacebookLogin
                                appId="970693463528190"
                                autoLoad={false}
                                render={renderProps => (
                                    <ButtonBase className={classes.FacebookLogin} onClick={renderProps.onClick}>
                                        <FacebookIcon />
                                        Login with Facebook
                                    </ButtonBase>
                                )}
                                callback={responseFacebook}
                            />
                        </Box>
                        <Box>
                            <GoogleLogin
                                clientId="1063277909607-ngqp62i2rigm60bdivl2o63sadu2rhm9.apps.googleusercontent.com"
                                buttonText="Login"
                                render={renderProps => (
                                    <ButtonBase className={classes.GoogleLogin} onClick={renderProps.onClick}>
                                        <SvgIcon>
                                            {GoogleIcon}
                                        </SvgIcon>
                                        Login with Google
                                    </ButtonBase>
                                )}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                            />
                        </Box>
                    </>
                }
                {register === "signup" &&
                    <Typography variant="body1" component="p" className={classes.BottomText}>
                        Already have an account? {" "}
                        <Typography
                            variant="body1"
                            component="span"
                            onClick={() => setRegister("login")}
                        >
                            Login
                        </Typography>
                    </Typography>
                }
                {register === "login" &&
                    <Typography variant="body1" component="p" className={classes.BottomText}>
                        Don’t have any account? {" "}
                        <Typography
                            variant="body1"
                            component="span"
                            onClick={() => setRegister("signup")}
                        >
                            Register
                        </Typography>
                    </Typography>
                }
                {register === "forgetpass" &&
                    <Typography variant="body1" component="p" className={classes.BottomText}>
                        Back to {" "}
                        <Typography
                            variant="body1"
                            component="span"
                            onClick={() => setRegister("login")}
                        >
                            Login
                        </Typography>
                    </Typography>
                }
            </Box>
        </Box >
    );
};
export default Register;