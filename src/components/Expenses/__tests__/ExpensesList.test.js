// src/components/Expenses/__tests__/ExpensesList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExpensesList from '../ExpensesList';

// Mock ExpenseItem component
jest.mock('../ExpenseItem', () => {
  return function ExpenseItem({ data }) {
    return (
      <li data-testid="expense-item">
        <span>{data.title}</span>
        <span>{data.amount}</span>
      </li>
    );
  };
});

describe('ExpensesList Component', () => {
  const mockExpenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023, 2, 28)
    },
    {
      id: 'e2', 
      title: 'New TV',
      amount: 799.49,
      date: new Date(2023, 5, 12)
    }
  ];

  // Test 3: Loading oleku testimine
  test('displays loading message when isLoading is true', () => {
    render(<ExpensesList isLoading={true} filteredExpenses={[]} />);

    expect(screen.getByText('Fetching expenses data...')).toBeInTheDocument();
  });

  // Test 4: Tühja nimekirja käsitlemine
  test('displays message when no expenses are found', () => {
    render(<ExpensesList isLoading={false} filteredExpenses={[]} />);

    expect(screen.getByText('No expenses found.')).toBeInTheDocument();
  });
});