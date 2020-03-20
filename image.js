
function click() {
      target = document.getElementById("btn");
      if (target.className == null || target.className=="") {
        target.className = "active";
      } else {
        target.className = "";
      }
    }

    console.log("hello");
