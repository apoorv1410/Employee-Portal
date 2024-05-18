import React, { useState, useEffect } from 'react';

// Sample data
const softwareItems = [
  { id: 1, name: 'MS Word', version: '16.0.12345', vulnerability: 'Vulnerable' },
  { id: 2, name: 'Adobe Acrobat', version: '21.007.20091', vulnerability: 'Safe' },
  { id: 3, name: 'Google Chrome', version: '89.0.4389.114', vulnerability: 'Vunerable' },
  // Add more software items as needed
];

const VulnerableSoftware: React.FC = () => {
    const [os] = useState('Windows');
    const [isInstalled, setIsInstalled] = useState(false);
    const [filter, setFilter] = useState<string>('');
    const [filteredSoftware, setFilteredSoftware] = useState(softwareItems);

    const handleInstall = () => {
        setIsInstalled(true)
    };
    const installStatus = isInstalled ? 'Installed on this device' : 'Missing on this device'

  useEffect(() => {
    setFilteredSoftware(
      softwareItems.filter(
        item =>
          item.name.toLowerCase().includes(filter.toLowerCase()) ||
          item.version.toLowerCase().includes(filter.toLowerCase()) ||
          item.vulnerability.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter]);

  return (
    <div>
        <div className="mb-2">
            <p className="mb-4">Detected OS: {os}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleInstall}>
            Install Monitoring Program
            </button>
      </div>
      <div className="mb-2">
        <p className='flex'>
            Installation Status: {installStatus}
            {isInstalled && <><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500 ml-1"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                </>
            }
        </p>
      </div>
      <h2 className="text-xl font-bold mb-4">Vulnerable Software</h2>
      <div className="mb-4">
        <input
          type="text"
          className="px-4 py-2 border rounded w-full"
          placeholder="Search by name, version, or vulnerability..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="p-2">Application</th>
            <th className="p-2">Version</th>
            <th className="p-2">Vulnerability</th>
          </tr>
        </thead>
        <tbody>
          {filteredSoftware.map((software) => (
            <tr key={software.id}>
              <td className="border px-4 p-2">{software.name}</td>
              <td className="border px-4 p-2">{software.version}</td>
              <td className="border px-4 p-2">{software.vulnerability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VulnerableSoftware;
