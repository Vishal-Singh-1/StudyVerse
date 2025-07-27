document.addEventListener("DOMContentLoaded", () => {
    const firstButton = document.getElementById("first");
    const secondButton = document.getElementById("second");
    const thirdButton = document.getElementById("third");
    const container = document.getElementById("dataContainer");

    // Resource data
    const resources = {
        1: {
            assignments: [
                { title: "Assignment 1", link: "./downloadfiles/assignment1.pdf" },
                { title: "Assignment 2", link: "./downloadfiles/assignment2.pdf" }
            ],
            solutions: [
                { title: "Solution 1", link: "./downloadfiles/solution1.pdf" },
                { title: "Solution 2", link: "./downloadfiles/solution2.pdf" }
            ],
            pyqs: [
                { title: "PYQ 1", link: "./downloadfiles/pyq1.pdf" },
                { title: "PYQ 2", link: "./downloadfiles/pyq2.pdf" }
            ]
        },
        2: {
            assignments: [
                { title: "Assignment 3", link: "./downloadfiles/assignment3.pdf" },
                { title: "Assignment 4", link: "./downloadfiles/assignment4.pdf" }
            ],
            solutions: [
                { title: "Solution 3", link: "./downloadfiles/solution3.pdf" },
                { title: "Solution 4", link: "./downloadfiles/solution4.pdf" }
            ],
            pyqs: [
                { title: "PYQ 3", link: "./downloadfiles/pyq3.pdf" },
                { title: "PYQ 4", link: "./downloadfiles/pyq4.pdf" }
            ]
        }
    };

    // Ask user for semester
    let semester = parseInt(prompt("Enter your semester (1 or 2):"), 10);
    if (isNaN(semester) || !resources[semester]) {
        alert("Invalid or unavailable semester.");
        return;
    }

    // Generate HTML table
    const createTable = (items, type) => {
        return `
            <table>
                <thead>
                    <tr>
                        <th>${type} Title</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    ${items.map(item => `
                        <tr>
                            <td>${item.title}</td>
                            <td><a href="${item.link}" target="_blank">Open</a></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    };

    // Inject table into same tab
    const showInSameTab = (tableHTML, type) => {
        container.innerHTML = `
            <h2>${type}</h2>
            ${tableHTML}
        `;
        container.classList.add("fade-in");
        setTimeout(() => container.classList.remove("fade-in"), 400); // smooth effect reset
    };

    // Button event bindings
    firstButton.addEventListener("click", () => {
        const table = createTable(resources[semester].assignments, "Assignment");
        showInSameTab(table, "Assignments");
    });

    secondButton.addEventListener("click", () => {
        const table = createTable(resources[semester].solutions, "Solution");
        showInSameTab(table, "Solutions");
    });

    thirdButton.addEventListener("click", () => {
        const table = createTable(resources[semester].pyqs, "PYQ");
        showInSameTab(table, "Previous Year Questions");
    });
});
