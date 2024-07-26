function calculateBMI() {
    // Prevent form submission
    event.preventDefault();

    // Get input values
    var age = parseInt(document.getElementById('age').value);
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var height = parseInt(document.getElementById('height').value);
    var weight = parseInt(document.getElementById('weight').value);

    // Calculate BMI
    // BMI Formula: weight (kg) / [height (m)]^2
    var heightInMeters = height / 100; // Convert height from cm to meters
    var bmi = weight / (heightInMeters * heightInMeters);

    // Determine BMI category
    var bmiCategory = interpretBMI(bmi, gender);

    // Display result
    var resultDiv = document.getElementById('result');
    var message = '';

  
    if (!isNaN(bmi) && gender) {
        message = '<h4>Your BMI Result:</h4>';
        message += '<p>' + bmi.toFixed(2) + '</p>';
        message += '<p>' + bmiCategory + '</p>';
    } else {
        message = '<p>Please enter valid inputs.</p>';
    }


    resultDiv.innerHTML = message;
}

function interpretBMI(bmi, gender) {
    if (gender === 'male') {
        if (bmi < 18.5) {
            return 'You are underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'You have a normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'You are overweight';
        } else {
            return 'You are obese';
        }
    } else {
        if (bmi < 18.5) {
            return 'You are underweight';
        } else if (bmi >= 18.5 && bmi < 23.9) {
            return 'You have a normal weight';
        } else if (bmi >= 24 && bmi < 28.9) {
            return 'You are overweight';
        } else {
            return 'You are obese';
        }
    }
}
function resetForm() {
    document.getElementById('bmiForm').reset(); // Reset the form fields
    document.getElementById('result').innerHTML = ''; // Clear the result display
}