const fs = require("fs");
const inquirerPromise = import('inquirer');

const { Triangle, Circle, Square } = require('./lib/shapes');


inquirerPromise.then(inquirerModule => {
  const inquirer = inquirerModule.default;

  const generateLogo = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => {
        return input.length <= 3 ? true : 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal number):',
    },
  ];

  inquirer.prompt(generateLogo).then((answers) => {
    const shapeType = answers.shape;
    const textColor = answers.textColor;
    const shapeColor = answers.shapeColor;

    const shape = shapeType === 'circle'
      ? new Circle()
      : shapeType === 'triangle'
        ? new Triangle()
        : new Square();

    shape.setColor(shapeColor);

    const svg = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.getSVG()}
        <text x="150" y="112.5" text-anchor="middle" fill="${textColor}" font-size="60">${answers.text}</text>
      </svg>
    `;

    fs.writeFileSync('logo.svg', svg);

    console.log("Generated logo.svg");
  });
});
