//랜덤으로 문제를 추출하기

#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
// 랜덤 시드 설정
srand(time(0));
int n;
cout << "출력할 개수를 입력하세요: ";
cin >> n;

for (int i = 0; i < n; ++i) {
    // 랜덤하게 페이지와 번호 선택
    int page = rand() % 20 + 1; // 1부터 20까지의 페이지
    int number = rand() % 5 + 1; // 1부터 5까지의 번호

    cout << "[" << page << "," << number << "]" << endl;
}

return 0;
