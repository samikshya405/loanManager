import express, { request } from "express";
import { findUser, postNewCustomer } from "../model/customer/CustomerModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json({
      status: "error",
      message: "Authorization header is missing",
    });
  }
  try {
    // const {fName}= req.body
    // const user =await findUser(fName)
    // console.log(user);
    const result = await postNewCustomer({
      ...req.body,
      userId: authorization,
    });
    result._id
      ? res.json({
          status: "success",
          message: "New customer added",
        })
      : res.json({
          status: "error",
          message: "failed to add new user try again",
        });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const _id = req.params();
    console.log(_id, 'this is ID');
    res.json({
      status: "success",
      message: "todo GET",
      user: req.userInfo,
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
