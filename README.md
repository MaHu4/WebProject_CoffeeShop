This coffee shop website is my first website. I have coded it in the framework of the practical assignment for the first cycle of the Web Development course at Frauenloop - Women in Tech (https://www.frauenloop.org/).

The main page is the NAD.café website. In addition to this one-page website (consisting of index.html, style.css and custom.css), I have made a separate website (nadyog.html., nadyog.css, nadyog.js, style.css) for the NAD YOG center that is located on teh very right side of the navbar. In this way, I was able to integrate both mnethods in my website. The content of the NAD.café is fictional, but inspired on an existing NAD YOG meditation and sound healing centre and a rooftop café in Lumbini.

I have applied HTML, CSS, Bootstrap5 and Java Script (JS). For more complex apllicatiosn of CSS and JS animations, I have indicated the source code as comments in the code. I have coded in Visual Studio. Moreover, I have worked with websites and tools such as www.unsplash.com (only for the background image of the NAD.café page; the other photos are my own), www.palleton.com, colorpicker, cloudinary, Lazyload, GTmetrix, WAVE (wave.webaim.org).

I have regularly added and pushed changes to GitHub in order to have a backup. In case of the creating of teh navbar I worked with a branch which I have interated later on into the main page. Once, I have invited another trainee of Frauenloop to comment on my main page. Hence, I have also learned on a small scale to to collaborate on GitHub.

In the initial planning phase, I have created moqups pages. At that stage, I planned to create a single page for each sections (home, about us, etc). In the course of the coding, I decided to make a one-site webpage for all content related to the coffee shop/ NAD.café. Moreover, I made other contenta nd design related changes that are explained below. Hence, the moqup pages differ from the actual result as part of a learning and improvement process.

The website is baed on a responsive web design so that it looks good on different devices. The navbar is horizontal on large devices and hidden on smedium and small devices in which it collapsed. Moreover, I used the grid systems and flexbox in Bootstrap5 and CSS while defining breakpoints for when elements that are side-by-side stack on top of each other. I amde the responsive images and made use of media queries media queries for smaller devices to defined smaller font sizes, margins and paddings for certain elements. The media queries always follow directly after the respective class or id. I have tested the needed adjustment for a responsive design while keeping a customer friendly and aesthetically appealing design with help of the "inspect" function for different devices in Chrome and Safari. In case that images are not laoding in certain browsers, I have defined a background color as backup for images and indicated a descriptive text for "alt" in  elements.

Tested on the Web Content Accessibility Guidelines

I have integrated the following CSS animation and JS functions :

<<<<<<< HEAD
1. a back-to-top button in style.css for the one-page website to make teh website user-friendlier (lines 67-91 in sytel.css, line 25 in index.html);
2. A Random User Generator for team-section of NAD.café in custom.js (lines 27 - 70) and linked to the id #team-members (line 102) in index.html with help of the getElementById-function;
3. The appearence of an altered text after having clicked on the submit button in the contact field of the NAD.café website (lines 73-88 in custom.js; line 523-542 in style.css and line 472 in index.html);
4. Animated arrow on the background image of the NAD YOG website in nadyog.css (lines 75-115):
5. A flipcard to show to images in nadyog.css (lines 136-179), nadyog.css (line 66-76) and linked to id #countdown in nadyog.html (line 34)
6. Countdown timer in NAD YOG in nadyog.js (lines 1-31) ;
7. An image comparison effect in nadyog.js (lines 34-113) and nadyog.css (lines 184-225) and linked to the class "img-comp-overlay" (line 40 in nadyog-html) by means of the GetElementByClassName-function

Some major challanges and lessons learnt as well as problem-solving startegies are the following:

1. I initially wanted to make the navbar transparent but was faced with the problem that the collapsed navbar was also transparent and not visible. I was not able to solve this problem completely. The Java Script-based solutions have been to challengingf or me at this point. It didn't work out to work with the z-index either. Therefore, I decided to make the navbar in a solid color which harmonises nicely withe the background-image photo of the home-section.
2. As I used nteh navbar - navbar-light of Bootstrap5 for the navbar, the toggler/ "amburger" was black. This was nor fitting to the design. While I couldn't find the solution to change the color of the toggler (the border and the three stacked stripes inside) neither on teh Bootstrap page nor on w3school, I searched in other community discussion websites and youtube videos and foudn the solution that the navbar-toggler-icon is a background image whioch url needed to be changed (see line 164 in style.css)
3. The navbar and footer are in the same color. On single pages, the navbar and footer would have been rather dominant in contrast to the content of each section. That is the main reason why I decided to create an one-page website.
4. Initially, the Live Server extension in Visual Studio didn't work because I had the full path of the style-sheet in the HTML-head instead of only the stylesheet-file-name. Since the CSS file is in the same folder like the html-file, the entire or relative paths doesn't need to be written.
5. In general, I searched for examples, inspiration and code solutions in YouTube tutorials and in respective websites such as w3school, MDN and other coding community websites and dsicussions.
=======
- A back-to-top button in style.css for the one-page website to make teh website user-friendlier (lines 67-91 in sytel.css, line 25 in index.html);
- A Random User Generator for team-section of NAD.café in custom.js (lines 27 - 70) and linked to the id #team-members (line 102) in index.html with help of the .getElementById- fiunction;
- The appearence of an altered text after having clicked on the submit button in the contact field of the NAD.café website (lines 73-88 in custom.js; line 523-542 in style.css and line 472 in index.html);
- Animated arrows on the background image of the NAD YOG website in nadyog.css (lines 75-115):
- A flipcard to show to images in nadyog.css (lines 136-179), nadyog.css (line 66-76) and linked to id #countdown in nadyog.html (line 34)
- A countdown timer in NAD YOG in nadyog.js (lines 1-31) ;
- An image comparison effect in nadyog.js (lines 34-113) and nadyog.css (lines 184-225) and linked to the class "img-comp-overlay" (line 40 in nadyog-html) by means of the GetElementByClassName-function

Some major challanges and lessons learnt as well as problem-solving startegies are the following:

- I initially wanted to make the navbar transparent but was faced with the problem that the collapsed navbar was also transparent and not visible. I was not able to solve this problem completely. The Java Script-based solutions have been to challengingf or me at this point. It didn't work out to work with the z-index either. Therefore, I decided to make the navbar in a solid color which harmonises nicely withe the background-image photo of the home-section.
- As I used nteh navbar - navbar-light of Bootstrap5 for the navbar, the toggler/ "amburger" was black. This was nor fitting to the design. While I couldn't find the solution to change the color of the toggler (the border and the three stacked stripes inside) neither on teh Bootstrap page nor on w3school, I searched in other community discussion websites and youtube videos and foudn the solution that the navbar-toggler-icon is a background image which url needed to be changed (see line 164 in style.css)
- The navbar and footer are in the same color. On single pages, the navbar and footer would have been rather dominant in contrast to the content of each section. That is the main reason why I decided to create an one-page website.
- Initially, the Live Server extension in Visual Studio didn't work because I had the full path of the style-sheet in the HTML-head instead of only the stylesheet-file-name. Since the CSS file is in the same folder like the html-file, the entire or relative paths doesn't need to be written.
- In general, I searched for examples, inspiration and code solutions in YouTube tutorials and in respective websites such as w3school, MDN and other coding community websites and dsicussions.
>>>>>>> c0f212da2046021a2108c67adef03d8cd70264d8
