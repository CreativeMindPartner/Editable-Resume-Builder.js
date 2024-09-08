var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Generate resume content
    var resumeContent = "\n        <h3 class=\"editable\" contenteditable=\"true\">".concat(name, "</h3>\n        <p class=\"editable\" contenteditable=\"true\">Email: ").concat(email, "</p>\n        <p class=\"editable\" contenteditable=\"true\">Phone: ").concat(phone, "</p>\n        <h4>Education</h4>\n        <p class=\"editable\" contenteditable=\"true\">").concat(education, "</p>\n        <h4>Work Experience</h4>\n        <p class=\"editable\" contenteditable=\"true\">").concat(workExperience, "</p>\n        <h4>Skills</h4>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li class=\"editable\" contenteditable=\"true\">".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
    // Display the generated resume
    document.getElementById('resume-content').innerHTML = resumeContent;
    // Make sections editable
    makeSectionsEditable();
});
// Function to enable editing of resume sections
function makeSectionsEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('focusout', function () {
            // Optional: Add any validation or saving logic here on focus out
        });
    });
}
