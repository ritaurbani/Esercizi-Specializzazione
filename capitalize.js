/**
 * Input: string
 * Output: string with the first letter capitalized
 */

const capitalize = (inputString) => {
  if (inputString === null) {
    return null;
  }
  if (inputString === undefined) {
    return undefined;
  }

  const firstLetter = inputString.charAt(0);
  const uppercasedFirstLetter = firstLetter.toUpperCase();
  const restOfTheString = inputString.slice(1);

  return uppercasedFirstLetter + restOfTheString;
};

module.exports = { capitalize };
