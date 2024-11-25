import React from 'react';
import { Expense, ExpenseCategory } from '../types/expense';

type ExpenseChartProps = {
    expenses: Expense[];
    categories: ExpenseCategory[];
};

export const ExpenseChart: React.FC<ExpenseChartProps> = ({ expenses, categories }) => {
    const categoryTotals = categories.map((category) => ({
        ...category,
        total: expenses
            .filter((expense) => expense.category === category.name)
            .reduce((sum, expense) => sum + expense.amount, 0),
    }));

    const maxTotal = Math.max(...categoryTotals.map((cat) => cat.total));

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Gastos por Categoría</h2>
            <div className="space-y-4">
                {categoryTotals.map((category) => (
                    <div key={category.name}>
                        <div className="flex justify-between items-center mb-1">
                            <span>{category.name}</span>
                            <span className="font-semibold">${category.total.toFixed(2)}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className={`h-2.5 rounded-full ${category.color}`}
                                style={{ width: `${(category.total / maxTotal) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


