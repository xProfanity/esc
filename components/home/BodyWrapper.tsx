import React from 'react';


export default function BodyWrapper({children}: Readonly<{
    children: React.ReactNode;
  }>) {

  return (
    <main className={`overflow-hidden dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative`}>
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
        {children}
    </main>
  )
}
