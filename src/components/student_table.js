import React, {Component} from 'react';
import studentData from '../components/dummy_data/students_list';

class StudentTable extends Component {
    state = {
        students: []
    }

    getStudentData() {
        // call server here

        this.setState({
            students: studentData
        })
    }

    componentDidMount() {
        this.getStudentData();
    }

    render() {
        // const students = this.state.students
        const {students} = this.state;

        const studentElements = students.map( (student) => {
            return (
                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.grade}</td>
                </tr>
            )
        });

        return (
            <div className="col s12 m8">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentElements}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentTable;