import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import { FaCaretDown } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const [assignments, setAssignments] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchAssignmentsForCourse = async () => {
    if (cid) {
      try {
        const assignments = await client.findAssignmentsForCourse(cid);
        setAssignments(assignments);
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    }
  };

  useEffect(() => {
    fetchAssignmentsForCourse();
  }, [cid]);

  return (
    <div id="wd-assignments">
    {currentUser.role === 'FACULTY' && <><AssignmentControls /><br /><br /><br /></>}
  <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="fs-3" /> 
            <FaCaretDown className="me-2 fs-3" /> ASSIGNMENTS 
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {assignments.map((assignment) => (
              <ListGroup.Item key={assignment._id} className="wd-lesson p-3 ps-1">
                <p className="a-padding">
                  <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
                    <b>{assignment.title}</b>
                  </a>
                </p>
                <BsGripVertical className="me-2 fs-3" /> 
                <LuNotebookPen className="notebook fs-3 me-3"/> 
                <span className="text-danger">Multiple Modules </span> | 
                <b> Not available until</b> {new Date(assignment.availableFrom).toLocaleDateString()} at 12:00am |
                {currentUser.role === 'FACULTY' && <AssignmentControlButtons assignmentId={assignment._id} />}
                <p className="due-date-padding">
                  <b>Due</b> {new Date(assignment.dueDate).toLocaleDateString()} at 11:59pm | {assignment.points} pts
                </p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
  </div>
  );
}