const qrInput = document.getElementById("qrInput");
const canvas = document.getElementById("canvas");
const qrParagraph = document.getElementById("qrParagraph");
const canvasDiv = document.getElementById("canvasDiv");

function generateCode() {
    const qrText = qrInput.value;
    if(qrText === ""){
        alert("Please enter your text");
    } else {

        var qr = new QRious({
            element: canvas,
            value: qrText,
            foreground: "#850685",
            size: 200,
        });

        qrParagraph.innerText = qrText;
        qrInput.value = "";
        canvasDiv.style.display = "block";
    }
}