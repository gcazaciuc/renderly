const { createRenderer } = require("../index");
const render = createRenderer({
  globals: {
    link: function(post) {
      return `posts/${post.id}`;
    },
    siteTitle: "Test"
  }
});

const tplData = {
  name: "John",
  get lang() {
    return `${this.name} speaks French!`;
  }
};

console.log(render("./templates/test.tpl", tplData));
