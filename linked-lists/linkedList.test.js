const LinkedList = require('./linkedList');

describe('LinkedList', () => {

    describe('add()', () => {
        test('add() should append nodes and increase size', () => {
            const list = new LinkedList();
            expect(list.size).toBe(0);

            list.add(1);
            expect(list.size).toBe(1);
            expect(list.head.value).toBe(1);

            list.add(2);
            expect(list.size).toBe(2);
            expect(list.head.next.value).toBe(2);

            list.add(3);
            expect(list.size).toBe(3);
            expect(list.head.next.next.value).toBe(3);
        });
    });

    describe('addFirst()', () => {
        test('addFirst() should prepend a node to the beginning', () => {
            const list = new LinkedList();
            list.addFirst(10);
            expect(list.size).toBe(1);
            expect(list.head.value).toBe(10);

            list.addFirst(20);
            expect(list.size).toBe(2);
            expect(list.head.value).toBe(20);
            expect(list.head.next.value).toBe(10);
        });
    });

    describe('get()', () => {
        test('should throw an error if index is out of bounds', () => {
            const list = new LinkedList();
            expect(() => list.get(0)).toThrow('Index out of bounds');

            list.add(1);
            expect(() => list.get(1)).toThrow('Index out of bounds');

            expect(() => list.get(-1)).toThrow('Index out of bounds');
        });

        test('should return a correct value for a positive index', () => {
            const list = new LinkedList();
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.get(0)).toBe(1);
            expect(list.get(1)).toBe(2);
            expect(list.get(2)).toBe(3);
        });
    });

    describe('removeAt()', () => {
        test('should remove a node at a specific index', () => {
            const list = new LinkedList();
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.add(5);
            list.add(6);
            list.removeAt(3);
            expect(list.size).toBe(5);
            expect(list.get(0)).toBe(1);
            expect(list.get(1)).toBe(2);
            expect(list.get(2)).toBe(3);
            expect(list.get(3)).toBe(5);
            expect(list.get(4)).toBe(6);
        });

        test('should throw an error if index is out of bounds', () => {
            const list = new LinkedList();
            expect(() => list.removeAt(0)).toThrow('Index out of bounds');

            list.add(1);
            expect(() => list.removeAt(1)).toThrow('Index out of bounds');

            expect(() => list.removeAt(-1)).toThrow('Index out of bounds');
        });
    });
});