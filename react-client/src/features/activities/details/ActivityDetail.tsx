import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
    selectedActivity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
};

export default function ActivityDetail({
    selectedActivity,
    cancelSelectActivity,
    openForm,
}: Props) {
    const { activities } = useActivities();
    const activity = activities?.find((x) => x.id === selectedActivity.id);

    if(!activity) return <Typography>Loading...</Typography>
    
    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia
                component="img"
                src={`/images/categoryImages/${activity.category}.jpg`}
            />
            <CardContent>
                <Typography variant="h5">{activity.title}</Typography>
                <Typography variant="subtitle1" fontWeight="light">
                    {activity.date.toString()}
                </Typography>
                <Typography variant="body1">{activity.description}</Typography>
            </CardContent>
            <CardActions>
                <Button color="primary" onClick={() => openForm(activity.id)}>
                    Edit
                </Button>
                <Button onClick={cancelSelectActivity} color="inherit">
                    Cancel
                </Button>
            </CardActions>
        </Card>
    );
}
