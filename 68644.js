/**
 * 두개 뽑아서 더하기
 * 정수 배열 numbers가 주어집니다. 
 * numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요. */

//재환버전
function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let sum = numbers[i] + numbers[j];
            if (!answer.includes(sum)) {
                answer.push(sum)
            }
        }
    }
    //const set = new Set()
    //const uniq = array => [...new Set(array)];
    answer.sort((a, b) => a - b)
    return answer
}


//내가 풀다가 못푼 버전
function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j])
        }
    }
    answer = Array.from(new Set(answer))
    answer.sort((a, b) => a - b)
    return answer
}

