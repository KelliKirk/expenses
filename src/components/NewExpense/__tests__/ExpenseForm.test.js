// src/components/NewExpense/__tests__/ExpenseForm.test.js
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

describe('ExpenseForm Component', () => {
  const mockSaveExpenseData = jest.fn();
  const mockCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test 5: Vormi väljade renderdamine ja sisestamine
  test('renders form fields and accepts user input', () => {
    render(<ExpenseForm onSaveExpenseData={mockSaveExpenseData} onCancel={mockCancel} />);

    // Kasutame täpsemaid selektoreid
    const titleInput = screen.getByRole('textbox'); // text input
    const amountInput = screen.getByRole('spinbutton'); // number input
    
    // Date input ei ole standard role, seega kasutame type atribuuti
    const dateInput = document.querySelector('input[type="date"]');
    
    expect(titleInput).toBeInTheDocument();
    expect(amountInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();

    // Testame sisestamist
    fireEvent.change(titleInput, { target: { value: 'Test Expense' } });
    fireEvent.change(amountInput, { target: { value: '100.50' } });
    fireEvent.change(dateInput, { target: { value: '2025-12-01' } });

    expect(titleInput.value).toBe('Test Expense');
    expect(amountInput.value).toBe('100.50');
    expect(dateInput.value).toBe('2025-12-01');
  });

  // Test 6: Vormi esitamine õigete andmetega
  test('submits form with correct data', () => {
    render(<ExpenseForm onSaveExpenseData={mockSaveExpenseData} onCancel={mockCancel} />);

    // Kasutame samu selektoreid nagu eelmises testis
    const titleInput = screen.getByRole('textbox');
    const amountInput = screen.getByRole('spinbutton');
    const dateInput = document.querySelector('input[type="date"]');
    const submitButton = screen.getByText('Add Expense');

    // Täidame vormi
    fireEvent.change(titleInput, { target: { value: 'Test Expense' } });
    fireEvent.change(amountInput, { target: { value: '100.50' } });
    fireEvent.change(dateInput, { target: { value: '2025-12-01' } });

    // Esitame vormi
    fireEvent.click(submitButton);

    // Kontrollime, et callback kutsuti õigete andmetega
    expect(mockSaveExpenseData).toHaveBeenCalledTimes(1);
    expect(mockSaveExpenseData).toHaveBeenCalledWith({
      title: 'Test Expense',
      amount: 100.50,
      date: new Date('2025-12-01')
    });
  });

  // Lisatest: Valideerimise testimine
  test('shows error when form is submitted with empty fields', () => {
    render(<ExpenseForm onSaveExpenseData={mockSaveExpenseData} onCancel={mockCancel} />);

    const submitButton = screen.getByText('Add Expense');
    
    // Esitame tühja vormi
    fireEvent.click(submitButton);

    // Kontrollime, et viga kuvatakse
    expect(screen.getByTestId('error-modal')).toBeInTheDocument();
    expect(screen.getByText('Invalid input')).toBeInTheDocument();
    
    // Kontrollime, et callback ei kutsutud
    expect(mockSaveExpenseData).not.toHaveBeenCalled();
  });

  // Lisatest: Veateate sulgemine
  test('closes error modal when okay button is clicked', () => {
    render(<ExpenseForm onSaveExpenseData={mockSaveExpenseData} onCancel={mockCancel} />);

    const submitButton = screen.getByText('Add Expense');
    
    // Esitame tühja vormi, et viga tekitada
    fireEvent.click(submitButton);
    
    // Kontrollime, et viga kuvatakse
    expect(screen.getByTestId('error-modal')).toBeInTheDocument();
    
    // Sulgeme veateate
    const okayButton = screen.getByText('Okay');
    fireEvent.click(okayButton);
    
    // Kontrollime, et viga ei kuvata enam
    expect(screen.queryByTestId('error-modal')).not.toBeInTheDocument();
  });
});