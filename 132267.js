/*
> 콜라 빈 병 2개를 가져다주면 콜라 1병을 주는 마트가 있다. 빈 병 20개를 가져다주면 몇 병을 받을 수 있는가?
> 
> 단, 보유 중인 빈 병이 2개 미만이면, 콜라를 받을 수 없다.
*/

function solution(a, b, n) {
    let totalC = 0;
    while (n <= a) {
        let newC = Math.floor(n / a) * b
        totalC += newC;
        n = (n % a) + newC
    }
    return totalC;
}
