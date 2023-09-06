//

// DEFINE GRADE CONSTANTS

// IB GRADES

function calculateGPA() {
  // Get the input values
  let ib1 = parseFloat(document.querySelector("#ib1").value);
  let ib2 = parseFloat(document.querySelector("#ib2").value);
  let ib3 = parseFloat(document.querySelector("#ib3").value);
  let ib4 = parseFloat(document.querySelector("#ib4").value);
  let ib5 = parseFloat(document.querySelector("#ib5").value);
  let ib6 = parseFloat(document.querySelector("#ib6").value);
  function fetchGPA(ib1, ib2, ib3, ib4, ib5, ib6) {
    const SEVEN = 4.0;
    const SIX = 3.7;
    const FIVE = 3.3;
    const FOUR = 3.0;
    const THREE = 2.7;
    const TWO = 2.3;
    const ONE = 2.0;
    NULL = "NULL";
    // Perform GPA calculation
    const sumGrade = ib1 + ib2 + ib3 + ib4 + ib5 + ib6;
    console.log(sumGrade);
    const averageGrade = sumGrade / 6;
    console.log(averageGrade);
    const roundedFinalGrade = Math.round(averageGrade);

    // Determine GPA based on the rounded final grade
    let gpa;
    if (roundedFinalGrade >= 6.5) {
      gpa = SEVEN;
    } else if (roundedFinalGrade >= 5.5) {
      gpa = SIX;
    } else if (roundedFinalGrade >= 4.5) {
      gpa = FIVE;
    } else if (roundedFinalGrade >= 3.5) {
      gpa = FOUR;
    } else if (roundedFinalGrade >= 2.5) {
      gpa = THREE;
    } else if (roundedFinalGrade >= 1.5) {
      gpa = TWO;
    } else if (roundedFinalGrade >= 1) {
      gpa = ONE;
    } else {
      gpa = NULL;
    }
    console.log(gpa);
    console.log(roundedFinalGrade);
    document.getElementById("results").innerHTML =
      `${sumGrade}/42: Your GPA is` + " " + gpa;
  }
  fetchGPA(ib1, ib2, ib3, ib4, ib5, ib6);
}
