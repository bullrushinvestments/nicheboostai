import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for better assertions
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./SomeExternalDependency', () => ({
  useSomeExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component without errors', async () => {
    const mockUseSomeExternalService = (useSomeExternalService as unknown) as jest.Mock;
    mockUseSomeExternalService.mockImplementation(() => ({
      data: { someData: 'mockedData' },
      error: null,
      isLoading: false,
    }));

    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText('mockedData')).toBeInTheDocument();
  });

  it('should handle loading state', async () => {
    const mockUseSomeExternalService = (useSomeExternalService as unknown) as jest.Mock;
    mockUseSomeExternalService.mockImplementation(() => ({
      data: null,
      error: null,
      isLoading: true,
    }));

    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should handle errors and display an error message', async () => {
    const mockUseSomeExternalService = (useSomeExternalService as unknown) as jest.Mock;
    mockUseSomeExternalService.mockImplementation(() => ({
      data: null,
      error: new Error('Mocked error'),
      isLoading: false,
    }));

    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText('An error occurred')).toBeInTheDocument();
  });

  it('should handle user interactions', async () => {
    const mockUseSomeExternalService = (useSomeExternalService as unknown) as jest.Mock;
    mockUseSomeExternalService.mockImplementation(() => ({
      data: { someData: 'mockedData' },
      error: null,
      isLoading: false,
    }));

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(mockUseSomeExternalService).toHaveBeenCalled());
  });

  it('should be accessible and meet WCAG standards', () => {
    const mockUseSomeExternalService = (useSomeExternalService as unknown) as jest.Mock;
    mockUseSomeExternalService.mockImplementation(() => ({
      data: { someData: 'mockedData' },
      error: null,
      isLoading: false,
    }));

    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByRole('button', { name: /submit/i })).toBeVisible();
    expect(screen.getByText('mockedData')).toHaveAttribute('aria-live', 'polite');
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for better assertions
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./SomeExternalDependency', () => ({
  useSomeExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component without errors', async () => {
    const mockUseSomeExternalService = (useSomeExternalService as unknown) as jest.Mock;
    mockUseSomeExternalService.mockImplementation(() => ({
      data: { someData: 'mockedData' },
      error: null,
      isLoading: false,
    }));

    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText('mockedData')).toBeInTheDocument();
  });

  it('should handle loading state', async () => {
    const mockUseSomeExternalService = (useSomeExternalService as unknown) as jest.Mock;
    mockUseSomeExternalService.mockImplementation(() => ({
      data: null,
      error: null,
      isLoading: true,
    }));

    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should handle errors and display an error message', async () => {
    const mockUseSomeExternalService = (useSomeExternalService as unknown) as jest.Mock;
    mockUseSomeExternalService.mockImplementation(() => ({
      data: null,
      error: new Error('Mocked error'),
      isLoading: false,
    }));

    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText('An error occurred')).toBeInTheDocument();
  });

  it('should handle user interactions', async () => {
    const mockUseSomeExternalService = (useSomeExternalService as unknown) as jest.Mock;
    mockUseSomeExternalService.mockImplementation(() => ({
      data: { someData: 'mockedData' },
      error: null,
      isLoading: false,
    }));

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(mockUseSomeExternalService).toHaveBeenCalled());
  });

  it('should be accessible and meet WCAG standards', () => {
    const mockUseSomeExternalService = (useSomeExternalService as unknown) as jest.Mock;
    mockUseSomeExternalService.mockImplementation(() => ({
      data: { someData: 'mockedData' },
      error: null,
      isLoading: false,
    }));

    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByRole('button', { name: /submit/i })).toBeVisible();
    expect(screen.getByText('mockedData')).toHaveAttribute('aria-live', 'polite');
  });
});