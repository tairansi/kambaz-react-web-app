import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3500/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cs3500.jpg" width={200} />
            <div>
              <h5> CS3500 </h5>
              <p className="wd-dashboard-course-title">
                Object-Oriented Design  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3800/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/algorithm.jpg" width={200} />
            <div>
              <h5> CS3800 </h5>
              <p className="wd-dashboard-course-title">
                Algorithm  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/0001/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/java.png" width={200} />
            <div>
              <h5> CS0001 </h5>
              <p className="wd-dashboard-course-title">
                Java  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/0002/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/python.png" width={200} />
            <div>
              <h5> CS0002 </h5>
              <p className="wd-dashboard-course-title">
                Python  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/0003/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/C++.png" width={200} />
            <div>
              <h5> CS0003 </h5>
              <p className="wd-dashboard-course-title">
                C++  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/0004/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/javascript.png" width={200} />
            <div>
              <h5> CS0004 </h5>
              <p className="wd-dashboard-course-title">
                Javascript  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
