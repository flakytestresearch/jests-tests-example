function get_random_number(a) {
    return Math.random() * a;
}

test('Get random from 0 to 10', () => {
  const randomNumber = get_random_number(10);
  const greatherNumber = 5;
  console.log(randomNumber, greatherNumber)
  expect(randomNumber).toBeLessThan(greatherNumber);
});