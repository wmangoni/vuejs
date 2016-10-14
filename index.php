<!DOCTYPE html>
<html>
<head>
    <title>Vue js Example</title>
    <link rel="stylesheet" type="text/css" href="assets/libs/bootstrap.min.css">
    <script type="text/javascript" src="assets/libs/vue.js"></script>
</head>
<body>
    <div class="container">
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <form class="navbar-form navbar-right">
                <div class="form-group">
                  <input type="text" placeholder="Email" class="form-control">
                </div>
                <div class="form-group">
                  <input type="password" placeholder="Password" class="form-control">
                </div>
                <button class="btn btn-success">Sign in</button>
              </form>
            </div><!--/.navbar-collapse -->
          </div>
        </nav>

        <!-- Main jumbotron for a primary marketing message or call to action -->
        <div class="jumbotron" id="jumbotron">
          <div class="container">
            <h1>{{title}}</h1>
            <p>{{text}}</p>
            <ol style="padding-left: 20px; margin-bottom: 30px;">
              <list-itens v-for="item in itens" v-bind:item="item"></list-itens>
            </ol>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">{{link}}</a></p>
          </div>
        </div>

      <div class="container" id="loop">
        <section>
          <!-- Example row of columns -->
          <div class="row">
            <div class="col-md-4" v-for="col in cols">
              <h2>{{col.title}}</h2>
              <p>{{col.text}}</p>
              <p><a class="btn btn-default" v-on:click="add_msg" href="javascript:void(0);" role="button">{{col.link}}</a></p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <!-- component template -->
            </div>
          </div>
        </section>

        <!-- ******* -->

        <hr>
      <footer>
          <!-- Version 3.1.0 and minified JQuery -->
          <script type="text/javascript" src="assets/libs/jquery.min.js"></script>
          <!-- Latest compiled and minified JavaScript -->
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
          <script type="text/javascript" src="assets/js/main.js"></script>
      </footer>
    </div>
</body>
</html>