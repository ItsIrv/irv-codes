import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title='Home'
      description='Irving Gomez - Full Stack Engineer Portfolio'
    >
      <div className='bg-blue-500 text-white text-center p-8'>
        <h1 className='text-3xl font-bold'>Welcome to My Portfolio</h1>
        <p className='text-lg'>Styled with TailwindCSS!</p>
      </div>
    </Layout>
  );
}
