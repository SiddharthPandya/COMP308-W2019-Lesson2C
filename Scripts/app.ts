//"use strict";
// self-executing anonymous function
// IIFE -- Immediately Invoked Function Expression
(function () {
    
    function Start() {
        let student: objects.Student;
        student = new objects.Student(20, "Harjit", "S300915041");
        student.saysHello();
        student.studies();
        //console.log(`App Started...${myFunctionalVariable}`);
    }

    window.addEventListener("load", Start);
})();



/*const person = new Person(30, "Sid");
person.saysHello();*/

