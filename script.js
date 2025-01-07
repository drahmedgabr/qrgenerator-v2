const qrInput = document.getElementById("qrInput");
const canvas = document.getElementById("canvas");

function generateCode() {
    const qrText = qrInput.value;
    if(qrText == ""){
        alert("Please enter your text");
    } else {
        var qr = new QRious({
            element: canvas,
            value: qrText,
          });
    }
}