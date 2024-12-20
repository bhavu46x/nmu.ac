document.getElementById('resultForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Getting the roll number and candidate name
    var rollNo = document.getElementById('roll_no').value;
    var candidateName = document.getElementById('candidate_name').value;

    // Display roll number and candidate name
    document.getElementById('display_roll_no').textContent = rollNo;
    document.getElementById('display_name').textContent = candidateName;

    // Subjects list
    var subjects = ["Maths", "Chemistry", "Physics", "IKS", "Marathi", "Environmental Studies" , "English"];
    
    // Generate random marks for each subject
    var resultTable = document.getElementById('resultTable');
    resultTable.innerHTML = '';  // Clear previous results

    subjects.forEach(function(subject) {
        var randomMarks = Math.floor(Math.random() * 31); // Random marks between 0-30

        // Create table rows for subjects and marks
        var row = document.createElement('tr');
        row.innerHTML = `<td>${subject}</td><td>${randomMarks}</td>`;
        resultTable.appendChild(row);
    });

    // Show the result div
    document.getElementById('result').style.display = 'block';
});