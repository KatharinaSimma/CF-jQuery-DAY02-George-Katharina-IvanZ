var familyAlbum = JSON.parse(family);
console.table(familyAlbum);



$(document).ready(function(){

// add images to the html
    for (var i=0; i<familyAlbum.length; i++){

        //var familyPhoto = familyAlbum[i].img;
        //console.log(familyPhoto);
        $("#mainDiv").append(`<div class="flexItem"><img id="img${i}" src='${familyAlbum[i].img}'></div>`).append(`<br><span>Relation: ${familyAlbum[i].name}</span>`);
        //console.log($("#img${i}"));
     
        
    }

    for (var i=0; i<familyAlbum.length; i++){

        if(familyAlbum[i].name == 'Child'){
            $(`#img${i}`).css("border", "blue 4px solid");
            console.log(this);
        } else if(familyAlbum[i].name == 'Dog'){
            $(`#img${i}`).css("border", "pink 4px solid");
        }
        
    };

    




})