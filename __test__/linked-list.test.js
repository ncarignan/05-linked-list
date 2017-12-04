'use strict';

const LinkedList = require('../lib/linked-list');

describe('linked-list.js', () => {
  test('a list should have value, no next', () => {
    let result = new LinkedList(5);
    expect(result.value).toEqual(5);
    expect(result.next).toEqual(null);
  });

  test('insertion should properly modify the next property', () => {
    let result = new LinkedList(5);
    result.append(new LinkedList(4));
    result.append(new LinkedList(10));

    expect(result.value).toEqual(5);
    expect(result.next.value).toEqual(4);
    expect(result.next.next.value).toEqual(10);
    expect(result.next.next.next).toEqual(null);
  });
  test('insertion should throw an error if node is not linked list', () => {
    let result = new LinkedList(5);
    result.append(new LinkedList(4));
    result.append(new LinkedList(10));

    expect(() => {result.append('fourth');}).toThrow();
  });

  test('remove should update the next property and erase an element', () => {
    let first = new LinkedList(10);
    let second = new LinkedList(20);
    let third = new LinkedList(30);
    first.append(second).append(third);

    expect(first.value).toEqual(10);
    expect(first.next.value).toEqual(20);
    expect(first.next.next.value).toEqual(30);
    first.remove(third);
    expect(first.next.next).toEqual(null);
  });

  test('remove should throw an error if node is not linked list', () => {
    let first = new LinkedList(10);
    let second = new LinkedList(20);
    let third = new LinkedList(30);
    first.append(second).append(third);

    expect(() => {first.remove('fourth');}).toThrow();
  });

  test('find should locate a node and return it', () => {
    let first = new LinkedList(10);
    let second = new LinkedList(20);
    let third = new LinkedList(30);
    first.append(second).append(third);
    expect(second.find(third)).toEqual(third);

  });
  test('find should throw an error if node is not linked list', () => {
    let first = new LinkedList(10);
    let second = new LinkedList(20);
    let third = new LinkedList(30);
    first.append(second).append(third);
    expect(() => {first.find('fourth');}).toThrow();

  });
});
