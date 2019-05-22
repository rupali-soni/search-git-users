import validator from "validator";

export const filterSearchParams = (
    username: string,
    language: string
) => {
    let filteredUsername = validator.trim( username );
    let languageArray = language.split("," ).map((item: string) => item.trim() );
    return {
        "username": filteredUsername,
        "language": languageArray
    }
};