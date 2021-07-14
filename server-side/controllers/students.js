import StudentList from "../models/student.js";

export const getStudents = async (req, res, next) => {
  try {
    const allStudents = await StudentList.find();

    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const createStudent = async (req, res, next) => {
//   const student = req.body;

//   const newStudent = new StudentList(student);
//   try {
//     await newStudent.save();
//     res.status(201).json(newStudent);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

// replace data
export const createStudent = async (req, res, next) => {
  const student = req.body;

  const newStudent = new StudentList(student);
  console.log(newStudent);

  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
// replace data end

export const deleteStudent = async (req, res, next) => {
  const id = req.params.id;
  try {
    await StudentList.findByIdAndRemove(id).exex();
    res.send("Successfully Deleted");
  } catch (error) {
    console.log(error);
  }
};
