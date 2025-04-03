import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.post("/api/assignments", (req, res) => {
    const newAssignment = dao.createAssignment(req.body);
    res.json(newAssignment);
  });

  app.get("/api/assignments", (req, res) => {
    const assignments = dao.findAllAssignments();
    res.json(assignments);
  });

  app.get("/api/assignments/:id", (req, res) => {
    const assignment = dao.findAssignmentById(req.params.id);
    if (assignment) {
      res.json(assignment);
    } else {
      res.status(404).json({ message: "Assignment not found" });
    }
  });

  app.put("/api/assignments/:id", (req, res) => {
    const { id } = req.params;
    const status = dao.updateAssignment(id, req.body);
    res.json(status);
  });

  app.delete("/api/assignments/:id", (req, res) => {
    const { id } = req.params;
    dao.deleteAssignment(id);
    res.sendStatus(204);
  });
} 