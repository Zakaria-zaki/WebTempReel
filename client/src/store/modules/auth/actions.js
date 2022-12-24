export default {
    async login(context, payload) {
        try {
            const response = await fetch('http://localhost:8000/v1/signin', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password
                }),
            });
            const responseData = await response.json();
            if (!response.ok) {
                console.log(responseData);
                const error = new Error(responseData.message || 'Failed to authenticate. Check your login data.');
                throw error;
            }
    
            localStorage.setItem('esgi-ws-token', responseData.token);
            context.commit('setUser', {
                token: responseData.token
            });
        } catch (ex) {
            const error = new Error(ex || 'Failed to authenticate. Check your login data.');
            throw error;
        }   

    },
    tryLogin(context) {
        const token = localStorage.getItem('esgi-ws-token');

        if (token) {
            context.commit('setUser', {
                token: token,
            });
        }
    },
}