import { config } from '../../config';

class UserAPI {
  async getUserByID(userID, token) {
    const url = config.API_URL + `/users/${userID}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  }
}

export { UserAPI };
