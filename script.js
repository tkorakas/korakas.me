const terminal = new Terminal();
const user = 'cv@korakas.me:~#';

const renderCursor = (string) => `> ${string}`;
const commands = {
  help: () => {
    const commandsString = Object.keys(commands).reduce((a, b) => (`${a} ${b}`), '');
    terminal.print(renderCursor(commandsString), 'help');
  },
  ls: function () { this.help() },
  education: () => {
    const edu = [
      `Several software development conferences (2013 - now)`,
      `Informatics Engineering Department (2011 - 2015)`
    ];
    terminal.printList(edu);
  },
  experience: () => {
    const exp = [
      `Hellenic Army - Mobile application using React Native, Node.js, TypeScript and Socket.io (2018 - 2019)`,
      `Co-Founder of SocialNerds (2016 - now)`,
      `Open source contributor (2015 - now)`,
      `Full stack developer at Human Factor LTD (2015 - 2018)`,
      `IEEE TEI of Western Macedonia Vice President (2013 - 2014)`,
      `Co-Founder of Kastoria robotics team (2013 - 2014)`,
      `Speaker (2013 - now)`,
      `Freelancer as .NET and PHP developer (2013 - now)`
    ];
    terminal.printList(exp);
  },
  skills: () => {
    const skills = [
      `Good knowledge of SQL, PHP, JavaScript, HTML, CSS`,
      `Familiar with the JavaScript ecosystem (React, Webpack, Babel, ES6/7, Gulp, Node)`,
      `Experienced with PHP frameworks (Drupal, Laravel, Symfony)`,
      `Able to burn the world using Docker or configuring a CI service`,
      `Working with Agile methodologies`
    ];
    terminal.printList(skills);
  },
  info: () => {
    const info = [
      `Thanos Korakas`,
      `thanoskorakas[at]gmail.com`,
      `Athens`,
      `27/6/1993`
    ];

    terminal.printList(info);
  },
  social: () => {
    const social = [
      `https://twitter.com/seekerakos`,
      `https://github.com/tkorakas`,
      `https://www.instagram.com/seekrsht/`,
      `https://medium.com/@Thanos`,
      `https://www.linkedin.com/in/thanos-korakas-983a95b6/`
    ];

    terminal.printList(social);
  },
  clear: () => terminal.clear()
};
const terminalElement = document.querySelector('#terminal');
terminalElement.appendChild(terminal.html);
terminal.print("Get a developer free version of my CV", 'link', { type: 'a', href: 'cv_korakas.pdf'});

terminal.print("Type 'help' to list available commands", 'intro');

const handleInput = (input) => {
  commands[input] ? commands[input]() : terminal.print(renderCursor(`${input}: command not found`));
  getInput();
}
const getInput = () => terminal.input(user, handleInput);

getInput();

