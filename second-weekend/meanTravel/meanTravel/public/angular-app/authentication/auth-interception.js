

angular.module("meanTravel").factory("AuthInterceptor", AuthInterceptor );

function AuthInterceptor($window) {
    return  {
    request : request,
    // response : response,
    // responseError : responseError,
    }

function request(config) {
    config.headers = config.headers || {};
    if($window.sessionStorage.token) {
        config.headers.Authorization = "Bearer " + $window.sessionStorage.token;
    }
    return config;
}
};