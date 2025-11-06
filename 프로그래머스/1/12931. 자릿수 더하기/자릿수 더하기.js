function solution(n)
{
    return n.toString().split("").reduce((sum, n) => sum += +n, 0);
}