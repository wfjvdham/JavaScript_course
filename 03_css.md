CSS
========================================================

> Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML

- Initial release 1996

Syntax
========================================================

```
h2 {
	color: green;
}
```

- **h2** selector
- **color** property
- **green** value

Parameters
========================================================

## `background-color`

- Keyword values: red, green, ...
- Hexadecimal values: #bbff00, #bbff0077, ...
- RGB value: rgb(255, 255, 128)

## `font-family`

- Specifies the order of search for fonts
- Last value should be a keyword / system default
- Names containing multiple words should be quoted

```
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

To include a non standard font on your website you can use [GoogleFonts](https://fonts.google.com/)

## `font-size`

- Absolute values: xx-small, x-small, ...
- Length values: 12px, 0.8em, ...

`em` is the font size relative to the parent font size

## `font-weight`

- Keyword values: normal, bold, ...
- Numbers: 100, 200, ...

## `font-style`

- Keyword values: normal, italic, ...

## `text-align`

- Keyword values: left, right, center, ...

## `text-decoration`

- Keyword values: none, underline red, underline wavy red, ...

Selectors
========================================================

## By Id

> Ids need to be unique, only one element can have a specific id

```
#song {
  color: green;
}

<p id="song"></p>
``` 

## By Class

```
.red-text {
  color: red;
}

<p class="red-text"></p>
``` 

## By Tag

```
p {
  color: green;
}

<p></p>
``` 

## Combining Selectors

Combining selectors for tag and class

### Tag `p` with class `warning`

```
p.warning {
  border: 5px solid orange;
}

<p class="warning"></p>
```

### A class `warning` inside a tag `p`

```
p .warning {
  border: 5px solid orange;
}

<p>test <div class="warning"></div></p>
```

### Multiple tags

```
h1, h2 {
  font-family: fantasy;
}
```

### Only change a specific state of a tag

```
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
``` 

### Combining Classes

```
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
```

Specificity
========================================================

Roughly:

ID >> class >> tag

But when combining selectors this becomes more difficult. Browser calculates a score for ordering of rules. 

Layout
========================================================

## `width` and `height`

- Length value: px, cm, ...
- Percentage of containing box: %

## `overflow`

> Defines what happens when the content of a box overflows the box itself

See [example](https://www.w3schools.com/cssref/playit.asp?filename=playcss_overflow&preval=visible)

## `float`

> Specifies how an element should float

See [example](https://www.w3schools.com/cssref/playit.asp?filename=playcss_float&preval=none)

Box Model
========================================================

![css box model](css-box-model.png)

```
#box {
  background-color: lightgrey;
  width: 300px;
  border: 25px solid green;
  padding: 25px;
  margin: 25px;
}
```

***

<div style="background-color: lightgrey;width: 300px;border: 25px solid green;padding: 25px;margin: 25px;">test</div>

Position
========================================================

- **relative** changes position from normal with top and left
- **absolute** is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed)
- **fixed** relative to the border of the page, stays on the same location when scrolling
- **sticky** changes position between relative and fixed

z-index the order in which the elements are drawn

Inline CSS
========================================================

<h1 style="background: salmon; color: white;">Salmon Mania</h1>

Seperate Style Sheet
========================================================

<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/pamelafox/69f97167ba32e3473cda/raw/336006010d620847f275b0bd25bbf7c665b2e1a1/hopper.css">

## Bootstrap

[Bootstrap](https://getbootstrap.com/)
