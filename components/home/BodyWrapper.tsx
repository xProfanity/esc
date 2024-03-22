import React from 'react';


export default function BodyWrapper({children}: Readonly<{
    children: React.ReactNode;
  }>) {

  return (
    <main className={`overflow-hidden relative`}>
        {children}
    </main>
  )
}
