const { capitalize } = require('../capitalize');
const { expect } = require('chai');

describe.only('capitalize', () => {
  it('Returns an empty string if the input is an empty string', () => {
    const result = capitalize('');

    expect(result).to.be.equal('');
  });

  it('Returns undefined if the input string is undefined', () => {
    const result = capitalize(undefined);

    expect(result).to.be.undefined;
  });

  it('Returns null if the input string null', () => {
    const result = capitalize(null);

    expect(result).to.be.null;
  });

  it('Returns a string with capitalized first letter', () => {
    const result = capitalize('hello');

    expect(result).to.be.equal('Hello');
  });

  it('Returns a string as-is if the first letter is already capitalized', () => {
    const result = capitalize('Hello');

    expect(result).to.be.equal('Hello');
  });

  it('Returns a string with the first letter capitalized in case it has only one letter', () => {
    const result = capitalize('a');

    expect(result).to.be.equal('A');
  });

  it('Returns the string as-is in case the first letter is a number', () => {
    const result = capitalize('123');

    expect(result).to.be.equal('123');
  });
});
