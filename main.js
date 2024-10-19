// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn eiu đã dành thời gian để làm trò khùng điên với aiu nhoé :3 và aiu có những điều muốn gởi gắm đến tình iu của anh❤️. Chúc bé iu của aiu một ngày 20-10 vui vẻ, sai đẹp giếu, luôn luôn mỉm cười và may mắn thật nhiều. Last but not least, Chúc eiu thi tốt tất cả môn thi GDQP và trên trường chính đạt kết quả siêu cao luôn nhéeee. anh rất yêu em và nhớ em nhiều nên về mau nhé💕."

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})