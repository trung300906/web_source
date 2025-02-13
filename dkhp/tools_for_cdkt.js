var mondangky =  `
    0101001387
    0101001389
`;
var malop = `
    010100138901
    010100138701
`;


var successLog = (message) => console.log('%c' + message, 'font-weight:bold; color:green;');
var errorLog = (message) => console.log('%c' + message, 'font-weight:bold; color:red;');

truymon(mondangky)

function truymon(mondangky){
    try {
        var listMonDangKy = mondangky.trim().split('\n').map((it) => it.trim())
        var allRows = [...document.querySelectorAll('form table tr')]
        var rowDangky = allRows.filter((it) => {
            
        })

    }
}