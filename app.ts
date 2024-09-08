
document.getElementById('resume-form')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Generate resume content
    const resumeContent = `
        <h3 class="editable" contenteditable="true">${name}</h3>
        <p class="editable" contenteditable="true">Email: ${email}</p>
        <p class="editable" contenteditable="true">Phone: ${phone}</p>
        <h4>Education</h4>
        <p class="editable" contenteditable="true">${education}</p>
        <h4>Work Experience</h4>
        <p class="editable" contenteditable="true">${workExperience}</p>
        <h4>Skills</h4>
        <ul>
            ${skills.map(skill => `<li class="editable" contenteditable="true">${skill.trim()}</li>`).join('')}
        </ul>
    `;

    // Display the generated resume
    document.getElementById('resume-content')!.innerHTML = resumeContent;

    // Make sections editable
    makeSectionsEditable();
});

// Function to enable editing of resume sections
function makeSectionsEditable() {
    const editableElements = document.querySelectorAll('.editable');

    editableElements.forEach(element => {
        element.addEventListener('focusout', () => {
            // Optional: Add any validation or saving logic here on focus out
        });
    });
}
