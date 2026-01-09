const dfs = (node) => {
        if (!node) return [0, null];
        
        const [leftDepth, leftNode] = dfs(node.left);
        const [rightDepth, rightNode] = dfs(node.right);
        
        if (leftDepth > rightDepth) {
            // Left is deeper, deepest nodes are only on the left
            return [leftDepth + 1, leftNode];
        } else if (rightDepth > leftDepth) {
            // Right is deeper, deepest nodes are only on the right
            return [rightDepth + 1, rightNode];
        } else {
            // Depths are equal, this node is the common ancestor 
            // of the deepest nodes in its subtree
            return [leftDepth + 1, node];
        }
    };
    
    return dfs(root)[1];