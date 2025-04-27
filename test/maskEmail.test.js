// test/example.test.js
const { maskEmail } = require('../12-maskEmail');
const { expect } = require('chai');
// mocha / chai

// test suite
describe('maskEmail', function () {
  // test case
  it('Masks the last two characters of the domain', function () {
    const email = 'dito@example.com';
    const maskedEmail = maskEmail(email);

    expect(maskedEmail).to.equal('di**@example.com');
  });

  it('Masks the last two characters of the domain (longer domain)', function () {
    const email = 'worldtelevision@example.com';
    const maskedEmail = maskEmail(email);

    expect(maskedEmail).to.equal('worldtelevisi**@example.com');
  });

  it('Returns the same email if an empty email is provided', function () {
    const email = '';
    const maskedEmail = maskEmail(email);

    expect(maskedEmail).to.equal('');
  });
});
