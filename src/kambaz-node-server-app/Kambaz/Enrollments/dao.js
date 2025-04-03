import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

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