var runcode = {};
runcode.open=function(element){
	var code = document.getElementById(element).value;
	var win = window.open("", "", "");
	win.opener = null;
	win.document.write(code);
	win.document.close();
}
runcode.copy=function(element){
	var codeobj = document.getElementById(element) ;
	if (window.clipboardData)
	{	
		window.clipboardData.setData("Text", codeobj.value);
	}else{
		codeobj.select(); 	
		codeobj.setSelectionRange(0, codeobj.value.length);
		document.execCommand('copy');
		setTimeout(function(){
			codeobj.blur()
		},300);
	}
}



