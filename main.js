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

		var listaRecomendados = produtos[0].data.recommendation;

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
			// divRecomendados.innerHTML += '<div class="clear"></div>'
		});

		divClear();

	}else{
		erroAjax.classList.remove("invisivel");
	}


});
request.send();

}

function divClear(){
		var clearDiv = document.createElement('div');
		var recomendados = document.querySelector(".lista-recomendados");
		recomendados.appendChild(clearDiv).classList.add("clear");	
}
