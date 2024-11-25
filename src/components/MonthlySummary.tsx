import React from 'react';
import { Expense, MonthlyBudget } from '../types/expense';

type MonthlySummaryProps = {
    expenses: Expense[];
    monthlyBudget: MonthlyBudget;
};

export const MonthlySummary: React.FC<MonthlySummaryProps> = ({ expenses, monthlyBudget }) => {
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const remainingBudget = monthlyBudget.amount - totalExpenses;
    const percentageSpent = (totalExpenses / monthlyBudget.amount) * 100;

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Resumen Mensual</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <p className="text-sm text-gray-600">Presupuesto</p>
                    <p className="text-2xl font-bold text-green-600">${monthlyBudget.amount.toFixed(2)}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">Gastos</p>
                    <p className="text-2xl font-bold text-red-600">${totalExpenses.toFixed(2)}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">Restante</p>
                    <p className="text-2xl font-bold text-blue-600">${remainingBudget.toFixed(2)}</p>
                </div>
            </div>
            <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${percentageSpent}%` }}
                    ></div>
                </div>
                <p className="text-sm text
-gray-600 mt-2">
                    Has gastado el {percentageSpent.toFixed(2)}% de tu presupuesto mensual
                </p>
            </div>
        </div>
    );
};


