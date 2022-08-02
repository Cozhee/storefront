import { connect } from 'react-redux'
import { newActive, reset } from "../store/catagories";
import CategoryCard from "./CategoryCard";
import Grid from '@mui/material/Grid'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Categories(props) {

    const { activeCategory, categories } = props

    let category = categories.map((item, idx) => {
        return (
            <Grid key={idx} item>
                <CategoryCard newActive={newActive} category={item}/>
            </Grid>
        )
    })

    return (
        <>
            <h1>Categories</h1>
            <Grid spacing={2} container>
                {category}
            </Grid>
            <Box m={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h2">
                    {activeCategory}
                </Typography>
            </Box>
        </>

    )
}

const mapStateToProps = ({ categories }) => {
    return {
        categories: categories.categories,
        activeCategory: categories.activeCategory,
    }
}

const mapDispatchToProps = {
    newActive,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);