import React, { useState } from 'react';
import Learn from './components/LearnComponent';
import Aware from './components/AwareComponent';
import Secure from './components/SecureComponent';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Learn');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">Employee Portal</h1>
      </header>
      <nav className="flex space-x-4 p-4 bg-gray-200">
        {['Learn', 'Aware', 'Secure'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      <main className="p-4">
        {activeTab === 'Learn' && <Learn />}
        {activeTab === 'Aware' && <Aware />}
        {activeTab === 'Secure' && <Secure />}
      </main>
    </div>
  );
};

export default App;
