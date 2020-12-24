import React from 'react';
import Sampledata from '../component/Sampledata';

class SampleDataContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper list-section">
                <Sampledata />
            </div>
        );
    }
}
/* 
function mapStateToProps(state) {
    return {
        roles: state.commonReducer.roles
    };
} */

export default (SampleDataContainer);
