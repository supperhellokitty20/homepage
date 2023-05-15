import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import  {Scene,Mesh,MeshStandardMaterial} from 'three';
import * as THREE from 'three';
import { DiamondContainer,DiamondSpinner} from './diamond-loader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import React ,{useRef, useState, useEffect, useCallback} from 'react';

function loadGLTFModel(
    scene: Scene,
    glbPath:string , 
    options = { receiveShadow:true , castShadow:true} 
) { 

    const MODEL_POS = { 
      x:-0.25 ,
      y:0 
    }
    const MODEL_SCALE = { 
      x :8.7 , 
      y :8.7, 
      z :8.7 
    }

    const {receiveShadow, castShadow } = options;    
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        const draco = new DRACOLoader().setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        loader.setDRACOLoader(draco);
        loader.load( 
            glbPath,
            (gltf) => {
                const obj = gltf.scene;
                obj.name = 'diamond';
                obj.position.y = MODEL_POS.x; 
                obj.position.x = MODEL_POS.y;
                obj.receiveShadow = receiveShadow;
                obj.castShadow =  castShadow;
                scene.add(obj);

                obj.traverse((child) => {
                    if ((child as Mesh).isMesh) {
                        //TODO : Uncomment this if use diamond hands model 
                        // //Change the material of two diamonds 
                        // if(child.name=="Object_76"||child.name=="Object_79"){ 
                        //     const meshPhongParams:THREE.MeshPhongMaterialParameters ={ 
                        //         color:0x096775,
                        //         shininess:10,
                        //         reflectivity:5

                        //     } ;
                        //     (child as Mesh).material = new THREE.MeshPhongMaterial(meshPhongParams) ;
                        // }
                        // if(child.name=="Object_77"||child.name=="Object_80"){
                        //     const meshPhongParams:THREE.MeshPhongMaterialParameters ={ 
                        //         color:0x034e59,
                        //         shininess:10,
                        //         reflectivity:5

                        //     } ;
                        //     (child as Mesh).material = new THREE.MeshPhongMaterial(meshPhongParams) ;

                        // }
                        //End change material
                        child.castShadow = castShadow;
                        child.receiveShadow = receiveShadow;
                    }
                });
                resolve(obj);
            }, 
            undefined,
            (error) => {
                console.error(error);
                reject(error);
            }
        )
    }) 

}
function easeOutCirc(x:number) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
  }
const DiamondBoy = () => { 
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)
    const refRenderer = useRef()
    const modelPath = (process.env.NODE_ENV=='production' ? 'https://cdn.master-rizz.lol/static':'')+'/voxel-compressed.glb' 
    // const modelPath = "https://cdn.master-rizz.lol/static/diamond_hands.glb"
    const handleWindowResize = useCallback(() => {
        const { current: renderer } = refRenderer
        const { current: container } = refContainer
        if (container && renderer) {
          const scW = container.clientWidth 
          const scH = container.clientHeight
          renderer.setSize(scW, scH)
        }
      }, [])
    useEffect(() => {
        const { current:container } = refContainer
        if (container) {
          const scW:number = container.clientWidth
          const scH:number = container.clientHeight
    
          const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
          })
          renderer.setPixelRatio(window.devicePixelRatio)
          renderer.setSize(scW, scH)
          renderer.outputEncoding= THREE.sRGBEncoding
          container.appendChild(renderer.domElement)
          refRenderer.current = renderer
          const scene = new THREE.Scene()
          // //Reduce the scale due to the size of the model
          scene.scale.set(8.5,8.5,8.5) ;

          const target = new THREE.Vector3(-0.5, 1.2, 0)
          const initialCameraPosition = new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,            20 * Math.cos(0.2 * Math.PI)
          )
    
          // 640 -> 240
          // 8   -> 6
          const scale = scH * 0.005 + 4.8
          const camera = new THREE.OrthographicCamera(
            -scale,
            scale,
            scale,
            -scale,
            0.01,
            50000
          )
          camera.position.copy(initialCameraPosition)
          camera.lookAt(target)
          //Add lightning to the scene 
          // const directLight = new THREE.DirectionalLight(0xffffff, 3) 
          // directLight.position.set(7.474, 6.367, 13.368) ;
          // scene.add(directLight) ;

          // const directBackLight = new THREE.DirectionalLight(0xffffff, 4) 
          // directBackLight.position.set(-11.752,12.007,-16.995) ;
          // scene.add(directBackLight) ;
          const ambient = new THREE.AmbientLight(0x808080, 4)
          scene.add(ambient)
          const controls = new OrbitControls(camera, renderer.domElement)
          controls.autoRotate = true
          controls.target = target
    
          loadGLTFModel(scene, modelPath, {
            receiveShadow: true,
            castShadow:true 
          }).then(() => {
            animate()
            setLoading(false)
          })
          let req: number | null = null
          let frame = 0
          const animate = () => {
            req = requestAnimationFrame(animate)
            frame = frame <= 100 ? frame + 1 : frame
            if (frame <= 100) {
              const p = initialCameraPosition
              const rotSpeed =-easeOutCirc(frame / 120) * Math.PI * 20
              camera.position.y = 10
              camera.position.x =
                p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
              camera.position.z =
                p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
              camera.lookAt(target)
            } else {
              controls.update()
            }
    
            renderer.render(scene, camera)
          }
    
          return () => {
            cancelAnimationFrame(req as number)
            renderer.domElement.remove()
            renderer.dispose()
          }
        }
      }, [])
      useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
          window.removeEventListener('resize', handleWindowResize, false)
        }
      }, [handleWindowResize])
    return ( 
        <DiamondContainer ref={refContainer}>{loading&&<DiamondSpinner/>}</DiamondContainer>
    )
}

export default DiamondBoy;