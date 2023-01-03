// JavaScript SDK
import PocketBase from 'pocketbase';
import fetch from 'node-fetch';

globalThis.fetch = fetch;

const pb = new PocketBase('http://127.0.0.1:8090');

async function login(user, password) {
    const authData = await pb.collection('users').authWithPassword(user, password);

    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model.id);
}

login('user', 'password');