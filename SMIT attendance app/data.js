
document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("studentForm");
    const addDataButton = document.getElementById("addDataButton");

    addDataButton.addEventListener("click", function () {
      
        const classTiming = document.getElementById("classTiming").value;
        const schedule = document.getElementById("schedule").value;
        const teacherName = document.getElementById("teacherName").value;
        const sectionName = document.getElementById("sectionName").value;
        const courseName = document.getElementById("courseName").value;
        const batchNumber = document.getElementById("batchNumber").value;

        
        if (!classTiming || !schedule || !teacherName || !sectionName || !courseName || !batchNumber) {
            alert("Please complete the entire form.");
        } else {
            window.location.assign('dashboard.html');
            alert("Data successfully added!");
            studentForm.reset();
        }
    });
});