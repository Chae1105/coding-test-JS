function solution(polynomial) {
    let arr = polynomial.split(' + ');
    
    let x = 0;
    let num = 0;
    let answer = [];
    
    for(let el of arr) {
        if(el.includes('x')) {
            x += Number(el.replace(/x/, '')) || 1;
        } else {
            num += Number(el);
        }
    }
    
    /*
    if(x !== 0 && num !== 0) {
        if(x === 1) return `x + ${num}`;
        else return `${x}x + ${num}`;
    } else if(x === 0) {
        return `${num}`;
    } else {
        if(x === 1) return `x`;
        else return `${x}x`;
    }
    */
    
    if(x) answer.push(`${x === 1 ? '' : `${x}`}x`);
    if(num) answer.push(num);
    
    return answer.join(" + ");
    
}