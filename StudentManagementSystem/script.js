let students = [];

function addStudent(){

    const name = document.getElementById("name").value;
    const marks = Number(document.getElementById("marks").value);

    if(name === "" || marks === 0){
        alert("Please enter valid details");
        return;
    }

    const student = {
        name:name,
        marks:marks
    };

    students.push(student);

    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";

    updateDashboard();
    displayStudents();
}

function displayStudents(){

    const table = document.getElementById("studentTable");
    const search =
        document.getElementById("search")
        .value
        .toLowerCase();

    table.innerHTML = "";

    for(let i=0;i<students.length;i++){

        if(
            !students[i].name
            .toLowerCase()
            .includes(search)
        ){
            continue;
        }

        const status =
            students[i].marks >= 40
            ? "Pass"
            : "Fail";

        table.innerHTML += `
        <tr>
            <td>${students[i].name}</td>
            <td>${students[i].marks}</td>
            <td class="${status.toLowerCase()}">${status}</td>
            <td>
                <button
                    class="delete-btn"
                    onclick="deleteStudent(${i})">
                    Delete
                </button>
            </td>
        </tr>`;
    }
}

function deleteStudent(index){

    students.splice(index,1);

    updateDashboard();
    displayStudents();
}

function updateDashboard(){

    document.getElementById("totalStudents").innerText =
        students.length;

    let total = 0;
    let pass = 0;
    let fail = 0;

    for(let i=0;i<students.length;i++){

        total += students[i].marks;

        if(students[i].marks >= 40){
            pass++;
        }
        else{
            fail++;
        }
    }

    const average =
        students.length > 0
        ? (total/students.length).toFixed(1)
        : 0;

    document.getElementById("averageMarks").innerText =
        average;

    document.getElementById("passCount").innerText =
        pass;

    document.getElementById("failCount").innerText =
        fail;
}