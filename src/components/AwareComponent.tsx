import React from 'react';

const Aware: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Aware</h2>
      <div className="mb-4">
        <a href="https://docs.google.com/document/d/e/2PACX-1vStXreRGBO-IM8YscPxBzRal1khpxo0_XMk9HOp3e3owpaWAyQZ01VfKIBMT4i3Gx2J8xx3bHdCLWVB/pub" target="_blank" className="text-blue-500 underline">Employee Handbook</a>
      </div>
      <div className="mb-4">
        <a href="https://docs.google.com/document/d/e/2PACX-1vRKIayH_0B4dJWeZaCWDEwu1eombjFgDPZFxQY9nZ4bcZOSIwwAy95LEtzO5NRNc2V6dCagweSo0YFz/pub" target="_blank" className="text-blue-500 underline">Information Security Brochure</a>
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">I consent to the policies</span>
        </label>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </div>
  );
};

export default Aware;
