export type Expense = {
    id: string;
    description: string;
    amount: number;
    category: string;
    date: string;
};

export type ExpenseCategory = {
    name: string;
    color: string;
    budget: number
};

export type MonthlyBudget = {
    month: string;
    amount: number;
};
