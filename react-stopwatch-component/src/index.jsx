import React from 'react';
import ReactDOM from 'react-dom/client';
import { CustomButton } from './stopwatch';
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<CustomButton />);
