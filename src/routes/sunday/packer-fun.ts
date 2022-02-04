interface Node {
  width: number
  height: number
  x: number
  y: number
  down?: Node
  right?: Node
}

const createNode = (
  width: number,
  height: number,
  x = 0,
  y = 0,
): Iterable<Node> => {
  const n: Iterable<Node> = {
    [Symbol.iterator]: function* () {
      yield this

      if (this.right) {
        yield* this.right
      }

      if (this.down) {
        yield* this.down
      }
    },
    height,
    width,
    x: 0,
    y: 0,
  }

  return n
}

export function pack (maxWidth: number, maxHeight: number) {
  const rootNode: Node = {
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  }

  const packNode = (node: Node, width: number, height: number) => {
    if (rootNode.width > maxWidth || rootNode.height > maxHeight) {
      return rootNode
    }

    if (node.down && node.right) {
      return (
        packNode(node.right, width, height) ||
        packNode(node.down, width, height)
      )
    }

    if (width <= node.width && height <= node.height) {
      node.down = {
        height: node.height - height,
        width: node.width,
        x: node.x,
        y: node.y + height,
      }
      node.right = {
        height: height,
        width: node.width - width,
        x: node.x + width,
        y: node.y,
      }
    }

    return growToFit(width, height)
  }

  const growRight = (width: number, height: number) => {
    const lastRootNode = { ...rootNode }
    rootNode.x = 0
    rootNode.y = 0
    rootNode.width += width
    rootNode.down = lastRootNode
    rootNode.right = {
      height: rootNode.height,
      width,
      x: rootNode.width,
      y: 0,
    }
  }

  const growDown = (width: number, height: number) => {
    const lastRootNode = { ...rootNode }
    rootNode.x = 0
    rootNode.y = 0
    rootNode.height += height
    rootNode.down = {
      height,
      width: rootNode.width,
      x: 0,
      y: rootNode.height,
    }
    rootNode.right = lastRootNode
  }

  const growToFit = (width: number, height: number) => {
    const shouldGrowRight = rootNode.height >= rootNode.width + width
    const shouldGrowDown = rootNode.width >= rootNode.height + height

    if (shouldGrowRight) {
      growRight(width, height)
      return packNode(rootNode, width, height)
    }

    if (shouldGrowDown) {
      growDown(width, height)
      return packNode(rootNode, width, height)
    }

    growRight(width, height)
    return packNode(rootNode, width, height)
  }

  packNode(rootNode, 500, 200)
  packNode(rootNode, 250, 200)
  packNode(rootNode, 250, 200)

  for (let i = 0; i < 20; i++) {
    packNode(rootNode, 50, 50)
  }

  return rootNode
}
