import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '765802466752-72l44mpsrne7freu9sm1r1gdp45nbjlg.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render() {
        return <div>GoogleAuth</div>;
    }
}

export default GoogleAuth;
