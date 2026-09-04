import {
  getMe,
  getGames,
  getCategories,
  getProducts,
  validatePlayer,
  createOrder,
  getOrder,
  getOrders,
} from "../services/epinby.js";

function sendSuccess(res, data) {
  return res.status(200).json({
    success: true,
    data,
  });
}

function sendError(res, error) {
  console.error("NOSU TOPUP API ERROR:", error);

  return res.status(error.status || 500).json({
    success: false,
    message:
      error.message ||
      "Something went wrong.",
    ...(process.env.NODE_ENV !== "production" && {
      error: error.data,
    }),
  });
}

export async function health(req, res) {
  res.json({
    success: true,
    message: "NOSU TOPUP API is running.",
    timestamp: new Date().toISOString(),
  });
}

export async function account(req, res) {
  try {
    const data = await getMe();

    return sendSuccess(res, data);
  } catch (error) {
    return sendError(res, error);
  }
}

export async function games(req, res) {
  try {
    const data = await getGames();

    return sendSuccess(res, data);
  } catch (error) {
    return sendError(res, error);
  }
}

export async function categories(req, res) {
  try {
    const data = await getCategories();

    return sendSuccess(res, data);
  } catch (error) {
    return sendError(res, error);
  }
}

export async function products(req, res) {
  try {
    const data = await getProducts(req.query);

    return sendSuccess(res, data);
  } catch (error) {
    return sendError(res, error);
  }
}

export async function playerValidation(req, res) {
  try {
    const {
      product_id,
      player_id,
      server_id,
      input_2,
      input_3,
      input_4,
      input_5,
      input_6,
      input_7,
      input_8,
    } = req.body;

    if (!product_id) {
      return res.status(400).json({
        success: false,
        message: "product_id is required.",
      });
    }

    if (!player_id) {
      return res.status(400).json({
        success: false,
        message: "player_id is required.",
      });
    }

    const payload = {
      product_id,
      player_id: String(player_id),
    };

    if (server_id) {
      payload.server_id = String(server_id);
    }

    const extraInputs = [
      "input_2",
      "input_3",
      "input_4",
      "input_5",
      "input_6",
      "input_7",
      "input_8",
    ];

    extraInputs.forEach((key) => {
      if (
        req.body[key] !== undefined &&
        req.body[key] !== null &&
        req.body[key] !== ""
      ) {
        payload[key] = String(req.body[key]);
      }
    });

    const data = await validatePlayer(payload);

    return sendSuccess(res, data);
  } catch (error) {
    return sendError(res, error);
  }
}

export async function order(req, res) {
  try {
    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({
        success: false,
        message: "Order payload is required.",
      });
    }

    const data = await createOrder(req.body);

    return sendSuccess(res, data);
  } catch (error) {
    return sendError(res, error);
  }
}

export async function orderDetails(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Order ID is required.",
      });
    }

    const data = await getOrder(id);

    return sendSuccess(res, data);
  } catch (error) {
    return sendError(res, error);
  }
}

export async function orders(req, res) {
  try {
    const data = await getOrders(req.query);

    return sendSuccess(res, data);
  } catch (error) {
    return sendError(res, error);
  }
}
