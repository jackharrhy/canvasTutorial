<!DOCTYPE html>
 <html>
   <head>
    <link rel="shortcut icon" href="http://faviconist.com/icons/e8576b90a12052cda0f944d6f6948988/favicon.ico" />
    <title>{{!page}}</title>
    <style>
      h1 {
        font-family: Verdana;
        text-align: center;
      }
      a {
        text-decoration: none;
        color: #444;
        margin-left: 0.25em;
      }
      a:hover {
        color: #777;
      }
      .container {
        height: 512px;
        width: 512px;
        margin: 0 auto;
        display: block;
        border: 2px solid black;
      }
    </style>
   </head>
   <body onload="init();">
     <h1><a href="{{!prevLink}}">< </a>{{!header}}<a href="{{!nextLink}}"> ></a></h1>
     </div>
     <div class="container">
      <canvas id="canvas" height="512px" width="512px"></canvas>
     </div>
     <script src="{{!scriptFile}}"></script>
   </body>
 </html>