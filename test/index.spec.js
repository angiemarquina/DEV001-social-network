// importamos la funcion que vamos a testear
import { describe, expect, it, jest } from 'jest';
jest.mock('auth');
import { getAuth } from 'firebase/auth';
import { signUp } from '../src/fiberbase/firebase';

describe('signUp()', () => {
  it('debería crear un usuario con correo y contraseña', () => {
    const email = 'cohabita@hotmail.com';
    const password = 'cohabita123';

    expect(signUp(email, password)).resolves.toBeUndefined();
  });
});
