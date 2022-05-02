import {createStructuredSelector} from 'reselect'
import {selectCollectionsLoaded} from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component';
import collectionOverview from './collection-overview.component';
import { compose } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = createStructuredSelector({
    isLoading : (state) => !selectCollectionsLoaded(state)
});


const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionOverview);


export default CollectionOverviewContainer