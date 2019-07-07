import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';



// constatnt
const options : any = {
    headers:{
        'User-Agent': 'request'
    },
    json: true
};


export class GithubserviceApi
{
    getUserInfo(userName: string, cb: (user:User)=>any)
    {
        request.get('http://api.github.com/users/' + userName, options, (error:any,response:any,body:any) =>
        {
            let user = new User(body);
            cb(user);
        })
    }

    getRepos(userName: string, cb: (repos:Repo[])=>any)
    {
        request.get('http://api.github.com/users/' + userName + '/repos', options, (error:any,response:any,body:any) =>
        {
        let repos = body.map((repo:any) => new Repo(repo));
        cb(repos);
        }) 
    }
}