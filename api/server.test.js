// Write your tests here
const request = require('supertest');
const db = require('../data/dbConfig');
const server = require('../api/server');
const User = require('./users/user-model')

const test1 = {
  username: 'goodbye',
  password: '1111'
}

const test2 = {
  username: 'hello',
}

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
})

beforeEach(async () => {
  await db('users').truncate();
})

test('sanity', () => {
  expect(true).toBe(true)
})

test('verify we are using the correct environment', ()  => {
  expect(process.env.NODE_ENV).toBe('testing');
});

describe('[POST] /register', () => {
  test('register user with valid credentials returns 201 status', async () => {
    let result = await request(server)
    .post('/api/auth/register')
    .send(test1)
    expect(result.status).toBe(201);
  })
  
  test('register user with valid credentials returns new username', async () => {
    let result = await request(server)
    .post('/api/auth/register')
    .send(test1)
    result = await User.findBy('goodbye')
    expect(result.username).toBe('goodbye')
  })

  test('returns correct status on invalid entry', async () => {
    let result = await request(server)
    .post('/api/auth/register')
    .send({username: 'testing'})
    expect(result.status).toBe(401)
  })
})

describe('[POST] /login', () => {
  test('returns welcome message on successful login', async () => {
    await request(server)
    .post('/api/auth/register')
    .send(test1)
    const result = await request(server).post("/api/auth/login")
    .send(test1)
    expect(result.body.message).toMatch('welcome, goodbye')
  })

  test('returns correct message on invalid login attempt', async () => {
    await request(server)
    .post('/api/auth/register')
    .send(test2)
    const result = await request(server).post("/api/auth/login")
    .send(test2)
    expect(result.body.message).toMatch('username and password required')  
  })
})


