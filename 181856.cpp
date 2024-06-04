/*이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.
- 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
- 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고
같다면 같습니다.

두 정수 배열 `arr1`과 `arr2`가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여
`arr2`가 크다면 -1, `arr1`이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요*/


/** 문제점 이었던것 : 배열의 길이를 비교 한 후 만약 같다면
합을 구하여 비교했어야 했다.
그러나 단순히 원소 합을 비교한 후 배열을 비교해버렸다.*/ 
//최종버전

#include <string>
#include <vector>
#include <cstdlib>
using namespace std;

int solution(vector<int> arr1, vector<int> arr2) {
    int answer = 0;
    int sum_arr1 = 0;
    int sum_arr2 = 0;
    
    // 배열의 길이 비교
    if (arr1.size() > arr2.size()) {
        answer = 1;
    } else if (arr1.size() < arr2.size()) {
        answer = -1;
    } else { // 배열의 길이가 같은 경우
        // 배열의 합 계산
        for(int num : arr1) {
            sum_arr1 += num;
        }
        for(int num : arr2) {
            sum_arr2 += num;
        }
        
        // 배열의 합 비교
        if (sum_arr1 > sum_arr2) {
            answer = 1;
        } else if (sum_arr1 < sum_arr2) {
            answer = -1;
        } else { // 배열의 합도 같은 경우
            answer = 0;
        }
    }
    
    return answer;
}

