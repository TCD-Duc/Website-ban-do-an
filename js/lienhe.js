document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    var notification = document.getElementById('order-success');
    notification.classList.add('show');
    notification.style.display = 'block';

    // Xóa nội dung các ô nhập liệu và textarea
    var inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(function(input) {
        input.value = '';
    });

    setTimeout(function() {
        notification.classList.remove('show');
        notification.style.display = 'none';
    }, 3000); // Ẩn thông báo sau 3 giây
});