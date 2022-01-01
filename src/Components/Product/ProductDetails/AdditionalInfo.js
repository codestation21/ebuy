import { List, ListItem, Typography } from "@mui/material";

//Styles
import useStyles from "Styles/Product/AditionalInfo.styles";

//Data
import singleData from "Data/product.data";

const AdditionalInfo = () => {
    const classes = useStyles();
    return (
        <List className={classes.List}>
            {singleData &&
                singleData.additionalInfo.map((info, i) => (
                    <ListItem key={i} direction="row">
                        <Typography variant="body1" component="p">
                            {info.field}
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ ml: "25px" }}>
                            {info.value}
                        </Typography>
                    </ListItem>
                ))
            }
        </List>
    );
};
export default AdditionalInfo;