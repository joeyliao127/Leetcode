function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * 解題思路
 * 截斷 -> 反轉 -> 合併
 * 截斷：何時截斷？當 fast.next === null
 * 反轉：當截斷發生後反轉
 * 合併：反轉完成後合併
 */

/**
 * function cut
 * function reverse (head)
 * function merge (reversed head1, reversed head2)
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let back = slow.next;
    slow.next = null;

    let reverseBack = reverse(back);

    return merge(head, reverseBack);
};

/**
 *
 * @param {ListNode} head
 */
function reverse(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    return prev;
}

/**
 *
 * @param {ListNode} head
 * @param {ListNode} back
 */
function merge(head, back) {
    let dummyHead = new ListNode();
    let current = dummyHead;

    while (head !== null && back !== null) {
        current.next = head;
        head = head.next;
        current = current.next;

        current.next = back;
        back = back.next;
        current = current.next;
    }

    if (head !== null) {
        current.next = head;
    }

    return dummyHead.next;
}

const nodeList = createNodeList(4);

// printNodeValue(nodeList);
const reoder = reorderList(nodeList);
printNodeValue(reoder);

function createNodeList(count) {
    const dummyHead = new ListNode();
    let current = dummyHead;

    for (let i = 1; i <= count; i++) {
        current.val = i;

        if (i === count) {
            current.next = null;
            break;
        } else {
            current.next = new ListNode();
            current = current.next;
        }
    }

    current.next = null;
    return dummyHead;
}

/**
 *
 * @param {ListNode} head
 */
function printNodeValue(head) {
    let current = head;

    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}
