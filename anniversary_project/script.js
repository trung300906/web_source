const button1 = document.querySelector('.button1');
const login_page = document.querySelector('.login-container')
const backgroundAnimations = document.querySelectorAll('.box1, .box2, .box3, .box4, .box5, .box6, .box7');
button1.addEventListener('click', () => {
    console.log('Nút đã được click!');
    button1.classList.add('active');
    setTimeout(() => {
        button1.style.display = 'none';
        backgroundAnimations.forEach((animation) => {
            animation.style.display = 'block';
        });
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

// login information
const login_information = [
    {username:'admin', password:'admin'},
    {username:'levienbang', password:'18012006'},
    {username:'phamvuhoangbinh', password:'29102006'},
    {username:'nguyentridung', password:'14052006'},
    {username:'phamtiendung', password:'16032006'},
    {username:'vodinhduong', password:'10072006'},
    {username:'nguyenhuutandat', password:'01022006'},
    {username:'trannhathuonggiang', password:'12072006'},
    {username:'truongquochai', password:'02062006'},
    {username:'nguyenquochi', password:'18072006'},
    {username:'nguyenthikimhieu', password:'12062006'},
    {username:'nguyenthiminhhue', password:'08092006'},
    {username:'nguyengiahuy', password:'16022006'},
    {username:'luuhoangquockhanh', password:'03092006'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'},
    {username:'admin', password:'admin'}
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
        login_page.style.transition = 'all 1s ease';
        login_page.classList.add('disappear');
        login_page.addEventListener('transitionend', () => {
            login_page.style.display = 'none'; // Ẩn khung đăng nhập sau khi hiệu ứng hoàn tất
        }, { once: true });
    } else {
        console.log('Tên đăng nhập hoặc mật khẩu không hợp lệ');
        errorMessage.style.display = 'block'; // Hiển thị thông báo lỗi
    }
});