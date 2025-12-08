import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests

interface TestFormInputs {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestFormInputs>();

  const [createTestMutation] = useMutation(CREATE_TEST);

  const onSubmit: SubmitHandler<TestFormInputs> = async (data) => {
    setLoading(true);
    try {
      await createTestMutation({ variables: data });
      reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Write a Test</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-3 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Test Title"
            {...register('title', { required: 'This field is required' })}
            aria-required={true}
            aria-invalid={errors.title ? true : false}
            className={`w-full px-3 py-2 border rounded ${errors.title ? 'border-red-500' : ''}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">Description</label>
          <textarea
            id="description"
            placeholder="Test Description"
            {...register('description', { required: 'This field is required' })}
            aria-required={true}
            aria-invalid={errors.description ? true : false}
            rows={4}
            className={`w-full px-3 py-2 border rounded ${errors.description ? 'border-red-500' : ''}`}
          />
        </div>
        <button type="submit" disabled={loading} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests

interface TestFormInputs {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestFormInputs>();

  const [createTestMutation] = useMutation(CREATE_TEST);

  const onSubmit: SubmitHandler<TestFormInputs> = async (data) => {
    setLoading(true);
    try {
      await createTestMutation({ variables: data });
      reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Write a Test</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-3 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Test Title"
            {...register('title', { required: 'This field is required' })}
            aria-required={true}
            aria-invalid={errors.title ? true : false}
            className={`w-full px-3 py-2 border rounded ${errors.title ? 'border-red-500' : ''}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">Description</label>
          <textarea
            id="description"
            placeholder="Test Description"
            {...register('description', { required: 'This field is required' })}
            aria-required={true}
            aria-invalid={errors.description ? true : false}
            rows={4}
            className={`w-full px-3 py-2 border rounded ${errors.description ? 'border-red-500' : ''}`}
          />
        </div>
        <button type="submit" disabled={loading} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;