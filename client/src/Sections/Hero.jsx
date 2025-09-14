import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiCode } from 'react-icons/fi';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Hero = () => {
  const canvasRef = useRef(null);
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    // Don't initialize 3D scene on mobile devices
    if (!canvasRef.current || isMobile) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 10);
    
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(3, 4, 5);
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0x4f46e5, 1.5, 100);
    pointLight.position.set(2, 2, 3);
    scene.add(pointLight);
    
    // Create floating geometric shapes
    const createShape = (geometry, color, x, y, z, wireframe = false) => {
      const material = new THREE.MeshPhongMaterial({ 
        color,
        emissive: color,
        emissiveIntensity: 0.1,
        specular: 0xffffff,
        shininess: 100,
        transparent: true,
        opacity: 0.85,
        wireframe
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
      return mesh;
    };

    // Add various geometric shapes
    const shapes = [
      { geom: new THREE.SphereGeometry(1, 32, 32), color: 0x4f46e5, pos: [0, 0, 0], wireframe: true },
      { geom: new THREE.TorusGeometry(1.2, 0.2, 16, 100), color: 0x9333ea, pos: [2, -1, -1], wireframe: false },
      { geom: new THREE.ConeGeometry(0.8, 1.5, 8), color: 0x3b82f6, pos: [-2, 1, 1], wireframe: true },
      { geom: new THREE.OctahedronGeometry(0.7, 0), color: 0x10b981, pos: [1.5, 1.5, -1], wireframe: false },
      { geom: new THREE.DodecahedronGeometry(0.6, 0), color: 0xec4899, pos: [-1.5, -1.5, 1], wireframe: true }
    ];

    const elements = shapes.map(shape => 
      createShape(shape.geom, shape.color, ...shape.pos, shape.wireframe)
    );

    elements.forEach(element => scene.add(element));
    setSceneLoaded(true);

    // Add orbit controls for interactive rotation
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      // Animate the elements
      elements.forEach((element, index) => {
        element.rotation.x = elapsedTime * 0.1 * (index + 1);
        element.rotation.y = elapsedTime * 0.15 * (index + 1);
        element.position.y = Math.sin(elapsedTime * 0.5 + index) * 0.2;
      });
      
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [isMobile]); // Re-run effect when isMobile changes

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/10 z-0"></div>
      
      {/* Subtle background elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-2xl"></div>
      
      <div className="container relative z-10 px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content - Full width on mobile, half on desktop */}
          <motion.div
            className={`w-full ${isMobile ? '' : 'lg:w-1/2'} text-center lg:text-left`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Name on single line with proper spacing */}
            <motion.h1
              className="font-bold mb-4 text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-gray-800 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Yug Kachhiya
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl mb-6 md:mb-8 text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Full-Stack Developer & AI Enthusiast</span> crafting scalable, intelligent web applications.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <a 
                href="#projects" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm md:text-base"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md text-sm md:text-base"
              >
                Contact Me
              </a>
            </motion.div>
            
            <motion.div
              className="flex justify-center lg:justify-start space-x-3 md:space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {/* Social links can be added here */}
            </motion.div>
          </motion.div>
          
          {/* 3D Model Container - Hidden on mobile */}
          {!isMobile && (
            <motion.div 
              className="w-full lg:w-1/2 h-64 sm:h-72 md:h-80 lg:h-96 relative mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <canvas 
                ref={canvasRef} 
                className="w-full h-full rounded-xl"
              />
              
              {!sceneLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <FiCode className="animate-spin text-blue-600 mr-2" />
                    <span>Loading 3D Scene...</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
        
        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="flex justify-center mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <motion.div 
            className="p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md text-blue-600 dark:text-blue-400 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown size={18} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;