import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function findAllAssignments() {
  return Database.assignments;
}

export function findAssignmentById(assignmentId) {
  return Database.assignments.find(
    (assignment) => assignment._id === assignmentId
  );
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  const assignment = Database.assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  if (assignment) {
    Object.assign(assignment, assignmentUpdates);
  }
  return assignment;
}

export function deleteAssignment(assignmentId) {
  Database.assignments = Database.assignments.filter(
    (assignment) => assignment._id !== assignmentId
  );
} 