/**제일 작은 수 제거하기
 * 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수,solution을 완성해주세요.
 * 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
 *  예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다. */

function solution(arr) {
    //배열이 비어있으면 [-1] 반환
    if (arr.length === 0) {
        return [-1];
    }
    //배열의 모든 원소에서 가장 작은 값 찾기
    const min = Math.min(...arr);
    //배열의 가장 작은 인덱스를 찾아라.
    const idx = arr.indexOf(min);
    //splice 사용법 (인덱스,제거할 수)
    arr.splice(idx, 1);
    if (arr.length === 0) {
        return [-1]
    }
    return arr;
}