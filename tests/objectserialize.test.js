function get_serialized_object() {
    return {
      'name': 'Rafael',
      'age': 24,
      'work': 'Flaky tests',
      'creagted_at': Date.now()
    }
}

test('Object serialize test', () => {
  const person = get_serialized_object();
  expect(person).toMatchObject(get_serialized_object());
});

test('Object serialize test', () => {
  const person = get_serialized_object();
  expect(person).toMatchObject(person);
});