Responsiveness
========================================================

From [wiki](https://en.wikipedia.org/wiki/Responsive_web_design)

> Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes

Media Queries
========================================================

With media queries you can change style depending on some conditions of the screen.

```
@media(min-width:900px){
  /* code in here only applies when width is equal or greater than 900 pixels wide */
} 

@media screen and (display-mode: fullscreen) {
  /* code in here only applies to screens in fullscreen*/
}

@media all and (orientation: landscape) {
  /* code in here only applies in landscape */
}
```

Flex Box
========================================================

With the flex box module you can change the layout of your page by changing the size and location of the boxes on your page.

A great guide can be found [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
