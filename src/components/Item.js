import React from 'react';
import '../App.css'
import { Image, Card, Button } from 'rebass'; 

const Item = ({ product }) => {
  return (
    <Card className="item-wrapper">
        <Image
          className="item-image"
          src={"data/products/" + product.sku + "_1.jpg"}/>
        <h3>{product.title}</h3>
        <p>{product.currencyFormat} {product.price}</p>
        <Button variant='secondary' mr={2}>Add to Cart</Button>
    </Card>
  )
}

export default Item;
