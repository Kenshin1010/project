document.addEventListener('DOMContentLoaded', function() {
    // Lấy tham chiếu đến các phần tử cần thiết
    var selectNumberOfRecords = document.getElementById('numberOfRecords');
    var tableBody = document.getElementById('employeeListId');
    
    // Bắt sự kiện khi giá trị của select thay đổi
    selectNumberOfRecords.addEventListener('change', function() {
        // Lấy giá trị đã chọn
        var selectedValue = parseInt(this.value);
        
        // Lấy danh sách các hàng trong tbody
        var rows = tableBody.querySelectorAll('.table-row-data');
        
        // Ẩn tất cả các hàng trước khi hiển thị số hàng mới
        rows.forEach(function(row) {
            row.style.display = 'none';
        });
        
        // Hiển thị số hàng tương ứng
        for (var i = 0; i < selectedValue; i++) {
            rows[i].style.display = 'table-row';
        }
    });
});