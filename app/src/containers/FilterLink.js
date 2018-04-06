import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import { bindActionCreators } from 'redux'
 
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}
 
const mapDispatchToProps = (dispatch, ownProps) => {
  // return {
  //   onClick: () => {
  //     dispatch(setVisibilityFilter(ownProps.filter))
  //   }
  // }
  return bindActionCreators(setVisibilityFilter, dispatch)
}
 
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
 
export default FilterLink
