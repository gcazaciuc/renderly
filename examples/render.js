const { render } = require("../index");

const tplData = {
  name: "John",
  get lang() {
    return `${this.name} speaks French!`;
  }
};

console.log(render("./templates/test.tpl", tplData));
