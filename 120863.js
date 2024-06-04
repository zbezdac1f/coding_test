/*
한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 
다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 
덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 
동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 
같은 식이라면 가장 짧은 수식을 return 합니다.
*/

function solution(polynomial) {
    // +로 나누어 각항을 분리함
    const arr = polynomial.split(' + ');
    
    let sum = 0; // 상수합을 저장
    let kyesuSum = 0; //계수 합을 저장
    
    // 각 항을 순회한다. 상수랑 계수 분리
    arr.forEach(term => {
        if (term.includes('x')) {
            // x가 포함된다면
            if (term === 'x') {
                kyesuSum += 1; // x는 1x와 동일
            } else {
                kyesuSum += parseInt(term.replace('x', '')); // 계수를 추출해 더함
            }
        } else {
            // 상수항의 경우
            sum += parseInt(term); // 상수를 더함
        }
    });
    
    // 결과 문자열을 만들음
    let result = [];
    if (kyesuSum !== 0) {
        if (kyesuSum === 1) {
            result.push('x'); // 1x는 x로 표현
        } else {
            result.push(kyesuSum + 'x'); // 계수가 1이 아닌 경우
        }
    }
    if (sum !== 0) {
        result.push(sum.toString()); // 상수항 추가
    }
    
    // 결과를 문자열로 반환합니다.
    return result.length > 0 ? result.join(' + ') : '0'; // 결과 문자열 반환, 없으면 '0'
}

// 테스트 케이스
console.log(solution("5x + 7 + x")); // "6x + 7"
console.log(solution("3x + 2x + 10x")); 
console.log(solution("4x + 5 + 2x + 3")); 
console.log(solution("5"));
