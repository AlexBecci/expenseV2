'use client'

import React, { useState } from 'react';
import { sampleExpenses, expenseCategories, monthlyBudgets } from '../data/sampleData';
import { MonthlySummary } from '../components/MonthlySummary';
import { ExpenseFilters } from '../components/ExpenseFilters';
import { AddExpenseForm } from '../components/AddExmpenseForm';
import { ExpenseChart } from '../components/ExpenseChart';
import { ExpenseTrend } from '../components/ExpenseTrend';
import { ExpenseCalendar } from '../components/ExpenseCalendar';
import { ExpenseList } from '../components/ExpenseList';

export function Home() {
    const [expenses, setExpenses] = useState(sampleExpenses);
    const [filteredExpenses, setFilteredExpenses] = useState(sampleExpenses);
    const [selectedMonth, setSelectedMonth] = useState('2023-05');

    const handleAddExpense = (newExpense: any) => {
        setExpenses([...expenses, newExpense]);
        setFilteredExpenses([...filteredExpenses, newExpense]);
    };

    const handleCategoryFilter = (category: string) => {
        if (category === '') {
            setFilteredExpenses(expenses);
        } else {
            setFilteredExpenses(expenses.filter(expense => expense.category === category));
        }
    };

    const handleDateFilter = (startDate: string, endDate: string) => {
        let filtered = expenses;
        if (startDate) {
            filtered = filtered.filter(expense => expense.date >= startDate);
        }
        if (endDate) {
            filtered = filtered.filter(expense => expense.date <= endDate);
        }
        setFilteredExpenses(filtered);
    };

    return (
        <div className="container textGothamMedium mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Mi Aplicación de Gastos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <MonthlySummary
                        expenses={filteredExpenses}
                        monthlyBudget={monthlyBudgets.find(budget => budget.month === selectedMonth) || monthlyBudgets[0]}
                    />
                    <ExpenseFilters
                        categories={expenseCategories}
                        onCategoryChange={handleCategoryFilter}
                        onDateChange={handleDateFilter}
                    />
                    <AddExpenseForm /* onAddExpense={handleAddExpense} */ /* categories={expenseCategories} */ />
                </div>
                <div>
                    <ExpenseChart expenses={filteredExpenses} categories={expenseCategories} />
                    <ExpenseTrend expenses={filteredExpenses} />
                </div>
            </div>
            <div className="mt-8">
                <ExpenseCalendar expenses={filteredExpenses} month={selectedMonth} />
            </div>
            <div className="mt-8">
                <ExpenseList expenses={filteredExpenses} />
            </div>
        </div>
    );
}

