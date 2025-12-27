window.onload = function() {
    var input = document.getElementById("inputBox");
    var container = document.getElementById("container");

    container.addEventListener("click", function(e) {
        // Ensure we only process actual button clicks
        if (e.target.type === "button") {
            buttonClick(e.target.id);
        }
    });

    function buttonClick(buttonId) {
        if (buttonId === "Button=") {
            calculate();
        } else if (buttonId === "ButtonC") {
            erase();
        } else {
            // Remove the prefix "Button" to get the value
            var val = buttonId.replace("Button", "");
            entries(val);
        }
    }

    function entries(s) {
        input.value += s;
    }

    function calculate() {
        try {
            if (input.value === "" || input.value === ".") {
                return;
            }
            // Using eval for the calculation as per original design
            input.value = eval(input.value);
        } catch (err) {
            input.value = "Error";
            setTimeout(erase, 1500); // Clear error after 1.5 seconds
        }
    }

    function erase() {
        input.value = "";
    }
};