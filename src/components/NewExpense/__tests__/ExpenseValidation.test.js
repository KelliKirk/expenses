// src/components/NewExpense/__tests__/ExpenseValidation.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExpenseForm from '../ExpenseForm';

// Mock Error component 
jest.mock('../../UI/Error', () => {
  return function Error({ title, message, onConfirm }) {
    return (
      <div data-testid="error-modal">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onConfirm}>Okay</button>
      </div>
    );
  };
});

describe('ExpenseForm Validation Tests', () => {
  const mockSaveExpenseData = jest.fn();
  const mockCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test 7: Tühja vormi valideerimise testimine
  test('shows error when submitting empty form', () => {
    render(<ExpenseForm onSaveExpenseData={mockSaveExpenseData} onCancel={mockCancel} />);

    const submitButton = screen.getByText('Add Expense');
    
    // Esitame tühja vormi
    fireEvent.click(submitButton);

    // Kontrollime, et viga kuvatakse
    expect(screen.getByTestId('error-modal')).toBeInTheDocument();
    expect(screen.getByText('Invalid input')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid title or amount or date (non-empty values)')).toBeInTheDocument();
    
    // Kontrollime, et andmeid ei salvestatud
    expect(mockSaveExpenseData).not.toHaveBeenCalled();
  });

  // Test 8: Cancel nupu funktsioonaalsuse testimine
  test('calls cancel handler when cancel button is clicked', () => {
    render(<ExpenseForm onSaveExpenseData={mockSaveExpenseData} onCancel={mockCancel} />);

    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    expect(mockCancel).toHaveBeenCalledTimes(1);
  });
});