import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, {Component} from 'react';
import AddStudent from './add_student';
import StudentTable from './student_table';
import studentData from '../components/dummy_data/students_list';

let id = 100;

class App extends Component {
    state = {
        students: []
    }

    addStudent = (student) => {
        student.id = id++;

        this.setState({
            students: [...this.state.students, student]
        })
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

    render () {
        return (
            <div>
                <h1 className="center">React SGT</h1>
                
                <div className="row">
                    <StudentTable col="s12 m8" list={this.state.students}/>
                    <AddStudent col="s12 m4" add={this.addStudent}/>
                </div>
            </div>
        )
    }
};

export default App;
