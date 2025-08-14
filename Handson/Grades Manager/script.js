let students = [];

function addStudent() {
  const Student = document.getElementById('studentName');
  const Grade = document.getElementById('studentGrade');

  const studentText = Student.value.trim();
  const gradeText = Grade.value.trim();

if (studentText === '' || gradeText === '') return;

 const li = document.createElement('li');   
 const p = document.createElement('p');
 p.innerText = studentText;

const span = [document.createElement('span')];

   span.innerText = ` - ${gradeText}`;

 students.push({ name: studentText, grade: Number(gradeText) });

    // Clear inputs
    Student.value = '';
    Grade.value = '';
}

function displayStudents() {
    const list = document.getElementById('studentList');
    list.innerHTML = ''; // Reset list

    students.forEach(student => {
        const li = document.createElement('li');
        li.innerText = `${student.name} - ${student.grade}`;
        list.appendChild(li);
    });
}
function DisplayGrade() {
    document.querySelector('.displaygradearea').style.display = 'block'; 
    displayStudents();
}
function AverageGrade() {
    if (students.length === 0) return;

    const sum = students.reduce((total, student) => total + student.grade, 0);
    const avg = (sum / students.length).toFixed(2);
    const list = document.getElementById('AverageGradeList');
    list.innerHTML = `<b>Average Grade:</b> <li>${avg}</li>`;
}



