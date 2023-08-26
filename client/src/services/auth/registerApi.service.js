class RegisterAPI {
  async post(url, payload) {
    
    console.log('url: ', url)
    console.log('payload: ', payload)


    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    console.log('response ------->', response)

    return response;
  }
}

export { RegisterAPI };
