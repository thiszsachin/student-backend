import express from "express";
import {
  getStudents,
  createStudent,
  deleteStudent,
} from "../controllers/students.js";
import student from "../models/student.js";

const router = express.Router();

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get("/", getStudents);
router.post("/", createStudent);
router.delete("/:id", deleteStudent);

export default router;
