const adjectives = [
  'Awesome',
  'Brave',
  'Clever',
  'Daring',
  'Epic',
  'Funky',
  'Great',
  'Happy',
  'Jolly',
  'Kind'
];

const nouns = [
  'Ninja',
  'Pirate',
  'Wizard',
  'Knight',
  'Samurai',
  'Ranger',
  'Hero',
  'Guru',
  'Champion',
  'Warrior'
];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateUsername() {
  const adjective = getRandomElement(adjectives);
  const noun = getRandomElement(nouns);
  const number = Math.floor(Math.random() * 1000);
  return `${adjective}${noun}${number}`;
}

// Example usage
console.log(generateUsername());

module.exports = { generateUsername };
