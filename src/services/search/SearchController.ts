import { getUsers } from "./providers/githubDataProvider";

export const getGitUsers = async (username: string, language: string) => {
    if (username.length < 3) {
        return {
            type: "FeatureCollection",
            features: []
        };
    }

    return await getUsers(username, language);
};