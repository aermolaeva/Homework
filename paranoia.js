var arr = [
    {
        userName: 'Test',
        lastName: 'Test',
        email: 'test.test@gmail.com',
    },
    {
        userName: 'Dmitro',
        lastName: 'Porohov',
        email: 'dmitro.porohov@yahoo.com',
    },
    {
        userName: 'Andrii',
        lastName: '',
        email: 'andrii@mail.ru',
    },
];

var regex = /^[\d\w.]+@(gmail|yahoo)\.com$/;
var validEmails = [];

for (var i = 0; i < arr.length; i++) {
    if (regex.test(arr[i].email)) {
        validEmails.push(arr[i]);
    }
}

console.log('Valid emails', validEmails);