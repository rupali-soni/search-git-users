import request from "request-promise";

export const getUsers = async (username: string, language: string) => {
    console.log(`https://api.github.com/search/users?q=${username}in:login:${username}+language:${language}`);
    var options = {
        uri: `https://api.github.com/search/users?q=${username}+in:login:${username}+language:${language}`,
        headers: {
            'User-Agent': 'node.js'
        },
        json: true // Automatically parses the JSON string in the response
    };
    const response = await request(options);
    return response;
};