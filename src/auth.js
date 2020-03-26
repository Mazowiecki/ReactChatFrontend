class Auth {
    constructor() {
        this.authenticated = false;
    }

    noAuthentication() {
        localStorage.removeItem('token');
    }

    isAuthenticated() {
        const token = localStorage.getItem('token');
        if (token) {
            this.authenticated = true;
        }
        return this.authenticated;
    }
}

export default new Auth();
