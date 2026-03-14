let projectsContainer = document.querySelector(".projects-container");

// Define project categories
const projectCategories = {
    real: [
        {
            title: "TAMM AbuDhabi - منصة تم",
            technologies: ["Government Platform"],
            image: "images/projects/tamm.png",
            description: "TAMM is a government platform that provides a wide range of services to the residents of Abu Dhabi.",
            link: "https://www.tamm.abudhabi/",
            role: "Frontend developer and QA (Quality)",

        }, {
            title: "Property Finder & PF Expert",
            technologies: ["React.js", "Tailwind", "axios", "supabase", "node.js", "express js", "firebase"],
            image: "images/projects/pf.png",
            description: "Property Finder is a web application that helps users find the best property for their needs.",
            link: "",
            role: "Full-stack developer",

        }, {
            title: "Mortgage Finder",
            technologies: ["React.js", "Tailwind", "axios"],
            image: "images/projects/mortgage-finder.png",
            description: "Mortgage Finder is a web application that helps users find the best mortgage rates for their needs.",
            link: "https://mortgage-finder.vercel.app/",
            role: "Frontend developer",

        }
    ],
    educational: [
        {
            title: "Maintainance Now",
            technologies: ["React.js", " Tailwind", "redux", "axios"],
            description: "on demand maintainance service website to book maintainance services",
            image: "images/projects/maintenance-now.png",
            link: "https://maintainance-now.vercel.app",
            code: "https://github.com/fatma372/maintainance-now"
        },
        {
            title: "Foody Restaurant",
            technologies: ["Next.js", " Tailwind"],
            description: "A web application for recipes and meals instructons with search results",
            image: "images/projects/foody-restaurant.png",
            link: "https://foody-restaurant-zeta.vercel.app/",
            code: "https://github.com/fatma372/foody-restaurant.git"
        },
        {
            title: "Courses dashboard",
            technologies: ["React.js", " Tailwind", "Context API"],
            description: "A web application for courses dashboard with search results and edit courses or delete them",
            image: "images/projects/courses-dashboard.png",
            link: "https://courses-dashboard-mu.vercel.app/",
            code: "https://github.com/fatma372/courses-dashboard.git"
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
            title: "Express shop",
            technologies: ["HTML", "CSS", "JavaScript"],
            description: "website to display products, product categories and search on them.",
            image: "images/projects/express-store.png",
            link: "https://fatma372.github.io/express-shop/",
            code: "https://github.com/fatma372/express-shop.git"
        },
        {
            title: "Bakery",
            technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
            description: "Bakery website showing products and bakery overview.",
            image: "images/projects/bakery.png",
            link: "https://fatma372.github.io/bakery/",
            code: "https://github.com/fatma372/bakery.git"
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
            title: "Home services",
            technologies: ["HTML", "CSS", "JavaScript"],
            description: "website to introduce home services company and show it's services.",
            image: "images/projects/inance.png",
            link: "https://fatma372.github.io/Inance/",
            code: "https://github.com/fatma372/Inance.git"
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
        {
            title: "Charles Business",
            technologies: ["React.js", " Tailwind"],
            description: "A web application UI for business development website",
            image: "images/projects/charles.png",
            link: "https://charles-pink.vercel.app",
            code: "https://github.com/fatma372/charles.git"
        },
        {
            title: "Rotors",
            technologies: ["React.js", " Tailwind"],
            description: "A web application UI for cars",
            image: "images/projects/rotors.png",
            link: "https://rotors.vercel.app/",
            code: "https://github.com/fatma372/rosto.git"
        },
        {
            title: "Travilifa",
            technologies: ["React", "Bootstrap"],
            description: "UI to search for travel destintations, popular places and feedbacks.",
            image: "images/projects/travilifa.png",
            link: "https://travilifa.vercel.app/",
            code: "https://github.com/fatma372/Travilifa.git"
        }
    ]
};

// Current project category being displayed
let currentCategory = 'all';

// Function to render projects based on category
function renderProjects(category) {
    projectsContainer.innerHTML = '';

    let projectsToShow = [];

    if (category === 'all') {
        // Combine all projects
        projectsToShow = [...projectCategories.real, ...projectCategories.educational];
    } else {
        projectsToShow = projectCategories[category];
    }

    projectsToShow.forEach(project => {
        projectsContainer.innerHTML += `
        <div class="project-card card col-lg-3 col-10 p-2">
                    <img class="card-img" src=${project.image} alt=${project.title}>
                   <div class="card-body d-flex flex-column gap-1 justify-content-between">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="languages">
                       ${project.technologies.join(", ")}.
                    </p>
                     ${project.role ? `<p class="role text-secondary mb-1" style="font-weight: 600;"> <i class="fa-solid fa-caret-right me-2 pink-text"></i> ${project.role}</p>` : ''}
                    <p class="card-text description">${project.description}</p>
                    <div> 
                    <a href=${project.link} target="_blank" class="link btn btn-dark text-dark shadow-sm"><i class="fa-solid fa-link"></i> <span class="text-light"> view </span> </a>
                    ${project.code ? `<a href=${project.code} target="_blank" class="code btn btn-dark text-dark shadow-sm"><i class="fab fa-github"></i> </a>` : ''}
                    
                    </div>
                   </div>
                </div>
        `;
    });
}

// Function to switch project categories
function switchProjectCategory(category) {
    currentCategory = category;
    renderProjects(currentCategory);

    // Update active button state
    document.querySelectorAll('.project-category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
}

// Add event listeners to project category buttons
document.addEventListener('DOMContentLoaded', function () {
    // Initial render with all projects
    renderProjects('all');

    // Add click event listeners to category buttons
    document.querySelectorAll('.project-category-btn').forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            switchProjectCategory(category);
        });
    });

    // Self-scrolling infinite loop for skills and services
    const containers = document.querySelectorAll('.skills-container1, .skills-container2');

    containers.forEach(container => {
        let originalChildren = Array.from(container.children);

        // Ensure enough clones to fill a wide screen
        let clonesCount = container.classList.contains('services-container') ? 6 : 2;

        for (let i = 0; i < clonesCount; i++) {
            originalChildren.forEach(child => {
                container.appendChild(child.cloneNode(true));
            });
        }

        let scrollAmount = 0;
        let exactSetWidth = 0;
        let isHovered = false;

        container.addEventListener('mouseenter', () => isHovered = true);
        container.addEventListener('mouseleave', () => isHovered = false);
        container.addEventListener('touchstart', () => isHovered = true);
        container.addEventListener('touchend', () => isHovered = false);

        function scrollLoop() {
            if (!isHovered && exactSetWidth > 0) {
                scrollAmount += 1;
                if (scrollAmount >= exactSetWidth) {
                    scrollAmount -= exactSetWidth;
                }
                container.scrollLeft = scrollAmount;
            }
            requestAnimationFrame(scrollLoop);
        }

        // Wait for layout to settle before calculating width
        setTimeout(() => {
            if (originalChildren.length > 0) {
                const first = originalChildren[0];
                const cloneFirst = container.children[originalChildren.length];
                exactSetWidth = cloneFirst.offsetLeft - first.offsetLeft;
            }
            scrollLoop();
        }, 500);
    });
});