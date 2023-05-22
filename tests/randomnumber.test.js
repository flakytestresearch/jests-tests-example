function get_random_number(a) {
    return Math.random() * a;
}

test('Get random from 0 to 10', () => {
  const randomNumber = get_random_number(100);
  const greatherNumber = 1;
  const lowerNumber = 1;

  expect(randomNumber).toBeLessThan(greatherNumber);
  expect(randomNumber).toBeGreaterThan(lowerNumber);
});
