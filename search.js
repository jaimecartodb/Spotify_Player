var API_BASE_URL = "https://api.spotify.com"

$('.js-submit').on('submit', function(event){
	event.preventDefault();

	var data = $('.artist').val();
	var search = API_BASE_URL + '/v1/seach?type=artist&query=' + data;


		debugger;

	$.ajax({
		type : 'GET',
		url: search,
		data : '',
		success: console.log("successssss!"),
		error: handleError,
		dataType: 'json'
	});
});

function handleError(error){
	console.log(error);
}