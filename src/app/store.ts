import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
// import budgetReducer from '../features/budgets/budgetSlice';
// import expenseReducer from '../features/expenses/ExpenseSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    // budget: budgetReducer,
    // expense: expenseReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
