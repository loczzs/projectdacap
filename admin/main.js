
main()
function main() {
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
      const totalCheck = ctys.reduce((total,cty)=>{
        return total + Number(cty.check)
      },0)
      document.getElementById("totalCheck").innerHTML = totalCheck
      
      display(ctys);
    }).catch(function (error) {
        console.log(error);
      });;
  }
  function display(ctys) {
    let html = "";
    for (var i = 0; i < ctys.length; i++) {
     const cty = ctys[i];
      html += `<tr>
      <td>${i + 1}</td>
      <td>${cty.name}</td>
      <td>${cty.address}</td>
      
      <td>${cty.type}</td>
      
      <td>${cty.check}</td>

      <td>
          <button class = "btn btn-primary" data-toggle="modal" data-target="#myModal"
          data-type = "update"
          data-id = "${cty.id}"
          >
          Cập nhật</button>
          <button class = "btn btn-danger"
          data-type = "delete"
          data-id = "${cty.id}"
          >
          Xóa
          </button>
      </td>
  </tr>`;
    }
    document.getElementById("tblDanhSachSP").innerHTML = html;
  }
  document
  .getElementById("btnThemNguoiDung")
  .addEventListener("click", showAddModal);
function showAddModal() {
//   document.getElementById("TaiKhoan").disabled = false;
  // thay đổi text của modeal heading
//   document.querySelector(".modal-title").innerHTML = "thêm sản phẩm";
  document.querySelector(
    ".modal-footer"
  ).innerHTML = `<button class = "btn btn-success " data-type = "add" >thêm</button>
      <button class = "btn btn-secondary"
       data-toggle="modal" 
       data-target="#myModal"
       >
        hủy
         </button>`;
}
document.querySelector(".modal-footer").addEventListener("click", handleSubmit);
function handleSubmit(evt) {
  const type = evt.target.getAttribute("data-type");
  switch (type) {
    case "add":
      addCty();
      break;
    case "update":
      updateCty();
    default:
      break;
  }
}
function updateCty(){
    const id = document.getElementById("ctyid").value
    const names = document.getElementById("Tencty").value
    const address = document.getElementById("Diachicty").value
    const type = document.getElementById("loaicty").value
    const check = document.getElementById("ctycheck").value
    const info = document.getElementById("ctyinfo").value 

    const cty = new Ctys (id,names,address,type,check,info)
    apiUpdatecty(cty).then(function(){
        main()
        resetform()
    }).catch(function (error) {
        console.log(error);
      });
}

  function addCty(){
    const names = document.getElementById("Tencty").value
    const address = document.getElementById("Diachicty").value
    const type = document.getElementById("loaicty").value
    const info = names +" "+ address
    
    const cty = new Ctys (null,names,address,type,0,info)

    apiAddcty(cty).then(function(){
        main()
    }).catch(function (error) {
        console.log(error);
      });

resetform()
}
function resetform(){
  const names = document.getElementById("Tencty").value =""
    const address = document.getElementById("Diachicty").value = ""
    const type = document.getElementById("loaicty").value =""
    $("#myModal").modal("hide")
}

document
  .getElementById("tblDanhSachSP")
  .addEventListener("click", handleaction);
function handleaction(evt) {
  const type = evt.target.getAttribute("data-type");
  const id = evt.target.getAttribute("data-id");
  switch (type) {
    case "delete":
      deleteCty(id);
      break;
    case "update":
      showAddModalup(id);
    default:
      break;
  }
}
function showAddModalup(ctyId){
    document.querySelector(
        ".modal-footer"
      ).innerHTML = `<button class = "btn btn-success " data-type = "update" >cập nhật</button>
          <button class = "btn btn-secondary"
           data-dismiss="modal" 
           
           >
            hủy
             </button>`;
     apiGetCtydetail(ctyId).then(function(result){
        const cty = result.data
        console.log(cty.id)
         document.getElementById("Tencty").value = cty.name
         document.getElementById("Diachicty").value = cty.address
        document.getElementById("loaicty").value = cty.type
        document.getElementById("ctyid").value = cty.id
        document.getElementById("ctycheck").value = cty.check
        document.getElementById("ctyinfo").value = cty.info
        
    }).catch(function (error) {
        console.log(error);
      });   
    
}
function deleteCty(ctyId){
    apideleteCty(ctyId).then(function(){
        main()
    }).catch(function (error) {
        console.log(error);
      });

}
function closeModal(){
  document.getElementById("myModalzz").style.display = "none"
  // document.getElementById("container").style.display = "none"
}
function openmodal(){
  document.getElementById("myModalzz").style.display = "block"
}
init()
function init(){
  apiGetrequest().then(function(result){
    const reQuests =result.data
    document.getElementById("xctext").innerHTML = reQuests.length
    for (var i = 0; i < reQuests.length; i++) {
      var reQe = reQuests[i];
      reQuests[i] = new Ctys2(
       reQe.id,
       reQe.name,
       reQe.address,
       reQe.type,
       reQe.info,
       reQe.desc,
       reQe.email,
       reQe.bonus
      );
    }
    console.log(reQuests)
    displayz(reQuests)

}).catch(function (error) {
    console.log(error);
  });

}
function displayz(reQuests){
  let html = "";
    for (var i = 0; i < reQuests.length; i++) {
     const reQue = reQuests[i];
      html += `<tr>
      <td>${i + 1}</td>
      <td>${reQue.name}</td>
      <td>${reQue.address}</td>
      
      <td>${reQue.bonus}</td>
      
      <td>${reQue.desc}</td>
      <td>${reQue.email}</td>

      <td>
          <button class = "btn btn-primary" 
          data-type = "accept"
          data-id = "${reQue.id}"
          >
          Duyệt</button>
          <button class = "btn btn-danger"
          data-type = "delete"
          data-id = "${reQue.id}"
          >
          Xóa
          </button>
      </td>
  </tr>`;
    }
    document.getElementById("tblDanhSachSPzz").innerHTML = html;
  }
  document
  .getElementById("tblDanhSachSPzz")
  .addEventListener("click", handleactionz);
function handleactionz(evt) {
  const type = evt.target.getAttribute("data-type");
  const id = evt.target.getAttribute("data-id");
  switch (type) {
    case "delete":
      deleteRequest(id);
      break;
    case "accept":
      acceptRequest(id);
    default:
      break;
  }
}
function deleteRequest(reQueId){
  apideleteReque(reQueId).then(function(){
    init()
}).catch(function (error) {
    console.log(error);
  });
}
function acceptRequest(reQueId){
  apiGetRequestdetail(reQueId).then(function(result){
    const ctyz = result.data
    const cty = new Ctys (null,ctyz.name,ctyz.address,ctyz.type,0,ctyz.info)
    apiAddcty(cty).then(function(){
      main()
      deleteRequest(reQueId)

  }).catch(function (error) {
      console.log(error);
    });
    // console.log(cty)
}).catch(function (error) {
    console.log(error);
  });
}
//,hcm ,hồ chí minh ,ho chi minh
// ,ha noi , hà nội ,HN

