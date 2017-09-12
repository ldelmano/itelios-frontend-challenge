window.onload = function(){
	buscaProdutos();
};


function buscaProdutos(){

var request = new XMLHttpRequest();

request.open("GET", "https://raw.githubusercontent.com/ldelmano/itelios-frontend-challenge/master/products.json");


request.addEventListener("load", function(){

	var erroAjax = document.querySelector("#erro-ajax");

	var html = '';

	if (request.status == 200) {
		erroAjax.classList.add("invisivel");

		var resposta = request.responseText;
		var produtos = JSON.parse(resposta);

		console.log(produtos);

		produtos.forEach(function(data){
			html += '<div id="recomendados">';
		});

	}else{
		erroAjax.classList.remove("invisivel");
	}


});
request.send();

}