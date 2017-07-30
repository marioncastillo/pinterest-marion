for (var i = 0 ; i<40; i++){
		console.log(datos[i].image_url);
		$(".fotos").append("<div class='lista'> <div class='contener'><img src='dist/img/" + datos[i].image_url + "'></div></div>");
		
		console.log(datos[i].title);
		$(".fotos").append("<h4 class='titulo'>" + datos[i].title + "</h4>" );
		
		console.log(datos[i].description);
		$(".fotos").append("<h5 class='descripcion'>" + datos[i].description + "</h5>");

		console.log(datos[i].user);
		$(".fotos").append("<h6 class='usuario'>" + datos[i].user + "</h6>");
		
		console.log(datos[i].hashtag);
		$(".fotos").append("<h6 class='hash'>" + datos[i].hashtag + "</h6><br>");
	}

for (var i = 0; i<40; i++){
		console.log(datos[i].image_url);
		$(".fotosdos").append("<div class='lista'> <div class='contener'><img src='dist/img/" + datos[i].image_url + "'></div></div>");
		
		console.log(datos[i].title);
		$(".fotosdos").append("<h4 class='titulo'>" + datos[i].title + "</h4>" );
		
		console.log(datos[i].description);
		$(".fotosdos").append("<h5 class='descripcion'>" + datos[i].description + "</h5>");

		console.log(datos[i].user);
		$(".fotosdos").append("<h6 class='usuario'>" + datos[i].user + "</h6>");
		
		console.log(datos[i].hashtag);
		$(".fotosdos").append("<h6 class='hash'>" + datos[i].hashtag + "</h6><br>");
	}

for (var i = 20; i<40; i++){
		console.log(datos[i].image_url);
		$(".fotostres").append("<div class='lista'> <div class='contener'><img src='dist/img/" + datos[i].image_url + "'></div></div>");
		
		console.log(datos[i].title);
		$(".fotostres").append("<h4 class='titulo'>" + datos[i].title + "</h4>" );
		
		console.log(datos[i].description);
		$(".fotostres").append("<h5 class='descripcion'>" + datos[i].description + "</h5>");

		console.log(datos[i].user);
		$(".fotostres").append("<h6 class='usuario'>" + datos[i].user + "</h6>");
		
		console.log(datos[i].hashtag);
		$(".fotostres").append("<h6 class='hash'>" + datos[i].hashtag + "</h6><br>");
	}

