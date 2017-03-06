// Write yout Javascript code in this files
var request = new XMLHttpRequest();

request.open('GET', 'students.json', true);
request.onreadystatechange = function() {
    if (request.readyState == 4) {
        if (request.status == 200){
            var students = JSON.parse(request.responseText);
        console.log(students);
    } else {
        dump("Erreur pendant le chargement de la page.\n");
    }
  }
};
request.send();
