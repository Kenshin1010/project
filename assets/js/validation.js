// Hàm kiểm tra tính hợp lệ và trỏ chuột về trường không hợp lệ
function validateAndFocusInvalidField() {
    var isValid = true;

    // Validate employee name
    var nodeName = document.getElementById("employeeName");
    var employeeName = nodeName.value.trim(); // Loại bỏ khoảng trắng đầu và cuối chuỗi
    if (employeeName == null || employeeName === "") {
        isValid = false;
        // alert("Employee name cannot be empty");
        toastEdit({
            type:'error',
            message:'Không được để trống tên',
            duration:3000
          });
        nodeName.classList.add("invalid"); // Thêm lớp 'invalid' để đánh dấu trường không hợp lệ
        nodeName.focus(); // Focus trở lại trường nhập liệu
        return isValid;
    } else {
        nodeName.classList.remove("invalid"); // Xóa lớp 'invalid' nếu trường hợp lệ
    }

    // Validate phone number
    var nodePhone = document.getElementById("phoneNumber");
    var phoneNumber = nodePhone.value.trim(); // Loại bỏ khoảng trắng đầu và cuối chuỗi
    if (!validatePhoneNumber(phoneNumber)) {
        isValid = false;
        // alert("Invalid phone number");
        toastEdit({
            type:'error',
            message:'Số điện thoại chưa hợp lệ',
            duration:3000
          });
        nodePhone.classList.add("invalid"); // Thêm lớp 'invalid' để đánh dấu trường không hợp lệ
        nodePhone.focus(); // Focus trở lại trường nhập liệu
        return isValid;
    } else {
        nodePhone.classList.remove("invalid"); // Xóa lớp 'invalid' nếu trường hợp lệ
    }

    // Validate email
    var nodeEmployeeEmail = document.getElementById("employeeEmail");
    var employeeEmail = nodeEmployeeEmail.value.trim(); // Loại bỏ khoảng trắng đầu và cuối chuỗi
    if (!validateEmail(employeeEmail)) {
        isValid = false;
        // alert("Invalid email address");
        toastEdit({
            type:'error',
            message:'Địa chỉ email chưa hợp lệ',
            duration:3000
          });
        nodeEmployeeEmail.classList.add("invalid"); // Thêm lớp 'invalid' để đánh dấu trường không hợp lệ
        var hideShowInformation = document.getElementById("hideShowInformation");
        hideShowInformation.style.display = "block";
        nodeEmployeeEmail.focus(); // Focus trở lại trường nhập liệu
        return isValid;
    } else {
        nodeEmployeeEmail.classList.remove("invalid"); // Xóa lớp 'invalid' nếu trường hợp lệ
    }

    // Thêm các điều kiện kiểm tra khác ở đây nếu cần

    return isValid;
}

// Hàm kiểm tra tính hợp lệ cho số điện thoại
function validatePhoneNumber(phoneNumber) {
    var phonePattern = /^\d{10}$/; // Định dạng: 10 chữ số
    return phonePattern.test(phoneNumber);
}

// Hàm kiểm tra tính hợp lệ cho địa chỉ email khi người dùng nhập dữ liệu
function validateEmail(email) {
    // Nếu địa chỉ email không trống và không null
    if (email && email.trim() !== '') {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    // Trường hợp trống hoặc null, không thực hiện kiểm tra validation và trả về true
    return true;
}

// Hàm kiểm tra tính hợp lệ của thông tin nhân viên
function validateEmployeeInformation() {
    var isValid = true;

    // Thực hiện kiểm tra tính hợp lệ của các trường thông tin và đánh dấu trường không hợp lệ
    // Nếu có lỗi, hiển thị cảnh báo và focus trở lại trường không hợp lệ
    // Sau đó trả về false để ngăn việc thực hiện hành động tiếp theo

    return isValid;
}