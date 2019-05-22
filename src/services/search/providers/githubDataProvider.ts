import request from "request-promise";

export const gitApiHost = 'https://api.github.com';

export const getUsers = async (username: string, language: string) => {
    var options = {
        uri: gitApiHost + `/search/users?q=${username} +in:login+language:${language}`,
        headers: {
            'User-Agent': 'node.js'
        },
        timeout:30000,
        json: true // Automatically parses the JSON string in the response
    };
    const response = await request( options );
    return response;
};
