let btn = document.getElementById("btn-generate");
btn.addEventListener("click", generateQR);


function generateQR(){
    let inputText = document.getElementById("inputText");
    let qrImg = document.getElementById("qrImg");
    if (inputText.value.length <= 0)
    {
        inputText.classList.add("animation-shake");
        setTimeout(()=> {
            inputText.classList.remove("animation-shake");
        }, 500);
        
    } else {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
        qrImg.classList.remove("hidden")
        qrImg.classList.add("show")

    }
    //console.log("generated QR")

}