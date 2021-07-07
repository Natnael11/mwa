angular.module("meanTravel").factory("AuthFactory", AuthFactory);

function AuthFactory() {
  let auth = false;
  return {
    auth: auth,
  };
}
