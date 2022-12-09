import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const googleButton = document.queryCommandValue('#buttonLoginGoogle');

googleButton.addEventListener('click', () => {
    
    const provider = new GoogleAuthProvider()

    signInWithPopup()

})