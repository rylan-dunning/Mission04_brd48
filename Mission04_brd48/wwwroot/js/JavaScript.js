$("#btnCalc").click(function () {

    const assignments = parseFloat($("#assignments").val());
    const quizzes = parseFloat($("#quizzes").val());
    const groupprojects = parseFloat($("#groupprojects").val());
    const intex = parseFloat($("#intex").val());
    const exams = parseFloat($("#exams").val());
    const extracredit = parseFloat($("#extracredit").val());

    const finalGrade = (assignments / 100) * 53.76 + (quizzes / 100) * 8.6 + (groupprojects / 100) * 5.38 + (intex / 100) * 10.75 + (exams / 100) * 21.51 + (extracredit / 100) * 0.81;
    alert("Your final grade in this class is: " + finalGrade);

})
