import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Context from './Context';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient


ReactDOM.createRoot(document.getElementById('root')).render(
    <Context> 
        <QueryClientProvider client={queryClient}>
            <App/>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    </Context> 
);