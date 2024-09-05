function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n === b[n]]) {
            return a.localeCompare(b); //n번째 문자가 같으면 사전순으로 비교
        }
        else {
            return a[n].localeCompare(b[n]); //n번째 문자가 다르면 n번째 문자로 비교 
        }
    });
}