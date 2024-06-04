/*정수 배열 `arr`와 자연수 `k`가 주어집니다.

만약 `k`가 홀수라면 `arr`의 모든 원소에 `k`를 곱하고, `k`가 짝수라면 `arr`의 모든 원소에 `k`를 더합니다.

이러한 변환을 마친 후의 `arr`를 return 하는 solution 함수를 완성해 주세요.*/

#include <string>
#include <vector>
#include <iostream>

using namespace std;

vector<int> solution(vector<int> arr, int k) {
    vector<int> answer(arr.size());
for(int i=0; i<arr.size(); i++){
    if(k%2==0){
        answer[i] = arr[i] + k;
    }
    else{
        answer[i] = arr[i] * k;
    }
} 

    
    return answer;
}

