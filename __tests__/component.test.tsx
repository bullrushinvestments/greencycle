import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchProductDetails: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial state', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays product details after fetching data successfully', async () => {
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce({
      id: '1',
      name: 'Sample Product',
      price: '$9.99',
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/sample product/i)).toBeInTheDocument());
  });

  test('handles error when fetching data fails', async () => {
    (fetchProductDetails as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/error loading product details/i)).toBeInTheDocument());
  });

  test('allows user interaction with buttons and inputs', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    expect(fetchProductDetails).toHaveBeenCalled();
  });

  test('tests accessibility features', async () => {
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce({
      id: '1',
      name: 'Sample Product',
      price: '$9.99',
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/sample product/i)).toBeInTheDocument());
    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('tests loading states', async () => {
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce({
      id: '1',
      name: 'Sample Product',
      price: '$9.99',
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  });

  test('tests edge cases', async () => {
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce({
      id: '1',
      name: '',
      price: '$9.99',
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/product details/i)).toBeInTheDocument());
  });

  test('tests form submission', () => {
    const handleSubmit = jest.fn();
    render(
      <CoreFunctionalityComponent
        onSubmit={handleSubmit}
      />
    );
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(handleSubmit).toHaveBeenCalledWith({ email: 'test@example.com' });
  });

  test('tests button click events', () => {
    const handleClick = jest.fn();
    render(
      <CoreFunctionalityComponent
        onButtonClick={handleClick}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(handleClick).toHaveBeenCalled();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchProductDetails: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial state', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays product details after fetching data successfully', async () => {
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce({
      id: '1',
      name: 'Sample Product',
      price: '$9.99',
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/sample product/i)).toBeInTheDocument());
  });

  test('handles error when fetching data fails', async () => {
    (fetchProductDetails as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/error loading product details/i)).toBeInTheDocument());
  });

  test('allows user interaction with buttons and inputs', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    expect(fetchProductDetails).toHaveBeenCalled();
  });

  test('tests accessibility features', async () => {
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce({
      id: '1',
      name: 'Sample Product',
      price: '$9.99',
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/sample product/i)).toBeInTheDocument());
    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('tests loading states', async () => {
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce({
      id: '1',
      name: 'Sample Product',
      price: '$9.99',
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  });

  test('tests edge cases', async () => {
    (fetchProductDetails as jest.Mock).mockResolvedValueOnce({
      id: '1',
      name: '',
      price: '$9.99',
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/product details/i)).toBeInTheDocument());
  });

  test('tests form submission', () => {
    const handleSubmit = jest.fn();
    render(
      <CoreFunctionalityComponent
        onSubmit={handleSubmit}
      />
    );
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(handleSubmit).toHaveBeenCalledWith({ email: 'test@example.com' });
  });

  test('tests button click events', () => {
    const handleClick = jest.fn();
    render(
      <CoreFunctionalityComponent
        onButtonClick={handleClick}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(handleClick).toHaveBeenCalled();
  });
});