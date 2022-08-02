import { connect } from 'react-redux'
import { newActive, reset } from "../store/catagories";
import CategoryCard from "./CategoryCard";
import Grid from '@mui/material/Grid'

function Categories(props) {

    const { activeCategory, categories } = props
    console.log(categories)
    console.log(activeCategory)

    let category = categories.map((item, idx) => {
        return (
            <Grid item xs={3}>
                <CategoryCard key={idx} newActive={newActive} category={item}/>
            </Grid>
        )
    })

    return (
        <>
            <h1>Active Categories</h1>
            <h3>{activeCategory}</h3>

            <h1>Categories</h1>
            <Grid spacing={2} container>
                {category}
            </Grid>
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