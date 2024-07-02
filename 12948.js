/**프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때,
전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, 
solution을 완성해주세요. */

function solution(phone_number) {
    const arr = phone_number.split('')
    for (i = 0; i < arr.length - 4; i++) {
        arr[i] = '*';
    }
    return arr.join('')
}

//배열로 처리
// 스플릿으로 번호를 쪼개주고 끝에서 4개니까 길이-4까지 배열의 원소마다 * 처리 한후 조인으로 반환