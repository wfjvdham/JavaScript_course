Browser Events
========================================================

For a nice overview of the basic events see [here](http://javascript.info/introduction-browser-events)

JavaScript can use the events in the following ways

## Using a HTML-attribute

```
<script>
  function countRabbits() {
    for(let i=1; i<=3; i++) {
      alert("Rabbit number " + i);
    }
  }
</script>

<input type="button" onclick="countRabbits()" value="Count rabbits!">
```

## Using a DOM property

```
<input id="elem" type="button" value="Click me">
<script>
  elem.onclick = function() {
    alert('Thank you');
  };
</script>
```

## Using an Event Listeners

```
<input id="elem" type="button" value="Click me"/>

<script>
  function handler1() {
    alert('Thanks!');
  };

  function handler2() {
    alert('Thanks again!');
  }

  elem.onclick = () => alert("Hello");
  elem.addEventListener("click", handler1); // Thanks!
  elem.addEventListener("click", handler2); // Thanks again!
</script>
```

## Event Object

```
<input type="button" value="Click me" id="elem">

<script>
  elem.onclick = function(event) {
    // show event type, element and coordinates of the click
    alert(event.type + " at " + event.currentTarget);
    alert("Coordinates: " + event.clientX + ":" + event.clientY);
  };
</script>
```

The HTML DOM (Document Object Model)
========================================================

> When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects:

![DOM](pic_htmltree.gif)

```
<!DOCTYPE html>
<html>
<body>

<h2>My First Page</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>
```

Code Formatting
========================================================

Human readable code need to have:

- Clear variable and function names
- Indenting, after `{`
- Blank lines, to separate code blocks
- Spacing after keywords, `,` and mathematical operators

This is easier when using a ESLint [tool](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

After that sometimes **minification** is used to compress the code and transfer it faster on the Internet.

jQuery
========================================================

To make using the DOM object easier you can use the [jQuery](https://jquery.com/) library