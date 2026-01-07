/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function (root) {
    let sum = [];

    function getSum(node) {
        if (!node) return 0;

        let cur = node.val + getSum(node.left) + getSum(node.right);
        sum.push(cur);
        return cur;
    }
        const totalSum = getSum(root);
    

    let maxProd = 0n;
    const MOD = BigInt(1e9 + 7);
    const total = BigInt(totalSum);

    for (let s of sum) {
        let currentSubSum = BigInt(s);
        let product = currentSubSum * (total - currentSubSum);

        if (product > maxProd) {
            maxProd = product;
        }
    }

    return Number(maxProd % MOD);
};
