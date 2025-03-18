"use client";
import { Serpent } from 'mipher';

export function encryptSerpent256ECB(block, key) {
    // Check input lengths
    if (block.length !== 16 || key.length !== 32) {
        throw new Error('Invalid input lengths. Block must be 16 bytes and key must be 32 bytes.');
    }

    // Initialize Serpent cipher
    const serpent = new Serpent();

    // Encrypt
    const encryptedBlock = serpent.encrypt(key, block);

    // Convert to Uint8Array if it's not already
    return new Uint8Array(encryptedBlock);
}

export function decryptSerpent256ECB(block, key) {
    // Check input lengths
    if (block.length !== 16 || key.length !== 32) {
        throw new Error('Invalid input lengths. Block must be 16 bytes and key must be 32 bytes.');
    }

    // Initialize Serpent cipher
    const serpent = new Serpent();

    // Decrypt
    const decryptedBlock = serpent.decrypt(key, block);

    // Convert to Uint8Array if it's not already
    return new Uint8Array(decryptedBlock);
}