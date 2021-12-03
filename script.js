inputEl = document.getElementById("input")
resultEl = document.getElementById("result")
buttonEl = document.getElementById("button")
clearEl = document.getElementById("clear")

buttonEl.addEventListener("click", function () {
    fibonacciGenerator(inputEl.value)
})

clearEl.addEventListener("click", function () {
    resultEl.textContent = ""
    inputEl.value = ""
})

function fibonacciGenerator(n) {
    let result = []
    if (n == 1) {
        result = [0]
    } else if (n >= 2) {
        result = [0, 1]
        for (let i = 0; i < (n - 2); i++) {
            let fibNum = result.at(-1) + result.at(-2)
            result.push(fibNum)
        }
    }
    resultEl.textContent = result.join(", ")
}