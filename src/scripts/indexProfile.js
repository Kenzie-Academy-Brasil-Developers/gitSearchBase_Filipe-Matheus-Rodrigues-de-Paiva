import { renderProfile } from "./render.js";

const user = JSON.parse(localStorage.getItem('SearchUser'))

const repositories = JSON.parse(localStorage.getItem('searchRepo'));

renderProfile(user, repositories);