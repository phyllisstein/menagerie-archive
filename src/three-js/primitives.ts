import * as THREE from 'three'

function main () {
  const canvas = document.querySelector('#c')
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    canvas,
    premultipliedAlpha: false,
  })

  // Degrees in the vertical dimension
  const fieldOfView = 40

  // Default canvas is 300 x 150, so aspect ratio is 2
  const aspect = 2

  // Near clipping plane is 0.1 units
  const near = 0.1

  // Far clipping plane is 5 units
  const far = 1000

  // "Frustum": like a pyramid with the tip sliced off
  const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far)

  // Default camera position is 0, 0, 0. Camera is looking down the negative
  // z-axis (towards 0, 0, -1).
  camera.position.z = 5

  const scene = new THREE.Scene()

  const boxWidth = 1
  const boxHeight = 1
  const boxDepth = 1
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)

  // const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 })
  const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 })
  const cube = new THREE.Mesh(geometry, material)
  const cubes = [
    makeInstace(geometry, 0x44aa88, 0),
    makeInstace(geometry, 0x8844aa, -2),
    makeInstace(geometry, 0xaa8844, 2),
  ]

  // scene.add(cube)

  const color = 0xffffff
  const intensity = 1
  const light = new THREE.DirectionalLight(color, intensity)
  light.position.set(-1, 2, 4)
  scene.add(light)

  renderer.render(scene, camera)

  const objects = []
  const spread = 15

  function addObject (x: number, y: number, obj) {
    obj.position.x = x * spread
    obj.position.y = y * spread

    scene.add(obj)
    objects.push(obj)
  }

  function createMaterial () {
    const material = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })

    const hue = Math.random()
    const saturation = 1
    const luminance = 0.5
    material.color.setHSL(hue, saturation, luminance)

    return material
  }

  function addSolidGeometry (x: number, y: number, geometry: THREE.Geometry) {
    const mesh = new THREE.Mesh(geometry, createMaterial())
    addObject(x, y, mesh)
  }

  const width = 8
  const height = 8
  const depth = 8

  // addSolidGeometry(-2, -2, new THREE.BoxGeometry(width, height, depth))

  function resizeRendererToDisplaySize (renderer: THREE.WebGLRenderer) {
    const canvas = renderer.domElement
    const pixelRatio = window.devicePixelRatio
    const width = (canvas.clientWidth * pixelRatio) | 0
    const height = (canvas.clientHeight * pixelRatio) | 0
    const needResize = canvas.width !== width || canvas.height !== height

    if (needResize) {
      renderer.setSize(width, height, false)
    }

    return needResize
  }

  function animate (time: number) {
    time *= 0.001

    cubes.forEach((cube, idx) => {
      const speed = 1 + idx * 0.1
      const rot = time * speed
      cube.rotation.x = rot
      cube.rotation.y = rot
    })

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
    }

    renderer.render(scene, camera)

    requestAnimationFrame(animate)
  }

  function makeInstace (geometry: BoxGeometry, color: number, x: number) {
    const material = new THREE.MeshPhongMaterial({ color })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    cube.position.x = x
    return cube
  }

  requestAnimationFrame(animate)
}

main()
