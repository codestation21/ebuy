import { Pagination } from "@mui/material";

//Styles
import useStyles from "Styles/Common/Paginations.styles";

const Paginations = ({ setPage, count }) => {
    const classes = useStyles();
    return (
        < Pagination
            count={count}
            onChange={(e, value) => setPage(value)}
            shape="rounded"
            className={classes.Paginatiom}
        />
    );
};
export default Paginations;