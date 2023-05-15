import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import styled from "styled-components";

const MainContent = styled.main`
  width: 100vw;
  z-index: 99;
  width: 100%;
  position: absolute;
  margin: 0px auto;
  padding: 120px 0px;
`;

const Landing = () => {
  const bgRef = useRef<HTMLCanvasElement>(null);
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xFFFFFF); // background color
  const camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  useEffect(() => {

    let renderer = new THREE.WebGLRenderer({});
    if (bgRef.current) {
      renderer = new THREE.WebGLRenderer({
        canvas: bgRef.current,
      });
    }

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight); 
    camera.position.setZ(30); 

    // adding a shape
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // adding a tree
    // const treeTexture = new THREE_ADDONS.GLTFLoader().load('tree.png');


    // lights
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(20, 20, 20);

    const ambientLight = new THREE.AmbientLight(0xffffff); 
    scene.add(pointLight, ambientLight);

    const lightHelper = new THREE.PointLightHelper(pointLight); // adds a wireframe to show the position and direction of light source
    const gridHelper = new THREE.GridHelper(300, 5); // show the gridline
    scene.add(lightHelper, gridHelper);

    const controls = new OrbitControls(camera, renderer.domElement); 
    controls.enableZoom = false; // disable zooming

    // adding stars to the background
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const star = new THREE.Mesh(geometry, material);
    
      const [x, y, z] = Array(3)
        .fill(0)
        .map(() => THREE.MathUtils.randFloatSpread(100));
    
      star.position.set(x, y, z);
      scene.add(star);
    }
    Array(100).fill(0).forEach(addStar);

    function animate() {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;

      renderer.render(scene, camera);
    }

    animate();
  }, []);

  // scroll animation 
  function moveCamera() {
    console.log('move camera')
    const t = document.body.getBoundingClientRect().top;
    // camera.position.z = t * -0.1;
    // camera.position.x = t * -0.2;
    camera.rotation.y = t * -0.02;
  }

  return (
    <div style={{ height: "120vh" }}>
      <canvas id="bg" ref={bgRef} onScroll={moveCamera}></canvas>
      <MainContent>
        {/* Welcome to my portfolio website */}
      </MainContent>
    </div>
  );
};

export default Landing;
