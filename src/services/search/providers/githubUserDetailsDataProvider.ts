import request from "request-promise";
import  { gitApiHost } from "./githubDataProvider";

/**
 * @param id
 */
export const getUserDetails = async ( id: Number ) => {
    var options = {
        uri: gitApiHost + `/user/${id}`,
        headers: {
            'User-Agent': 'node.js'
        },
        json: true
    };
    const response = await request( options )
        .then(function ( results ) {
            return results;
        })
        .catch(function (err) {
            return false;
        });
    return response;
};