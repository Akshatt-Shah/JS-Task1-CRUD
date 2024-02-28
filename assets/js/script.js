// Function to validate the form inputs


function validateForm() {
    // Example validation, you can add more checks as needed
    const percentage = document.getElementById("percentage").value;
    var lname = document.getElementById("lname").value;
    var gyear = document.getElementById("gyear").value;
    var dob = document.getElementById("dob").value;


    // Extract the year


    // Check if any of the required fields are empty
    // if (fname === "" || lname === "" || email === "" || dob === "") {
    //     alert("Please fill out all required fields.");
    //     console.log("fill properly");
    //     return false; // Validation failed
    // }

    document.querySelectorAll('.student-details .row').forEach(ele => {

        Array.from(ele.getElementsByTagName('input')).forEach(ele => {
            //console.log(ele);
            if (ele.value == null || ele.value == '') {
                ele.style.border = '2px solid red';

            }
            else {
                ele.style.border = '2px solid green';

            }

        });
        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();

        if (email === '') {
            emailInput.style.border = '2px solid red';

        }

        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (re.test(email)) {
            emailInput.style.border = '2px solid green';
        } else {
            emailInput.style.border = '2px solid red';

        }



        //console.log(studentDetails);

    })
    var gyear = document.getElementById("gyear");
    var dob = document.getElementById("dob");

    if (gyear && dob) { // Check if both elements exist
        var gyearDate = new Date(gyear.value); // Assuming gyear is an input element, use .value to get its value
        var birthDate = new Date(dob.value); // Assuming dob is an input element, use .value to get its value
        var currentDate = new Date(); // Get today's date
        var age = gyearDate.getFullYear() - birthDate.getFullYear();
        if (!gyear.value && !dob.value) {
            gyear.style.border = "2px solid red";
            dob.style.border = "2px solid red";
            console.log("Graduation year cannot be empty.");
            return; // Exit the function or handle this case accordingly
        } else {
            gyear.style.border = '2px solid green'; // Reset border
            dob.style.border = '2px solid green';
        }
        // Check if birthDate is greater than currentDate
        if (birthDate > currentDate && gyearDate > currentDate) {
            dob.style.border = "2px solid red"; // Apply border to indicate invalid date
            gyear.style.border = "2px solid red";
            console.log(" Date cannot be in the future.");
            return; // Exit the function or handle this case accordingly
        }
        if (gyearDate < birthDate || (age === 0 && gyearDate.getDate() < birthDate.getDate())) {
            age--;
        }

        // Check if age is less than 18
        if (age < 18) {
            gyear.style.border = "2px solid red";
            dob.style.border = "2px solid red";
            alert("Age Must Be Above 18.....")
        }
        else {
            // Reset border to default or do something else
            gyear.style.border = '2px solid green'; // Reset border

        }
    } else {
        gyear.style.border = "2px solid red";
        dob.style.border = "2px solid red";
        // Or handle this case in another appropriate way
    }

    document.querySelectorAll('.education-details .row').forEach(ele => {

        Array.from(ele.getElementsByTagName('input')).forEach(ele => {
            //console.log(ele);
            if (ele.value == null || ele.value == '') {
                ele.style.border = '2px solid red';
                // ele.onmouseout
            }
            else {
                ele.style.border = '2px solid green';

            }



        });
        const percentage = document.getElementById("percentage");
        const re = /[0-9]/;
        if (percentage.value >= 0 && percentage.value <= 100) {
            percentage.style.border = '2px solid green';

        }
        else {
            percentage.style.border = '2px solid red';

        }
        if (re.test(percentage.value.trim())) {
            percentage.style.border = '2px solid green';

        } else {
            percentage.style.border = '2px solid red';

        }

        const sdate = document.getElementById("sdate");
        const pdate = document.getElementById("pdate");

        // Check if both fields are not empty
        if (sdate.value !== "" && pdate.value !== "") {
            var startDate = new Date(sdate.value);
            var passoutDate = new Date(pdate.value);
            var currentDate = new Date();

            var startYear = startDate.getFullYear();
            var passoutYear = passoutDate.getFullYear();
            var currentYear = currentDate.getFullYear();

            if (passoutYear > startYear && passoutYear <= currentYear && startYear <= currentYear &&
                startDate < currentDate && passoutDate < currentDate) {
                // Both conditions are satisfied
                sdate.style.border = "2px solid green";
                pdate.style.border = "2px solid green";
            } else {
                // One or both conditions are not satisfied
                sdate.style.border = "2px solid red";
                pdate.style.border = "2px solid red";
            }
        } else {
            // One or both fields are empty
            sdate.style.border = "2px solid red";
            pdate.style.border = "2px solid red";
        }
        //console.log(studentDetails);

    });

    // Additional validation checks can be added here

    return true; // Validation passed
}

// Function to handle form submission
function handleSubmit(event) {

    event.preventDefault(); // Prevent the form from submitting by default

    // Validate the form
    if (validateForm()) {
        // If validation passes, call the ShowDetails() function
        if (document.getElementById("submit")) {

            ShowDetails();
        }
        else {
            updateData()
            alert("User Details updated Successfully");
            var but = document.getElementById("update");
            but.id = "submit";
        }

    }
}

// Attach event listener to the form submission
document.getElementById("form").addEventListener("submit", handleSubmit);







function add() {

    let formfield = document.getElementById('education-details');
    let row = document.createElement('div');
    row.className = 'row details';
    row.id = 'details';

    let col = document.createElement('div');
    col.className = 'col-lg mt-md-0 mt-3';
    let input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = 'Enter Your First Name';
    input1.id = 'degree';
    input1.className = 'form-control';
    col.appendChild(input1);
    row.appendChild(col);

    let col2 = document.createElement('div');
    col2.className = 'col-lg mt-md-0 mt-3';
    let input2 = document.createElement('input');
    input2.type = 'text';
    input2.placeholder = 'Enter Your First Name';
    input2.id = 'school';
    input2.className = 'form-control';
    col2.appendChild(input2);
    row.appendChild(col2);

    let col3 = document.createElement('div');
    col3.className = 'col-lg mt-md-0 mt-3';
    let input3 = document.createElement('input');
    input3.placeholder = 'Enter Your Starting Date';
    input3.type = 'date';
    input3.id = 'sdate'
    input3.className = 'form-control';
    col3.appendChild(input3);
    row.appendChild(col3);

    let col4 = document.createElement('div');
    col4.className = 'col-lg mt-md-0 mt-3';
    let input4 = document.createElement('input');
    input4.placeholder = 'Enter Your Passout Year';
    input4.type = 'date';
    input4.id = 'pdate';
    input4.className = 'form-control';
    col4.appendChild(input4);
    row.appendChild(col4);

    let col5 = document.createElement('div');
    col5.className = 'col-lg mt-md-0 mt-3';
    var input5 = document.createElement('input');
    input5.placeholder = "Don't Use % Sign";
    input5.type = 'text';
    input5.id = 'percentage';
    input5.className = 'form-control';
    col5.appendChild(input5);
    row.appendChild(col5);

    var col6 = document.createElement('div');
    col6.className = 'col-lg mt-md-0 mt-3';
    var input6 = document.createElement('input');
    input6.placeholder = 'Enter Backlog';
    input6.type = 'text';
    input6.id = 'backlog';
    input6.className = 'form-control';
    col6.appendChild(input6);
    row.appendChild(col6);


    var col7 = document.createElement('div');
    col7.className = 'col-lg text-center mt-md-0 mt-3';
    var input7 = document.createElement('input');
    input7.type = 'button';
    input7.value = '-';
    input7.className = 'btn btn-danger';
    col7.appendChild(input7);
    row.appendChild(col7);
    input7.onclick = function () {
        row.remove();
    }

    formfield.appendChild(row);

    alert('Added new row');
}



document.querySelector('.submit').addEventListener('click', function () {
    // alert('start');
    document.getElementById("display-data").style.visibility = "visible";
    let firstname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let dob = document.getElementById('dob').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let gy = document.getElementById('gyear').value;

    // let r = document.getElementById('show-data');
    let tr1 = document.createElement('tr');
    tr1.innerHTML = `
        <td> ${firstname}</td>
        <td>${lname}</td>
        <td>${dob}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${gy}</td>
 `;
    document.getElementById('table').getElementsByTagName('tbody')[0].appendChild(tr1);
    //  alert('finish');
});
// function add(){
//     let div = document.querySelectorAll('details');
//     let sec = document.querySelector('education-details');
//     let div2 = div.cloneNode(true);


//     sec.appendChild(div2);
// }
function submit() {
    if (document.getElementById("submit")) {
        let button = document.getElementById("submit");
        button.innerHTML = "Submit";

    }
    if (document.getElementById("update")) {
        var a = document.getElementById("update")
        a.id = "submit";
    }

    //button.setAttribute("onclick", "ShowDetails()");
}
function updateData() {
    let userid = sessionStorage.getItem("userid");
    //alert(userid);
    let user = document.getElementById('user-details');
    let data = [];
    let educationField = {
        degree: ' ',
        school: ' ',
        sdate: ' ',
        pdate: ' ',
        percentage: ' ',
        backlog: 0
    }

    let studentDetails = {
        fname: '',
        lname: ' ',
        dob: ' ',
        email: ' ',
        address: ' ',
        gyear: ' ',
        educationfields: []
    }


    document.querySelectorAll('.student-details .row').forEach(ele => {

        Array.from(ele.getElementsByTagName('input')).forEach(ele => {
            //console.log(ele);
            studentDetails[ele.id] = ele.value;


        });
        //console.log(studentDetails);

    })
    data.push(studentDetails);


    //console.log(inputFields);

    document.querySelectorAll('.education-details .row').forEach(ele => {
        Array.from(ele.getElementsByTagName('input')).forEach(ele => {
            //console.log(ele.value);
            educationField = { ...educationField, [ele.id]: ele.value };

        });
        studentDetails.educationfields.push(educationField);
        //console.log(educationField);
        // data.push(educationField);

    });
    console.log(studentDetails);
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user to the array
    // users.push(studentDetails);
    users[userid] = studentDetails;
    console.log(users);
    // Store the updated array in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Clear the form
    //  document.getElementById("form").reset();
    let form = document.getElementById('form');
    form.reset();
    //alert("User Data Updated successfully");
    window.location.replace("index.html");
    // document.writeln(jsonData);
    //console.log(data);
    // let jsonData = JSON.stringify(data);
    // user.innerHTML=jsonData; 


}
function ShowDetails() {
    let user = document.getElementById('user-details');
    let data = [];
    let educationField = {
        degree: ' ',
        school: ' ',
        sdate: ' ',
        pdate: ' ',
        percentage: ' ',
        backlog: 0
    }

    let studentDetails = {
        fname: '',
        lname: ' ',
        dob: ' ',
        email: ' ',
        address: ' ',
        gyear: ' ',
        educationfields: []
    }


    document.querySelectorAll('.student-details .row').forEach(ele => {

        Array.from(ele.getElementsByTagName('input')).forEach(ele => {
            //console.log(ele);
            studentDetails[ele.id] = ele.value;


        });
        //console.log(studentDetails);

    })
    data.push(studentDetails);


    //console.log(inputFields);

    document.querySelectorAll('.education-details .row').forEach(ele => {
        Array.from(ele.getElementsByTagName('input')).forEach(ele => {
            //console.log(ele.value);
            educationField = { ...educationField, [ele.id]: ele.value };

        });
        studentDetails.educationfields.push(educationField);
        //console.log(educationField);
        // data.push(educationField);

    });
    //console.log(educationField);

    console.log(data);
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user to the array
    users.push(studentDetails);

    // Store the updated array in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Clear the form
    //  document.getElementById("form").reset();

    alert("User registered successfully!");
    window.location.replace("index.html");
    // document.writeln(jsonData);
    //console.log(data);
    // let jsonData = JSON.stringify(data);
    // user.innerHTML=jsonData; 
    let form = document.getElementById('form');
    form.reset();


}
function update(e) {

    // let userid = sessionStorage.getItem("userid");
    let userId = e;
    // alert(userId);
    let modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
    // const queryString = window.location.search;
    // console.log(queryString);
    // const urlParams = new URLSearchParams(queryString);
    // const userId = urlParams.get('userid');
    var body = document.getElementById('body1');
    var data = localStorage.getItem("users");
    // alert(data);
    data = JSON.parse(data);

    var b = JSON.stringify(data[userId]);

    var fnameOfFirstCustomer = b;
    //console.log(fnameOfFirstCustomer);
    // alert(userId);
    if (userId != null) {
        const data = JSON.parse(fnameOfFirstCustomer);

        // Fetch the fname property value
        // const fname = data.fname;
        //     alert(fname);
        let button = document.getElementById("submit");
        button.innerHTML = "Update";
        button.id = "update";
        //button.setAttribute("onclick", "updateData()")
        // button.onclick = akki();

        // button.onclick = updatedata();
        document.getElementById("fname").value = data.fname;
        document.getElementById("lname").value = data.lname;
        document.getElementById("dob").value = data.dob;
        document.getElementById("email").value = data.email;
        document.getElementById("address").value = data.address;
        document.getElementById("gyear").value = data.gyear;
        console.log(data.educationfields);
        // var degrees = JSON.stringify(data.educationfields);
        // var degreesA = (JSON.parse(degrees));
        // console.log(degreesA);
        // document.getElementById("gyear").value = b[userId].gyear;

        if (data && data.educationfields) {
            let formfield = document.getElementById('education-details');

            for (let i = 2; i < data.educationfields.length; i++) {
                let newRow = `

                <div class="row details" id="details">
                    <div class="col-lg mt-md-0 mt-3">
                        <label>Degree/Board</label>
                        <input type="text" class="form-control" id="degree" required placeholder="Enter Degree"/>
                    </div>
                    <div class="col-lg mt-md-0 mt-3">
                        <label>School/College</label>
                        <input type="text" class="form-control" id="school" required placeholder="Enter College/School"/>
                    </div>
                    <div class="col-lg mt-md-0 mt-3">
                        <label>Start Date</label>
                        <input type="date" class="form-control" id="sdate" required placeholder="Enter Start Date"/>
                    </div>
                    <div class="col-lg mt-md-0 mt-3">
                        <label>Passout Year</label>
                        <input type="date" class="form-control" id="pdate" required placeholder="Enter Passout date"/>
                    </div>
                    <div class="col-lg mt-md-0 mt-3">
                        <label>Percentage</label>
                        <input type="number" min="0" max="100" class="form-control" id="percentage" required placeholder="Don't Use % Sign"/>
                    </div>
                    <div class="col-lg mt-md-0 mt-3">
                        <label>Backlog</label>
                        <input type="number" min="0" max="10" class="form-control" id="backlog" required placeholder="Enter Backlog"/>
                    </div>
                    <div class="col-lg text-center mt-md-0 mt-3 delete" style="visibility:hidden">
                        <label>Delete</label>
                        <button type="button" class="btn btn-danger " ><i class="fa fa-minus"></i></button>
                    </div>
                </div>            
                `;

                //document.querySelector(".education-details .row").insertAdjacentHTML("beforeend", newRow);
                formfield.insertAdjacentHTML('beforeend', newRow);
            }

            let count = 0;
            document.querySelectorAll(".education-details .details").forEach((element, i) => {
                console.log(element);
                console.log(element.children);
                console.log(data.educationfields[i])

                for (const c of element.children) {
                    console.log(c.children[1].id);
                    console.log(data.educationfields[i][c.children[1].id]);
                    c.children[1].value = data.educationfields[i][c.children[1].id]
                    // console.log(c.children[1].value = data.educationfields[c.children[1].id]);
                }

                element.value = JSON.stringify(data.educationfields[element.id]);


                // Array.from(element.getElementsByTagName('input')).forEach((e)=>{
                //     e.value = data.educationFields[0];
                //     console.log(e.value);
                // // })
                // console.log(count++);
            });
        } else {
            console.error("fnameOfFirstCustomer or its educationFields property is undefined.");
        }


        // document.querySelectorAll(".education-details .row  input").forEach(element => {
        // data.educationField.forEach((e) => {
        //     console.log(e);
        //     // for (let key in e) {
        //         //console.log(e[key]);
        //         element.value = e[key];
        //     // }
        // });


        // });
        // let count = 0;
        // document.querySelectorAll(".education-details .details").forEach((element, i) => {
        //     console.log(element.children);
        //     console.log(data.educationfields[i])

        //     for (const c of element.children) {
        //         console.log(c.children[1].id);
        //         console.log(data.educationfields[i][c.children[1].id]);
        //         c.children[1].value = data.educationfields[i][c.children[1].id]
        //         // console.log(c.children[1].value = data.educationfields[c.children[1].id]);
        //     }

        //     element.value = JSON.stringify(data.educationfields[element.id]);


        //     // Array.from(element.getElementsByTagName('input')).forEach((e)=>{
        //     //     e.value = data.educationFields[0];
        //     //     console.log(e.value);
        //     // // })
        //     // console.log(count++);
        // });


    }


}
function clear() {
    var form = document.querySelector('.reset');
    document.getElementById("submit").innerHTML = "Submit";
    form.reset();
}
var b = document.querySelector('.btn-close');
b.addEventListener("click", clear);



function showdata() {


    // document.addEventListener("DOMContentLoaded", function () {
    // Retrieve data from localStorage
    var data = localStorage.getItem("users");
    let tableHeader = document.querySelector("#table thead");

    // Check if data exists
    if (data) {

        data = JSON.parse(data); // Parse the data if it's in JSON format

        console.log(data);
        // Get the table body element
        let tableBody = document.querySelector("#table #data-body");
        for (var key in data) {
            console.log(key);
        }


        var tbody = document.getElementById('data-body');

        data.forEach(function (entry) {
            var row = document.createElement("tr");

            // Iterate over each property in the entry
            Object.keys(entry).forEach(function (key) {
                if (key !== "educationfields") {
                    var cell = document.createElement("td");
                    cell.textContent = entry[key];
                    row.appendChild(cell);
                }
            });

            // Iterate over each education field
            // entry.educationfields.forEach(function(field) {
            //     Object.keys(field).forEach(function(key) {
            //         var cell = document.createElement("td");
            //         cell.textContent = field[key];
            //         row.appendChild(cell);
            //     });
            // });

            tableBody.appendChild(row);

            // Append the row to the table body to add delete button
            let cell = document.createElement("td");
            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "btn btn-danger";
            deleteButton.addEventListener("click", function () {
                // Remove the row when the delete button is clicked
                row.remove();
                let row_id = deleteButton.parentNode.parentNode.rowIndex;
                console.log(row_id);
                data.splice(row_id, 1);
                // Update the localStorage with the updated data
                localStorage.setItem("users", JSON.stringify(data));



                //alert("record deleted from storage");
                row.remove();

                alert("record deleted");
                // Here you can add logic to also remove the corresponding data from your data array and update localStorage
            });
            cell.appendChild(deleteButton);
            row.appendChild(cell);

            // Append the row to the table body to add Update button
            cell = document.createElement("td");
            let updateeButton = document.createElement("button");
            updateeButton.textContent = "Update";
            updateeButton.className = "btn btn-warning";
            updateeButton.setAttribute("data-bs-toggle", "modal");
            updateeButton.setAttribute("data-bs-target", "#exampleModal");
            updateeButton.setAttribute("data-bs-dismiss", "modal");

            updateeButton.addEventListener("click", function () {

                let row_id = updateeButton.parentNode.parentNode.rowIndex - 1;
                let modal = new bootstrap.Modal(document.getElementById('exampleModal'));
                sessionStorage.setItem("userid", row_id);
                update(row_id);
                // modal.show();

                //window.location = '/index.html?userid=' + row_id;

            });
            cell.appendChild(updateeButton);
            row.appendChild(cell);





            tableBody.appendChild(row);
        });

        // Loop through the data and create table rows
        // data.forEach(function (rowData, index) {

        // let studenData = data[index][0];

        // console.log(studenData);

        // let row = document.createElement("tr");
        // for (const key in studenData) {
        //     let cell = document.createElement("td");
        //     if (key == "educationfields") {
        //         studenData[key].forEach(function (rowData, index) {
        //             let educatinData = studenData[key][index];
        //             // console.log(educatinData);
        //             for (const keyA in educatinData) {
        //                 //console.log(educatinData[keyA]);
        //                 let cell = document.createElement("td");
        //                 cell.textContent = educatinData[keyA];
        //                 row.appendChild(cell);
        //             }
        //         });
        //         continue
        //     }
        //     cell.textContent = studenData[key];
        //     row.appendChild(cell);
        // }


        // studenData = data[index][1];
        // console.log(studenData);

        // for (const key in studenData) {
        //     let cell = document.createElement("td");
        //     cell.textContent = studenData[key];
        //     row.appendChild(cell);
        // }

        // studenData = data[index][2];
        // console.log(studenData);

        // for (const key in studenData) {
        //     let cell = document.createElement("td");
        //     cell.textContent = studenData[key];
        //     row.appendChild(cell);
        // }
        // Loop through the rowData and create table cells
        // rowData.forEach(function (cellData) {
        //     let cell = document.createElement("td");
        //     cell.textContent = cellData;
        //     row.appendChild(cell);

        // });

        // Append the row to the table body to add delete button
        // let cell = document.createElement("td");
        // let deleteButton = document.createElement("button");
        // deleteButton.textContent = "Delete";
        // deleteButton.className = "btn btn-danger";
        // deleteButton.addEventListener("click", function () {
        // Remove the row when the delete button is clicked
        //row.remove();
        // let row_id = deleteButton.parentNode.parentNode.rowIndex - 1;
        // console.log(row_id);
        // data.splice(row_id, 1);
        // Update the localStorage with the updated data
        // localStorage.setItem("users", JSON.stringify(data));



        // alert("record deleted from storage");
        // row.remove();

        //alert("record deleted");
        // Here you can add logic to also remove the corresponding data from your data array and update localStorage
        // });
        // cell.appendChild(deleteButton);
        // row.appendChild(cell);


        // Append the row to the table body to add Update button
        // cell = document.createElement("td");
        // let updateeButton = document.createElement("button");
        // updateeButton.textContent = "Update";
        // updateeButton.className = "btn btn-warning";
        // updateeButton.addEventListener("click", function () {
        //     let row_id = updateeButton.parentNode.parentNode.rowIndex - 1;
        //sessionStorage.setItem("userid", row_id);
        //     window.location = '/index.html?userid=' + row_id;

        // });
        // cell.appendChild(updateeButton);
        // row.appendChild(cell);



        // tableBody.appendChild(row);
        //});


    }
    else {
        console.log('ndsansn');
    }
    // });
}


function showdata2() {
    // Retrieve data from localStorage
    let storedData = localStorage.getItem("users");

    // Check if data exists
    if (storedData) {
        // Parse the string representation of the object back to a JavaScript object
        let data = JSON.parse(storedData);

        // Now you can work with 'data' which is your JavaScript object
        console.log(data);
    } else {
        console.log("No data found in localStorage for the specified key.");
    }


    // Assuming 'data' contains your parsed data
    let tableBody = document.querySelector("#table tbody");
    let data = JSON.parse(storedData);
    data.forEach(function (rowData) {
        let row = document.createElement("tr");

        // Loop through each value in the row data
        rowData.forEach(function (cellData) {
            let cell = document.createElement("td");

            if (cellData.key == 'educationfields') {
                console.log("hii");
            }
            cell.textContent = cellData;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

}


