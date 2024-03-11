document.addEventListener('DOMContentLoaded', function() {
    var infoLink = document.querySelector('.active-info-employee');
    var salaryLink = document.querySelector('.active-salary-setting');
    var infoDiv = document.querySelector('.tab-content');
    var salaryDiv = document.querySelector('.set-salary');

    // Mặc định hiển thị tab thông tin
    infoDiv.style.display = 'block';
    salaryDiv.style.display = 'none';

    // Xử lý sự kiện click cho tab thông tin
    infoLink.addEventListener('click', function(event) {
        event.preventDefault();
        infoDiv.style.display = 'block';
        salaryDiv.style.display = 'none';
        infoLink.classList.add('active');
        salaryLink.classList.add('remove-active');
    });

    // Xử lý sự kiện click cho tab thiết lập lương
    salaryLink.addEventListener('click', function(event) {
        event.preventDefault();
        infoDiv.style.display = 'none';
        salaryDiv.style.display = 'block';
        salaryLink.classList.add('active');
        infoLink.classList.add('remove-active');
    });
});