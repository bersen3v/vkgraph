'use client';
import { ForceGraph3DInstance } from '3d-force-graph';
import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import { GraphData, NodeObject } from 'react-force-graph-3d';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/Addons.js';

const NoSSRForceGraph = dynamic(() => import('./graphModule'), {
  ssr: false,
});

// const colors = [
//   'red',
//   'green',
//   'blue',
//   'yellow',
//   'orange',
//   'purple',
//   'red',
//   'green',
//   'blue',
//   'yellow',
//   'orange',
//   'purple',
//   'red',
//   'green',
//   'blue',
//   'yellow',
//   'orange',
//   'purple',
// ];

export default function Graph({ graphData }: { graphData: GraphData }) {
  const fgRef = useRef<ForceGraph3DInstance>(undefined);

  useEffect(() => {
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      4,
      1,
      0,
    );
    bloomPass.strength = 4;
    bloomPass.radius = 1;
    bloomPass.threshold = 0;
    if (fgRef.current) {
      fgRef.current.postProcessingComposer().addPass(bloomPass);
    }
  }, []);

  return (
    <NoSSRForceGraph
      onNodeClick={(node: NodeObject) => {
        const distance = 40;
        if (node.x && node.y && node.z) {
          const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

          if (fgRef.current) {
            fgRef.current.cameraPosition(
              {
                x: node.x! * distRatio,
                y: node.y! * distRatio,
                z: node.z! * distRatio,
              },
              {
                x: node.x!,
                y: node.y!,
                z: node.z!,
              },
              3000,
            );
          }
        }
      }}
      ref={fgRef}
      graphData={graphData}
      backgroundColor='#272727'
      nodeAutoColorBy='id'
      nodeThreeObject={({ img }) => {
        const imgTexture = new THREE.TextureLoader().load(img);
        imgTexture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.SpriteMaterial({
          map: imgTexture,
          // color: colors[group % colors.length],
        });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(12, 12, 0);
        return sprite;
      }}
      linkDirectionalParticles={1}
      cooldownTicks={100}
      // onEngineStop={() => {
      //   if (fgRef.current) {
      //     fgRef.current.zoomToFit(400);
      //   }
      // }}
      // linkDirectionalParticles={1}
    ></NoSSRForceGraph>
  );
}
