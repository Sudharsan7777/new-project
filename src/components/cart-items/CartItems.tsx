import React, { FC, useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '../typography/typography';
import Cart from '../cart/Cart';
import './CartItems.css';

interface CardItemsProps {
  src?: string;
  itemName?: string;
  price?: string;
  className?: string;
}

const CartItems: FC<CardItemsProps> = ({ src, itemName, price, className }) => {
  const [showFacility, setShowFacility] = useState(false);

  return (
    <Card
      className={`cart-item ${className}`} // Add any additional classes you need
      onMouseEnter={() => setShowFacility(true)}
      onMouseLeave={() => setShowFacility(false)}
    >
      <Card.Body>
        <Card.Title>
          <Card.Img src={src} alt={itemName} />
          <Typography msg={itemName} size="l" color="black" tag="div" />
        </Card.Title>
        <Card.Text>
          <Typography msg={price} size="l" color="black" tag="div" />
        </Card.Text>
        {showFacility && <Cart className="facility" />}
      </Card.Body>
    </Card>
  );
};

export default CartItems;
