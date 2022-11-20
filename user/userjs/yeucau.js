function addCty() {
  const names = document.getElementById("tencty").value;
  const address = document.getElementById("diachicty").value;
  const type = document.getElementById("chontinh").value;
  const info = names + " " + address;
  const desc = document.getElementById("nameTextarea").value;
  const email = document.getElementById("emailyc").value;
  const bonus = document.getElementById("bonuscty").value;
  var isValid = validation();

  if (!isValid) {
    alert("vui lòng nhập vào các giá trị");
    return;
  }

  const cty = new Ctys2(null, names, address, type, info, desc, email, bonus);
  console.log(cty);
  apiAddproduct(cty);
  document.getElementById(
    "changebutton"
  ).innerHTML = `đang gửi <img src="../img/Shape.png" alt=""></img>`;
  function sayHello() {
    document.getElementById("box-mo").style.display = "block";
    document.getElementById("lopmo").style.display = "block";
    resetform();
  }
  setTimeout(sayHello, 1000);
}
function closeBox() {
  document.getElementById("changebutton").innerHTML = "Yêu cầu thêm";
  document.getElementById("box-mo").style.display = "none";
  document.getElementById("lopmo").style.display = "none";
}

function isRequired(value) {
  if (!value) {
    return false;
  }
  return true;
}
function validation() {
  const names = document.getElementById("tencty").value;
  const address = document.getElementById("diachicty").value;
  const type = document.getElementById("chontinh").value;
  const info = names + " " + address;
  const desc = document.getElementById("nameTextarea").value;
  const email = document.getElementById("emailyc").value;

  var isValid = true;
  if (!isRequired(names)) {
    isValid = false;
    document.getElementById("sptencty").style.display = "block";
    document.getElementById("sptencty").innerHTML = "tên công ty không được để trống";
  } else {
    document.getElementById("sptencty").innerHTML = "";
  }
  if (!isRequired(address)) {
    isValid = false;
    document.getElementById("spdiachicty").style.display = "block";
    document.getElementById("spdiachicty").innerHTML = "địa chỉ không được để trống";
  } else {
    document.getElementById("spdiachicty").innerHTML = "";
  }
  if (type === "tất cả" ) {
    isValid = false;
    document.getElementById("spchontinh").style.display = "block";
    document.getElementById("spchontinh").innerHTML = "vui lòng chọn tỉnh thành";
  } else {
    document.getElementById("spchontinh").innerHTML = "";
  }
  if (!isRequired(desc)) {
    isValid = false;
    document.getElementById("spmota").style.display = "block";
    document.getElementById("spmota").innerHTML = "mô tả không được để trống";
  } else {
    document.getElementById("spmota").innerHTML = "";}
    var emailPattern = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");
  if (!isRequired(email)) {
    // kiểm tr nếu isREquired là false
    isValid = false;
    document.getElementById("spemail").style.display = "block";
    document.getElementById("spemail").innerHTML = "email không được để trống";
  } else if (!emailPattern.test(email)) {
    isValid = false;
    document.getElementById("spemail").style.display = "block";
    document.getElementById("spemail").innerHTML = "email không đúng kí tự";
  } else {
    document.getElementById("spemail").innerHTML = "";
  }

  return isValid;
}
function resetform() {
  document.getElementById("tencty").value = "";
  document.getElementById("diachicty").value = "";
  document.getElementById("chontinh").value = "tất cả";
  document.getElementById("nameTextarea").value = "";
  document.getElementById("emailyc").value = "";
  document.getElementById("bonuscty").value = "";
}
function rpa1() {
  document.getElementById("re1").style.display = "block";
  document.getElementById(
    "a1"
  ).innerHTML = `<div  style="cursor: pointer;" onclick="rpa1z()" class="repfoot">
  <span>Hỗ trợ</span>
  <i class="fa-solid fa-chevron-down"></i>
 </div>`;
}
function rpa1z() {
  document.getElementById("re1").style.display = "none";
  document.getElementById(
    "a1"
  ).innerHTML = ` <div  style="cursor: pointer;" onclick="rpa1()" class="repfoot">
  <span>Hỗ trợ</span>
  <i class="fa-solid fa-chevron-right"></i>
 </div>`;
}
function rpa2() {
  document.getElementById("re2").style.display = "block";
  document.getElementById(
    "a2"
  ).innerHTML = `<div  style="cursor: pointer;" onclick="rpa2z()" class="repfoot">
  <span>Cộng đồng</span>
  <i class="fa-solid fa-chevron-down"></i>
 </div>`;
}
function rpa2z() {
  document.getElementById("re2").style.display = "none";
  document.getElementById(
    "a2"
  ).innerHTML = ` <div  style="cursor: pointer;" onclick="rpa2()" class="repfoot">
  <span>Cộng đồng</span>
  <i class="fa-solid fa-chevron-right"></i>
 </div>`;
}

function rpa3() {
  document.getElementById("re3").style.display = "block";
  document.getElementById(
    "a3"
  ).innerHTML = `<div  style="cursor: pointer;" onclick="rpa3z()" class="repfoot">
  <span>liên hệ</span>
  <i class="fa-solid fa-chevron-down"></i>
 </div>`;
}
function rpa3z() {
  document.getElementById("re3").style.display = "none";
  document.getElementById(
    "a3"
  ).innerHTML = ` <div  style="cursor: pointer;" onclick="rpa3()" class="repfoot">
  <span>liên hệ</span>
  <i class="fa-solid fa-chevron-right"></i>
 </div>`;
}
function openbox() {
  document.getElementById("ham-none").style.display = "block";
  document.getElementById(
    "opid"
  ).innerHTML = `<i onclick="closebox()" class="fa-solid fa-x"></i>`;
}
function closebox() {
  document.getElementById("ham-none").style.display = "none";
  document.getElementById(
    "opid"
  ).innerHTML = ` <i onclick="openbox()" class="fa-solid fa-bars"></i>`;
}
