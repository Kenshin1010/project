function showDiv(btnId,divClass) {
    // Lấy tham chiếu đến nút đóng và phần tử div cần ẩn
    var closeBtn = document.getElementById(btnId);
    var divToShow = document.querySelector(divClass);

    // Thêm sự kiện click vào nút đóng
    closeBtn.addEventListener('click', function() {
        // Ẩn đi phần tử div
        divToShow.style.display = 'block';
    });
};