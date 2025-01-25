3D Interactive Cube Coloring 🎨
This project is an interactive 3D Cube Coloring visualization built using Three.js. It features a cuboid of 1000 cubes arranged in a 10×10×10 grid. The cubes respond dynamically to mouse interactions, changing to random colors when hovered over.

Project Features 🚀

Interactive Cuboid:
A grid of 1000 cubes with hover-based color changes.
Cubes start with a pure white emissive glow and dynamically change to random colors.

Lighting and Environment:
Ambient hemisphere lighting for a visually appealing 3D environment.
A sky-blue background enhances the aesthetics.

Real-Time Interaction:
Uses Raycaster to detect mouse movements and interact with specific cubes.

Camera Controls:
Integrated OrbitControls for smooth camera rotation and interaction.

Performance Optimization:
Leverages InstancedMesh for efficient rendering of multiple objects.

Stats Monitoring:
Real-time performance stats using the Stats.js library.

User Interface:
Includes a graphical user interface (GUI) for customization.

Demo 🌐
This project can be hosted online using platforms like Vercel or GitHub Pages.

Getting Started 🛠️
Prerequisites
A modern browser with WebGL support.
A local or online server to serve the files (optional for advanced features).
Installation
Clone the repository:
git clone https://github.com/indrakumarcse/Cube-Coloring.git

Navigate to the project directory:
cd Cube-Coloring

Open the project in your browser:
Simply open the index.html file.

Alternatively, use a local server (e.g., VS Code Live Server extension) for a better experience.

Usage
Hover over the cubes to see their colors change dynamically.

Use the mouse to orbit, pan, and zoom around the scene.

View performance stats and control parameters using the GUI.

Code Overview 📋

Core Libraries:
Three.js: 3D rendering and visualization.

OrbitControls: For camera interaction.

Stats.js: Real-time performance monitoring.

Lil-GUI: Lightweight GUI for parameter tweaking.

Raycasting:
Detects mouse hover over cubes and triggers color changes.

InstancedMesh:
Efficiently renders 1000 cubes with optimized memory and performance.

Animation Loop:
Continuously updates the scene for a smooth interactive experience.

How It Works 🖥️

Initialization:
A PerspectiveCamera is set up to view the 3D scene.
Lighting and a blue background are added for an enhanced visual effect.

Cuboid Creation:
1000 cubes are created using THREE.InstancedMesh for optimal performance.

Mouse Interaction:
Mouse movements are captured, and the Raycaster identifies which cube is being hovered over.
Hovered cubes change their color to a random value while ensuring no duplicate changes.

Animation:
The animate function updates the scene continuously, ensuring smooth interactions.

