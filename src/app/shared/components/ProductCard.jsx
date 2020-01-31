import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: "auto"
  },
  media: {
    height: 140
  }
});

export default function ProductCard({
  productId,
  imageURL,
  title,
  description,
  price,
  onMoreClick
}) {
  const classes = useStyles();

  const handleMoreClick = () => onMoreClick(productId);

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={imageURL} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>${price}</Typography>
        <Typography variant="body2" color="textSecondary" component="p" noWrap>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleMoreClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
