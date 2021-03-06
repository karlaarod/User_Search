export const BASE_URL = "https://api.github.com/";



export const callApi = async ({ url, method, token, body }) => {
  // console.log("callApi: ", { url, method,token, body });

  try {
    const options = {
      method: method ? method.toUpperCase() : "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    // console.log("options ", options);
    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(BASE_URL + url, options);
    const data = await response.json();
    // console.log("data: ", data);
    if (data.error) throw data.error;
    return data;
  } catch (error) {
    console.log('error:', error)
  }
};


