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
		this.tools.style.width = "300px";
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
		
		
		btn = document.createElement("button");
		btn.style.width = "auto";
		btn.style.height = "auto";
		btn.textContent = 'Float';
		btn.onclick = this.floatToolClick.bind(this);
		this.tools.append(btn);
		
		this.elementFloat = document.createElement("select")
		this.elementFloat.style.width = "auto";
		this.elementFloat.style.height = "auto";
		this.elementFloat.options.add( new Option('Left','left') );
		this.elementFloat.options.add( new Option('Right','right') );
		this.tools.append(this.elementFloat);
		
		this.toolsArr = [];
		
		var tool = new ToolSelect();
		tool.init(this, 
			{
				name : "Float",
				style : "float",
				select : [ {name : "Left", value : "left"}, {name : "Right", value : "right"} ]
			})
		this.tools.append(tool.getHtmlDom());
		this.toolsArr.push(tool);
		
		tool = new ToolValue();
		tool.init(this, 
			{
				name : "width",
				style : "width",
				type : "number",
				units : "px"
			})
		this.tools.append(tool.getHtmlDom());
		this.toolsArr.push(tool);
		
		tool = new ToolValue();
		tool.init(this, 
			{
				name : "height",
				style : "height",
				type : "number",
				units : "px"
			})
		this.tools.append(tool.getHtmlDom());
		this.toolsArr.push(tool);
		
		tool = new ToolValue();
		tool.init(this, 
			{
				name : "background color",
				style : "backgroundColor",
				type : "color",
				units : "",
				element : { height : "17px" }
			})
		this.tools.append(tool.getHtmlDom());
		//this.toolsArr.push(tool);
		
		this.mainElement.append(this.tools);
		this.mainElement.append(this.editor);
		
		this.currentElement = this.editor;
	}
	
	editorClick(event)
	{
		if (this.selectMode)
		{
			this.currentElement = event.target;
			this.selectMode = false;
			this.toggleSelectHover(this.editor.children); 
			
			this.toolsArr.forEach(item => item.setValueFromSelected());
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
		
		this.currentElement.append(item);
		
		this.currentElement = item;
		
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
	
	floatToolClick(event)
	{
		this.currentElement.style["float"] = this.elementFloat.options[this.elementFloat.selectedIndex].text;
	}
	
	toggleSelectHover(childs)
	{
		[...childs].forEach(item => {
			
			item.classList.toggle("selectHover");
			this.toggleSelectHover(item.children);
			
		} );
	}
}


class ToolSelect
{
	constructor() {  }
	
	init(editor, data)
	{
		this.editor = editor;
		this.data = data;
	}
	
	getHtmlDom()
	{		
		var div = document.createElement("div");
		div.style.width = "auto";
		div.style["min-width"] = "300px";
		div.style.float = "left";
		
		var btn = document.createElement("button");
		btn.style.width = "auto";
		btn.style.height = "auto";
		btn.style.float = "left";
		btn.textContent = this.data.name;
		btn.onclick = this.toolClick.bind(this);
		div.append(btn);
		
		this.elementSelect = document.createElement("select")
		this.elementSelect.style.width = "auto";
		this.elementSelect.style.height = this.data?.element?.height ?? "auto";
		this.elementSelect.style.float = "left";
		this.data.select.forEach(item => this.elementSelect.options.add( new Option(item.name, item.value) ) );
		div.append(this.elementSelect);
		
		return div;
	}
	
	toolClick()
	{
		this.editor.currentElement.style[this.data.style] = this.elementSelect[this.elementSelect.selectedIndex].text;
	}
	
	setValueFromSelected()
	{
	}
}


class ToolValue
{
	constructor() {  }
	
	init(editor, data)
	{
		this.editor = editor;
		this.data = data;
	}
	
	getHtmlDom()
	{		
		
	
		var div = document.createElement("div");
		div.style.width = "auto";
		div.style["min-width"] = "300px";
		div.style.float = "left";
		
		var btn = document.createElement("button");
		btn.style.width = "auto";
		btn.style.height = "auto";
		btn.style.float = "left";
		btn.textContent = this.data.name;
		btn.onclick = this.toolClick.bind(this);
		div.append(btn);
		
		this.elementInput = document.createElement("input")
		this.elementInput.style.width = "auto";
		this.elementInput.style.height = this.data?.element?.height ?? "auto";
		this.elementInput.type = this.data.type;
		this.elementInput.style["max-width"] = "150px";
		this.elementInput.style["min-width"] = "50px";
		this.elementInput.style["max-height"] = "50px";
		this.elementInput.style["min-height"] = "17px";
		this.elementInput.style.float = "left";
		div.append(this.elementInput);
		
		return div;
	}
	
	toolClick()
	{
		this.editor.currentElement.style[this.data.style] = this.elementInput.value + this.data.units;
	}
	
	setValueFromSelected()
	{
		var val = this.editor.currentElement.style[this.data.style]?.toString().replaceAll(this.data.units, "");
		if (val != "")
		{
			this.elementInput.value = val;
			console.log("set value = " + val);
		}
	}
}