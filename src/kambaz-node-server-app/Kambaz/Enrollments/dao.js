import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
 }

export async function findUsersForCourse(courseId) {
 const enrollments = await model.find({ course: courseId }).populate("user");
 return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
 return model.create({ user, course, _id: `${user}-${course}` });
}
export function unenrollUserFromCourse(user, course) {
 return model.deleteOne({ user, course });
}

export function enrollUserInCourse(user, course) {
  const newEnrollment = { user, course, _id: `${user}-${course}` };
  return model.create(newEnrollment);
 }
 export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
 }


export function createEnrollment(userId, courseId) {
  const enrollment = {
    _id: uuidv4(),
    user: userId,
    course: courseId,
  };
  Database.enrollments = [...Database.enrollments, enrollment];
  return enrollment;
}

export function findEnrollmentsByUser(userId) {
  return Database.enrollments.filter(
    (enrollment) => enrollment.user === userId
  );
}

export function findEnrollmentsByCourse(courseId) {
  return Database.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
}

export function findEnrollment(userId, courseId) {
  return Database.enrollments.find(
    (enrollment) => 
      enrollment.user === userId && 
      enrollment.course === courseId
  );
}

export function deleteEnrollment(userId, courseId) {
  Database.enrollments = Database.enrollments.filter(
    (enrollment) => 
      !(enrollment.user === userId && enrollment.course === courseId)
  );
} 