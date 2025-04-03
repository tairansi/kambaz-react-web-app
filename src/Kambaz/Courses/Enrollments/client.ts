import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const USERS_API = `${REMOTE_SERVER}/api/users`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(
    `${USERS_API}/${userId}/enrollments/${courseId}`
  );
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axios.delete(
    `${USERS_API}/${userId}/enrollments/${courseId}`
  );
  return response.data;
};

export const findUserEnrollments = async (userId: string) => {
  const response = await axios.get(`${USERS_API}/${userId}/enrollments`);
  return response.data;
};

export const findCourseEnrollments = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/enrollments`);
  return response.data;
};

export const checkEnrollment = async (userId: string, courseId: string) => {
  try {
    const response = await axios.get(
      `${USERS_API}/${userId}/enrollments/${courseId}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
}; 