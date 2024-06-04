/*문자열 my_string과 문자 letter이 매개변수로 주어집니다.
 my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요. */

#include <string>
#include <vector>
#include <iostream>

using namespace std;

int solution(vector<int> numbers, int k)
{
    int answer=0;
    answer=numbers[((k-1)*2+1)%numbers.size()-1];
    return answer;
}