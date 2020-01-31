import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  media: {
    height: 320
  }
});

export default function ProductDetailsCard({
  productId,
  imageURL,
  title,
  description,
  price,
  onMoreClick
}) {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia className={classes.media} image={imageURL} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h3" component="h3">
          {title}
        </Typography>
        <Typography variant="h4" component="h4">
          ${price}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
