/**자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
 * 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다. */

function solution(n) {
    //먼저 문자를 숫자열로
    const str = n.toString();
    //배열을 공백으로 쪼개주고
    const arr = str.split('')
    //배열을 거꾸로 해준다음
    const reverseArr = arr.reverse();
    //거꾸로해준배열을 숫자로 취해준다
    const result = reverseArr.map(Number);
    //그 후 반환
    return result;

}

/**function solution(n){
 * return n.toString().split('').reverse().map(Number)
} */