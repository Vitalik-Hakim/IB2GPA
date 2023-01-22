//

// DEFINE GRADE CONSTANTS

// IB GRADES

function calculateGPA() {
  // Get the input values
  let ib1 = document.querySelector("#ib1").value;
  let ib2 = document.querySelector("#ib2").value;
  let ib3 = document.querySelector("#ib3").value;
  let ib4 = document.querySelector("#ib4").value;
  let ib5 = document.querySelector("#ib5").value;
  let ib6 = document.querySelector("#ib6").value;
  function fetchGPA(ib1, ib2, ib3, ib4, ib5, ib6) {
    const url = "https://ib2gpa.onrender.com/calculate-gpa";

    const params = {
      ib1: ib1,
      ib2: ib2,
      ib3: ib3,
      ib4: ib4,
      ib5: ib5,
      ib6: ib6,
    };

    const queryString = new URLSearchParams(params).toString();

    fetch(`${url}?${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("results").innerHTML =
          "Your GPA is" + " " + data["GPA"];
      })
      .catch((error) => {
        console.error(error);
      });
  }
  fetchGPA(ib1, ib2, ib3, ib4, ib5, ib6);
}
