var trs = document.getElementsByTagName('tr');
percorreArray(trs,function(tr){
	tr.addEventListener("click", function(){
		this.setAttribute("bgcolor","grey");
	});
});