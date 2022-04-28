import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../Components/with-spinner/with-spinner.component";
import { selectCollectionsLoaded } from "../../redux/shop/shop.selectors";
import  CollectionPage from './collection.component'



const mapStateToProps = createStructuredSelector({
    isLoading : (state) =>  !selectCollectionsLoaded(state)
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionContainer