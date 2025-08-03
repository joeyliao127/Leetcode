/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/**
 * 1. 先比較 list1 和 list2 誰比較小
 * 2. 小的放在 next node，開始執行 while loop
 * 3. list1 = list1.next
 * 4. next node 在和 list2 or list1 比，
 * 插入後替換 next，原本的 next 用 next node 儲存
 * [1, 2, 4], [1, 3, 4] => [1, 1, 2, 3, 4, 4]
 */

var mergeTwoLists = function (list1, list2) {
    let head = new ListNode(-1);
    let curr = head;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    if (list1 !== null) {
        curr.next = list1;
    } else {
        curr.next = list2;
    }

    // head 為 null
    return head.next;
};
