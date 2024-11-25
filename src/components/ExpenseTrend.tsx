import React from 'react';
import { Expense } from '../types/expense';

type ExpenseTrendProps = {
    expenses: Expense[];
};

export const ExpenseTrend: React.FC<ExpenseTrendProps> = ({ expenses }) => {
    const sortedExpenses = [...expenses].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const dates = sortedExpenses.map((expense) => expense.date);
    const amounts = sortedExpenses.map((expense) => expense.amount);

    const maxAmount = Math.max(...amounts);
    const minDate = new Date(dates[0]);
    const maxDate = new Date(dates[dates.length - 1]);
    const daysDiff = (maxDate.getTime() - minDate.getTime()) / (1000 * 3600 * 24);

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Tendencia de Gastos</h2>
            <div className="relative h-64">
                {sortedExpenses.map((expense) => {
                    const x = ((new Date(expense.date).getTime() - minDate.getTime()) / (1000 * 3600 * 24) / daysDiff) * 100;
                    const y = 100 - (expense.amount / maxAmount) * 100;
                    return (
                        <div
                            key={expense.id}
                            className="absolute w-2 h-2 bg-blue-500 rounded-full"
                            style={{ left: `${x}%`, bottom: `${y}%` }}
                            title={`${expense.date}: $${expense.amount.toFixed(2)}`}
                        ></div>
                    );
                })}
            </div>
            <div className="flex justify-between mt-2">
                <span>{minDate.toLocaleDateString()}</span>
                <span>{maxDate.toLocaleDateString()}</span>
            </div>
        </div>
    );
};
