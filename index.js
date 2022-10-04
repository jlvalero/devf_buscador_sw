
let boton = document.getElementsByClassName("search")
let characters = JSON.parse(file).results


let input_character = document.getElementById("input_character")
let resultado = document.getElementById("resultado")

function search_character_button(){
 let character = search_character(input_character.value)
 
 resultado.innerHTML =  `
 <p>
 <span>Nombre: ${character.name} </span> <br />
 <span>Birthyear: ${character.birth_year} </span> <br />
 <span>Gender: ${character.gender} </span> <br />
 <span>Eyes: ${character.eye_color} </span> <br />
 <span>Hair: ${character.hair_color} </span> <br />
 <span>Height: ${character.height} </span> <br />
 </p>
 `
}

function search_character (character_name){
    let longitud = character_name.length;

    if(character_name === ""){
        return alert("Favor de escribir el nombre de un personaje")
    }
    
    else{
    for (let i = 0; i < characters.length; i++) {
        
        if (characters[i].name.substring(0,longitud).toLowerCase() === character_name.toLowerCase()) 
        return characters[i]
        }
        
    }
}

// boton.addEventListener("submit", function(){
//     search_character_button()
//  })