import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized User",
    });
  }

  try {
    const tokenDecode = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    if (tokenDecode?.id) {
      req.userId = tokenDecode.id;
      next();
    } else {
      return res.json({
        success: false,
        message: "Not Authorized User",
      });
    }

  } catch (error) {
    console.log(error.message);

    return res.json({
      success: false,
      message: "Invalid Token",
    });
  }
};

export default authUser;