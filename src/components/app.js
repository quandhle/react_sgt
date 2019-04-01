import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, {Component} from 'react';
import axios from 'axios';
import AddStudent from './add_student';
import StudentTable from './student_table';
import studentData from '../components/dummy_data/students_list';

let id = 100;

class App extends Component {
    state = {
        students: [],
        error: ''
    }

    addStudent = async (student) => {
        await axios.post('/api/grades', student);

        this.getStudentData();

    }

    // getStudentData() {
    //     // call server here

    //     axios.get('http://localhost:3001/api/grades').then((response) => {
    //         this.setState({
    //             students: response.data.data
    //         });

    //         console.log(this.state.students);
    //     }).catch((error) => {
    //         console.log('Error getting student data: ', error.message);

    //         this.setState({
    //             error: 'Error retreiving student data'
    //         })
    //     });
    // }

    getStudentData = async () => {
        try {
            const response = await axios.get('/api/grades');

            this.setState({
                students: response.data.data
            });
        } catch(error) {this.setState({
                error: 'Error retrieving student data'
            })
        }
    }

    componentDidMount() {
        this.getStudentData();
    }

    deleteStudent = async (id) => {
        await axios.delete(`/api/grades/${id}`);

        this.getStudentData();
    }

    render () {
        return (
            <div>
                <h1 className="center">React SGT</h1>

                <h5 className="red-text text-darken-2">{this.state.error}</h5>
                
                <div className="row">
                    <StudentTable col="s12 m8" list={this.state.students} delete={this.deleteStudent}/>
                    <AddStudent col="s12 m4" add={this.addStudent}/>
                </div>
            </div>
        )
    }
};

export default App;
