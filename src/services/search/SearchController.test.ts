import {getGitUsers} from "./SearchController";
import {userEntity} from "./entity/userEntity";
import request from "request-promise";

jest.mock("request-promise");

describe( "searchController", () => {
    test( "valid user data", async () => {
        (request as any).mockImplementation(() => Promise.resolve( JSON.parse('{"total_count":1,"incomplete_results":false,"items":[{"login":"rupali-soni","id":20706610,"node_id":"MDQ6VXNlcjIwNzA2NjEw","avatar_url":"https://avatars2.githubusercontent.com/u/20706610?v=4","gravatar_id":"","url":"https://api.github.com/users/rupali-soni","html_url":"https://github.com/rupali-soni","followers_url":"https://api.github.com/users/rupali-soni/followers","following_url":"https://api.github.com/users/rupali-soni/following{/other_user}","gists_url":"https://api.github.com/users/rupali-soni/gists{/gist_id}","starred_url":"https://api.github.com/users/rupali-soni/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/rupali-soni/subscriptions","organizations_url":"https://api.github.com/users/rupali-soni/orgs","repos_url":"https://api.github.com/users/rupali-soni/repos","events_url":"https://api.github.com/users/rupali-soni/events{/privacy}","received_events_url":"https://api.github.com/users/rupali-soni/received_events","type":"User","site_admin":false,"score":40.463573}]}') ) );
        const result = await getGitUsers( 'rupali-soni', ['php'] );
        const expected = new userEntity( "rupali-soni", '', "https://avatars2.githubusercontent.com/u/20706610?v=4", 0 );
        expect(result).toEqual([ expected ]);
    });
} );