	var colors = [ 
						"#" + Math.floor(Math.random()*16777215).toString(16),
						"#" + Math.floor(Math.random()*16777215).toString(16),
						"#" + Math.floor(Math.random()*16777215).toString(16),
						"#" + Math.floor(Math.random()*16777215).toString(16),
						"#" + Math.floor(Math.random()*16777215).toString(16),
						"#" + Math.floor(Math.random()*16777215).toString(16),
						"#" + Math.floor(Math.random()*16777215).toString(16),
						"#" + Math.floor(Math.random()*16777215).toString(16),
						"#" + Math.floor(Math.random()*16777215).toString(16),
						"#" + Math.floor(Math.random()*16777215).toString(16)
						];
		
		$(document).ready(function() {
		   
				var element = document.getElementById("mainToggle");
			   
			   for (let i = 0; i < 10; i++) {

					var smalldiv = document.createElement("div");
				 smalldiv.classList.add("btnSmall");
				 smalldiv.style["background-color"] = colors[i];

				 var div = document.createElement("div");
				 div.classList.add("btn");
				 div.appendChild(smalldiv);
				 
				 div.addEventListener("click", myFunction);
				 element.appendChild(div);
				}
			   
			   var div = document.createElement("div");
			  div.classList.add("btnToggle");
			  div.id = "toggleSlider";
			  div.style.left = "0px";
			  div.style["background-color"] = colors[0];
			  element.appendChild(div);

		   
		});
		


		function myFunction(event) {
		  var rect = event.target;
		  //alert (rect.style.top + " " + rect.style.left);
		  //alert (rect.offsetLeft);
		  
		  //alert (rect.offsetLeft/30);
		  
		  var slider = document.getElementById("toggleSlider");
		  slider.style.left = rect.offsetLeft + "px";
		  slider.style["background-color"] = colors[rect.offsetLeft/30 || 0];
		  //alert (slider);
		}