document.getElementById("check-btn").addEventListener("click", function() {
            const input = document.getElementById("text-input").value;
            const resultElement = document.getElementById("result");

            if (input.trim() === "") {
                alert("Please input a value");
                return;
            }

            const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
            const reversedInput = cleanInput.split('').reverse().join('');

            if (cleanInput === reversedInput) {
                resultElement.textContent = `${input} is a palindrome`;
            } else {
                resultElement.textContent = `${input} is not a palindrome`;
            }
        });
