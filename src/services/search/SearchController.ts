import { getUsers } from "./providers/githubDataProvider";
import {userEntity} from "./entity/userEntity";
import {getUserDetails} from "./providers/githubUserDetailsDataProvider";
import { logger } from "../../middleware/logger";

export const getGitUsers = async (username: string, languageArray: Array<string>) => {
    let users: Array<userEntity> = [];
    for( let language of languageArray ) {
        logger.log({
            level: 'info',
            message: 'Called getGitUsers API for username: ' + username + ' & language: ' + language
        });
        const searchResults = await getUsers(username, language);
        if ( false != searchResults && 0 !== searchResults.total_count ) {
            for (let item of searchResults.items) {
                let additionalUserDetails = await getUserDetails(item.id);
                let name = '';
                let numberOfFollowers = 0;
                if (additionalUserDetails != false && ("name" in additionalUserDetails) == true) {
                    name = additionalUserDetails.name;
                    numberOfFollowers = additionalUserDetails.followers;
                }
                users.push(
                    new userEntity(
                        item.login,
                        name,
                        item.avatar_url,
                        numberOfFollowers
                    )
                );
            }
            break; //Break the language loop, because we need fallback, when we dont get result for a language
        } else {
            logger.log({
                level: 'info',
                message: 'failed to get result, Response: ' + JSON.stringify( searchResults )
            });
        }
    }
    return users;
};