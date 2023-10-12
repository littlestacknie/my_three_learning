import './index.css'
import * as THREE from 'three'

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const scence = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.z = 3
scence.add(camera)

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
})

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x03c03c })
const mesh = new THREE.Mesh(geometry, material)
scence.add(mesh)

const tick = () => {
    renderer.render(scence, camera)

    mesh && (mesh.rotation.y += .02)
    mesh && (mesh.rotation.x += .02)

    window.requestAnimationFrame(tick)
}
tick()