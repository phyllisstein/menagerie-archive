/**
 * TODO: Boxes that don't fit in the bin should be split into smaller boxes, or
 * cached and retried at each iteration.
 */
export class Packer {
  private box = new Node()

  constructor (private maxWidth: number, private maxHeight: number) {}

  private findFreeSpace (
    node: Node,
    width: number,
    height: number,
  ): Node | null {
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

  private growNode (width: number, height: number): Node {
    const canGrowDown = width <= this.box.width
    const canGrowRight = height <= this.box.height

    const shouldGrowRight =
      canGrowRight && this.box.height >= this.box.width + width
    const shouldGrowDown =
      canGrowDown && this.box.width >= this.box.height + height

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

    return null
  }

  private growRight (width: number, height: number): Node {
    const nextBox = new Node()

    nextBox.x = 0
    nextBox.y = 0

    nextBox.width = width + this.box.width
    nextBox.height = this.box.height

    nextBox.down = this.box.copy()
    nextBox.right = new Node(this.box.width, 0, width, this.box.height)

    this.box = nextBox
  }

  private growDown (width: number, height: number): Node {
    const nextBox = new Node()

    nextBox.x = 0
    nextBox.y = 0
    nextBox.width = this.box.width
    nextBox.height = height + this.box.height

    nextBox.down = new Node(0, this.box.height, this.box.width, height)
    nextBox.right = this.box.copy()

    this.box = nextBox
  }
}

export class Node {
  declare down: Node
  declare right: Node

  constructor (
    public x: number = 0,
    public y: number = 0,
    public width: number = 0,
    public height: number = 0,
    public used: boolean = false,
  ) {}

  copy (): Node {
    return new Node(this.x, this.y, this.width, this.height, this.used)
  }

  split (width: number, height: number): Node {
    this.used = true

    this.right = new Node(this.x + width, this.y, this.width - width, height)
    this.down = new Node(this.x, this.y + height, width, this.height - height)

    return this
  }
}
