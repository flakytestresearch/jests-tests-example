function get_random_number(a) {
    return Math.random() * a;
}

test('Get random from 0 to 100', () => {
  const randomNumber = get_random_number(100);
  const greatherNumber = 95;
  console.log(randomNumber, greatherNumber)
  expect(randomNumber).toBeLessThan(greatherNumber);
});