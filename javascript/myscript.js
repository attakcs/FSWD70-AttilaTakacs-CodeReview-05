var data = JSON.parse(movies);

$(document).ready(function() {

	// CREATE SMALL CARDS, WITH PICTURES AND DESCRIPTIONS + "LIKE SECTION"

for (let i = 0; i < data.length; i++) {
	$("#movies").append(`<div class="col-lg-6 col-sm-12 mt-3 mb-3"><div class="card"><div class="card-horizontal"><div class="img-square-wrapper"><img class="smallPosters" src="${data[i].poster}" alt=""></div><div class="card-body"><h4 class="card-title">${data[i].title}</h4><p class="card-text">${data[i].description}</p><div class="likeSection"><img src="img/like.png" class="like-button"><span class="click-value">${data[i].rating}</span></div></div></div></div></div>`);}

// LIKE FUNCTION

	var like = $(".like-button");
	var value = $(".click-value");

	for(let i = 0; i < data.length; i++){

	$(like[i]).click(function(){
		++data[i].rating;
		$(value[i]).text(data[i].rating);
		console.table(data);});
	}
});






//STRUCTURE OF THE CARDS
/*
    <div class="row">
        <div class="col-12 mt-3">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="" src="http://via.placeholder.com/300x180" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text, the card's content.</p> + "LIKES"
                    </div>
                </div>
            </div>
        </div>
    </div>

 */