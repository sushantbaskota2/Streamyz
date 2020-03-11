import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions/index';
import Spinner from '../Spinner';

class StreamShow extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    render() {
        if (!this.props.stream) {
            return <Spinner />;
        }
        return <div>asdfasdasd</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
