import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4 py-2'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link className='p-0'>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className='p-0' disabled>
            Sign In
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link className='p-0'>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className='p-0' disabled>
            Shipping
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link className='p-0'>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className='p-0' disabled>
            Payment
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className='mr-0'>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link className='p-0'>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className='p-0' disabled>
            Place Order
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
