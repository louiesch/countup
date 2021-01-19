$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    const countTo = parseInt($("#countTo").val());
    const countBy = parseInt($("#countBy").val());

    if (countTo || countBy === " ") {
      alert("Enter a number, ya goof!")
    } else {
      const numberArray = []
      for (let i = countBy; i <= countTo; i += countBy) {
        numberArray.push(i);
        $("#output").text(numberArray);
      }
    }
    console.log(numberArray)
  });
});