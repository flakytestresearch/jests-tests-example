function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function get_serialized_object() {
  const formattedDateTime = new Date().toISOString().replace(/T/, " ").replace(/\..+/, "");
  return {
    name: "Rafael",
    age: 24,
    work: "Flaky tests",
    creagted_at: formattedDateTime,
  };
}

test("Object serialize test", async () => {
  const person = get_serialized_object();
  // await delay(1000);
  expect(person).toMatchObject(get_serialized_object());
});

test("Object serialize test", () => {
  const person = get_serialized_object();
  expect(person).toMatchObject(person);
});
