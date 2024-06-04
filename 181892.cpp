/* N번째 원소부터
정수 리스트 num_list와 정수 n이 주어질 때,
n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.
*/

#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> num_list, int n) {
    // n-1번째 인덱스부터 끝까지의 원소를 추출하여 새로운 벡터 answer에 저장함
    vector<int> answer(num_list.begin() + (n - 1), num_list.end());
    //인덱스는 0부터 시작함으로 N-1 형태를 취해줌
    return answer;  // 추출한 벡터를 반환
}


