import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            <button>Page 2</button>
            Page 1
        </div>
    );
};
const PageTwo = () => {
    return <div>Page 2</div>;
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' exact component={PageOne} />
                <Route path='/pageTwo' exact component={PageTwo} />
            </BrowserRouter>
        </div>
    );
};

export default App;
