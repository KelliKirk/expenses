// src/components/Expenses/__tests__/ExpenseItem.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExpenseItem from '../ExpenseItem';

// Mock ExpenseDate component
jest.mock('../ExpenseDate', () => {
  return function ExpenseDate({ date }) {
    return (
      <div data-testid="expense-date">
        <div>{date.toLocaleString('default', { month: 'long' })}</div>
        <div>{date.getDate()}</div>
        <div>{date.getFullYear()}</div>
      </div>
    );
  };
});

// Mock Card component - õige tee Expenses kaustast UI kausta
jest.mock('../../UI/Card', () => {
  return function Card({ children, className }) {
    return <div className={className}>{children}</div>;
  };
});

describe('ExpenseItem Component', () => {
  const mockExpenseData = {
    id: 'e1',
    title: 'Test Expense',
    amount: 294.67,
    date: new Date(2023, 2, 28)
  };

  // Test 1: ExpenseItem komponendi renderdamine
  test('renders expense item with correct data', () => {
    render(<ExpenseItem data={mockExpenseData} />);

    // Kontrollime, et kõik andmed on olemas
    expect(screen.getByText('Test Expense')).toBeInTheDocument();
    expect(screen.getByText('294.67')).toBeInTheDocument();
    expect(screen.getByText('March')).toBeInTheDocument();
    expect(screen.getByText('28')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
  });

  // Test 2: Komponendi struktuuri testimine
  test('has correct CSS classes and structure', () => {
    render(<ExpenseItem data={mockExpenseData} />);

    const expenseItem = document.querySelector('.expense-item');
    const description = document.querySelector('.expense-item__description');
    const amount = document.querySelector('.expense-item__amount');

    expect(expenseItem).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(amount).toBeInTheDocument();
  });
});