import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpecification {
  id: string;
  name: string;
  description: string;
  features: Feature[];
}

interface Feature {
  id: number;
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [specification, setSpecification] = useState<BusinessSpecification | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<BusinessSpecification>('https://api.example.com/business-specification')
      .then(response => {
        setSpecification(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load business specification');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  const renderFeatures = () => {
    return specification?.features.map(feature => (
      <div key={feature.id} className={clsx('p-4 mb-2', isMobile ? 'bg-gray-100' : 'bg-white')}>
        <h3 className="text-lg font-medium">{feature.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: feature.details }} />
      </div>
    ));
  };

  return (
    <section aria-labelledby="business-specification" tabIndex={0} role="region">
      <header className="mb-4">
        <h2 id="business-specification" className="text-xl font-semibold">{specification?.name}</h2>
        <p className="mt-1 text-gray-600">{specification?.description}</p>
      </header>
      {renderFeatures()}
    </section>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpecification {
  id: string;
  name: string;
  description: string;
  features: Feature[];
}

interface Feature {
  id: number;
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [specification, setSpecification] = useState<BusinessSpecification | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<BusinessSpecification>('https://api.example.com/business-specification')
      .then(response => {
        setSpecification(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load business specification');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  const renderFeatures = () => {
    return specification?.features.map(feature => (
      <div key={feature.id} className={clsx('p-4 mb-2', isMobile ? 'bg-gray-100' : 'bg-white')}>
        <h3 className="text-lg font-medium">{feature.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: feature.details }} />
      </div>
    ));
  };

  return (
    <section aria-labelledby="business-specification" tabIndex={0} role="region">
      <header className="mb-4">
        <h2 id="business-specification" className="text-xl font-semibold">{specification?.name}</h2>
        <p className="mt-1 text-gray-600">{specification?.description}</p>
      </header>
      {renderFeatures()}
    </section>
  );
};

export default CreateBusinessSpecification;