<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Calculator</title>
	<link rel="stylesheet" type="text/css" href="Calc3.0.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body>
	<div class="main">
      <input type="text" name="display" id="input" disabled="" />
      <div class="main">
        <div class="first">
          <button id="plus" class="btn btn-outline-warning">+</button>
          <button id="minus" class="btn btn-outline-warning">-</button>
          <button id="multiply" class="btn btn-outline-warning">*</button>
          <button id="divide" class="btn btn-outline-warning">/</button>
        </div>
        <div class="second">
          <button id="square" class="btn btn-outline-warning">
            x<sup>2</sup>
          </button>
          <button id="cube" class="btn btn-outline-warning">
            x<sup>3</sup>
          </button>
          <button id="squareRoot" class="btn btn-outline-warning">
            √<sup>2</sup>
          </button>
          <button id="cubeRoot" class="btn btn-outline-warning">
            √<sup>3</sup>
          </button>
        </div>
        <div class="third">
          <button id="1" class="btn btn-outline-warning">1</button>
          <button id="2" class="btn btn-outline-warning">2</button>
          <button id="3" class="btn btn-outline-warning">3</button>
          <button id="clearAll" class="btn btn-outline-danger">AC</button>
        </div>
        <div class="forth">
          <button id="4" class="btn btn-outline-warning">4</button>
          <button id="5" class="btn btn-outline-warning">5</button>
          <button id="6" class="btn btn-outline-warning">6</button>
          <button id="clear" class="btn btn-outline-danger">C</button>
        </div>
        <div class="fivth">
          <button id="7" class="btn btn-outline-warning">7</button>
          <button id="8" class="btn btn-outline-warning">8</button>
          <button id="9" class="btn btn-outline-warning">9</button>
          <button id="dot" class="btn btn-outline-warning">.</button>
        </div>
        <div class="zero">
          <button id="0" class="btn btn-outline-warning" style="width: 100%">
            0
          </button>
        </div>
        <div class="equalDiv">
          <button
            id="equal"
            class="btn btn-outline-success"
            style="width: 100%"
          >
            =
          </button>
        </div>
      </div>
    </div>
    <script type="text/javascript" src="script.js"></script>
	<script type="text/javascript">
		block = document.getElementsByTagName("h1");
		block[0].style.display = "none";
	</script>
</body>
</html>
