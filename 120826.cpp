/*문자열 my_string과 문자 letter이 매개변수로 주어집니다. 

my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.*/



//범위포문
#include <string> 
#include <iostream> // 표준 입출력
#include <cstdlib> // 표준 라이브러리 함수

using namespace std;
// 문자열에서 특정 문자 제거함수
std::string solution(std::string my_string, std::string letter) {
    std::string result = ""; //초기화해주고

    // my_string의 문자열을 처음부터 끝까지 훑음
    for (char c : my_string) {
        // 현재 문자가 제거할 문자가 아니면
        if (c != letter[0]) {
            result += c; // 결과 문자열에 현재 문자를 추가
        }
    }

    return result; // 최종 결과 반환
}


//기존포문
#include <string>
#include <iostream>
#include <cstdlib>

using namespace std;

std::string solution(std::string my_string, std::string letter){
std:: string result = "";

for ( size_t i = 0 ; i <my_string.length(); i++){
char c = my_string_[i];
if(c! = my_string[0])
result +=c;}
}
}
return result;
}