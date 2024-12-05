'use client';

import { ReactNode, forwardRef } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children }, ref) => {
    return (
      <div 
        ref={ref}
        className="relative w-full h-screen bg-transparent overflow-hidden cursor-none z-50"
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';