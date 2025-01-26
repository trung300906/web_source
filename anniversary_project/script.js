const button1 = document.querySelector('.button1');
const login_page = document.querySelector('.login-container')
const background_animation = document.querySelectorAll('.box');
button1.addEventListener('click', () => {
    console.log('Nút đã được click!');
    button1.classList.add('active');
    setTimeout(() => {
        button1.style.display = 'none';
        background_animation.forEach((box, index) => {
            box.style.display = 'flex';
            box.style.left = `${(index * 24) - 17.888888888888 }%`;
            
        });
        //background_animation.forEach(box => {
            //box.style.display = 'flex';
        //})
        login_page.style.display= 'inline-block';
        login_page.offsetHeight;
        login_page.style.transition = 'opacity 1s ease-in-out';
        login_page.style.opacity = '1'; // Start the animation
    }, 1000);
}); 

const login_button = document.querySelector('.login_button');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

// login animation
const login_information = [
    {username:'admin', password:'admin'},
];

//login process
login_button.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    const user = login_information.find(user => user.username === username && user.password === password);
    // Ví dụ logic kiểm tra
    if (user) {
        console.log('Đăng nhập thành công');
        errorMessage.style.display = 'none'; // Ẩn thông báo lỗi
        // Chuyển trang hoặc thực hiện hành động khác
    } else {
        console.log('Tên đăng nhập hoặc mật khẩu không hợp lệ');
        login_page.classList.add('active');
        errorMessage.style.display = 'block'; // Hiển thị thông báo lỗi
    }
});