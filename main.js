// این قسمت با دستود مپ تونستیم با گرفتن اسم ماشین هامون با ان کلیک کردن تعریف کرده بودیم بهشون قیمت بدیم و اوارو به نمایش بزاریم 
// قسمت قیمت گزاری روی ماشین ها
const costr = new Map([
    ["Benz-s500", 10000000],
    ["BMW-x3", 15000000],
    ["Hyundai-Santafe", 10000000],
    ["Kia-Sportage", 10000000],
    ["MVM-Arizo5", 8000000],
    ["Toyota-Lancruser", 15000000],
    ["Peugeot-207", 5000000],
    ["Peugeot-Pars", 4500000],
])

let selectd;
let selectdcar;
let rent =new Array();
// تعریف کردن تابع 
function selectCar(name, ele) {
    for(let index=0 ; index<rent.length;index++){
        if(rent[index]==name){
            alert("warneing");
            return;
        }
    }

    // alert(name + " : " + costr.get(name)); //جهت نمایش دستور
    selectd = name;
    selectdcar = ele.parentElement;
    const selectdList = document.getElementsByClassName("car-itm-selected");
    for (let index = 0; index < selectdList.length; index++) {
        selectdList[index].classList.remove("car-itm-selected");
    }
    ele.parentElement.classList.add("car-itm-selected");
    // document.getElementById("information-section").style.display="block";
    document.getElementById("price-section").style.display = "block";
    document.getElementById("section-alert").style.display = "none";

}

function calCul() {
    const prices = costr.get(selectd);
    const days = document.getElementById("days").value;
    if (days == "" || days <= 0 || days > 365) {
        alert("روز وارد شده اشتباه میباشد");
        return;
    }
    const price = document.getElementById("price");
    price.value = prices * days;
    document.getElementById("information-section").style.display = "block";
}

const send = document.getElementById("send");
send.onclick = function () {
    const fname = document.getElementById("fname").value;
    const lastname = document.getElementById("lastname").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    if (fname == "" || lastname == "" || phone == "" || location == "") {
        alert("اطلاعات را صحیح وارد کنید");
        return;
    } else {
        document.getElementById("price-section").style.display = "none";
        document.getElementById("information-section").style.display = "none";
        document.getElementById("section-alert").style.display = "block";
        selectdcar.classList.add("car-itm-disable");
        rent.push(selectd);

    }

}