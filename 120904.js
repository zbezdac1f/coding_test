/** 
숫자 찾기
정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면
num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
*/


function solution(num, k) {
    const numString = num.toString();
    const kString = k.toString();
    const idx = numString.indexOf(kString);
    return idx !== -1 ? idx + 1: - 1 ; 
    let answer = 0;
    return answer;
}
;
console.log(solution(777731,6));
console.log(solution(123456,3));