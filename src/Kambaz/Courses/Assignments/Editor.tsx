import { Button, Form, FormControl, InputGroup, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid,
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAssignment = async () => {
      if (!aid) return;
      try {
        const fetchedAssignment = await client.findAssignmentById(aid);
        setAssignment(fetchedAssignment);
      } catch (error) {
        console.error("Error fetching assignment:", error);
      }
    };
    fetchAssignment();
  }, [aid]);

  const handleSave = async () => {
    if (!aid) return;
    try {
      await client.updateAssignment(assignment);
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error updating assignment:", error);
    }
  };

  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br />
      <InputGroup className="mb-3" id="wd-name">
        <FormControl 
          value={assignment.title} 
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </InputGroup>
      <InputGroup className="mb-3" id="wd-description">
        <FormControl 
          as="textarea" 
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </InputGroup>
      
      <Table className="no-table-border">
        <tbody>
          <tr>
            <td align="right" valign="top">
              <Form.Label htmlFor="wd-points">Points</Form.Label>
            </td>
            <td>
              <Form.Control 
                id="wd-points" 
                type="number" 
                value={assignment.points}
                onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <Form.Label htmlFor="wd-assign-to">Assign</Form.Label>
            </td>
            <td className="bordered-box">
              <Form.Label className="pt-3" htmlFor="wd-due-date"><b>Due</b></Form.Label>
              <Form.Control 
                type="date" 
                id="wd-due-date" 
                value={assignment.dueDate}
                onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
              />
              <Form.Label className="pt-3" htmlFor="wd-available-from"><b>Available from</b></Form.Label>
              <Form.Control 
                type="date" 
                id="wd-available-from" 
                value={assignment.availableFrom}
                onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
              />
              <Form.Label className="pt-3" htmlFor="wd-available-until"><b>Until</b></Form.Label>
              <Form.Control 
                type="date" 
                id="wd-available-until" 
                value={assignment.availableUntil}
                onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <br />
      <Button variant="secondary" onClick={handleSave}>
        Save
      </Button>
      <Button variant="danger" onClick={handleCancel} className="ms-2">
        Cancel
      </Button>
    </div>
  );
}