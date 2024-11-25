import React from 'react';
import { ExpenseCategory } from '../types/expense';

type ExpenseFiltersProps = {
    categories: ExpenseCategory[];
    onCategoryChange: (category: string) => void;
    onDateChange: (startDate: string, endDate: string) => void;
};

export const ExpenseFilters: React.FC<ExpenseFiltersProps> = ({ categories, onCategoryChange, onDateChange }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Filtros</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Categoría
                    </label>
                    <select
                        id="category"
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={(e) => onCategoryChange(e.target.value)}
                    >
                        <option value="">Todas las categorías</option>
                        {categories.map((category) => (
                            <option key={category.name} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700 mb-1">
                        Rango de fechas
                    </label>
                    <div className="flex space-x-2">
                        <input
                            type="date"
                            id="startDate"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) => onDateChange(e.target.value, '')}
                        />
                        <input
                            type="date"
                            id="endDate"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) => onDateChange('', e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};


