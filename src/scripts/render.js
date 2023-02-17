export function renderProfile (objeto, array) {
    const mainContainer = document.querySelector('.container__main');

    mainContainer.innerHTML = '';

    const header = renderHeader(objeto);
    
    mainContainer.appendChild(header);

    const containerRepos = document.createElement('div');
    containerRepos.classList.add('container__repos');

    array.forEach(element => {
        const repositorioCard = renderRepos (element);

        containerRepos.append(repositorioCard);
    });

    mainContainer.append(containerRepos);

    return mainContainer;
}

function renderHeader(objeto) {
    const containerHeader = document.createElement('div');
    containerHeader.classList.add('user__header');

        const userStats = document.createElement('div');
        userStats.classList.add('user__stats');

            const userImage = document.createElement('img');
            userImage.src = objeto.avatar_url;
            userImage.alt = objeto.name;

            const h2 = document.createElement('h2');
            h2.innerHTML = objeto.name;
        
        const ancora = document.createElement('a');
        ancora.href = '/index.html';
        ancora.innerHTML = 'Trocar de Usuário'
        
        userStats.append(userImage, h2);
    containerHeader.append(userStats, ancora);

    return containerHeader;
}

function renderRepos (element) {
    const repoCard = document.createElement('div');
    repoCard.classList.add('repo');

        const h2 = document.createElement('h2');
        h2.innerHTML = element.name;

        const small = document.createElement('small');
        small.innerHTML = element.description;

        const ancoraRepositorio = document.createElement('a');
        ancoraRepositorio.href = element.html_url;
        ancoraRepositorio.innerHTML = 'Repositório';

    repoCard.append(h2, small, ancoraRepositorio);

    return repoCard;
}