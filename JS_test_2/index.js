document.getElementById("btn").addEventListener("click", function() {
    let fahrenheitTemp = document.getElementById("temperature").value;
    fahrenheitTemp = parseInt(fahrenheitTemp);
    let result = (fahrenheitTemp - 32) * 5/9
    document.getElementById('result').textContent = (result).toFixed(2)
})

