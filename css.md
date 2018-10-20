CSS
========================================================


Syntax
========================================================

h2 {
	color: green;
} 

h2 - selector
color - property
green - value

Parameters
========================================================

background-color
font-family
font-size px, em relative to the fonts size, % or words
font-weight normal or bold
font-style normal or italic
text-align
text-decoration

Font Family
========================================================

- Specifies the order of search for fonts
- Last value shoud be a keyword / system default
- Names containing multiple words should be quoted

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

Select by Id
========================================================

> Ids need to be unique, only one element can have a specific id

<p id="song"></p>

#song {
	color: green;
} 

Select by Class
========================================================

<p class="red-text"></p>

.red-text {
	color: green;
} 

Combining Selectors
========================================================

Compining selctor for tag with class

p.warning {
  border: 5px solid orange;
}

<p class="warning"></p>

p .warning {
  border: 5px solid orange;
}

<p>test <div class="warning"></div></p>

h1, h2 {
  font-family: fantasy;
}

a:link {
  color: red;
}
a:visited {
  color: orange;
}
a:hover { 
  background-color: rgb(255, 214, 255);
}  
a:active {
  background-color: rgb(255, 214, 255);
} 
a:focus {
  background-color: rgb(255, 214, 255);
} 

Combining Classes
========================================================

.btn {
  font-size: 16px;
}
.btn-danger {
  background: red;
}
.btn-success {
  background: green;
}

<a class="btn btn-danger">...</a>
<a class="btn btn-success">...</a>

Specificity
========================================================

Roughly:

ID >> class >> tag

But when combining selectors this becomes more difficult. Browser calculates a score for ordering of rules. 

Layout
========================================================

width
height
overflow auto hidden
float

Box
========================================================

#box {
  background-color: lightgrey;
  width: 300px;
  border: 25px solid green;
  padding: 25px;
  margin: 25px;
}

Position
========================================================

**relative** changes position from normal with top and left
**absolute** is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed)
**fixed** relative to the border of the page, stays on the same location when scrolling
**sticky** changes position between relative and fixed

z-index the order in which the elements are drawn

Inline CSS
========================================================

<h1 style="background: salmon; color: white;">Salmon Mania</h1>

Seperate Style Sheet
========================================================

<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/pamelafox/69f97167ba32e3473cda/raw/336006010d620847f275b0bd25bbf7c665b2e1a1/hopper.css">