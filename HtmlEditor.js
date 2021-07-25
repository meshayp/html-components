class HtmlEditor {



	constructor() {  }
	init(p_mainElement)
	{
		this.mainElement = p_mainElement;
		this.editor = document.createElement("div");
		this.editor.style.width = "100px";
		this.editor.style.height = "100px";
		this.editor.style.border = "1px solid black";
		this.editor.onclick = this.editorClick.bind(this);
		
		this.tools = document.createElement("div");
		this.tools.style.width = "100px";
		this.tools.style.height = "100px";
		this.tools.style.border = "1px solid black";
		
		var btn = document.createElement("button")
		btn.style.width = "10px";
		btn.style.height = "10px";
		btn.onclick = this.tool1Click.bind(this);
		this.tools.append(btn);
		
		btn = document.createElement("button");
		btn.style.width = "10px";
		btn.style.height = "10px";
		btn.onclick = this.tool2Click.bind(this);
		this.tools.append(btn);
		
		this.mainElement.append(this.editor);
		this.mainElement.append(this.tools);
	}
	
	editorClick(event)
	{
		console.log(event.target);
	}
	
	tool1Click(event)
	{
		var item = document.createElement("div");
		item.style.width = "10px";
		item.style.height = "10px";
		item.style.border = "1px solid blue";
		
		this.editor.append(item);
		console.log("tool 1 clikc");
	}
	
	tool2Click(event)
	{
		var item = document.createElement("div");
		item.style.width = "10px";
		item.style.height = "10px";
		item.style.border = "1px solid yellow";
		
		this.editor.append(item);
		console.log("tool 2 clikc");
	}
}