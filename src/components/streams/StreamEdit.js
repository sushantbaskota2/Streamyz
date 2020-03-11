import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions/index';
import StreamForm from './StreamForm';
import Spinner from '../Spinner';
import _ from 'lodash';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit = ({ title, description }) => {
        this.props.editStream(this.props.stream.id, { title, description });
    };
    render() {
        if (!this.props.stream) {
            return <Spinner />;
        }
        return (
            <div>
                <h3>Edit a stream</h3>
                <StreamForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
