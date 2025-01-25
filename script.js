import * as THREE from 'three';
import Stats from 'https://unpkg.com/three@0.172.0/examples/jsm/libs/stats.module.js';
import { GUI } from 'https://unpkg.com/three@0.172.0/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'https://unpkg.com/three@0.172.0/examples/jsm/controls/OrbitControls.js';

let camera, scene, renderer, controls, stats;

let mesh;
const amount = 10; // Set the amount to 10 for 1000 objects (10^3 = 1000)
const count = Math.pow(amount, 3); // 10^3 = 1000 instances

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(1, 1);

const color = new THREE.Color();

init();

function init() {
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(amount * 0.8, amount * 0.8, amount * 1.2); // Adjust camera position closer
    camera.lookAt(0, 0, 0);

    scene = new THREE.Scene();

    // Add lighting - Make sure to add a strong light source
    const light = new THREE.HemisphereLight(0xffffff, 0x888888, 2); // Adjust intensity for brighter lighting
    light.position.set(0, 1, 0);
    scene.add(light);

    // Define box geometry for cuboid
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    
    // Using MeshBasicMaterial for glow effect (does not respond to lighting)
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        emissive: 0xffffff, // Ensure emissive glow for pure white
        emissiveIntensity: 1, // Make the emissive glow stronger
        side: THREE.DoubleSide
    });

    mesh = new THREE.InstancedMesh(boxGeometry, material, count);

    let i = 0;
    const offsetX = (amount - 1) / 2;
    const offsetY = (amount - 1) / 4;
    const offsetZ = (amount - 1) / 2;

    const matrix = new THREE.Matrix4();

    // Initialize cubes with pure white emissive glow
    for (let x = 0; x < amount; x++) {
        for (let y = 0; y < amount / 2; y++) { // Cuboid height is half
            for (let z = 0; z < amount; z++) {
                matrix.setPosition(offsetX - x, offsetY - y, offsetZ - z);
                mesh.setMatrixAt(i, matrix);
                mesh.setColorAt(i, new THREE.Color(1, 1, 1)); // Set initial color to pure white
                i++;
            }
        }
    }

    scene.add(mesh);

    // Set the background environment (sky color or a texture)
    scene.background = new THREE.Color(0x87CEEB); // Sky blue color

    const gui = new GUI();
    gui.add(mesh, 'count', 0, count);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    document.body.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;

    stats = new Stats();
    document.body.appendChild(stats.dom);

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onMouseMove); // Listen for mouse movements
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Raycasting to detect hovered object
    raycaster.setFromCamera(mouse, camera);

    const intersection = raycaster.intersectObject(mesh);

    if (intersection.length > 0) {
        const instanceId = intersection[0].instanceId;

        // Check if the color is already changed to avoid multiple changes
        mesh.getColorAt(instanceId, color);

        if (color.equals(new THREE.Color(1, 1, 1))) { // Only change color if it's pure white
            // Change the color to a random color on hover
            const newColor = new THREE.Color(Math.random(), Math.random(), Math.random());
            mesh.setColorAt(instanceId, newColor);
            mesh.instanceColor.needsUpdate = true; // Ensure the color change is updated
        }
    }
}

function animate() {
    controls.update();
    renderer.render(scene, camera);
    stats.update();
}
