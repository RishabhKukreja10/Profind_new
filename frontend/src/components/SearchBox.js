import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBox = ({clear}) => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')
  useEffect(()=>{/* 
    if(!clear.localCompare("clear"))setKeyword(""); */
  },[clear])
  const submitHandler = (e) => {
    e.preventDefault()
    const param = keyword.replace(/ /g, '+')
    navigate('/search/' + param, { state: { keyword: param } })
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
