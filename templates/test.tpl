<html>
  ${render('templates/head.tpl', {name})}
  <body>
    <div>
      Hi ${name}. 
      ${ name === 'test' ? 'This is a test name': 'This is a real name'}
      Language info: ${lang}
    </div>
  </body>
</html>
