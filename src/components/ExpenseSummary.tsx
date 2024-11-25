import React from 'react';
import { Expense } from '../types/expense';

type ExpenseSummaryProps = {
    expenses: Expense[];
};

export const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ expenses }) => {
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Resumen de Gastos</h2>
            <p className="text-4xl font-bold text-blue-600">${totalExpenses.toFixed(2)}</p>
            <p className="text-gray-600">Total de gastos este mes</p>
        </div>
    );
};


