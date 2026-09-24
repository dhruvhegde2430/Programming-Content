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



in HTML Code, Javascript Code is inserted between the <script> and </script> tag 
      <script>
      document.getElementById("demo").innerHTML = "My First JavaScript";
      </script>

Javascript Function - Block of JS code that can be executed when 'called' for 


Script Tags can be placed anywhere in the <head> or <body> tag 

    <!DOCTYPE html>
    <html>
    <head>
    <script>
    function myFunction() {
      document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    </script>
    </head>
    <body>

    <h2>Demo JavaScript in Body</h2>
    <p id="demo">A Paragraph</p>
    
    <button type="button" onclick="myFunction()">Try it</button>
    <script>
    function myFunction() {
      document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    </script>
    </body>
    </html>




External Javascript --> External Files 
  <script src="myScript.js"></script>

An external script can be referenced in 3 different ways:
    With a full URL (a full web address)
    With a file path (like /js/)
    Without any path



Javascript can Display Data in Different Ways: 
      Writing into an HTML element, using innerHTML or innerText.
      Writing into the HTML output using document.write().
      Writing into an alert box, using window.alert().
      Writing into the browser console, using console.log().


innerHTML 
    <script>
    document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";
    </script>

innerText
    <script>
    document.getElementById("demo").innerText = "Hello World";
    </script>
Use innerHTML when you want to change an HTML element.
Use innerText when you only want to change the plain text.


document.write()
    <script>
    document.write(5 + 6);
    </script>
Using document.write() after an HTML document is loaded, will delete all existing HTML  
    <button type="button" onclick="document.write(5 + 6)">Try it</button>

window.alert()
    <script>
    window.alert(5 + 6);
    </script>

console.log()
    <script>
    console.log(5 + 6);
    </script>


Javascript Variables 
    Literals (Fixed values)
    Variables (Variable values)
Variables are labels for data values.
Variables are containers for storing data.

  
Javascript Syntax 
    // How to Declare variables:
    let x = 5;
    let y = 6;
    
    // How to Compute values:
    let z = x + y;

Numbers written with decimals (1.1) and without (10)
String are Text written in single or double quotes 

Javascript Keywords - Used to define actions to be performed 
Case Sensitive 

These Keywords Create Variables: 
  let x = 5; 
  const fname = "John"; 

Javascript Keywords 
    var	Declares a variable
    let	Declares a block variable
    const	Declares a block constant
    if	Marks a block of statements to be executed on a condition
    switch	Marks a block of statements to be executed in different cases
    for	Marks a block of statements to be executed in a loop
    function	Declares a function
    return	Exits a function
    try	Implements error handling to a block of statements

Javascript Identifier is the name you give to a variable.
  Case Sensitive 
  Rules for identifiers:
      Must start with a letter, _, or $
      Can contain digits after the first character
      Cannot be a reserved keyword (let, const, if, etc.)
      Are case-sensitive




JavaScript Statements (instructions) are composed of:
Values, Operators, Expressions, Keywords, and Comments


Javascript ignores White Space (multiple spaces) 


Javascript Comments //Comment Area 

/* Multi-line 
Javascvript Comment */

Javascript Variables 
  const price1 = 5;
  const price2 = 6;
  let total = price1 + price2;
  const pi = 3.14;
  let person = "John Doe";
  let answer = 'Yes I am!';

const = Constant Variable -- Not to be Changed 
let = Variable that can be changed 

Can Declare Multiple Variables in 1 Statement 
  let person = "John Doe", carName = "Volvo", price = 200;

Javascript Variable Datatypes 
    String	A text of characters enclosed in quotes
    Number	A number representing a mathematical value
    Bigint	A number representing a large integer
    Boolean	A data type representing true or false
    Object	A collection of key-value pairs of data
    Undefined	A primitive variable with no assigned value
    Null	A primitive value representing object absence
    Symbol	A unique and primitive identifier

typeof Operator -- Finds Type of Javascript Variable 
      typeof 1             // Returns "number"
      typeof "John"         // Returns "string"
      typeof "John Doe"     // Returns "string"

Javascript Booleans 
  x==8 (Equal to) 
  x!=8 (Not Equal to) 
  x>8 + x<8 (Greater/Less Than) 

Javascript Logical Operators 
    &&	logical and
    ||	logical or
    !	logical not


Conditional Statements - different actions for different conditions 
    if to specify a code block to be executed, if a specified condition is true
    else to specify a code block to be executed, if the same condition is false
    else if to specify a new condition to test, if the first condition is false
    switch to specify many alternative code blocks to be executed
    (? :) (ternary) as a shorthand for if...else

If Statement 
    if (condition) { 
      //code to execute 
    } 

Else Statement 
    if (condition) { 
      // code to execute 
    } else { 
      //code to execute 
    } 


Else if Statement 
    if (condition1) { 
      // code to execute for condition1 
    }  else if (condition2) { 
      // code to execute for condition2
    } else { 
      //code for if both are not true 
    } 



Switch Statement 
      switch(expression) {
        case x:
          // code block
          break;
        case y:
          // code block
          break;
        default:
          // code block
      }
break keyword, it breaks out of the switch block.
Stops the execution inside the switch block.





(? :) Ternary Operator -- shorthand for if else 
    condition ? expression1 : expression2




CSS Examples Conditional Statements 
      let text;
      if (Math.random() < 0.5) {
        text = "<a href='https://w3schools.com'>Visit W3Schools</a>";
      } else {
        text = "<a href='https://wwf.org'>Visit WWF</a>";
      }
      document.getElementById("demo").innerHTML = text;



        switch (new Date().getDay()) {
          case 0:
            day = "Sunday";
            break;
          case 1:
            day = "Monday";
            break;
          case 2:
             day = "Tuesday";
            break;
          case 3:
            day = "Wednesday";
            break;
          case 4:
            day = "Thursday";
            break;
          case 5:
            day = "Friday";
            break;
          case 6:
            day = "Saturday";
        }


Switch Statement - Default = Code to run if there is No Case Match 
        switch (new Date().getDay()) {
          case 6:
            text = "Today is Saturday";
            break;
          case 0:
            text = "Today is Sunday";
            break;
          default:
            text = "Looking forward to the Weekend";
        }


Boolean() function to find out if an expression (or a variable) is true:
      Boolean(10 > 9)   //returns True 
      Boolean(10 < 9)   //returns False 


Logical Operators 
    &&	AND	(x < 10 && y > 1) is true	
    ||	OR	(x === 5 || y === 5) is false	
    !	NOT	!(x === y) is true






Javascript Loops 

For Loops 
    for (let i = 0; i < 5; i++) {
      text += "The number is " + i + "<br>";
    }

While Loops 
    while (i < 10) {
      text += "The number is " + i;
      i++;
    }

Do-While Loops 
    do {
      text += "The number is " + i;
      i++;
    }
    while (i < 10);


For Loops to Collect Car Names from Cars Array 
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    let len = cars.length;
    
    let text = "";
    for (let i = 0; i < len; i++) {
      text += cars[i];
    }




Break in Loops --> Loops Terminates Immediately 
    for (let i = 0; i < 10; i++) {
      if (i === 3) { break; }
      text += "The number is " + i + "<br>";
    }


Break in Switch --> Exits Switch Block After Matching Case is Executed 
      switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }


