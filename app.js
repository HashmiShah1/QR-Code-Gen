let imgBox = document.querySelector('.imgBox');
let qrImg = document.querySelector("#qrImg");
let qrText = document.querySelector("#qrText");

async function generateQR() {
    if(qrText.value.length > 0){
        qrImg.src = await "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("showImg");
    }else{
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 500);
    }
}