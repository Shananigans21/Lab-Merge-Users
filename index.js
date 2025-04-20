require('datejs'); // Import datejs

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (const array of args) {
    combinedObject.users.push(...array);
  }

  const today = new Date();
  combinedObject.merge_date = today.toString('M/d/yyyy');

  return combinedObject;
}

// Example usage
const groupA = ['alice', 'bob'];
const groupB = ['charlie'];
const groupC = ['diana', 'emma'];

console.log(combineUsers(groupA, groupB, groupC));



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};