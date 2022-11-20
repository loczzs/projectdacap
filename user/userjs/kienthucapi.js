function rpa1(){
    document.getElementById("re1").style.display = "block"
    document.getElementById("a1").innerHTML = `<div  style="cursor: pointer;" onclick="rpa1z()" class="repfoot">
    <span>Hỗ trợ</span>
    <i class="fa-solid fa-chevron-down"></i>
   </div>`
  }
  function rpa1z(){
    document.getElementById("re1").style.display = "none"
    document.getElementById("a1").innerHTML =` <div  style="cursor: pointer;" onclick="rpa1()" class="repfoot">
    <span>Hỗ trợ</span>
    <i class="fa-solid fa-chevron-right"></i>
   </div>`
  }
  function rpa2(){
    document.getElementById("re2").style.display = "block"
    document.getElementById("a2").innerHTML = `<div  style="cursor: pointer;" onclick="rpa2z()" class="repfoot">
    <span>Cộng đồng</span>
    <i class="fa-solid fa-chevron-down"></i>
   </div>`
  }
  function rpa2z(){
    document.getElementById("re2").style.display = "none"
    document.getElementById("a2").innerHTML =` <div  style="cursor: pointer;" onclick="rpa2()" class="repfoot">
    <span>Cộng đồng</span>
    <i class="fa-solid fa-chevron-right"></i>
   </div>`
  }
  
  function rpa3(){
    document.getElementById("re3").style.display = "block"
    document.getElementById("a3").innerHTML = `<div  style="cursor: pointer;" onclick="rpa3z()" class="repfoot">
    <span>liên hệ</span>
    <i class="fa-solid fa-chevron-down"></i>
   </div>`
  }
  function rpa3z(){
    document.getElementById("re3").style.display = "none"
    document.getElementById("a3").innerHTML =` <div  style="cursor: pointer;" onclick="rpa3()" class="repfoot">
    <span>liên hệ</span>
    <i class="fa-solid fa-chevron-right"></i>
   </div>`
  }
  function openbox(){
    document.getElementById("ham-none").style.display = "block"
    document.getElementById("opid").innerHTML = `<i onclick="closebox()" class="fa-solid fa-x"></i>`
  }
  function closebox(){
    document.getElementById("ham-none").style.display = "none"
    document.getElementById("opid").innerHTML = ` <i onclick="openbox()" class="fa-solid fa-bars"></i>`}
  