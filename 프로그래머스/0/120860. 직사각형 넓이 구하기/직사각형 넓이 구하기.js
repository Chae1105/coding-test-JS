function solution(dots) {
    const n1 = Math.sqrt(Math.pow(dots[0][0]-dots[1][0], 2) + Math.pow(dots[0][1] - dots[1][1], 2));
    const n2 = Math.sqrt(Math.pow(dots[0][0]-dots[2][0], 2) + Math.pow(dots[0][1] - dots[2][1], 2));
    const n3 = Math.sqrt(Math.pow(dots[0][0]-dots[3][0], 2) + Math.pow(dots[0][1] - dots[3][1], 2));
    
    return n1*n2*n3/Math.max(n1, n2, n3);
}