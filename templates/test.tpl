<html>
  ${render('templates/head.tpl', {name})}
  <body>
    <h1>${siteTitle}</h1>
    <div>
      Hi ${name}. 
      ${ name === 'test' ? 'This is a test name': 'This is a real name'}
      Language info: ${lang}
    </div>
    <a href="${link({id:2})}">Test link</a>
  </body>
</html>
