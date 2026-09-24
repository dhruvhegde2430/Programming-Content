Javascript = Programs the Behavior of Web Pages 
  can calculate, manpulate, and validate data 
  can update and change both HTML and CSS 

Javascript accepts both "double" and 'single' quotes 

Javascript Element: getElementByID()
  document.getElementById("demo").innerHTML = "Hello JavaScript";

"finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":




JavaScript can change HTML attribute values


In this case JavaScript changes the value of the src (source) attribute of an image:  
    <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>
    <img id="myImage" src="pic_bulboff.gif" style="width:100px">
    <button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>


Changing HTML Attribute (Style) 
  document.getElementById("demo").style.fontSize = "35px";

Hide HTML Element Style 
  document.getElementById("demo").style.display = "none";

Show HTML Element Style 
  document.getElementById("demo").style.display = "block";








