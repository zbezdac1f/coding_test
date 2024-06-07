/* 문자열 반복해서 출력하기
문자열 str과 정수 n이 주어집니다.
str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const [str, n] = line.split(' ');
    console.log(str.repeat(parseInt(n)));
    rl.close();

});