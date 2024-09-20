document.addEventListener('DOMContentLoaded', ()=>{

const resumeButton = document.getElementById('resumeButton') as HTMLButtonElement;
const resumeEditButton = document.getElementById('edit-button') as HTMLButtonElement;
const editResume = document.getElementById('Edit-resume') as HTMLDivElement;
const editResumeContent = document.getElementById('resumeContent') as HTMLDivElement;

resumeButton.addEventListener('click',()=>{
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;


    editResumeContent.innerHTML =`
    
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
     
    `
    //editResume.classList.remove('hidden');
    //resumeButton.classList.remove('hidden');
})

resumeEditButton.addEventListener('click',()=>{
    editResumeContent.contentEditable = 'true';
    resumeEditButton.textContent = 'Save Resume';
    resumeEditButton.removeEventListener('click', ()=>{
        editResumeContent.contentEditable = 'false';
        resumeEditButton.textContent = 'Edit Resume';
    },)

    });

})




