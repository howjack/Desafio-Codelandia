const projects = [
    {
        nr: '01',
        name: 'Codelândia Blog',
        link: `./Desafio01`
    },
    {
        nr: '02',
        name: 'Jordan Shoes',
        link: `./Desafio02`
    },
    {
        nr: '03',
        name: 'Gift Shop',
        link: `./Desafio03`
    },
    {
        nr: '04',
        name: 'Login Page',
        link: `./Desafio04`
    },
];

console.log(projects);

const app = document.getElementById('app');

projects.forEach(project => {
    const title = `${project.name} - #${project.nr}`;
    const imgURL = project.link + "/imageBase.png";

    const projectEl = document.createElement('a');
    projectEl.classList.add('project');
    projectEl.href = project.link;
    projectEl.target = '_blank';

    projectEl.innerHTML = `
        <img src="${imgURL}" alt="${title}"/>
		<p>
			${title}
		</p>
    `;

    app.appendChild(projectEl);
});
