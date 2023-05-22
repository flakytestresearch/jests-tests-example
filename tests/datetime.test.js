const getCurrentSeconds = () => new Date().getSeconds()

test('flaky test: current second is greater than the previous run', async () => {
  const second1 = getCurrentSeconds();
  await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 0.5 second
  const second2 = getCurrentSeconds();

  expect(second2).toBeGreaterThan(second1);
});