function generateStudentGrade(marks) {
    // Ensure marks is within valid range
    if (marks < 0 || marks > 100 || isNaN(marks)) {
        console.log("Invalid input. Marks should be a number between 0 and 100.");
        return; // Exit the function early if input is invalid
    }

    let grade; // Declare grade variable
    
    // Determine grades based on marks
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Output the corresponding grade
    console.log(`The grade for the mark ${marks} is Grade: ${grade}.`);
}

// usage:
generateStudentGrade(85); // Output: The grade for the mark 85 is Grade: A.
generateStudentGrade(70); // Output: The grade for the mark 70 is Grade: B.
generateStudentGrade(55); // Output: The grade for the mark 55 is Grade: C.
generateStudentGrade(45); // Output: The grade for the mark 45 is Grade: D.
generateStudentGrade(30); // Output: The grade for the mark 30 is Grade: E.
generateStudentGrade("abc"); // Output: Invalid input. Marks should be a number between 0 and 100.
