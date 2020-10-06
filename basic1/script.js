$(document).ready(function() {



    $(".image").on("click", function(event){
        console.log(event.target.alt);
        if (event.target.alt == "Box"){
            $(this).after("You clicked on the Box!")
        } else if (event.target.alt == "Bells"){
            $(this).after("You clicked on the Bells!")
        } else if (event.target.alt == "Santa"){
            $(this).after("You clicked on Satan!")
        }
    
    });


//$(".image1").addClass("hidden");

$(".image1").on("click", function(event) {

    $(this).toggleClass("hidden")
       
        console.log(event.target);

} )

});


