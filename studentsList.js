// Write yout Javascript code in this files
var request = new XMLHttpRequest();
var table = document.getElementById('students');


request.open('GET', 'students.json', true);

request.onreadystatechange = function() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            var students = JSON.parse(request.responseText);
            console.log(students);

            students.forEach(function(student) {
                let tr = document.createElement('tr');
                tr.innerHTML = `<td>${student.firstname}</td>
                                <td>${student.lastname}</td>
                                <td>${student.city}</td>
                                <td>${student['postal-code']}</td>`;


                table.appendChild(tr);
                console.log(student.firstname);
            });


        } else {
            dump("Erreur pendant le chargement de la page.\n");
        }
    }
};
request.send();
