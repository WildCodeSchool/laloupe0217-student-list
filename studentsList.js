(function () {
    'use strict'
    let getStudent = new XMLHttpRequest();
    getStudent.open("GET", 'students.json', true);
    getStudent.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(getStudent.responseText);
            console.log(myArr);
        }
    };
    getStudent.send();
}) ();
