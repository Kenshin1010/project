function handleCancelAddEmployee() {
    var preview = document.getElementById("previewImg");
    preview.src = '';
    preview.style.display = "none";
    var hidden = document.getElementById("wrapImgIcon");
    hidden.style.display = "block";

    document.getElementById("employeeCode").value = '';
    document.getElementById("employeeName").value = '';
    document.getElementById("phoneNumber").value = '';
    document.getElementById("salaryBranch").value = '';
    document.getElementById("workingBranch").value = '';
    document.getElementById("firstDay").value = '';
    document.getElementById("employeeDepartment").value = '';
    document.getElementById("employeePosition").value = '';
    document.getElementById("accountNumber").value = '';
    document.getElementById("employeeNote").value = '';
    document.getElementById("idCard").value = '';
    document.getElementById("dateOfBirth").value = '';
    document.getElementById("employeeGender").value = '';

    //  Kiểm tra trạng thái của nhân viên và kiểm tra radio tương ứng
    document.getElementById("employeeMale").checked = false;
    document.getElementById("employeeFemale").checked = false;

    document.getElementById("employeeAddress").value = '';
    document.getElementById("employeeArea").value = '';
    document.getElementById("employeeEmail").value = '';
    document.getElementById("communeWard").value = '';
    document.getElementById("employeeFacebook").value = '';
}

// Thêm sự kiện click cho nút cancelAddEmployee để ẩn phần tử addEmployee và .hide-show-information
var cancelButton = document.getElementById("cancelAddEmployee");
cancelButton.addEventListener("click", function () {
  handleCancelAddEmployee();
  var addEmployee = document.getElementById("addEmployee");
  // Đặt lại vị trí và ẩn phần tử addEmployee
  addEmployee.style.top = "60px";
  addEmployee.style.left = "0";
  addEmployee.style.right = "0";
  addEmployee.style.display = "none";

  var informationDiv = document.querySelector(".hide-show-information");
  // Ẩn phần tử .hide-show-information
  informationDiv.style.display = "none";
});
// console.log("employeeId ở thao tác hiện tại sau khi click button cancelAddEmployee là: ", employeeId);

// Thêm sự kiện click cho nút closeAddEmployee để ẩn phần tử addEmployee và .hide-show-information
var closeButton = document.getElementById("closeAddEmployee");
closeButton.addEventListener("click", function () {
  handleCancelAddEmployee();
  var addEmployee = document.getElementById("addEmployee");
  // Đặt lại vị trí và ẩn phần tử addEmployee
  addEmployee.style.top = "60px";
  addEmployee.style.left = "0";
  addEmployee.style.right = "0";
  addEmployee.style.display = "none";

  var informationDiv = document.querySelector(".hide-show-information");
  // Ẩn phần tử .hide-show-information
  informationDiv.style.display = "none";
});
// console.log("employeeId ở thao tác hiện tại sau khi click button closeAddEmployee là: ", employeeId);