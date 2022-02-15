import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.cjs';
import * as R from 'rambda'
// set up the scene
//const dat = require('dat.gui')
const scene = new THREE.Scene()
//const gui = new dat.GUI({ closed: true, width: 400})


// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize( sizes.width, sizes.height )
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
const doc = document.getElementById( "canvas" )
doc.appendChild( renderer.domElement );      /// assigning the canvas in the html to this canvas

window.addEventListener('resize', () =>
{
    // Update sizes, camera and renderer
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    // Update renderer
    renderer.setSize( sizes.width, sizes.height )
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})



// geometries
const boxGeometry = new THREE.BoxGeometry(1,1,1,1, 32, 32, 32, 32)
const sphereGeometry = new THREE.SphereGeometry(1, 32)
const planeGeometry = new THREE.PlaneGeometry(2, 2, 6, 6, )
const circleGeometry = new THREE.CircleGeometry(1, 24 )

//materials
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide, wireframe: true} )

// meshes
const planeMesh = new THREE.Mesh(planeGeometry, material)
const sphereMesh = new THREE.Mesh(sphereGeometry, material)
const boxMesh = new THREE.Mesh( boxGeometry, material)
const circleMesh = new THREE.Mesh(circleGeometry, material)
planeMesh.position.set(1.25, 0, 0)
//circleMesh.position.set(-1.25, 0, 0)
scene.add(circleMesh)
//scene.add(circleMesh)
//scene.add(planeMesh)

// const planeMeshPositions = planeMesh.geometry.attributes.position
// const circleMeshPositions = circleMesh.geometry.attributes.position

//planeGeometry.geometry.morphAttributes.position = []
//planeGeometry.geometry.morphAttributes.position[ 0 ] = new THREE.Float32BufferAttribute( circleMeshPositions, 3)

// const positions = R.splitEvery( 3, planeMesh.geometry.attributes.position.array ) 
// console.table(positions.map(position => position))

//console.log('mesh', circleMesh)

//parameters
//parameters = {
  //  sphere: 0
//}
//gui 
//objectFolder.add( parameters, 'sphere', -10, 10).step(0.01).onChange(function(value){
   // mesh.morphTargetInfluences[ 0 ] = value
//})
//const objectFolder = gui.addFolder('objects')

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0,0,4)
scene.add(camera)


// Controls
const orbitControls = new OrbitControls( camera, renderer.domElement );

// clock
const clock = new THREE.Clock()

// animations
const tick = () =>{

    orbitControls.enabled = true
    orbitControls.update()
    orbitControls.enableDamping = true


    const elapsedTime = clock.getElapsedTime()    
    //mesh.rotation.y = elapsedTime * 0.1

    window.requestAnimationFrame(tick)
    renderer.render(scene, camera)

}
tick()
