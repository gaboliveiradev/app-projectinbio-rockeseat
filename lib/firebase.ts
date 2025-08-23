import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import "server-only"; // garantir que só rode no lado do servidor, se for chamado no lado do cliente da um erro.

// Certificado ==========================================================================
// Nos da a permissão para a acessar o banco de dados

const decodedKey = Buffer.from(process.env.FIREBASE_PRIVATE_KEY_BASE64!, "base64").toString("utf-8");

export const firebaseCert = cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: decodedKey,
});

// Instancia do app ======================================================================
// Precisamos garantir que esse código rode apenas uma vez, por que se não,
// toda vez que chamarmos esse arquivo, irá inicializar a instancia do app novamente.
// Essa função getApps() serve para vermos quantas instancia do app a gente já criou,
// e caso o length existir, quer dizer que já criamos, então não rodamos.
if (!getApps().length) {
    initializeApp({
        credential: firebaseCert,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });
}

export const db = getFirestore();

export const storage = getStorage().bucket();