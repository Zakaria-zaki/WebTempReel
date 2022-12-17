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

async function httpCreateSalon(data) {
    const response = await fetch(`${API_URL}/salons/create`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify({
            title: data.title,
            description: data.description,
        })
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

async function httpDeleteSalon(id) {
    const response = await fetch(`${API_URL}/salons/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
    });
    return await response.json();
}

async function httpEditSalon(id, title) {
    const response = await fetch(`${API_URL}/salons/edit/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify({
            title: title,
        })
    });

    return await response.json();
}

export {
    httpGetSalons,
    httpGetOneSalon,
    httpGetSalonMessage,
    httpCreateSalonMessage,
    httpCreateSalon,
    httpDeleteSalon,
    httpEditSalon,
}