"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubserviceApi_1 = require("./GithubserviceApi");
var svc = new GithubserviceApi_1.GithubserviceApi;
svc.getUserInfo('redeemer5', function (user) {
    console.log(user);
});
svc.getRepos('redeemer5', function (repos) {
    console.log(repos);
});
