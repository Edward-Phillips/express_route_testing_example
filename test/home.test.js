const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('../index');

describe('Unit testing the /home route', () => {

  it('should return OK status', () => {
    return request(app)
      .get('/home')
      .then((response) => {
        assert.equal(response.status, 200);
      })
  });

  it('should return message on rendering', () => {
    return request(app)
      .get('/home')
      .then((response) => {
        expect(response.text).to.contain('Welcome to testing in Node')
      })
  })
});