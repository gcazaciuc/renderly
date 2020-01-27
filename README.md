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
const { render } = require("renderly");

const tplData = {
  name: "John",
  // This is a computed property
  get lang() {
    return `${this.name} speaks French!`;
  }
  // You can pass functions. Basically whatever you want
  currencyFormatter: function() { .... }
};

// A `render` function is automatically added to the template data
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

**Every** template has access to a `render` function that it can use to pull in additional templates.

Inside the templates you can use standard ES6 template string interpolations to display variables and basically use just about any javascript function.
