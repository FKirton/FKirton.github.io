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
});
