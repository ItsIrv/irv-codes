import Layout from '@theme/Layout';
import React from 'react';

/**
 * AboutPage Component
 */
export default function AboutPage() {
  return (
    <Layout
      title='About'
      description='Learn more about me.'
    >
      <main className='container mx-auto mt-12'>
        <section id='about'>
          <div className='container mx-auto px-6 text-center'>
            <h1 className='text-4xl md:text-5xl font-bold font-serif mb-6'>
              About Me
            </h1>

            <div className='bg-black/20 rounded p-6'>
              {/* The Nerd Rundown */}
              <section className='mb-8'>
                <h3 className='text-2xl font-bold mb-4'>
                  <span
                    role='img'
                    aria-label='glasses'
                  >
                    🤓
                  </span>{' '}
                  The Nerd Rundown
                </h3>
                <p className='text-lg max-w-3xl mx-auto'>
                  My programming journey began in middle school, inspired by my
                  love for online games. I became fascinated with how these
                  games worked, which led me to explore their web counterparts,
                  like registration forms, online shops, and account systems.
                  This curiosity drove me to learn HTML, CSS, JavaScript, and
                  PHP all at once, relying on Google, documentation, and endless
                  questions to hone my skills.
                </p>
                <p className='text-lg max-w-3xl mx-auto mt-4'>
                  Over time, I transitioned from experimenting with game
                  modifications to creating web and mobile applications. I enjoy
                  the full-stack process of building robust backends and
                  designing user-friendly interfaces. Recently, working with AI
                  and cutting-edge technologies has added a new layer of
                  excitement to my projects.
                </p>
                <p className='text-lg max-w-3xl mx-auto mt-4'>
                  I thrive on projects that let me take initiative, own my work,
                  and make meaningful impacts. Whether it’s developing powerful
                  systems or crafting seamless user experiences, I’m always
                  ready to tackle the next challenge.
                </p>
              </section>

              {/* The Fun Stuff */}
              <section className='mb-8'>
                <h3 className='text-2xl font-bold mb-4'>
                  <span
                    role='img'
                    aria-label='music'
                  >
                    🎵
                  </span>{' '}
                  The Fun Stuff
                </h3>
                <p className='text-lg max-w-3xl mx-auto'>
                  Outside of work, I enjoy gaming and traveling. My go-to games
                  include MMORPGs and FPS titles like League of Legends,
                  Overwatch, Call of Duty, Fortnite, and Marvel Rivals.
                  Traveling allows me to recharge and explore new perspectives,
                  balancing my professional life with adventure and fun.
                </p>
              </section>

              {/* Life Outside the Code */}
              <section className='mb-8'>
                <h3 className='text-2xl font-bold mb-4'>
                  <span
                    role='img'
                    aria-label='compass'
                  >
                    🧭
                  </span>{' '}
                  Life Outside the Code
                </h3>
                <p className='text-lg max-w-3xl mx-auto'>
                  When I’m not coding or gaming, I enjoy staying active through
                  sports and connecting with friends over shared activities.
                  These experiences help me maintain a healthy work-life balance
                  and keep me energized for the challenges ahead.
                </p>
              </section>

              {/* The Wins */}
              <section className='mb-8'>
                <h3 className='text-2xl font-bold mb-4'>
                  <span
                    role='img'
                    aria-label='trophy'
                  >
                    🏆
                  </span>{' '}
                  The Wins
                </h3>
                <p className='text-lg max-w-3xl mx-auto'>
                  One of my proudest achievements is the ability to take an idea
                  and turn it into a fully realized, impactful application. It’s
                  a skill I’ve developed over years of dedication, and it
                  continues to drive me in creating meaningful solutions for
                  users and clients alike.
                </p>
              </section>

              {/* Lifelong Learner */}
              <section className='mb-8'>
                <h3 className='text-2xl font-bold mb-4'>
                  <span
                    role='img'
                    aria-label='book'
                  >
                    📚
                  </span>{' '}
                  Lifelong Learner
                </h3>
                <p className='text-lg max-w-3xl mx-auto'>
                  Staying ahead in tech requires constant learning, and I’m
                  passionate about exploring new fields like AI,
                  Retrieval-Augmented Generation (RAG), and quantum computing.
                  These emerging technologies inspire me to innovate and stay
                  adaptable in a fast-paced industry.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
