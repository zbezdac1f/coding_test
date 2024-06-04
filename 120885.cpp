/** 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때
두 이진수의 합을 return하도록 solution 함수를 완성해주세요. */



#include <string>
#include <vector>
#include <bitset>
using namespace std;

string solution(string bin1, string bin2) {
    // 더하기 위해서 10진수로 변환
    int decimal1 = stoi(bin1, nullptr, 2);
    int decimal2 = stoi(bin2, nullptr, 2);

    // 두 10진수를 더하기
    int sum = decimal1 + decimal2;

    // 더한 결과를 이진수로 변환하여 반환
    return bitset<32>(sum).to_string().substr(bitset<32>(sum).to_string().find('1')); // 가장 왼쪽에 있는 1부터 끝까지의 문자열 반환
}