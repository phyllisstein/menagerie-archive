/**
 * TODO: Boxes that don't fit in the bin should be split into smaller boxes, or
 * cached and retried at each iteration.
 */
export class Packer {
  private box: Node

  static randomBin (maxWidth: number, maxHeight: number): Node {
    const randomPacker = new Packer(maxWidth, maxHeight)

    randomPacker.packNode(new Node(Math.floor(500), Math.floor(200)))

    randomPacker.packNode(new Node(Math.floor(250), Math.floor(200)))

    for (let i = 0; i < 20; i++) {
      randomPacker.packNode(new Node(Math.floor(50), Math.floor(50)))
    }

    return randomPacker.box
  }

  constructor (private maxWidth: number, private maxHeight: number) {
    this.box = new Node(0, 0)
  }

  packNode (node: Node) {
    this.box.packChild(node)
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

  * [Symbol.iterator] () {
    yield this

    if (this.right) {
      yield* this.right
    }

    if (this.down) {
      yield* this.down
    }
  }

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

  packChild (child: Node): Node {
    if (!this.empty) {
      return this.right.packChild(child) || this.down.packChild(child)
    }

    if (child.width <= this.width && child.height <= this.height) {
      return this.split(child)
    }

    return this.growToFit(child)
  }

  growToFit (child: Node): Node {
    const canGrowDown = child.width <= this.width
    const canGrowRight = child.height <= this.height

    const shouldGrowRight =
      canGrowRight && this.height >= this.width + child.width
    const shouldGrowDown =
      canGrowDown && this.width >= this.height + child.height

    if (shouldGrowRight) {
      return this.growRight(child)
    }

    if (shouldGrowDown) {
      return this.growDown(child)
    }

    if (canGrowRight) {
      return this.growRight(child)
    }

    if (canGrowDown) {
      return this.growDown(child)
    }

    return this
  }

  private growDown (child: Node): Node {
    this.down = new Node(0, this.height, this.width, child.height)
    this.right = this.copy()

    this.x = 0
    this.y = 0
    this.height = this.height + child.height

    return this.split(child)
  }

  private growRight (child: Node): Node {
    this.right = new Node(this.width, 0, child.width, this.height)
    this.down = this.copy()
    return this.split(child)
  }

  private split (child: Node): Node {
    this.right = new Node(
      this.width - child.width,
      child.height,
      this.x + child.width,
      this.y,
    )
    this.down = new Node(
      this.width,
      this.height - child.height,
      this.x,
      this.y + child.height,
    )

    return this
  }
}

export function nodeTestFunction () {
  const rootNode = Packer.randomBin(500, 500)
  const [_, nodes] = [...rootNode]
  return nodes
}
