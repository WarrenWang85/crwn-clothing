import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shopSeletors";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import "./CollectionsOverview.scss";
function CollectionsOverview({ collections }) {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}
const MapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(MapStateToProps)(CollectionsOverview);
