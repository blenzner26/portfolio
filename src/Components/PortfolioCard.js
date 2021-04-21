import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: 435,
        margin: "20px",
        backgroundColor: "#252525",
        color: "#fff",
    },
    media: {
        height: 200,
    },
    cardTitle: {
        textAlign: "left",
    },
    description: {
        textAlign: "left",
        color: "#fff",
    },
    viewButton: {
        color: "#fff",
        borderColor: "#fff",
        paddingLeft: "20px",
        paddingRight: "20px",
    },
    content: {
        padding: "20px",
    },
    actions: {
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "20px",
    },
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
            <Link to={props.link}>
                <Card className={classes.root + " portfolio-card"}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={props.image}
                            title={props.image_title}
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                                {props.card_title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                                {props.card_description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.actions}>
                        <Button size="small" color="default" variant="outlined" className={classes.viewButton}>
                            View &rarr;</Button>
                    </CardActions>
                </Card>
            </Link>
    );
}