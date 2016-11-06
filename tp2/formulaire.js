function validation() {
    
    if(document.getElementById("Nom").value.length>=5) {
         document.getElementById("result").innerHTML="bienvenue "+document.getElementById("Nom").value;
    } else{
        document.getElementById("error").innerHTML="La saisie du nom est obligatoire";
    }
}