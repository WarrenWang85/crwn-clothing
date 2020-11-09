import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import CollectionOverviewContainer from "../../components/CollectionsOverview/CollectionOverviewContainer";
import CollectionPageContainer from "../CollectionPage/CollectionPageContainer";

import { fetchCollectionsStart } from "../../redux/shop/shopActions";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  // state = {
  //   loading: true,
  // };

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  // const { updateCollections } = this.props;
  // const collectionRef = firestore.collection("collections");
  //promise pattern
  // fetch(
  //   "https://firestore.googleapis.com/v1/projects/crwn-clothing-9269d/databases/(default)/documents/collections"
  // )
  //   .then((response) => response.json())
  // .then((collections) => console.log(collections));
  /////////////////////////////////////////////////////////////////
  // collectionRef.get().then((snapshot) => {
  //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   updateCollections(collectionsMap);
  //   this.setState({ loading: false });
  // });
  //observer pattern
  // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
  //   async (snapshot) => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     updateCollections(collectionsMap);
  //     this.setState({ loading: false });
  //   }
  // );

  // const { loading } = this.state;
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // updateCollections: (collectionsMap) =>
  //   dispatch(updateCollections(collectionsMap)),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
