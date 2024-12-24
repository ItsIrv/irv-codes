import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import shapesConfig from './shapesConfig';

/**
 * BackgroundParticles Component
 *
 * Provides a dynamic particle animation using technology icons as particles.
 */
export default function BackgroundParticles() {
  const [init, setInit] = useState(false);

  /**
   * Initializes the particles engine with the slim variant.
   */
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return init ? (
    <Particles
      id='tsparticles'
      className='absolute w-full h-full bg-transparent'
      options={{
        detectRetina: true,
        fullScreen: { enable: false },
        fpsLimit: 60,
        manualParticles: shapesConfig.map((shape) => ({
          options: {
            shape: {
              type: 'image',
              options: { image: [shape] },
            },
            size: { value: 32 },
            opacity: { value: 1 },
            move: {
              enable: true,
              speed: 0.5,
              outModes: { default: 'bounce' },
            },
          },
        })),
        particles: {
          number: { value: 0 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
          },
          modes: {
            grab: {
              distance: 200,
              links: { opacity: 1 },
            },
            repulse: {
              distance: 150,
              duration: 1,
            },
          },
        },
        background: { color: { value: 'transparent' } },
      }}
    />
  ) : null;
}
