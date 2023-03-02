import jwt from "jsonwebtoken";

const generateTokenProvider = (userId: number) => {
  const SECRET = process.env.JWT_SECRET || "";
  const token = jwt.sign({ id: userId }, SECRET, {
    expiresIn: "20s",
  });

  return token;
};

export default generateTokenProvider;
