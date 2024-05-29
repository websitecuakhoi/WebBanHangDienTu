import exppress from "express";
import {
  registerUserCtrl,
  loginUserCtrl,
  getUserProfileCtrl,
  updateShippingAddresctrl,
  deleteUserById,
  getAllUsers,
  updateUserById,
} from "../controllers/usersCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import isAdmin from "../middlewares/isAdmin.js";

const userRoutes = exppress.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.post("/:id/Update",isLoggedIn,isAdmin, updateUserById);
userRoutes.get("/profile", isLoggedIn, getUserProfileCtrl);
userRoutes.get("/getAll",isLoggedIn,isAdmin,  getAllUsers);
userRoutes.delete("/:id/delete",isLoggedIn,isAdmin,deleteUserById)
userRoutes.put("/update/shipping", isLoggedIn, updateShippingAddresctrl);
export default userRoutes;
