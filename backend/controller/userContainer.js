import express from "express";
import asyncHandler from "express-async-handler";

const router = express.Router();

// @desc Auth user/set token
// route Post /api/user/auth
// access public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User is authenticated" });
});

// @desc Register a new user
// route Post /api/user
// access public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User registered" });
});

// @desc Log out user
// route Post /api/user/logout
// access public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User logged out" });
});

// @desc Get user profile
// route GET /api/user/profile
// access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile fetched" });
});

// @desc Update user profile
// route PUT /api/user/profile
// access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile updated" });
});

// Define routes
router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
