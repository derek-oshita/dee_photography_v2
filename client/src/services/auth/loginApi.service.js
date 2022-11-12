import { config } from '../../config';

class LoginAPI {
  async post(payload) {
    const url = config.API_URL + '/auth/login';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return response.json();
  }
}

export { LoginAPI };
