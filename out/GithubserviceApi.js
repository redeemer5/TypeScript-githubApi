"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
// constatnt
var options = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GithubserviceApi = /** @class */ (function () {
    function GithubserviceApi() {
    }
    GithubserviceApi.prototype.getUserInfo = function (userName, cb) {
        request.get('http://api.github.com/users/' + userName, options, function (error, response, body) {
            var user = new User_1.User(body);
            cb(user);
        });
    };
    GithubserviceApi.prototype.getRepos = function (userName, cb) {
        request.get('http://api.github.com/users/' + userName + '/repos', options, function (error, response, body) {
            var repos = body.map(function (repo) { return new Repo_1.Repo(repo); });
            cb(repos);
        });
    };
    return GithubserviceApi;
}());
exports.GithubserviceApi = GithubserviceApi;
