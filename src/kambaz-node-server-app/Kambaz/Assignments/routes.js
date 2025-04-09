import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.post("/api/assignments", async (req, res) => {
    const newAssignment = await dao.createAssignment(req.body);
    res.json(newAssignment);
  });

  app.get("/api/assignments", async (req, res) => {
    const assignments = await dao.findAllAssignments();
    res.json(assignments);
  });

  app.get("/api/assignments/:id", async (req, res) => {
    const assignment = await dao.findAssignmentById(req.params.id);
    if (assignment) {
      res.json(assignment);
    } else {
      res.status(404).json({ message: "Assignment not found" });
    }
  });

  app.get("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const assignments = await dao.findAssignmentsForCourse(cid);
    res.json(assignments);
  });

  app.put("/api/assignments/:id", async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateAssignment(id, req.body);
    res.json(status);
  });

  app.delete("/api/assignments/:id", async (req, res) => {
    const { id } = req.params;
    await dao.deleteAssignment(id);
    res.sendStatus(204);
  });
} 