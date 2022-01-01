import { List, ListItem, ButtonBase } from "@mui/material";

//Styles
import useStyles from "Styles/Category/BestSeller.styles";

//Data
const bestseller = ["high price", "low price", "new arrivals", "discounts", "popular"]

const BestSeller = ({ sellerDataHanlder }) => {
    const classes = useStyles();
    return (
        <List className={classes.List}>
            {bestseller &&
                bestseller.map((item, i) => (
                    <ListItem key={i}>
                        <ButtonBase onClick={() => sellerDataHanlder(item)}>
                            {item}
                        </ButtonBase>
                    </ListItem>
                ))
            }
        </List>
    );
};
export default BestSeller;