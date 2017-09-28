

	var arrTerms = ["frog" , "falcon" , "hamster" , "cat" , "dog" , "bulldog" , "pug" , "mouse" , "orangutan" , "Honey badger"];

	arrTerms.forEach( function(animals){
		var newBtn = $("<button>");
		newBtn.addClass("btn");
		newBtn.attr("data-value" , animals);
		newBtn.text(animals);
		$(".buttons").append(newBtn);
	})



	$("#add-search").on('click' , function(event){
		event.preventDefault();

		var searchTerm = $("#search").val().trim();
		var newBtn = $("<button>");
		newBtn.addClass("btn");
		newBtn.attr("data-value" , searchTerm);
		newBtn.text(searchTerm);
		$(".buttons").append(newBtn);
	})

	$(".buttons").on('click' , ".btn" , function(){

		$(".content").empty();
		console.log($(this).attr("data-value"));

		var searchTerm = $(this).attr("data-value");

		queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=wmsl6UYmnOUERuSlr6WVLcQ9yhdvRUdv&limit=10";

		var Obj = {};

		$.ajax({
		    url: queryURL,
		    method: "GET"
		}).done(function(response) {

			console.log(response.data);

		    response.data.forEach( function(element){
			    var newDiv = $("<div>");
			    // newDiv.css("display" ,"line-block");

			    var newImg = $("<img>");
			    newImg.attr("src", element.images.fixed_height_still.url);
			    newImg.attr("data-still" , element.images.fixed_height_still.url);
			    newImg.attr("data-animate" , element.images.fixed_height.url);
			    newImg.attr("data-state", "still");
			    newImg.addClass("gif");

			    var newTitle = $("<h4>");
			    newTitle.text("rating: " + element.rating);
			    // console.log(element.images);
			    
			    newDiv.append(newTitle);
			    newDiv.append(newImg);
			    $(".content").append(newDiv);
			});
		});
	})

	$(".content").on('click' , '.gif' , function(){

		var state = $(this).attr("data-state");

		if (state === "still") {

        	$(this).attr("src", $(this).attr("data-animate"));
        	$(this).attr("data-state", "animate");

      	} else {

        	$(this).attr("src", $(this).attr("data-still"));
        	$(this).attr("data-state", "still");

      	}
	})	

	