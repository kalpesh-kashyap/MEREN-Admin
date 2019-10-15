import React from 'react';
import './App.css';
import DefaultLayout from './DefaultLayout/DefaultLayout';

// const DefaultLayout = React.lazy(() => import('./DefaultLayout'));

function App() {
    return (
        <div>
            <DefaultLayout/>
        </div>
    );
}

export default App;
