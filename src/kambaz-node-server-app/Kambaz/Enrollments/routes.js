import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/users/:userId/enrollments/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    const enrollment = dao.createEnrollment(userId, courseId);
    res.json(enrollment);
  });

  app.get("/api/users/:userId/enrollments", (req, res) => {
    const { userId } = req.params;
    const enrollments = dao.findEnrollmentsByUser(userId);
    res.json(enrollments);
  });

  app.get("/api/courses/:courseId/enrollments", (req, res) => {
    const { courseId } = req.params;
    const enrollments = dao.findEnrollmentsByCourse(courseId);
    res.json(enrollments);
  });

  app.get("/api/users/:userId/enrollments/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    const enrollment = dao.findEnrollment(userId, courseId);
    if (enrollment) {
      res.json(enrollment);
    } else {
      res.status(404).json({ message: "Enrollment not found" });
    }
  });

  app.delete("/api/users/:userId/enrollments/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    dao.deleteEnrollment(userId, courseId);
    res.sendStatus(204);
  });
} 