# jCore - a minimalist 4kB jQuery clone

<pre>
Functions:
each() - Iterates through every element in the collection of matched elements invoking callback on every one of them
on() - Attaches callback function to one or more events of the matched elements. Events should be space-separated
css() - Returns CSS property of the first matched element
html() - Returns inner HTML of the first matched element
attr() - Returns attribute attribute of the first matched element
val() - Returns value of the first matched element
toggleClass() - Removes class class from matched elements when they have it. Adds the class class to those that don't have it
addClass() - Adds the class class to the matched elements
removeClass() - Removes the class class from the matched elements
hasClass() - Tests if the first matched element has class class
remove() - Removes matched elements
replaceWith() - Replaces every element from the set of matched elements with element
show() - Shows the matched elements by setting display:block to all of them.
hide() - Hides the matched elements by setting display:none to all of them.
toggle() - Shows hidden elements from the set of matched elements, hides visible elements
get() = Returns DOM element number index from the set of matched elements
parent() - Returns parent of the first matched element
next() - Returns element which comes after the first matched element in the DOM tree
prev() - Returns element which comes before the first matched element in the DOM tree 
offset() - Returns array containing the first element's bounds 
find() - Returns children of the first matched element that match CSS selector selector
children() - Returns direct children of the first matched element that match CSS selector selector
text() - Sets inner HTML of the matched elements to plain text text. If text contains any HTML it will be stripped 
clone() - Creates a copy in memory (outside the DOM tree) of the first matched element
append() - Inserts HTML before the end of every matched element  
is() - Checks if the first element in the set of matched elements matches given CSSSelector
parents() - Returns parent elements matching given CSSSelector
eq() - Returns element with offset index from the set of matched elements 
lt() - Returns element with offset index or smaller from the set of matched elements 
gt() - Returns element with offset index or bigger from the set of matched elements 

Static functions:
$.ajax - Performs an asynchronous AJAX request of type GET or POST depending on value of isGET to the given url, sending queryString and calling successCallback on success 
$.post - Performs an asynchronous AJAX POST request to the given url, sending queryString and calling successCallback on success 
$.get - Performs an asynchronous AJAX GET request to the given url, sending queryString and calling successCallback on success 
$.prefix - Returns a prefix required for a given feature or false if this feature is not supported. For example to test if a web browser supports CSS animations try: $.prefix('animation') 

Plugins:
jcore.animate
	animate() - Animates a transition of style attributes of the matched elements from current state to CSS in milliseconds time 
	fadeIn() - Animates elements' transparency to fully opaque, hence the matched elements become fully visible in milliseconds time 
	fadeOut() - Animates elements' transparency to full transparency, hence the matched elements become invisible in milliseconds time 

jcore.cookies
	cookie() - Returns true if the first matched element is visible, otherwise returns false 
	
jcore.visible
	visible() - Returns true if the first matched element is visible, otherwise returns false 
	
jcore.browsers
	isWebkit - Returns true if a web browser is Webkit-based, eg. Google Chrome 8+, Safari 6+, Opera 15+ 
	isMozilla - Returns true if a web browser is Gecko-based (1.9.2+) eg. Mozilla Firefox 3.6+, Thunderbird 3.1+, Firefox Mobile 1.0+ (Fennec) 
	isOpera - Returns true if a web browser is Opera 6+ 
	isIE() - Returns true if a web browser is Internet Explorer 8+ 
	isMobile - Returns true if a web browser is running on a mobile (tablet, phone) 
	isOperaMini - Returns true if a web browser is running under Opera Mini 
	isOperaMobile - Returns true if a web browser is running under Opera Mobile 
	isAndroid - Returns true if a web browser is running under Android OS 
	isBlackBerry - Returns true if a web browser is running under BlackBerry OS 
	isiOS - Returns true if a web browser is running under iOS 
	isWindowsPhone - Returns true if a web browser is running under Windows Phone OS 
	isWindows - Returns true if a web browser is running under Windows OS 
	isMac - Returns true if a web browser is running under MacOS 
	isUnix - Returns true if a web browser is running under Unix OS 
	isLinux - Returns true if a web browser is running under Linux OS 	
</pre>	
<hr>
License: <a href="http://opensource.org/licenses/MIT">MIT</a>

<h2>Live Demos</h2>
Visit <a href="http://jco.re">www.JCO.RE</a> for documentation and live demos.