var serialize = require("serialize-javascript");
const now = new Date().toISOString().replace(/T/, " ").replace(/\..+/, "");

function get_serialized_object() {
  return {
    name: "Rafael",
    age: 24,
    work: "Flaky tests",
    creagted_at: now,
  };
}

test("Object serialize length test", () => {
  const person = get_serialized_object();
  expect(serialize(person).length).toBe(83);
});

test("Object serialize length test", () => {
  expect(
    serialize({
      name: "Rafael",
      age: 24,
      work: "Flaky tests",
      creagted_at: new Date("2022-11-06T00:00:00.000Z")
        .toUTCString()
        .replace(/T/, " ")
        .replace(/\..+/, ""),
    }).length
  ).toBe(93);
});
