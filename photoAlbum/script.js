var familyAlbum = JSON.parse(family);
console.table(familyAlbum);



$(document).ready(function(){

// add images to the html
    for (let i=0; i<familyAlbum.length; i++){

        //var familyPhoto = familyAlbum[i].img;
        //console.log(familyPhoto);
        $("#mainDiv").append(`<figure class="flexItem"><img id="img${i}" src='${familyAlbum[i].img}'></figure>`).append(`<br><span>Relation: ${familyAlbum[i].name}</span>`);
        //console.log($("#img${i}"));

        if(familyAlbum[i].name == 'Child'){
            $(`#img${i}`).css("border", "blue 4px solid");
            console.log(this);
        } else if(familyAlbum[i].name == 'Dog'){
            $(`#img${i}`).css("border", "pink 4px solid");
        }
        
        $(`#img${i}`).on("click", function(event) {

                //console.log(this.id)
    
                    $(this).after(`<figcaption>${familyAlbum[i].hobbies}</figcaption>`)});

                //console.log()

    };



        
            
            //for (let i=0; i<familyAlbum.length; i++){

                //$("img").on("click", function(event) {

                //console.log(this.id)
    
                    //$//(this).after(`<figcaption>${familyAlbum[i].hobbies}</figcaption>`)});

                //console.log()

    //}

})
