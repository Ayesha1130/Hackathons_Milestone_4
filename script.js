"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const resumeButton = document.getElementById('resumeButton');
    const resumeEditButton = document.getElementById('edit-button');
    const editResume = document.getElementById('Edit-resume');
    const editResumeContent = document.getElementById('resumeContent');
    resumeButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const education = document.getElementById('education').value;
        const experience = document.getElementById('experience').value;
        const skills = document.getElementById('skills').value;
        editResumeContent.innerHTML = `
    
     <form>
     <fieldset>
     <legend>Edit Resume</legend>
     <label for="name">Name:</label>
     <input type="text" id="name" value="${name}">
     <label for="email">Email:</label>
     <input type="text" id="email" value="${email}">
     <label for="phone">Phone:</label>
     <input type="text" id="phone" value="${phone}">
     <label for="education">Education:</label>
     <input type="text" id="education" value="${education}">
     <label for="experience">Experience:</label>
     <input type="text" id="experience" value="${experience}">
     <label for="skills">Skills:</label>
     <input type="text" id="skills" value="${skills}">
     </fieldset>

     </form>
     
    `;
        //editResume.classList.remove('hidden');
        //resumeButton.classList.remove('hidden');
    });
    resumeEditButton.addEventListener('click', () => {
        editResumeContent.contentEditable = 'true';
        resumeEditButton.textContent = 'Save Resume';
        resumeEditButton.removeEventListener('click', () => {
            editResumeContent.contentEditable = 'false';
            resumeEditButton.textContent = 'Edit Resume';
        });
    });
});
