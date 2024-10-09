import express from "express";
import { authUser } from "../controller/userContainer";

const router = express.Router()

router.post('/auth' , authUser)