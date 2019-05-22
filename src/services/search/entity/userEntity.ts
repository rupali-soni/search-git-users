export class userEntity {
    private userName: String = '';
    private name: String = '';
    private avtarURL: String = '';
    private followers: Number = 0;

    constructor(
                userName: String,
                name: String,
                avtarURL: String,
                followers: Number) {
        this.userName = userName;
        this.name = name;
        this.avtarURL = avtarURL;
        this.followers = followers;
    }
}