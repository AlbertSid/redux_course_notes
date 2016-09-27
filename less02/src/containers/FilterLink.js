import {connect} from 'react-redux';

import * as actions from './../actions';
import Link from './../components/Link';

//link => FilterLink

const mapStateToLinkProps = (state,ownProps)=>({
    active:ownProps.filter === state.Filter
})

const mapDispatchToLinkProps = (dispatch,ownProps)=>({
    onClick(){
      dispatch(actions.setVisibilityFilter(ownProps.filter)) 
    }
})

const FilterLink = connect(
 mapStateToLinkProps,
 mapDispatchToLinkProps
)(Link);

export default FilterLink
