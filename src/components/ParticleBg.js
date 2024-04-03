import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback, useMemo, useRef } from "react";

function ParticleBg() {
  const containerRef = useRef(null);

  initParticlesEngine(async (engine) => {
    await loadFull(engine);
  });
  const particlesLoaded = useCallback(
      (container) => {
        containerRef.current = container;

        window.particlesContainer = container;
      },
      [containerRef]
    ),
    options = useMemo(
      () => ({
        fullScreen: {
          zIndex: 0,
        },
        particles: {
          number: {
            value: 100,
          },
          links: {
            enable: true,
          },
          move: {
            enable: true,
          },
        },
        themes: [
          {
            name: "light",
            default: {
              value: true,
              auto: true,
              mode: "light",
            },
            options: {
              background: {
                color: "#000",
              },
              particles: {
                color: {
                  value: "#FF0000",
                },
                links: {
                  color: "#FF0000",
                },
              },
            },
          },
          {
            name: "dark",
            default: {
              value: true,
              auto: true,
              mode: "dark",
            },
            options: {
              background: {
                color: "#000000",
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                },
              },
            },
          },
        ],
      }),
      []
    );

  return (
    <div>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
}

export default ParticleBg;
