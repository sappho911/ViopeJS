function checkAge() {
    var age = document.getElementById('age').value;

    console.log("Input age: " + age)

    if (age >= 18) {
        console.log("The user is an adult.")
    } else if (age < 18 && age > 0) {
        console.log("The user is not yet an adult.")
    } else {
        console.log("Invalid input!")
    }
}