document.addEventListener('DOMContentLoaded', () => {
    const allSummaries = document.querySelectorAll("summary");

    allSummaries.forEach(summary => {
        summary.addEventListener('click', (e) => {
            allSummaries.forEach((summary) => {
                if (summary != e.target) {
                    summary.parentElement.open = false;
                }
            });
        });
    });


    const collapsibleTabs = document.querySelectorAll(".collapsible-tab");

    collapsibleTabs.forEach(collapsible => {
        collapsible.addEventListener("click", (e) => {
            collapsibleTabs.forEach((tab) => {
                if (tab === e.target) {
                    tab.classList.toggle("active");
                    const content = tab.nextElementSibling;
                    if (content.style.display === "block") {
                        content.style.display = "none";
                    } else {
                        content.style.display = "block";
                    }
                } else {
                    const content = tab.nextElementSibling;
                    content.style.display = "none";
                }
            });
        });
    });

    window.addEventListener("resize", (event) => {
        const collapsible_elements = document.querySelectorAll(".collapsible-content");

        collapsible_elements.forEach((element) => {
            if (window.innerWidth >= 800) {
                // Make sure all the collapsible content elements are visible once the tabs
                // have been hidden
                if (window.getComputedStyle(element.previousElementSibling).getPropertyValue("display") === "none") {
                    element.style.display = "block";
                }
            } else {
                if (!(element.previousElementSibling.classList.contains("active"))) {
                    element.style.display = "none";
                }
            }
        });
    });
});
