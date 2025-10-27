function solution(a, b) {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let d = b;
    
    for(let i = 0; i < a-1; i++) {
        d += daysInMonth[i];
    }
    
    return days[(((d-1) % 7) + 5) % 7];
}