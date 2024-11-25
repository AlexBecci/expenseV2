//DATA VIEJA

/* 
import { Expense, ExpenseCategory } from '../types/expense';

export const sampleExpenses: Expense[] = [
    { id: '1', description: 'Compra de comestibles', amount: 150.50, category: 'Alimentación', date: '2023-05-01' },
    { id: '2', description: 'Pago de alquiler', amount: 800, category: 'Vivienda', date: '2023-05-02' },
    { id: '3', description: 'Cena en restaurante', amount: 45.75, category: 'Entretenimiento', date: '2023-05-05' },
    { id: '4', description: 'Factura de electricidad', amount: 75.20, category: 'Servicios', date: '2023-05-10' },
    { id: '5', description: 'Compra de ropa', amount: 120, category: 'Compras', date: '2023-05-15' },
];

export const expenseCategories: ExpenseCategory[] = [
    { name: 'Alimentación', color: 'bg-red-500' },
    { name: 'Vivienda', color: 'bg-blue-500' },
    { name: 'Entretenimiento', color: 'bg-green-500' },
    { name: 'Servicios', color: 'bg-yellow-500' },
    { name: 'Compras', color: 'bg-purple-500' },
]; */

//DATA NUEVA

import { Expense, ExpenseCategory, MonthlyBudget } from '../types/expense';

export const sampleExpenses: Expense[] = [
  { id: '1', description: 'Compra de comestibles', amount: 150.50, category: 'Alimentación', date: '2023-05-01' },
  { id: '2', description: 'Pago de alquiler', amount: 800, category: 'Vivienda', date: '2023-05-02' },
  { id: '3', description: 'Cena en restaurante', amount: 45.75, category: 'Entretenimiento', date: '2023-05-05' },
  { id: '4', description: 'Factura de electricidad', amount: 75.20, category: 'Servicios', date: '2023-05-10' },
  { id: '5', description: 'Compra de ropa', amount: 120, category: 'Compras', date: '2023-05-15' },
  { id: '6', description: 'Suscripción de streaming', amount: 15.99, category: 'Entretenimiento', date: '2023-05-20' },
  { id: '7', description: 'Gasolina', amount: 50, category: 'Transporte', date: '2023-05-22' },
  { id: '8', description: 'Libros', amount: 35, category: 'Educación', date: '2023-05-25' },
  { id: '9', description: 'Cena familiar', amount: 80, category: 'Alimentación', date: '2023-05-28' },
  { id: '10', description: 'Seguro de salud', amount: 200, category: 'Salud', date: '2023-05-30' },
];

export const expenseCategories: ExpenseCategory[] = [
  { name: 'Alimentación', color: 'bg-red-500', budget: 500 },
  { name: 'Vivienda', color: 'bg-blue-500', budget: 1000 },
  { name: 'Entretenimiento', color: 'bg-green-500', budget: 200 },
  { name: 'Servicios', color: 'bg-yellow-500', budget: 300 },
  { name: 'Compras', color: 'bg-purple-500', budget: 200 },
  { name: 'Transporte', color: 'bg-indigo-500', budget: 150 },
  { name: 'Educación', color: 'bg-pink-500', budget: 100 },
  { name: 'Salud', color: 'bg-teal-500', budget: 250 },
];

export const monthlyBudgets: MonthlyBudget[] = [
  { month: '2023-05', amount: 2500 },
  { month: '2023-06', amount: 2600 },
  { month: '2023-07', amount: 2700 },
];

