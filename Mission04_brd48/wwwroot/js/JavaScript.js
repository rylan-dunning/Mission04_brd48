$("#btnCalc").click(function () {

    const assignments = parseFloat($("#assignments").val());
    const quizzes = parseFloat($("#quizzes").val());
    const groupprojects = parseFloat($("#groupprojects").val());
    const intex = parseFloat($("#intex").val());
    const exams = parseFloat($("#exams").val());
    const extracredit = parseFloat($("#extracredit").val());

    let gradeChar = "";

    const finalGrade = (assignments / 100) * 53.76 + (quizzes / 100) * 8.6 + (groupprojects / 100) * 5.38 + (intex / 100) * 10.75 + (exams / 100) * 21.51 + (extracredit / 100) * 0.81;

    if (finalGrade >= 94) {
        gradeChar = "A";
    } else if (finalGrade >= 90) {
        gradeChar = "A-";
    } else if (finalGrade >= 87) {
        gradeChar = "B+";
    } else if (finalGrade >= 84) {
        gradeChar = "B";
    } else if (finalGrade >= 80) {
        gradeChar = "B-";
    } else if (finalGrade >= 77) {
        gradeChar = "C+";
    } else if (finalGrade >= 74) {
        gradeChar = "C";
    } else if (finalGrade >= 70) {
        gradeChar = "C-";
    } else if (finalGrade >= 67) {
        gradeChar = "D+";
    } else if (finalGrade >= 64) {
        gradeChar = "D";
    } else if (finalGrade >= 60) {
        gradeChar = "D-";
    } else {
        gradeChar = "E";
    }

    alert("Your final grade is: " + finalGrade + "% (" + gradeChar + ")."); //shows up as an alert

});


