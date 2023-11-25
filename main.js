f


function showMore() {
    var additionalContent = document.getElementById("additional-content");
    var btnShowMore = document.getElementById("btn");
    if (additionalContent.style.display === "none") {
      additionalContent.style.display = "block";
      btnShowMore.style.display = "none";
    } else {
      additionalContent.style.display = "none";
    }
  }

  function redirectToBookingPage() {
    window.location.href = "booking.html";
  }
  
  function redirectToHomePage() {
    window.location.href = "homepage.html";
  }
  
  var d = document.getElementById("datetime");

  function handleSearch(){
    var d = document.getElementById("datetime").value;
    console.log(d);
  }

  function toggleInput() {
    var selectElement = document.getElementById("areaSelect");
    var inputElement = document.getElementById("otherAreaInput");

    if (selectElement.value === "K4") {
      inputElement.style.display = "block";
    } else {
      inputElement.style.display = "none";
    }
  }
