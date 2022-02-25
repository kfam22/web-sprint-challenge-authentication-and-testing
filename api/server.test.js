// Write your tests here
const request = require('supertest');
const db = require('../data/dbConfig');
const server = require('../api/server');
const User = require('./users/user-model')

const dummyUsers = [
  {
    id: 1,
    username: 'testUser1',
    password: 1111
  },
  {
    id: 2,
    username: 'testUser2',
    password: 2222
  }
];

test('sanity', () => {
  expect(true).toBe(true)
})
