/*const { exportAllDeclaration } = require('@babel/types')
const { default: test } = require('node:test')
const { describe } = require('yargs')*/
const { default: test } = require('node:test')
const { describe } = require('yargs')
const LinkedList = require('./LinkedList')

describe('#insertAtHead', () => {
    test(`it adds the element to the beginning`, () => {
        const ll = new LinkedList()
        ll.insertAtHead(10)
        const oldHead = ll.head
        ll.insertAtHead(20)

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })
})

describe('#getByIndex', () => {
    describe('with index less than 0', () => {
        test('it returns null', () => {
            const ll = new LinkedList()
        })
    })
})