
export function isAuth() {
    if (localStorage.getItem('token')) return true;
    return false
}

