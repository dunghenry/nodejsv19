const money = 123456.789;
const vn = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
console.log(vn.format(money));

const us = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
console.log(us.format(money));
