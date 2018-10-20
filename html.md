HTML
========================================================


HTML structure
========================================================

DOCTYPE signal to the browser that modern HTML is used

`<p></p>` opening and closing tags

**head** tag, containing information about the page without showing anything to the user
	
- charset important if you want to render different languages
- title of the page
- scripts for interactivity

**body** tag, renders what the user sees

Basic HTML tags
========================================================

`<h1></h1>` headings

`<p></p>` paragraphs

`<br>` end of lines

`<strong></strong>` Bold

`<em></em>` Italic

Lists
========================================================

<ol>
    <li>Bugs bunny</li>
    <li>Easter Bunny</li>
    <li>Thumper</li>
</ol>

<ul>
    <li>They're furry!</li>
    <li>Great listeners!</li>
    <li>Eat all your leftover carrots!</li>
</ul>

Images
========================================================

<img src="https://www.kasandbox.org/programming-images/animals/rabbit.png" alt="Rabbit with lop ears in barn" width="203" height="50"> 

Links
========================================================

<a href="http://home.web.cern.ch/topics/birth-web">Read more about the history of HTML</a>

`target="_blank"` to open the page in a new tab, use when linking to a different domain

Internal Links
========================================================

<a href="#web-history">History of the web</a>

<h2 id="web-history">History of the web</h2>

Tables
========================================================

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

Comments
========================================================
<!-- Hello humans! -->

To combine with CSS
========================================================

`<span></span>` grouping text
`<div></div>` grouping other parts of html