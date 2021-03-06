import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form className='w-50 flex-nowrap' onSubmit={submitHandler} inline>
      <Form.Control
        className='mr-sm-2 ml-sm-5 w-100'
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
      ></Form.Control>
      <Button type='submit' variant='outline-info' className='p-2'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
