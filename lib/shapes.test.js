const { Triangle, Circle, Square } = require('./shapes');

test('Triangle getSVG method', () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.getSVG()).toMatch(
    /<polygon points="150,\s*18\s*244,\s*182\s*56,\s*182" fill="blue" \/>/
  );
});

test('Circle getSVG method', () => {
  const shape = new Circle();
  shape.setColor("green");
  expect(shape.getSVG()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
});

test('Square getSVG method', () => {
  const shape = new Square();
  shape.setColor("red");
  expect(shape.getSVG()).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" />');
});
