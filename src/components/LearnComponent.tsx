import React, { useState, useEffect } from 'react';

const iframes = [
  { id: 1, src: 'https://docs.google.com/presentation/d/e/2PACX-1vTnZPthgdE4UFxnK_gCW2lOWIMBx-Q1dSIUORE_5iDODT4LTYZ3JbaH4uBHL5SGXjPvM8ry-e3JaD0w/embed?start=false&loop=false&delayms=10000' },
  { id: 2, src: 'https://docs.google.com/presentation/d/e/2PACX-1vTgzEdF3SWB8fBeUbAy5A32C3a6BH40PZyNzDRqJxyIM-d0A5nN8ByAtg8gcxzGgPjGk-nprNgsgKOC/embed?start=false&loop=false&delayms=10000' },
  { id: 3, src: 'https://docs.google.com/presentation/d/e/2PACX-1vTrBiIxCP7U2fkadBf9zbtnPrEyhx4uy4mdcOa8CxiRYar6AsHaUuFaGj6DKHS8IwOvIikIH_mLvvlG/embed?start=false&loop=false&delayms=10000' }
];

const Learn: React.FC = () => {
  const [completionStatus, setCompletionStatus] = useState<boolean[]>(Array(iframes.length).fill(true));

  const handleMessage = (event: MessageEvent) => {
    // Check if the message is from our iframes and indicates the last slide
    if (event.data && event.data.type === 'LAST_SLIDE') {
      const iframeIndex = iframes.findIndex(iframe => iframe.src === event.data.src);
      if (iframeIndex !== -1) {
        setCompletionStatus(prevStatus => {
          const newStatus = [...prevStatus];
          newStatus[iframeIndex] = true;
          return newStatus;
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const allComplete = completionStatus.every(status => status);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Learn</h2>
      <div className='flex items-center justify-space-between'>
        <div className="grid grid-cols-1 grow md:grid-cols-2 lg:grid-cols-2 gap-2">
            {iframes.map(iframe => (
            <div key={iframe.id} className="mb-4 p-4 border rounded-lg">
                <iframe
                    src={iframe.src}
                    width="100%"
                    height="400"
                    allowFullScreen
                ></iframe>
                <button className={`bg-blue-500 text-white px-4 py-2 mt-2 rounded ${allComplete ? '' : 'opacity-50 cursor-not-allowed'}`} disabled={!allComplete}>
                    Take Quiz
                </button>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
