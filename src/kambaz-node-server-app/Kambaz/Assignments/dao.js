import model from "./model.js";

export const createAssignment = async (assignment) => {
  const newAssignment = await model.create(assignment);
  return newAssignment;
};

export const findAllAssignments = async () => {
  const assignments = await model.find();
  return assignments;
};

export const findAssignmentById = async (assignmentId) => {
  const assignment = await model.findById(assignmentId);
  return assignment;
};

export const findAssignmentsForCourse = async (courseId) => {
  const assignments = await model.find({ course: courseId });
  return assignments;
};

export const updateAssignment = async (assignmentId, assignmentUpdates) => {
  const status = await model.updateOne(
    { _id: assignmentId },
    { $set: assignmentUpdates }
  );
  return status;
};

export const deleteAssignment = async (assignmentId) => {
  const status = await model.deleteOne({ _id: assignmentId });
  return status;
}; 