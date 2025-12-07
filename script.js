// Close Signup div
var closebtn = document.getElementById("close")
var closediv = document.querySelector(".offer")

closebtn.addEventListener("click", function () {
    closediv.style.display = "none"
})

// Search Product

var search = document.getElementById("search")
var productcontainer = document.querySelector(".collection_container_product")
var h1list = productcontainer.querySelectorAll("div")
search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()
    for (i = 0; i < h1list.length; i++) {
        if (h1list[i].textContent.toUpperCase().indexOf(enteredvalue) < 0) {
            //h1list[i].style.visibility = "hidden"
            h1list[i].classList.add("hidden"); 
        }
        else {
           // h1list[i].style.visibility = "visible"
            h1list[i].classList.remove("hidden"); 
        }
    }
})

// Filter products

// Get all checkboxes and all products
var checkboxes = document.querySelectorAll(".checkbox");
var products = document.querySelectorAll(".products");

// Function to get checked values by name
function getCheckedValues(name) {
    var checked = [];
    var inputs = document.querySelectorAll("input[name='" + name + "']:checked");
    for (var i = 0; i < inputs.length; i++) {
        checked.push(inputs[i].value.toLowerCase()); // lowercase for matching
    }
    return checked;
}

// Add event listener for every checkbox
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", function () {
        var occasions = getCheckedValues("occasion");
        var colors = getCheckedValues("color");
        var arrivals = getCheckedValues("arrival");

        // Loop through all products
        for (var j = 0; j < products.length; j++) {
            var product = products[j];

            // Get product info from data attributes
            var occasion = product.dataset.occasion;
            var color = product.dataset.color;
            var arrival = product.dataset.arrival;

            // Check if product matches selected filters
            var matchOccasion = occasions.length === 0 || occasions.indexOf(occasion) !== -1;
            var matchColor = colors.length === 0 || colors.indexOf(color) !== -1;
            var matchArrival = arrivals.length === 0 || arrivals.indexOf(arrival) !== -1;

            // Show or hide product
            if (matchOccasion && matchColor && matchArrival) {
                product.classList.remove("hidden"); // show
            } else {
                product.classList.add("hidden"); // hide
            }
        }
    });
}

