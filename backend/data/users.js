import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Rishabh',
    email: 'rishabh@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Tushar',
    email: 'tushar@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Gaurav',
    email: 'gaurav@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Gaurangi',
    email: 'gaurangi@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
]

export default users
