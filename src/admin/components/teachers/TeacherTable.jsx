import "../../styles/teacherTable.css";

const TeacherTable = () => {
  return (
    <div className="teacher-table">

      <table>

        <thead>

          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>John Smith</td>
            <td>Science</td>
            <td>john@school.com</td>
            <td>9876543210</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>

          <tr>
            <td>Sarah Wilson</td>
            <td>Mathematics</td>
            <td>sarah@school.com</td>
            <td>9876543211</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>

          <tr>
            <td>Michael Brown</td>
            <td>English</td>
            <td>michael@school.com</td>
            <td>9876543212</td>
            <td>Leave</td>
            <td>Edit | Delete</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default TeacherTable;