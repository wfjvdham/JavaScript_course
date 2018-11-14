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

AJAX
========================================================

> Asynchronous JavaScript And XML. With Ajax, Web applications can send and retrieve data from a server asynchronously (in the background) without interfering with the display and behavior of the existing page

- The name is misleading, nowadays JSON documents can also be retrieved. 

## XMLHttpRequest Object

The object that you can use to make an AJAX call first needs to be created.

```
let xhttp = new XMLHttpRequest();
```

## Send a Request

Using this object a request to a server can be send

```
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
```

### GET request

- Can only contain a link
- Can add some input but it needs to be added to the link so is not so secure
- Does not allow caching

### POST request

- Combines a link with a body of the request
- In the body large chunks of data can be send in a secure way
- Caching is possible

## Receive a Response

```
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   document.getElementById("demo").innerHTML = this.responseText;
  }
};
```

- `onreadystatechange` Defines a function to be called when the readyState property changes

- `readyState` can be on of the following values:
  
  - **0** request not initialized
  - **1** server connection established
  - **2** request received
  - **3** processing request
  - **4** request finished and response is ready

- `status` can have many [values](https://www.w3schools.com/tags/ref_httpmessages.asp) but the most important are:

  - **200** "OK"
  - **403** "Forbidden"
  - **404** "Page not found"

jQuery
========================================================

To make using the DOM object easier you can use the [jQuery](https://jquery.com/) library