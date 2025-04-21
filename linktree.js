document.addEventListener("DOMContentLoaded", function() {
    // Define your links here
    const links = [
        { name: "Website", url: "https://www.fourwindsit.com/" },
        { name: "Remote Work Info", url:"https://www.fourwindsit.com/remote" },
        { name: "Blog", url:  "https://www.fourwindsit.com/blog"},
        // Add more links as needed
    ];

    const linksList = document.getElementById("links-list");

    // Add links to the list
    links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = link.name;
        a.href = link.url;
        li.appendChild(a);
        linksList.appendChild(li);
    });
});
