export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignmentgroup">Assignment Group</label>
          </td>
          <td>
            <select id="wd-assignmentgroup">
              <option value="...">Comedy</option>
              <option value="...">Drama</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display">
              <option value="...">Comedy</option>
              <option value="...">Drama</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submissiontype">Submission Type</label>
          </td>
          <td>
            <select id="wd-submissiontype">
              <option value="...">Comedy</option>
              <option value="...">Drama</option>
            </select> <br />
            <text>Online Entry Options</text> <br />
            <select multiple id="wd-submissiontype">
              <option value="TEXTENTRY"> Text Entry  </option>
              <option value="WEBSITEURL"> Website URL </option>
              <option value="MEDIARECORDINGS"> Media Recordings </option>
              <option value="STUDENT ANNOTATION"> Student Annotaion </option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign">Assign</label>
          </td>
          <td>
            Assign to <br />
            <input id="wd-assign" value={100} /> <br />

            Due <br />
            <input type="date"
              value="2000-01-21"
              id="wd-assign" /><br />

            <text> Available from </text> <text> Until </text> <br/>
            <input type="date"
              value="2000-01-21"
              id="wd-assign" />
            <input type="date"
              value="2000-01-21"
              id="wd-assign" />
          </td>
        </tr>
      </table>
    </div>
  );
}
