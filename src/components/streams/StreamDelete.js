import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import Spinner from '../Spinner';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    actions = () => {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button
                    className='ui button negative'
                    onClick={() => {
                        this.props.deleteStream(id);
                    }}
                >
                    Delete
                </button>,
                <Link to='/' className='ui button'>
                    Cancel
                </Link>
            </React.Fragment>
        );
    };
    renderContent = () => {
        return `Are you sure you want to delete this stream ? Title: ${this.props.stream.title}`;
    };
    render() {
        if (!this.props.stream) {
            return <Spinner />;
        }
        return (
            <div>
                StreamDelete
                <Modal
                    title='Delete Stream'
                    description={this.renderContent()}
                    actions={this.actions}
                    onDismiss={() => {
                        history.push('/');
                    }}
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

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
