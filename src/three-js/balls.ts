import './balls.scss'

import * as THREE from 'three'

export const COLORS_RGB = {
  /**
   * lch(25% 60 285deg)
   * rgb(0% 21.67% 55.88%)
   * color(display-p3 0 0.2113 0.567)
   */
  BLUE: 0x00378e,

  /**
   * lch(30% 100 60deg)
   * rgb(43.66% 21.31% 0%)
   * color(display-p3 0.4284 0.2108 0)
   */
  BROWN: 0x6f3600,

  /**
   * lch(25% 100 140deg)
   * rgb(0% 27.43% 6.29%)
   * color(display-p3 0 0.2797 0.0249)
   */
  GREEN: 0x004610,

  /**
   * lch(98% 5 80deg)
   * rgb(89.99% 95.15% 100%)
   * color(display-p3 0.9928 0.975 0.9435)
   */
  LEAD_WHITE: 0xe5f3ff,

  /**
   * lch(65% 100 285deg)
   * rgb(53.15% 59.65% 100%)
   * color(display-p3 0.5327 0.5927 1)
   */
  LIGHT_BLUE: 0x8898ff,

  /**
   * lch(40% 100 40deg)
   * rgb(82.84% 0% 2.09%)
   * color(display-p3 0.7117 0 0.0672)
   */
  LIGHT_RED: 0xd30005,

  /**
   * lch(50% 90 60deg)
   * rgb(71.78% 36.54% 0%)
   * color(display-p3 0.7215 0.3475 0.0121)
   */
  ORANGE: 0xb75d00,

  /**
   * lch(75% 100 10deg)
   * rgb(100% 60.75% 68.15%)
   * color(display-p3 0.993 0.5968 0.6746)
   */
  PINK: 0xff9bae,

  /**
   * lch(35% 100 45deg)
   * rgb(60.75% 13.8% 0%)
   * color(display-p3 0.6037 0.1014 0)
   */
  RED: 0x9b2300,

  /**
   * lch(65% 100 85deg)
   * rgb(74.41% 59.75% 0%)
   * color(display-p3 0.7364 0.5987 0)
   */
  YELLOW: 0xbe9800,
}

function main () {
  const canvas = document.querySelector('#c')
  if (!canvas) {
    throw new Error('no canvas')
  }

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  )
  camera.position.set(0, 0, 45)

  const scene = new THREE.Scene()

  const meshes = Object.values(COLORS_RGB).map((color, index) => {
    const material = new THREE.MeshLambertMaterial({
      color,
      reflectivity: 0,
    })
    const geometry = new THREE.SphereGeometry(1, 64, 64)
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = index * 3 - 15
    mesh.position.z = 0
    scene.add(mesh)
    return mesh
  })

  scene.add(new THREE.AmbientLight(0x444444))
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(15, 15, 15)
  directionalLight.target.position.set(0, 0, 0)
  scene.add(directionalLight)
  scene.add(directionalLight.target)

  renderer.outputEncoding = THREE.sRGBEncoding
  renderer.render(scene, camera)

  const animate = (time: number) => {
    const t = time / 1000
    requestAnimationFrame(animate)

    meshes.forEach((mesh, index) => {
      mesh.position.y = Math.sin(t + index * 0.5) * 5
      mesh.position.z = Math.cos(t + index * 0.5) * 5
    })

    renderer.render(scene, camera)
  }
  requestAnimationFrame(animate)
}

main()
