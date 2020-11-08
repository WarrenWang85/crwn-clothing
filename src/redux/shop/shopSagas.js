// takeEvery is listen for every action of specific type the we pass to is
import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shopActions";
import shopActionType from "./shopTypes";
export function* fetchCollectoinsAsync() {
  yield console.log("I am fire");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  // collectionRef
  //   .get()
  //   .then((snapshot) => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //     this.setState({ loading: false });
  //   })
  //   .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
}
export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionType.FETCH_COLLECTIONS_START,
    fetchCollectoinsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
