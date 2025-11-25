import React from 'react';
import { FlipBook } from './components/FlipBook';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#0f172a] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Ambient Effects */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-xfuse-accent/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[100px]"></div>
        </div>
        
        <FlipBook />
    </div>
  );
};

export default App;
