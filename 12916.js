/* 
//문자열 내 p와 y의 개수
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다. */



function solution(s) {
    s = s.toLowerCase(); //소문자와 대문자가 섞여있으니 모두 소문자로 만들어주고 
    pCount = 0;
    yCount = 0;

    for (let char of s) { //포문 돌려서 p와 y의 횟수를 셈
        if (char === 'p') {
            pCount++;
        }
        else if (char === 'y') {
            yCount++;
        }
    }

    return pCount === yCount; //같으면 true 다르면 false 반환
}