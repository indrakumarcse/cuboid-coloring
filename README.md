Cube Coloring Visualization
This project is an interactive 3D visualization built using Three.js. It showcases a cuboid composed of 1000 cubes (10×10×10), with dynamic color-changing behavior upon hover.

Features 🚀
Interactive Cuboid: A 3D grid of cubes with hover-based color changes.
Dynamic Lighting: Scene includes ambient lighting for a visually appealing effect.
Customizable Controls: Users can orbit around the scene using mouse interactions.
Optimized Performance: Uses instanced geometry for handling thousands of objects efficiently.
Real-Time Stats: Displays frame rate and performance statistics using the Stats library.

Demo 🌐
A live demo can be hosted using tools like Vercel or GitHub Pages.

Installation and Usage 🛠️
Clone the repository:

git clone https://github.com/indrakumarcse/Cube-Coloring.git

Open the project folder:

cd Cube-Coloring

Open the index.html file in your browser or use a local development server to run the project.



Dependencies 📦
The project uses the following libraries:

Three.js: A JavaScript library for creating 3D graphics.
OrbitControls: Enables orbiting, panning, and zooming for the camera.
Stats.js: Provides real-time performance monitoring.
Lil-GUI: A lightweight library for creating user interfaces.
Key Code Features 📋
Instanced Geometry: Optimizes the rendering of 1000 cubes.
Raycasting: Detects and handles mouse hover events.
Color Interaction: Changes cube colors dynamically to random values on hover.
Responsive Design: Adjusts to the screen size for seamless user experience.
How It Works 🖥️
The scene consists of a grid of cubes created using THREE.InstancedMesh.
Mouse movements are tracked, and a Raycaster detects which cube is being hovered over.
On hover, the cube's color changes to a random value, and the changes are dynamically updated in the scene.


