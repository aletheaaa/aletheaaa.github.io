// showing project description
function showProjectDesc() {
    let projectDesc = document.getElementById("projectDesc");
    event.target.className = 'projectList chosen'
    console.log(event)
    // making the color of the proj titles change
    let projectList = document.getElementById("projectsList");
    let projectListItems = projectList.children;
    // console.log(projectListItems)
    for (child of projectListItems) {
        if (child != event.target) {
            child.className = 'projectList'
        }
    }
    // showing the project description
    let projects = {
        'FreeFoodie': {
            'desc': 'A website for finding recipies to cook with some analytics of your calories.',
            'techUsed': ['Vue.js', 'Firebase'],
            'link': 'https://github.com/ZheTaoGuo/IS216Project'
        },
        'goodBooks': {
            'desc': 'A website to keep track of the books you\'ve read.',
            'techUsed': ['Python', 'Flask', 'SQLite'],
            'link': 'https://github.com/aletheaaa/goodBooks'
        },
        'FinancialDashboard': {
            'desc': 'A website to keep track of your finances.',
            'techUsed': ['MERN Stack'],
            'link': 'https://github.com/dailysponge/ellipsisTeam001Backend'
        },
        'NotesNow' : {
            'desc': 'A marketplace for cheatsheets.',
            'techUsed': ['MERN Stack'],
            'link': 'https://github.com/dailysponge/HEAP2022-G2-BACKEND'
        },
    }
    let projName = event.target.id
    let projEle = document.getElementById("projectDesc")
    projEle.children[0].innerHTML = projName
    projEle.children[1].innerHTML = projects[projName]['desc']
    projEle.children[2].innerHTML = ''
    for (tech of projects[projName]['techUsed']) {
        projEle.children[2].innerHTML += "<li>" + tech + '</li>'
    }
    projEle.children[3].setAttribute('href', projects[projName]['link'])
}
