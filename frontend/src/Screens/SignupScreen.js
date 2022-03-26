import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { signup } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const SignupScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEnail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const userSignup = useSelector((state) => state.userSignup)
  const { loading, error, userInfo } = userSignup

  // const redirect = location.search ? location.search.split('=')[1] : '/'

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect)
  //   }
  // }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(signup(name, email, password))
    }
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
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
          Existing User?{' '}
          {/* <Link to={redirect ? `/login?redirect=${redirect}` : `/login`}> */}
          <Link to='/login'>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default SignupScreen
