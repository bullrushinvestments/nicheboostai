import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Requirement {
  id: number;
  name: string;
  description: string;
  status: 'pending' | 'completed';
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
        setRequirements(response.data.requirements);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements.');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  const handleRequirementChange = (id: number, status: 'pending' | 'completed') => {
    axios.put(`/api/requirements/${id}`, { status })
      .then((response) => {
        setRequirements(prevRequirements =>
          prevRequirements.map(requirement =>
            requirement.id === id ? { ...requirement, status } : requirement
          )
        );
      })
      .catch(() => setError('Failed to update requirement.'));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      <ul role="list" aria-label="Requirements list" className="divide-y divide-gray-200">
        {requirements.map(requirement => (
          <li key={requirement.id} className="py-4 flex items-center justify-between">
            <div className="flex-grow">
              <p className="text-sm font-medium text-gray-900">{requirement.name}</p>
              <p className="mt-1 text-sm text-gray-500">{requirement.description}</p>
            </div>
            <span
              role="button"
              onClick={() => handleRequirementChange(requirement.id, requirement.status === 'pending' ? 'completed' : 'pending')}
              onKeyDown={(e) => e.key === 'Enter' && handleRequirementChange(requirement.id, requirement.status === 'pending' ? 'completed' : 'pending')}
              className={`px-2 py-1 rounded text-white ${requirement.status === 'pending' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} cursor-pointer`}
            >
              {requirement.status === 'pending' ? 'Pending' : 'Completed'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Requirement {
  id: number;
  name: string;
  description: string;
  status: 'pending' | 'completed';
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
        setRequirements(response.data.requirements);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements.');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  const handleRequirementChange = (id: number, status: 'pending' | 'completed') => {
    axios.put(`/api/requirements/${id}`, { status })
      .then((response) => {
        setRequirements(prevRequirements =>
          prevRequirements.map(requirement =>
            requirement.id === id ? { ...requirement, status } : requirement
          )
        );
      })
      .catch(() => setError('Failed to update requirement.'));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      <ul role="list" aria-label="Requirements list" className="divide-y divide-gray-200">
        {requirements.map(requirement => (
          <li key={requirement.id} className="py-4 flex items-center justify-between">
            <div className="flex-grow">
              <p className="text-sm font-medium text-gray-900">{requirement.name}</p>
              <p className="mt-1 text-sm text-gray-500">{requirement.description}</p>
            </div>
            <span
              role="button"
              onClick={() => handleRequirementChange(requirement.id, requirement.status === 'pending' ? 'completed' : 'pending')}
              onKeyDown={(e) => e.key === 'Enter' && handleRequirementChange(requirement.id, requirement.status === 'pending' ? 'completed' : 'pending')}
              className={`px-2 py-1 rounded text-white ${requirement.status === 'pending' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} cursor-pointer`}
            >
              {requirement.status === 'pending' ? 'Pending' : 'Completed'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;