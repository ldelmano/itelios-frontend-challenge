window.onload = function(){
	buscaProdutos();
};


function buscaProdutos(){

var request = new XMLHttpRequest();

request.open("GET", "https://raw.githubusercontent.com/ldelmano/itelios-frontend-challenge/master/products.json");


request.addEventListener("load", function(data){

	var erroAjax = document.querySelector("#erro-ajax");

	if (request.status == 200) {
		erroAjax.classList.add("invisivel");

		var resposta = request.responseText;
		var produtos = JSON.parse(resposta);

		var visitado = produtos[0].data.item;
		var listaRecomendados = produtos[0].data.recommendation;

		adicionaVisitado(visitado);
		
		listaRecomendados.forEach(function(recommendation){
			var divRecomendados = document.querySelector(".lista-recomendados");

			divRecomendados.innerHTML += '<figure class="item container">' + 
											'<img src="http:'+recommendation.imageName+'">' + 
												'<figcaption>' + 
													'<p class="descricao">'+recommendation.name+'</p>' +
													'<p>Por: <span class="preco">'+recommendation.price+'</span></p>' +
													'<p>'+recommendation.productInfo.paymentConditions+'</p>' +
												'</figcaption>' + 
											'<a href="#" class="add-cart">adicionar ao carrinho <i class="material-icons vertical-center">add_shopping_cart</i></a>' +
										 '</figure>';
		});

		divClear();

	}else{
		erroAjax.classList.remove("invisivel");
	}


});
request.send();

}

function adicionaVisitado(visitado){
	var divVisitado = document.querySelector(".prod-visitado");

			divVisitado.innerHTML += '<figure class="item container">' + 
											'<img src="http:'+visitado.imageName+'">' + 
												'<figcaption>' + 
													'<p class="descricao">'+visitado.name+'</p>' +
													'<p>Por: <span class="preco">'+visitado.price+'</span></p>' +
													'<p>'+visitado.productInfo.paymentConditions+'</p>' +
												'</figcaption>' + 
											'<a href="#" class="add-cart">adicionar ao carrinho <i class="material-icons vertical-center">add_shopping_cart</i></a>' +
										 '</figure>';

	console.log(visitado);			
};


function divClear(){
		var clearDiv = document.createElement('div');
		var recomendados = document.querySelector(".lista-recomendados");
		recomendados.appendChild(clearDiv).classList.add("clear");	
}
