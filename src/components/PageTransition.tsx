import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  return (
    <div className={`animate-fade-in ${className}`} 
         style={{ 
           animationDuration: '0.6s',
           animationFillMode: 'both'
         }}>
      {children}
    </div>
  );
};

export default PageTransition;