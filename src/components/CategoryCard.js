import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";

export default function CategoryCard({ category, newActive }) {

    const dispatch = useDispatch()

    return (
        <Card sx={{ height: '100%', width: 350 }}>
            <CardContent>
                <Typography sx={{ fontSize: 20 }} gutterBottom>
                    {category.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {category.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small" onClick={() => dispatch(newActive(category.name.toUpperCase()))}>Change active</Button>
            </CardActions>
        </Card>
    );
}
