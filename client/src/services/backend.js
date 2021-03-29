import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND || "http://localhost:4000";

export const createUser = async (email, username, password) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/users`, {
      email,
      username,
      password,
    });

    const { token } = response.data;
    sessionStorage.setItem("token", token);

    return response;
  } catch (error) {
    return error;
  }
};

export const loginUser = async (emailOrUsername, password) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/users/authenticate`, {
      emailOrUsername,
      password,
    });
    const { token } = response.data;
    sessionStorage.setItem("token", token);

    return response;
  } catch (error) {
    return error;
  }
};

export const me = async () => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(`${BACKEND_URL}/users/me`, {
      headers: { authorization: token },
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const getApiKeys = async () => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(`${BACKEND_URL}/api-keys`, {
      headers: { authorization: token },
    });

    return response;
  } catch (error) {
    return error;
  }
};
export const createApiKey = async () => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.post(
      `${BACKEND_URL}/api-keys`,
      {},
      {
        headers: { authorization: token },
      }
    );

    return response;
  } catch (error) {
    return error;
  }
};

export const desactivateApiKey = async (id) => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.put(
      `${BACKEND_URL}/api-keys/${id}`,
      { active: false },
      {
        headers: { authorization: token },
      }
    );

    return response;
  } catch (error) {
    return error;
  }
};

export const getActiveApiKey = async (id) => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(`${BACKEND_URL}/api-keys/active`, {
      headers: { authorization: token },
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const getLogs = async (id) => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(`${BACKEND_URL}/api-keys/${id}/logs`, {
      headers: { authorization: token },
    });

    return response;
  } catch (error) {
    return error;
  }
};
