import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const createAssignment = async (assignment: any) => {
  const response = await axios.post(ASSIGNMENTS_API, assignment);
  return response.data;
};

export const findAllAssignments = async () => {
  const response = await axios.get(ASSIGNMENTS_API);
  return response.data;
};

export const findAssignmentById = async (id: string) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/${id}`);
  return response.data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/courses/${courseId}/assignments`);
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (id: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${id}`);
  return response.data;
}; 