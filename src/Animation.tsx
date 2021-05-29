import React, { Component, RefObject } from "react";
import * as THREE from 'three';

class Animation extends Component {
  private mount: any;

  componentDidMount() {
    console.log('hello');
    const smoothness= 0.03 // 0 to 1 only

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0xffffff, 1 );
    // document.body.appendChild( renderer.domElement );
    this.mount.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( .5, .5, .5 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    var geo = new THREE.EdgesGeometry( cube.geometry );
    var mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 10 } );
    var wireframe = new THREE.LineSegments( geo, mat );

    cube.add(wireframe)

    scene.add( cube );
    cube.position.set(0, 0, 0);
    camera.position.z = 4;
    const targetPosition = cube.position.clone();
    targetPosition.x += 2;

    var animate = function () {
      cube.position.lerp(targetPosition, smoothness);
      cube.updateMorphTargets();
      requestAnimationFrame( animate );
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
  }

  render() {
    return (<div style={{ width: "100%", height: "100%", border: "1px solid red" }} ref={ref => (this.mount = ref)}></div>)
  }
}

export default Animation;