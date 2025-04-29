let currentlyOpen = null;

function toggleProject(projectNumber) {
    const bracelet = document.querySelector(`.bracelet:nth-child(${projectNumber})`);
    const projectInfo = document.getElementById(`project-${projectNumber}`);
    
    // If clicking the already open project, close it
    if (currentlyOpen === projectNumber) {
        bracelet.classList.remove('open');
        projectInfo.classList.remove('show');
        currentlyOpen = null;
        return;
    }
    
    if (currentlyOpen) {
        const openBracelet = document.querySelector(`.bracelet:nth-child(${currentlyOpen})`);
        const openProjectInfo = document.getElementById(`project-${currentlyOpen}`);
        openBracelet.classList.remove('open');
        openProjectInfo.classList.remove('show');
    }
    
    // Open the clicked project
    bracelet.classList.add('open');
    projectInfo.classList.add('show');
    currentlyOpen = projectNumber;
}
