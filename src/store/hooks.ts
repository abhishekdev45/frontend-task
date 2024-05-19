import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Custom hook to use the Redux dispatch function, typed to the AppDispatch type
export const useAppDispatch: () => AppDispatch = useDispatch;

// Custom hook to use the Redux selector function, typed to the RootState type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
