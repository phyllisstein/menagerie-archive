/**
 * TODO: Boxes that don't fit in the bin should be split into smaller boxes, or
 * cached and retried at each iteration.
 */
export class Packer {
  private box = new Node()

  constructor (private maxWidth: number, private maxHeight: number) {}

  private findFreeSpace (node: Node, width: number, height: number): Node {
    if (node.used) {
      return (
        this.findFreeSpace(node.right, width, height) ||
        this.findFreeSpace(node.down, width, height)
      )
    }

    if (width <= node.width && height <= node.height) {
      return node
    }
  }
}

export class Node {
  declare down?: Node
  declare right?: Node

  constructor (
    public width: number = 0,
    public height: number = 0,
    public x: number = 0,
    public y: number = 0,
  ) {}

  get empty (): boolean {
    return this.down === undefined && this.right === undefined
  }

  copy (): Node {
    const nextNode = new Node(this.x, this.y)

    nextNode.width = this.width
    nextNode.height = this.height
    nextNode.down = this.down?.copy()
    nextNode.right = this.right?.copy()

    return nextNode
  }

  packChild (node: Node): Node {
    if (this.empty && node.width <= this.width && node.height <= this.height) {
      return this
    }
  }

  fit (node: Node): Node | null {
    if (this.right?.fitChild(node)) {
      return this.right.split(node)
    }

    if (this.down?.fit(node)) {
      return this.down
    }

    return this.split(node.width, node.height)
  }

  private fitChild (node: Node): boolean {
    return node.width <= this.width && node.height <= this.height
  }

  growToFit (node: Node): Node {
    const canGrowDown = node.width <= this.width
    const canGrowRight = node.height <= this.height

    const shouldGrowRight =
      canGrowRight && this.height >= this.width + node.width
    const shouldGrowDown =
      canGrowDown && this.width >= this.height + node.height

    if (shouldGrowRight) {
      return this.growRight(width, height)
    }

    if (shouldGrowDown) {
      return this.growDown(width, height)
    }

    if (canGrowRight) {
      return this.growRight(width, height)
    }

    if (canGrowDown) {
      return this.growDown(width, height)
    }

    return this
  }

  private growDown (node: Node): Node {
    this.down = new Node(0, this.height, this.width, node.height)
    this.right = this.copy()

    this.x = 0
    this.y = 0
    this.height = this.height + node.height

    return this.split()
  }

  private growRight (node: Node): Node {
    this.right = new Node(this.width, 0, width, this.height)
    this.down = this.copy()
    return this.split(width, height)
  }

  private split (width: number, height: number): Node {
    this.right = new Node(this.x + width, this.y, this.width - width, height)
    this.down = new Node(
      this.x,
      this.y + height,
      this.width,
      this.height - height,
    )

    return this
  }
}
