import Doc from './models/doc';
import Docs from './collections/docs';

let store = {
  doc: new Doc(),
  //access using store.doc

  // docsCollection: new Docs()
  //access using store.docsCollection
}

export default store;
