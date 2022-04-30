import * as THREE from 'three'

import { COLORS_RGB } from './palette'

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
  renderer.setSize(window.innerWidth, window.innerHeight, false)
  renderer.setPixelRatio(window.devicePixelRatio)

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  )
  camera.position.set(0, 0, 40)

  const scene = new THREE.Scene()

  const meshes = Object.values(COLORS_RGB).map((color, index) => {
    const material = new THREE.MeshLambertMaterial({
      color,
      reflectivity: 0,
    })
    const geometry = new THREE.SphereGeometry(1, 64, 64)
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = index * 2 - 10
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

  const ro = new ResizeObserver(() => {
    const canvas = renderer.domElement
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
  })
  ro.observe(canvas)
}

main()
