import { useSelector } from "react-redux";
import {CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import

function Products() {

    const activeItem = useSelector(state => state.categories.activeCategory)
    const items = useSelector(state => state.products)
    let products = items.filter(item => item.category.toUpperCase() === activeItem)

    let selectedItem;
    if (activeItem) {
        selectedItem = products.map((item, idx) => {
            return (
                <Grid key={idx} item>
                    <Card>
                        <CardHeader
                            title={item.name}
                            subheader={item.price}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {item.type} {item.category}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Add to cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
            )
        })
    }

    return (
        <>
            <Grid container spacing={2} my={5}>
                {selectedItem}
            </Grid>
        </>
    )
}

export default Products