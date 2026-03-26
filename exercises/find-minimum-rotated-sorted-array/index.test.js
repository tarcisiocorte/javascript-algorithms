const findMin = require('./index');

describe('153. Find Minimum in Rotated Sorted Array', () => {
    
    test('deve encontrar o mínimo em um array rotacionado 3 vezes', () => {
        expect(findMin([3, 4, 5, 1, 2])).toBe(1);
    });

    test('deve encontrar o mínimo em um array rotacionado 4 vezes', () => {
        expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
    });

    test('deve funcionar quando o array não está rotacionado (ou n vezes)', () => {
        expect(findMin([11, 13, 15, 17])).toBe(11);
    });

    test('deve funcionar com apenas dois elementos', () => {
        expect(findMin([2, 1])).toBe(1);
        expect(findMin([1, 2])).toBe(1);
    });

    test('deve funcionar com apenas um elemento', () => {
        expect(findMin([10])).toBe(10);
    });

    test('deve encontrar o mínimo em arrays grandes e negativos', () => {
        const arr = [10, 20, 30, -10, -5, 0];
        expect(findMin(arr)).toBe(-10);
    });
});