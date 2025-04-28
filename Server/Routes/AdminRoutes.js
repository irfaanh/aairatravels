import { Router } from "express";
import { AddHappyClient } from "../Controllers/adminControllers.js";

export const AdminRoute = Router()

    AdminRoute.post('/addimages',AddHappyClient)