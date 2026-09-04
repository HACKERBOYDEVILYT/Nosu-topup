const BASE_URL =
  process.env.EPINBY_BASE_URL ||
  "https://www.epinby.com/api/v1";

const API_KEY = process.env.EPINBY_API_KEY;

async function epinbyRequest(
  endpoint,
  options = {}
) {
  if (!API_KEY) {
    throw new Error(
      "EPINBY_API_KEY is not configured."
    );
  }

  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    {
      ...options,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
        ...(options.headers || {}),
      },
    }
  );

  const text = await response.text();

  let data;

  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = {
      message: text || "Invalid API response",
    };
  }

  if (!response.ok) {
    const error = new Error(
      data?.message ||
        data?.error ||
        `EpInby request failed with status ${response.status}`
    );

    error.status = response.status;
    error.data = data;

    throw error;
  }

  return data;
}

export async function getMe() {
  return epinbyRequest("/getMe");
}

export async function getGames() {
  return epinbyRequest("/games");
}

export async function getCategories() {
  return epinbyRequest("/categories");
}

export async function getProducts(params = {}) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(
    ([key, value]) => {
      if (
        value !== undefined &&
        value !== null &&
        value !== ""
      ) {
        query.set(key, String(value));
      }
    }
  );

  const queryString = query.toString();

  return epinbyRequest(
    `/products${queryString ? `?${queryString}` : ""}`
  );
}

export async function validatePlayer(payload) {
  return epinbyRequest("/validate-player", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function createOrder(payload) {
  return epinbyRequest("/order", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getOrder(orderId) {
  return epinbyRequest(
    `/order/${encodeURIComponent(orderId)}`
  );
}

export async function getOrders(params = {}) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(
    ([key, value]) => {
      if (
        value !== undefined &&
        value !== null &&
        value !== ""
      ) {
        query.set(key, String(value));
      }
    }
  );

  const queryString = query.toString();

  return epinbyRequest(
    `/orders${queryString ? `?${queryString}` : ""}`
  );
}
