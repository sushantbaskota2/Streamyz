import React from 'react';
import { PongSpinner } from 'react-spinners-kit';
const Spinner = () => {
    return (
        <div style={{ marginLeft: '350px', marginTop: '50vh' }}>
            <PongSpinner size={100} color='#686769' loading={true} />
        </div>
    );
};

export default Spinner;
