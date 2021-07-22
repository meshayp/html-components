class ToggleSlider {



	constructor() {  }
	init(p_mainElement)
	{
		this.mainElement = p_mainElement;
		this.mainElement.classList.add("myToggle");

		var sliderLine = document.createElement("div");
		this.mainElement.classList.add("sliderLine");
		this.mainElement.appendChild(sliderLine);

		// <div id="mainToggle" class="myToggle"> 
		//    <div class="sliderLine" >
		//    </div>
		// </div>

		//var element = document.getElementById("mainToggle");

		this.colors = [ 
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
			   
		for (let i = 0; i < 10; i++) {

			var smalldiv = document.createElement("div");
			smalldiv.classList.add("btnSmall");
			smalldiv.style["background-color"] = this.colors[i];

			var div = document.createElement("div");
			div.classList.add("btn");
			div.appendChild(smalldiv);
			
			div.addEventListener("click", this.clickSlider.bind(this));
			this.mainElement.appendChild(div);
		}
		
		var div = document.createElement("div");
		div.classList.add("btnToggle");
		div.id = "toggleSlider";
		div.style.left = "0px";
		div.style["background-color"] = this.colors[0];
		this.mainElement.appendChild(div);

		this.toggleSliderBtn = div;
	}

	clickSlider(event) {
		var rect = event.target;
		//alert (rect.style.top + " " + rect.style.left);
		//alert (rect.offsetLeft);
		
		//alert (rect.offsetLeft/30);
		
		//var slider = document.getElementById("toggleSlider");
		this.toggleSliderBtn.style.left = rect.offsetLeft + "px";
		this.toggleSliderBtn.style["background-color"] = this.colors[rect.offsetLeft/30 || 0];
		//alert (slider);
	  }

  }

		


		