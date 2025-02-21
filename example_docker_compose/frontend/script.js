document.getElementById("fetch-button").addEventListener("click", (event) => {
    console.log("Button wurde geklickt");  // Logs the click
    fetch("http://localhost:5000/api/value") // Anfrage an das Flask-Backend
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerText = data.message;
        })
        .catch(error => {
            console.error("Fehler beim Abrufen der API:", error);
            document.getElementById("result").innerText = "Fehler beim Abrufen der API.";
        });
});
