import React from 'react';
import { Expense } from '../types/expense';

type ExpenseCalendarProps = {
    expenses: Expense[];
    month: string;
};

export const ExpenseCalendar: React.FC<ExpenseCalendarProps> = ({ expenses, month }) => {
    const daysInMonth = new Date(parseInt(month.split('-')[0]), parseInt(month.split('-')[1]), 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const expensesByDay = expenses.reduce((acc, expense) => {
        const day = new Date(expense.date).getDate();
        if (!acc[day]) acc[day] = [];
        acc[day].push(expense);
        return acc;
    }, {} as Record<number, Expense[]>);

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Calendario de Gastos</h2>
            <div className="grid grid-cols-7 gap-2">
                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
                    <div key={day} className="text-center font-bold">{day}</div>
                ))}
                {days.map((day) => (
                    <div key={day} className="border p-2 h-24 overflow-y-auto">
                        <div className="font-bold">{day}</div>
                        {expensesByDay[day]?.map((expense) => (
                            <div key={expense.id} className="text-xs">
                                <span className="font-semibold">{expense.description}</span>
                                <span className="text-red-500 ml-1">${expense.amount.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};


