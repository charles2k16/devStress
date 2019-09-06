<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Dev-Stress</title>
    <link rel="stylesheet" href="/css/app.css">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway:400,900&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="app">
      <main-component></main-component>     
    </div>

    <script type="text/javascript" src="/js/app.js"></script>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </body>
</html>
