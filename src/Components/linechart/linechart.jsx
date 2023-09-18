
import { LineChart, Line, XAxis,YAxis } from 'recharts';

const linechart = () => {

    const studentData = [
        {
          "id": "1",
          "name": "Student 1",
          "math_marks": 85,
          "physics_marks": 78
        },
        {
          "id": "2",
          "name": "Student 2",
          "math_marks": 78,
          "physics_marks": 82
        },
        {
          "id": "3",
          "name": "Student 3",
          "math_marks": 92,
          "physics_marks": 88
        },
        {
          "id": "4",
          "name": "Student 4",
          "math_marks": 88,
          "physics_marks": 76
        },
        {
          "id": "5",
          "name": "Student 5",
          "math_marks": 70,
          "physics_marks": 65
        },
        {
          "id": "6",
          "name": "Student 6",
          "math_marks": 95,
          "physics_marks": 90
        },
        {
          "id": "7",
          "name": "Student 7",
          "math_marks": 72,
          "physics_marks": 68
        },
        {
          "id": "8",
          "name": "Student 8",
          "math_marks": 89,
          "physics_marks": 85
        },
        {
          "id": "9",
          "name": "Student 9",
          "math_marks": 81,
          "physics_marks": 79
        },
        {
          "id": "10",
          "name": "Student 10",
          "math_marks": 93,
          "physics_marks": 90
        }
      ];
      

    return (
        <div>
            
        <LineChart width={500} height={400} data={studentData}> 
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>

        <Line dataKey="math_marks" stroke='red'></Line>
        <Line dataKey="physics_marks" stroke='yellow'></Line>

        </LineChart>

        </div>
    );
};

export default linechart;