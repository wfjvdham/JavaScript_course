HTML
========================================================

> Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications

- Initial release 1993
- On 28 October 2014, HTML5 was released as a stable W3C Recommendation

HTML structure
========================================================

`<!DOCTYPE html>` signals to the browser that modern HTML is used

`<html></html>` opening and closing tags of the complete page

`<head></head>` containing information about the page without showing anything to the user
	
- `<meta charset="utf-8">` important if you want to render different languages
- `<title>All about rabbits!!</title>` title of the page
- `<style></style>` contains the css of the page
- `<script></script>` contains javascript for interactivity

`<body></body>` renders what the user sees

Basic HTML tags
========================================================

`<h1></h1>` headings

`<p></p>` paragraphs

`<br>` end of lines, does not require a closing tag

`<strong></strong>` Bold

`<em></em>` Italic

## Ordered Lists

`
<ol>
    <li>Bugs bunny</li>
    <li>Easter Bunny</li>
    <li>Thumper</li>
</ol>
`

***

<ol>
    <li>Bugs bunny</li>
    <li>Easter Bunny</li>
    <li>Thumper</li>
</ol>

## Unordered Lists

`
<ul>
    <li>They're furry!</li>
    <li>Great listeners!</li>
    <li>Eat all your leftover carrots!</li>
</ul>
`

***

<ul>
    <li>They're furry!</li>
    <li>Great listeners!</li>
    <li>Eat all your leftover carrots!</li>
</ul>

## Images

`
<img src="https://www.kasandbox.org/programming-images/animals/rabbit.png" alt="Rabbit with lop ears in barn" width="203" height="50"> 
`

***

<img src="https://www.kasandbox.org/programming-images/animals/rabbit.png" alt="Rabbit with lop ears in barn" width="203" height="50"> 

## Links

`
<a href="http://home.web.cern.ch/topics/birth-web">Read more about the history of HTML</a>
`

***

<a href="http://home.web.cern.ch/topics/birth-web">Read more about the history of HTML</a>

### With the `target="_blank"` atribute

Opens the link in a new tab or page

`
<a href="http://home.web.cern.ch/topics/birth-web" target="_blank">Read more about the history of HTML</a>
`

***

<a href="http://home.web.cern.ch/topics/birth-web" target="_blank">Read more about the history of HTML</a>

### Internal Links

`
<a href="#web-history">History of the web</a>
`
`
<h2 id="web-history">History of the web</h2>
`

## Tables

`
<table>
    <thead>
        <tr>
            <th>Pet name</th>
            <th>Species</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Black & white</td>
            <td>rabbit</td>
        </tr>
    </tbody>
</table>
`

***

<table>
    <thead>
        <tr>
            <th>Pet name</th>
            <th>Species</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Black & white</td>
            <td>rabbit</td>
        </tr>
    </tbody>
</table>

## Comments

`
here there is a <!-- Hello humans! --> comment
`

here there is a <!-- Hello humans! --> comment

## To combine with CSS

- `<span></span>` grouping text
- `<div></div>` grouping other parts of html