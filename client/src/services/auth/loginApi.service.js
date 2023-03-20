import { config } from '../../config';

const url = config.API_URL + '/auth/login';
class LoginAPI {
  async post(payload) {
     const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (res.status !== 200) {
        throw new Error(res.statusText)
      }

      return res;
  }
}

export { LoginAPI };
