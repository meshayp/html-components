class HtmlEditor {



	constructor() {  }
	init(p_mainElement)
	{
		this.mainElement = p_mainElement;
		this.mainElement.style.width = "max-content";
		
		this.editor = document.createElement("div");
		this.editor.style.width = "300px";
		this.editor.style.height = "300px";
		this.editor.style.border = "1px solid black";
		this.editor.style.float = "left";
		this.editor.onclick = this.editorClick.bind(this);
		
		this.tools = document.createElement("div");
		this.tools.style.width = "100px";
		this.tools.style.height = "300px";
		this.tools.style.float = "left";
		this.tools.style.border = "1px solid black";
		
		this.elementSelect = document.createElement("select")
		this.elementSelect.style.width = "auto";
		this.elementSelect.style.height = "auto";
		this.elementSelect.options.add( new Option('Div','div') );
		this.elementSelect.options.add( new Option('Span','span') );
		this.elementSelect.options.add( new Option('Button','button') );
		this.tools.append(this.elementSelect);
		
		var btn = document.createElement("button")
		btn.style.width = "auto";
		btn.style.height = "auto";
		btn.textContent = 'Add';
		btn.onclick = this.addElementClick.bind(this);
		this.tools.append(btn);
		
		btn = document.createElement("button")
		btn.style.width = "auto";
		btn.style.height = "auto";
		btn.textContent = 'Remove';
		btn.onclick = this.removeElementClick.bind(this);
		this.tools.append(btn);
		
		//btn = document.createElement("button");
		//btn.style.width = "auto";
		//btn.style.height = "auto";
		//btn.textContent = 'DIV';
		//btn.onclick = this.tool2Click.bind(this);
		//this.tools.append(btn);
		
		btn = document.createElement("button");
		btn.style.width = "auto";
		btn.style.height = "auto";
		btn.textContent = 'BK COLOR';
		btn.onclick = this.tool3Click.bind(this);
		this.tools.append(btn);
		
		btn = document.createElement("button");
		btn.style.width = "auto";
		btn.style.height = "auto";
		btn.textContent = 'select';
		btn.onclick = this.selectToolClick.bind(this);
		this.tools.append(btn);
		
		this.mainElement.append(this.tools);
		this.mainElement.append(this.editor);
		
	}
	
	editorClick(event)
	{
		if (this.selectMode)
		{
			this.currentElement = event.target;
			this.selectMode = false;
			this.toggleSelectHover(this.editor.children); 
		}
		console.log(event.target);
	}
	
	addElementClick(event)
	{
		var elem = this.elementSelect.options[this.elementSelect.selectedIndex].text;
		var item = document.createElement(elem);
		item.style.width = "50px";
		item.style.height = "50px";
		item.style.border = "3px solid blue";
		
		this.currentElement = item;
		
		this.editor.append(item);
		console.log("addElementClick");
	}
	
	removeElementClick(event)
	{
		this.currentElement.remove();
	}
	
	tool1Click(event)
	{
		var item = document.createElement("div");
		item.style.width = "50px";
		item.style.height = "50px";
		item.style.border = "3px solid blue";
		
		this.currentElement = item;
		
		this.editor.append(item);
		console.log("tool 1 clikc");
	}
	
	tool2Click(event)
	{
		var item = document.createElement("div");
		item.style.width = "50px";
		item.style.height = "50px";
		item.style.border = "3px solid yellow";
		
		this.currentElement = item;
		
		this.editor.append(item);
		console.log("tool 2 clikc");
	}
	
	tool3Click(event)
	{
		this.currentElement.style["background-color"] = "red";
		this.currentElement.style["border-radius"] = "10px";
	}
	
	selectToolClick(event)
	{
		this.toggleSelectHover(this.editor.children); 
		this.selectMode = true;
	}
	
	toggleSelectHover(childs)
	{
		[...childs].forEach(item => {
			
			item.classList.toggle("selectHover");
			this.toggleSelectHover(item.children);
			
		} );
	}
}
