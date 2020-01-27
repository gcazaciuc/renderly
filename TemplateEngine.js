const fs = require("fs");
function render(tpl, data = {}) {
  const tplContent = fs.readFileSync(tpl, "utf-8");
  const tplData = Object.assign({}, data, { render });

  const templateFn = new Function(
    Object.keys(tplData),
    `return \`${tplContent}\``
  );

  return templateFn.apply(null, Object.values(tplData));
}

module.exports = {
  render
};
