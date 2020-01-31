import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ProductCard from "./ProductCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function ProductsList({ productData, onMoreClick }) {
  const classes = useStyles();

  const handleMoreClick = (productId) => onMoreClick(productId);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {productData.map(product => (
          <Grid item lg={3} md={6} xs={12} key={product.productId}>
            <ProductCard {...product} onMoreClick={handleMoreClick} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
