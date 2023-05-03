function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function getPromise() {
  return new Promise((resolve, reject) => {
    resolve(1);
  });
}

test("resolves to 1", async () => {
  await expect(getPromise()).resolves.toBe(1);
});

test("resolves to 1", async () => {
  const promiseResult = await getPromise();
  await expect(promiseResult).toBe(1);
});

test("resolves to 1", async () => {
  const promise = getPromise();
  promise.then((promiseResult) => {
    expect(promiseResult).toBe(1);
  });
});