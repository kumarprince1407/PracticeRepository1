"use strict;"
console.log("PROJECT 1");
/*
Flex box, grid, media query, add event listeners, array methods, try to use destructuring
 nd  rest parameters wherever you can. Add a sticky header or footer if you can
 Forms as well
*/

//Name(text), Gender(radio), DOE(dropdown), Section(Checkbox), Addn info(text)


//To ensure the JS code runs after the document is loaded, we wrap it in a 'DOMContentLoaded' event listener
document.addEventListener("DOMContentLoaded", function (){

//taking a reference for form and the submit button
const form = document.getElementById("form");
const submitButton = document.getElementById("submit");

//Adding event listeners to the form submission

form.addEventListener("submit", function(event){
    event.preventDefault();

    //Getting form values
    const name = document.getElementById("textarea1").value;
    const gender = document.querySelector('input[name="forGender"]:checked').value;
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;


    //Getting the checked sections
    const sectionCheckboxes = document.querySelectorAll('input[name="section"]:checked');
    const sections = [...sectionCheckboxes].map((checkbox)=> checkbox.value);

    const additionalInfo = document.getElementById("textarea2").value;

    //Object to store the entered data
    const studentData = {
        Name: name,
        Gender: gender,
        DateOfEnrollment: `${day}/${month}/${year}`,
        Section: sections,
        AdditionalInfo: additionalInfo,
    };

    console.log("Student Data: ", studentData);

    return false; //To prevent the form from refreshing the page
})
});