let projectsContainer = document.querySelector(".projects-container");
const projects = [
    {
        title: "Foody Restaurant",
        technologies: ["Next js"," Tailwind"],
        description: "A web application for recipes and meals instructons with search results",
        image: "images/projects/foody-restaurant.png",
        link: "https://foody-restaurant-zeta.vercel.app/",
        code: "https://github.com/fatma372/foody-restaurant.git"
    },
    {
        title: "Home services",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "website to introduce home services company and show it's services.",
        image: "images/projects/inance.png",
        link: "https://fatma372.github.io/Inance/",
        code: "https://github.com/fatma372/Inance.git"
    },
    {
        title: "Bakery",
        technologies: ["HTML", "CSS","Bootstrap", "JavaScript"],
        description: "Bakery website showing products and bakery overview.",
        image: "images/projects/bakery.png",
        link: "https://fatma372.github.io/bakery/",
        code: "https://github.com/fatma372/bakery.git"
    },
    {
        title: "Cartoons",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "website to display cartoon and movies characters and their cinematic works.",
        image: "images/projects/cartoons.png",
        link: "https://fatma372.github.io/Cartoons/",
        code: "https://github.com/fatma372/Cartoons.git"
    },
    {
        title: "Travilifa",
        technologies: ["HTML", "CSS", "JavaScript", "React","Bootstrap"],
        description: "UI to search for travel destintations, popular places and feedbacks.",
        image: "images/projects/travilifa.png",
        link: "https://travilifa.vercel.app/",
        code: "https://github.com/fatma372/Travilifa.git"
    },
    {
        title: "Get-shop",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "website to display products, product categories and search on them.",
        image: "images/projects/get.png",
        link: "https://fatma372.github.io/Get-shop/",
        code: "https://github.com/fatma372/Get-shop.git"
    },
    {
        title: "Shopify",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "website to display products, product categories and search on them.",
        image: "images/projects/shopify.png",
        link: "https://fatma372.github.io/shopify/",
        code: "https://github.com/fatma372/shopify.git"
    },
    {
        title: "Postat",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "website to display posts, posts tags and search on them.",
        image: "images/projects/postat.png",
        link: "https://fatma372.github.io/Postat/",
        code: "https://github.com/fatma372/Postat.git"
    },
    {
        title: "To Do",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "to do list with local storage.",
        image: "images/projects/todo.png",
        link: "https://fatma372.github.io/to-do-list/",
        code: "https://github.com/fatma372/to-do-list.git"
    },
    
]

projects.forEach(project => {
    projectsContainer.innerHTML += `
    <div class="project-card card col-lg-3 col-9 p-2">
                <img class="card-img" src=${project.image} alt=${project.title}>
               <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="languages">
                   ${project.technologies.join(", ")}.
                </p>
                
                <p class="card-text description">${project.description}</p>
                <a href=${project.link} target="_blank" class="link btn btn-dark text-dark shadow-sm"><i class="fa-solid fa-link"></i> <span class="text-light"> view </span> </a>
                <a href=${project.code} target="_blank" class="code btn btn-dark text-dark shadow-sm"><i class="fab fa-github"></i> </a>
                
               </div>
            </div>
    `;
})