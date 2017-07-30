$(document).ready(function(){

for(i=0; i<=3;i++){
	$(".uno").append("<img src=dist/img" + datos[i].image_url +">" + "<h4>"+ datos[i].title + "</h4>" + "<h5>" + datos[i].description + "</h5>" + "<h3>" + datos[i].user+"</h3>"+ "<h3>" + dat[i].hashtag+ "</h3>")
}

})