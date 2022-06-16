import CryptoJS from 'crypto-js'

const useCrypto = () => {
    function encrypt(value, key, output) {
        // Encrypt
        var ciphertext = CryptoJS.AES.encrypt(value, key).toString();
        output.current.innerText = ciphertext;
    }
    function decrypt(value, key, output) {
        // // Decrypt
        var bytes = CryptoJS.AES.decrypt(value, key);
        var decryptedData = bytes.toString(CryptoJS.enc.Utf8)
        output.current.innerText = decryptedData;
    }
    return {
        encrypt,
        decrypt
    }
}

export default useCrypto;