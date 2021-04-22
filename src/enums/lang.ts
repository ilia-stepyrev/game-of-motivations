// To add supporting of new language: 
// 1. Add a new option here
// 2. Add a new file inside the folder constants/langs
// 3. Implement the interface LangDefinition in the constant inside the file
// 4. Add this new constant to the map SupportedLangs
export enum Lang {
    EN = 'en',
    RU = 'ru',
}