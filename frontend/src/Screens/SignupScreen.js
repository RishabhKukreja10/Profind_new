import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { signup } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const SignupScreen = () => {
  const [name, setName] = useState('')
  const [email, setEnail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userSignup = useSelector((state) => state.userSignup)
  const { loading, error, userInfo } = userSignup

  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [userInfo, navigate])

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(signup(name, email, password))
    }
  }

  return (
    <div className='contain_detail'>
        <FormContainer >
      <h1>Sign Up</h1>
      {message && <h4 style={{ backgroundColor: '#FFB5B5' }}>{message}</h4>}
      {error && <h4 style={{ backgroundColor: '#FFB5B5' }}>{error}</h4>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name' className='py-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email' className='py-3'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEnail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password' className='py-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='confirmPassword' className='py-3'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='py-3'>
          Sign Up
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Existing User? <Link to='/login'>Login</Link>
        </Col>
      </Row>
    </FormContainer>
    </div>
    
  )
}

export default SignupScreen