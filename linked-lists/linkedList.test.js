const LinkedList = require('./linkedList');

describe('LinkedList', () => {
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
