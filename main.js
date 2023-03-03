let btn1=document.querySelector("#btn");

btn1.addEventListener('click',function(){
	if (btn1.checked === true) {
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
	}
	else {
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
   
  }
	
})


// let icon=document.querySelector("#icon");
// let body=document.querySelector("body");


// icon.addEventListener("click",function(){
	
	// if(this.classList.icon('iconify')){
		// body.backgroundColor='white';
	// }
	// else{
		// body.backgroundColor='black';
	// }
// })










// <!DOCTYPE html>
// <html>
// <head>
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <style>
// body {
  // background-color: white;
  // color: black;
  // font-size: 25px;
// }

// .dark-mode {
  // background-color: black;
  // color: white;
  // text-align:center;
// }
// </style>
// </head>
// <body>

// <h2>Dark Mode/Light Mode</h2>

// <button onclick="myFunction()">dark mode/Light mode</button>

// <script>
// var element = document.body;
// function myFunction() {
   // element.classList.toggle("dark-mode");
// }
// </script>

// </body>
// </html>