import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
export default function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { pathname } = useLocation();
  const { cid } = useParams();

  return (
    <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">

        {links.map((link) => (
        <ListGroup.Item key={link} as={Link} to={`/Kambaz/Courses/${cid}/${link}`} className={`list-group-item border-0
              ${pathname.includes(link) ? "active border" : "text-danger border"}`}>
          {link}
        </ListGroup.Item>
      ))}
      </ListGroup>
);}