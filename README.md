# Renderly - A minimal template engine based on ES6 template strings

A minimal template engine for Node based on ES6 string templates.

It handles variable interpolation, supports rendering partials and it gracefully handles presentation logic(ifs, fors etc) within the template.

### Usage

First install:

```console
    npm i renderly
```

#### Programatic usage

```javascript
const { render } = require("../index");

const tplData = {
  name: "John",
  get lang() {
    return `${this.name} speaks French!`;
  }
};

console.log(render("./templates/test.tpl", tplData));
```

See also the `examples` folder.

### How the templates look like

In file `test.tsg`:

```html
<html>
  ${render('templates/head.tsg', {name})}
  <body>
    <div>
      Hi ${name}. ${ name === 'test' ? 'This is a test name': 'This is a real a
      name'} Language info: ${lang}
    </div>
  </body>
</html>
```

In file `head.tsg`:

```html
<head>
  <title>Main page</title>
  ${render('templates/meta.tsg', {name})}
</head>
```

In file `meta.tsg`:

```html
<meta name="content" value="${name}" />
```
