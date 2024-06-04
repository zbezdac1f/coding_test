/*
문자열 붙여서 출력하기
두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다.
입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요. */



const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    const [str1,str2] = line.split(' ');
    console.log(str1.concat(str2))
}).on('close', function () {
process.exit();
});