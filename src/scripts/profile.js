export async function githubUser (Username) {
    const UserFound = await fetch (`https://api.github.com/users/${Username}`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json())
    .then((res) => {
        if(res.message == 'Not Found') {
            window.location.replace('./src/pages/error.html')
        } else {
            localStorage.setItem('SearchUser', JSON.stringify(res));
            window.location.replace('./src/pages/profile.html');
        }
    })
}

export async function githubUserRepos (Username) {
    const repositoriesFound = await fetch (`https://api.github.com/users/${Username}/repos`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json())
    .then((res) => {
        localStorage.setItem('searchRepo', JSON.stringify(res));
    })
}