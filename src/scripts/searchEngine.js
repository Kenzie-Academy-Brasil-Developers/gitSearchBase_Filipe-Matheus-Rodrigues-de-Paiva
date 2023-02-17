import { githubUser, githubUserRepos } from "./profile.js";

export function searchUser () {
    const input = document.querySelector('.search__input');
    const button = document.querySelector('.search__button');

    button.addEventListener('click', async (e) => {
        e.preventDefault()
        
        const userRepos = await githubUserRepos(input.value);
        
        const getUser = await githubUser(input.value);
    })
}