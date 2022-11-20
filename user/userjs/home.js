var Carts = [];
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
  for (var i = ctys.length - 1; i > ctys.length - 7; i--) {
    var cty = ctys[i];
    html += `  <div class="flexcss2">
    <div class="tex-blog">
      <h6>${cty.name}</h6>
      <span>${cty.address}</span>
    </div>
    <div class="icon-blog">
      <div class="check">
        <button  id="${cty.id}" onclick="upCheck(${cty.id})" class="fa-solid fa-check buttoncss"></button>
        <span>${cty.check}</span>
      </div>
      <div class="iconhov">
        <span>số người kiểm chứng</span>
        
      </div>
    </div>
  </div>`;
  }
  document.getElementById("blog-home").innerHTML = html;

  localCheck(ctys);
}
function localCheck(ctys) {
  // console.log(ctys)
  if (Carts.length > 0) {
    var nums2 = [...new Set(Carts)];
    console.log(nums2);
    for (var i = ctys.length - 1; i > ctys.length - 7; i--) {
      var cty = ctys[i];
      // console.log(typeof cty.id)
      for (var j = 0; j < nums2.length; j++) {
        // console.log(typeof nums2[0])
        if (Number(cty.id) === nums2[j]) {
          document.getElementById(`${nums2[j]}`).style.color = "blue";
          document.getElementById(`${nums2[j]}`).disabled = true;
        }
      }
    }
  }
}
// document.getElementById(`${nums2[i]}`).style.color = "blue";
//           document.getElementById(`${nums2[i]}`).disabled = true;

function displayz(ctys) {
  console.log(ctys.length);
  if (ctys.length === 0) {
    document.getElementById("search-faill").style.display = "block";
    document.getElementById("searchlist").style.display = "none";
    document.getElementById("carousel-text").style.marginTop = "70px";
    document.getElementById("carousel-text").style.paddingTop = "0px";
    document.getElementById("new-knowlege").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("sos").style.height = "100%";
    document.getElementById("sos").style.backgroundImage = "none";
    document.getElementById("spsearch").style.display = "block";
    document.getElementById(
      "spsearch"
    ).innerHTML = ` Có <span style="font-weight: 600">${ctys.length}</span> kết quả trùng khớp với tìm
      kiếm của bạn</span`;
    return;
  }
  let html = "";
  for (var i = 0; i < ctys.length; i++) {
    const cty = ctys[i];
    console.log(ctys.length);
    html += `  <div class="flexcss2">
      <div class="tex-blog">
        <h6>${cty.name}</h6>
        <span>${cty.address}</span>
      </div>
      <div class="icon-blog">
        <div class="check">
          <button id="${cty.id}" onclick="upCheckz(${cty.id})" class="fa-solid fa-check buttoncss"></button>
          <span>${cty.check}</span>
        </div>
        <div class="iconhov">
          <span>số người kiểm chứng</span>
          
        </div>
      </div>
    </div>`;
  }
  document.getElementById("search-faill").style.display = "none";
  document.getElementById("carousel-text").style.marginTop = "70px";
  document.getElementById("carousel-text").style.paddingTop = "0px";
  document.getElementById("new-knowlege").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("sos").style.height = "100%";
  document.getElementById("sos").style.backgroundImage = "none";
  document.getElementById("spsearch").style.display = "block";
  document.getElementById(
    "spsearch"
  ).innerHTML = ` Có <span style="font-weight: 600">${ctys.length}</span> kết quả trùng khớp với tìm
      kiếm của bạn</span`;
  document.getElementById("searchlist").style.display = "block";

  document.getElementById("search-home").innerHTML = html;
  localCheck2(ctys)
  
}
function localCheck2(ctys){
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
function upCheckz(ctyId) {
  console.log(ctyId);
  apiGetCtydetail(ctyId).then(function (result) {
    var ctyz = result.data;
    var cty = new Ctys(
      ctyz.id,
      ctyz.name,
      ctyz.address,
      ctyz.type,
      Number(ctyz.check) + 1,
      ctyz.info
    );
    Carts.push(ctyId);
    localStorage.setItem("Carts", JSON.stringify(Carts));
    console.log(Carts);

    apiUpdatecty(cty).then(function () {
      mainz(ctyz.info);
    });
  });
}
function mainz(ctyName) {
  apiGetCty(ctyName).then(function (result) {
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
    displayz(ctys);
  });
}



document.getElementById("txtSearch").addEventListener("keypress", handleSearch);
function handleSearch(evt) {
  if (evt.key !== "Enter") return;
  var value = evt.target.value;

  // document.getElementById("sos").style.height= "100%"
  //   alert("sfniadiani")
  apiGetCty(value)
    .then(function (result) {
      const ctys = result.data;
      console.log(ctys);
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

      //   console.log();

      console.log(ctys);
      displayz(ctys);
    })
    .catch(function (error) {
      console.log(error);
    });
}
function upCheck(ctyId) {
  console.log(ctyId);
  apiGetCtydetail(ctyId).then(function (result) {
    var ctyz = result.data;
    var cty = new Ctys(
      ctyz.id,
      ctyz.name,
      ctyz.address,
      ctyz.type,
      Number(ctyz.check) + 1,
      ctyz.info
    );
    Carts.push(ctyId);
    localStorage.setItem("Carts", JSON.stringify(Carts));
    console.log(Carts);

    apiUpdatecty(cty).then(function () {
      main();
    });
  });
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
  document.getElementById("ibox").style.transition = "10s"
  document.getElementById("ham-none").style.display = "block";
  //  document.getElementById("ham-none").style.transition = "10s"
  document.getElementById(
    "opid"
  ).innerHTML = `<i id="ibox" onclick="closebox()" class="fa-solid fa-x"></i>`;
}
function closebox() {
  document.getElementById("ham-none").style.display = "none";
  document.getElementById(
    "opid"
  ).innerHTML = ` <i id="ibox"  onclick="openbox()" class="fa-solid fa-bars"></i>`;
}
