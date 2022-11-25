const crypto = require('node:crypto');
const { subtle } = crypto;

async function generateAesKey(length = 256) {
    const key = await subtle.generateKey(
        {
            name: 'AES-CBC',
            length,
        },
        true,
        ['encrypt', 'decrypt'],
    );
    return key;
}

async function aesEncrypt(plaintext) {
    const ec = new TextEncoder();
    const key = await generateAesKey();
    const iv = crypto.getRandomValues(new Uint8Array(16));
    const ciphertext = await crypto.subtle.encrypt(
        {
            name: 'AES-CBC',
            iv,
        },
        key,
        ec.encode(plaintext),
    );
    return {
        key,
        iv,
        ciphertext,
    };
}

async function aesDecrypt(ciphertext, key, iv) {
    const dec = new TextDecoder();
    const plaintext = await crypto.subtle.decrypt(
        {
            name: 'AES-CBC',
            iv,
        },
        key,
        ciphertext,
    );
    return dec.decode(plaintext);
}

async function msg(message) {
    const { key, iv, ciphertext } = await aesEncrypt(message);
    console.log(ciphertext);
    console.log(await aesDecrypt(ciphertext, key, iv));
}
msg('Dung');
