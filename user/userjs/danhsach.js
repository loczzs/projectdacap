var Carts = []
main();

function main() {
  Carts = JSON.parse(localStorage.getItem("Carts")) || [];
  apiGetCty().then(function (result) {
    console.log(result.data);
    const ctys = result.data;
    console.log(ctys[0].name);
    for (var i = 0; i < ctys.length; i++) {
      var cty = ctys[i];
      ctys[i] = new Ctys(
        cty.id,
        cty.name,
        cty.address,
        cty.type,
        cty.check,
        cty.info
      );
    }
    console.log(ctys[0].id);
    display(ctys);
  });
}

function display(ctys) {
  let html = "";
  for (var i = 0; i < ctys.length; i++) {
    var cty = ctys[i];
    html += `  <div class="flexcss2">
    <div class="tex-blog">
      <h6>${cty.name}</h6>
      <span>${cty.address}</span>
    </div>
    <div class="icon-blog">
      <div class="check">
        <button id="${cty.id}" onclick="upCheck(${cty.id})" class="fa-solid fa-check buttoncss"></button>
        <span>${cty.check}</span>
      </div>
      <div class="iconhov">
        <span>số người kiểm chứng</span>
        
      </div>
    </div>
  </div>`;
  }
  document.getElementById("blog-home").innerHTML = html;
 localCheck(ctys)
  
}

function localCheck(ctys){
  if (Carts.length > 0) {
    var nums2 = [...new Set(Carts)];
    console.log(nums2);
    for (var i = 0; i < ctys.length ; i++) {
      var cty = ctys[i];
      // console.log(typeof cty.id)
      for (var j = 0; j < nums2.length; j++) {
        // console.log(typeof nums2[0])
        if (Number(cty.id) === Number(nums2[j])) {
          document.getElementById(`${nums2[j]}`).style.color = "blue";
          document.getElementById(`${nums2[j]}`).disabled = true;
        }
      }
    }
  }
}


function upCheck(ctyId) {
  apiGetCtydetail(ctyId).then(function (result) {
    // document.getElementById("abcd").disabled =true
    var ctyz = result.data;
    var cty = new Ctys(
      ctyz.id,
      ctyz.name,
      ctyz.address,
      ctyz.type,
      Number(ctyz.check)+1,
      ctyz.info
    );
    Carts.push(ctyId)
    localStorage.setItem("Carts", JSON.stringify(Carts));
    console.log(Carts)

    apiUpdatecty(cty).then(function () {
      main();
    });
  });
}




function lOc1() {
  document.getElementById("soszz2").style.display = "none"
  document.getElementById("closechange").innerHTML =`  <div id="soszz"><button class="btn" onclick="loc()"  id="4zs">Lọc theo tỉnh <i class="fa-solid fa-angle-down"></i> </button>`
  document.getElementById("loclist").style.display = "none";
  document.getElementById("4zs").innerHTML = "Tất cả";
  apiGetCty().then(function (result) {
    console.log(result.data);
    const ctys = result.data;
    console.log(ctys[0].name);
    for (var i = 0; i < ctys.length; i++) {
      var cty = ctys[i];
      ctys[i] = new Ctys(
        cty.id,
        cty.name,
        cty.address,
        cty.type,
        cty.check,
        cty.info
      );
    }
    console.log(ctys[0].id);
    display(ctys);
  });
}
function lOc2(){
  document.getElementById("soszz2").style.display = "none"
  document.getElementById("closechange").innerHTML =`  <div id="soszz"><button class="btn" onclick="loc()"  id="4zs">Lọc theo tỉnh <i class="fa-solid fa-angle-down"></i> </button>`
  document.getElementById("loclist").style.display = "none";
  document.getElementById("4zs").innerHTML = "Tp.HCM";
  main2zs()
}

function main2zs() {
  
  apiGetCtyz("TP.HCM").then(function (result) {
    console.log(result.data);
    const ctys = result.data;
    console.log(ctys[0].name);
    for (var i = 0; i < ctys.length; i++) {
      var cty = ctys[i];
      ctys[i] = new Ctys(
        cty.id,
        cty.name,
        cty.address,
        cty.type,
        cty.check,
        cty.info
      );
    }
    console.log(ctys[0].id);
    display2(ctys);
  });
}
function display2(ctys) {
  // const hcmCtys = []
  var idMay = document.getElementById("2zs").value;
  console.log(idMay);
  let html = "";
  for (var i = 0; i < ctys.length; i++) {
    var cty = ctys[i];
    // hcmCtys.push(cty)
   
      html += `  <div class="flexcss2">
      <div class="tex-blog">
        <h6>${cty.name}</h6>
        <span>${cty.address}</span>
      </div>
      <div class="icon-blog">
        <div class="check">
          <button id="${cty.id}" onclick="upCheck2(${cty.id})" class="fa-solid fa-check buttoncss"></button>
          <span>${cty.check}</span>
        </div>
        <div class="iconhov">
          <span>số người kiểm chứng</span>
          
        </div>
      </div>
    </div>`;
    
  }
  document.getElementById("blog-home").innerHTML = html;
  localCheck(ctys)
  
 
  
}
function upCheck2(ctyId) {
  apiGetCtydetail(ctyId).then(function (result) {
    // document.getElementById("abcd").disabled =true
    var ctyz = result.data;
    var cty = new Ctys(
      ctyz.id,
      ctyz.name,
      ctyz.address,
      ctyz.type,
      Number(ctyz.check)+1,
      ctyz.info
    );
    Carts.push(ctyId)
    localStorage.setItem("Carts", JSON.stringify(Carts));

    apiUpdatecty(cty).then(function () {
      main2zs();
    });
  });
}
function lOc3(){
  document.getElementById("soszz2").style.display = "none";
  document.getElementById(
    "closechange"
  ).innerHTML = `  <div id="soszz"><button class="btn" onclick="loc()"  id="4zs">Lọc theo tỉnh <i class="fa-solid fa-angle-down"></i> </button>`;
  document.getElementById("4zs").innerHTML = "HN";
  document.getElementById("loclist").style.display = "none";
  main3zs()
}
function main3zs() {
 
  apiGetCtyz("HN").then(function (result) {
    console.log(result.data);
    const ctys = result.data;
    console.log(ctys[0].name);
    for (var i = 0; i < ctys.length; i++) {
      var cty = ctys[i];
      ctys[i] = new Ctys(
        cty.id,
        cty.name,
        cty.address,
        cty.type,
        cty.check,
        cty.info
      );
    }
    console.log(ctys[0].id);
    display3(ctys);
  });
}
function display3(ctys) {
  var idMay = document.getElementById("3zs").value;

  console.log(idMay);
  let html = "";
  for (var i = 0; i < ctys.length; i++) {
    var cty = ctys[i];
   
      html += `  <div class="flexcss2">
      <div class="tex-blog">
        <h6>${cty.name}</h6>
        <span>${cty.address}</span>
      </div>
      <div class="icon-blog">
        <div class="check">
          <button id="${cty.id}" onclick="upCheck3(${cty.id})" class="fa-solid fa-check buttoncss"></button>
          <span>${cty.check}</span>
        </div>
        <div class="iconhov">
          <span>số người kiểm chứng</span>
          
        </div>
      </div>
    </div>`;
    
  }
  document.getElementById("blog-home").innerHTML = html;
  localCheck(ctys)
 

}
function upCheck3(ctyId) {
  apiGetCtydetail(ctyId).then(function (result) {
    // document.getElementById("abcd").disabled =true
    var ctyz = result.data;
    var cty = new Ctys(
      ctyz.id,
      ctyz.name,
      ctyz.address,
      ctyz.type,
      Number(ctyz.check)+1,
      ctyz.info
    );
    Carts.push(ctyId)
    localStorage.setItem("Carts", JSON.stringify(Carts));

    apiUpdatecty(cty).then(function () {
      main3zs();
    });
  });
}
function loc() {
  document.getElementById("loclist").style.display = "block";
  document.getElementById("soszz").style.display = "none";
  document.getElementById(
    "closechange"
  ).innerHTML = `<div id="soszz2"><button class="btn" onclick="loczz()"  id="40">Lọc theo tỉnh <i class="fa-solid fa-angle-down"></i> </button>
    

  </div>`;
}
function loczz() {
  document.getElementById("loclist").style.display = "none";
  document.getElementById("soszz2").style.display = "none";
  document.getElementById(
    "closechange"
  ).innerHTML = `  <div id="soszz"><button class="btn" onclick="loc()"  id="4">Lọc theo tỉnh <i class="fa-solid fa-angle-down"></i> </button>
    
    
  </div>`;
}













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
