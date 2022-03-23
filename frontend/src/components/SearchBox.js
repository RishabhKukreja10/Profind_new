import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    }
    // else {
    //   history.push('/login')
    // }
  }

  return (
    <Form onSubmit={submitHandler}>
      <div className='form-div'>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Products...'
          className='mr-sm-2 ml-sm-5'
        ></Form.Control>

        <Button type='submit' variant='light' className='p-2'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </Button>
      </div>
    </Form>
  )
}

export default SearchBox
