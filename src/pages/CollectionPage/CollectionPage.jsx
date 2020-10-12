import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shopSeletors";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import "./CollectionPage.scss";
function CollectionPage({ collection }) {
  const { title, items } = collection;
  //currying
  // const multiply = (a, b) => a * b;
  // console.log(multiply(3, 4));
  // const curriedMultiply = (a) => (b) => a * b;
  // console.log(curriedMultiply(5)(3));
  // const curriedMultiplyBy5 = curriedMultiply(5);
  // curriedMultiplyBy5(4)
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => ({
  //This is necessary(state) because unlike other selectors, this selector needs
  //a part of the state depending on the URL parameter!
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
