import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name:'Shoes', description:'Running Shoes', price: '$5', image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F02%2Fnike-run-club-ea-sports-madden-nfl-22-super-bowl-week-challenge-0.jpg?fit=max&cbr=1&q=90&w=750&h=500'},
    { id: 2, name:'MacBook', description:'Apple MacBook', price: '$10', image: 'https://store-cdn-upxatwuc0q61qf.netdna-ssl.com/wp-content/uploads/2019/11/mbp16touch-space-select-201911.jpeg'},
]

const Products = () => {
    const classes = useStyles();

  return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justifyContent="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Products
