function solution(order) {
    return order.reduce((pay, menu) => menu.includes('latte') ? pay += 5000 : pay += 4500, 0);
}