import React from 'react';
import { Expense } from '../types/expense';

type ExpenseListProps = {
    expenses: Expense[];
};

export const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Lista de Transacciones</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id} className="border-b py-2 flex justify-between items-center">
                        <div>
                            <p className="font-semibold">{expense.description}</p>
                            <p className="text-sm text-gray-600">{expense.date}</p>
                        </div>
                        <div>
                            <span className="font-bold text-red-500">-${expense.amount.toFixed(2)}</span>
                            <span className="ml-2 text-sm bg-gray-200 rounded-full px-2 py-1">{expense.category}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};


