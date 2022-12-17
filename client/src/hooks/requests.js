const API_URL = 'http://localhost:8000/v1';
const jwt = localStorage.getItem('esgi-ws-token');

async function httpGetSalons() {
    const response = await fetch(`${API_URL}/salons`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
    });
    return await response.json();
}

async function httpGetOneSalon(id) {
    const response = await fetch(`${API_URL}/salons/${id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    });

    return await response.json();
}

async function httpGetSalonMessage(id) {
    const response = await fetch(`${API_URL}/messages/salons/${id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    });

    return await response.json();
}

async function httpCreateSalonMessage(data) {
    const response = await fetch(`${API_URL}/messages/new`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify({
            salonId: data.salonId,
            content: data.content,
        })
    });

    return await response.json();
}

export {
    httpGetSalons,
    httpGetOneSalon,
    httpGetSalonMessage,
    httpCreateSalonMessage
}