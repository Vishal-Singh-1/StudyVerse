
    document.addEventListener("DOMContentLoaded", () => {
        const lecButton = document.getElementById("fri");
        const impButton = document.getElementById("sec");
        const vidButton = document.getElementById("thi");
        const dataContainer = document.querySelector(".dataContainer");
    
        // Ask for the semester
        let semester = parseInt(prompt("Please enter your semester (e.g., 1, 2, 3, etc.):"), 10);
    
        // Data for notes and videos
    const subjects = {
        1: {
            subjects: ["Chemistry", "Engineering_Mathematics_1", "Communication_Skills", "CPLT", "IC"],
            notes: {
                Engineering_Mathematics_1: [
                    { chapter: "Algebra", link: "downloadfiles\\math_algebra.pdf" },
                    { chapter: "Calculus", link: "downloadfiles\\math_calculus.pdf" }
                ],
                Communication_Skills: [
                    { chapter: "Mechanics", link: "downloadfiles\\physics_mechanics.pdf" },
                    { chapter: "Optics", link: "downloadfiles\\physics_optics.pdf" }
                ],
                Chemistry: [
                    { chapter: "Water and its Treatment", link: "downloadfiles\\chemistry_water_treatment.pdf" },
                    { chapter: "Fuels and Lubricants", link: "downloadfiles\\chemistry_fuels.pdf" }
                ],
                CPLT : [
                    { chapter: "Recursion", link: "downloadfiles\\chemistry_organic.pdf" },
                    { chapter: "Variables", link: "downloadfiles\\chemistry_inorganic.pdf" }
                ],
                IC : [
                    { chapter: "Preamble", link: "downloadfiles\\Preamble.pdf" },
                    { chapter: "Fundamental_Rights", link: "downloadfiles\\Fundamental_Rights.pdf" }
                ]
    
            },
          videos: {
            Engineering_Mathematics_1: [
                { topic: "Algebra", link: "https://youtu.be/DGwKEQbV9wY?si=YxjgXuAAq8L0yzIB" },
                { topic: "Calculus", link: "https://youtu.be/2qS2o0fQ8zM?si=KttD8r0GjglMcSuF" }
            ],
            Communication_Skills: [
                { topic: "Mechanics", link: "https://youtu.be/2qS2o0fQ8zM?si=KttD8r0GjglMcSuF" },
                { topic: "Optics", link: "https://youtu.be/2qS2o0fQ8zM?si=KttD8r0GjglMcSuF" }
            ],
            Chemistry: [
                { topic: "Organic", link: "https://youtu.be/2qS2o0fQ8zM?si=KttD8r0GjglMcSuF" },
                { topic: "Inorganic", link: "hhttps://youtu.be/2qS2o0fQ8zM?si=KttD8r0GjglMcSuF" }
            ],
            CPLT: [
                { topic: "Recursion", link: "https://youtu.be/2qS2o0fQ8zM?si=KttD8r0GjglMcSuF" },
                { topic: "Variables", link: "hhttps://youtu.be/2qS2o0fQ8zM?si=KttD8r0GjglMcSuF" }
            ],
            IC: [
                { topic: "Preamble", link: "https://youtu.be/2qS2o0fQ8zM?si=KttD8r0GjglMcSuF" },
                { topic: "Fundamental_Rights", link: "hhttps://youtu.be/2qS2o0fQ8zM?si=KttD8r0GjglMcSuF" }
            ]
        }
    },
    
    2: {
        subjects: [ "Physics","EM2" , "Proffesional_Skills","CPP","BEE"],
        notes: {
            EM2: [
                { chapter: "matrix", link: "downloadfiles\\matrix.pdf" },
                { chapter: "sequence and series", link: "downloadfiles\\sequence.pdf" }
            ],
            Proffesional_Skills : [
                { chapter: "advanced grammer", link: "downloadfiles\\grammer.pdf" },
                { chapter: "composition", link: "downloadfiles\\composition.pdf" }
            ],
            Physics: [
                { chapter: "quantum mechanics", link: "downloadfiles\\mechanics.pdf" },
                { chapter: "holograph", link: "downloadfiles\\holograph.pdf" }
            ],
            CPP : [
                { chapter: "class", link: "downloadfiles\\class.pdf" },
                { chapter: "operators", link: "downloadfiles\\operators.pdf" }
            ],
            BEE : [
                { chapter: "logic gate", link: "downloadfiles\\gate.pdf" },
                { chapter: "semiconductor", link: "downloadfiles\\semiconductor.pdf" }
            ]
        },
        videos: {
            Math: [
                { topic: "Algebra", link: "https://video-algebra.com" },
                { topic: "Calculus", link: "https://video-calculus.com" }
            ],
            Physics: [
                { topic: "Mechanics", link: "https://video-mechanics.com" },
                { topic: "Optics", link: "https://video-optics.com" }
            ],
            Chemistry: [
                { topic: "Organic", link: "https://video-organic.com" },
                { topic: "Inorganic", link: "https://video-inorganic.com" }
            ]
        }
    },
    3:{
    subjects: [ "OS","DSA" , "Computer_Networks","SEPM","Life_Skills","COD"],
    notes: {
        OS: [
            { chapter: "scheduling", link: "downloadfiles\\scheduling.pdf" },
            { chapter: "synchronization", link: "downloadfiles\\synchronization.pdf" }
        ],
        DSA : [
            { chapter: "Graph", link: "downloadfiles\\graph.pdf" },
            { chapter: "Binary trees", link: "downloadfiles\\binary.pdf" }
        ],
        Computer_Networks: [
            
            { chapter: "link layer", link: "downloadfiles\\link.pdf" },
            { chapter: "network layer", link: "downloadfiles\\network.pdf" }
        ],
        SEPM : [
            { chapter: "SDLC", link: "downloadfiles\\sdlc.pdf" },
            { chapter: "testing", link: "downloadfiles\\testing.pdf" }
        ],
        Life_Skills : [
            { chapter: "percentage", link: "downloadfiles\\percentage.pdf" },
            { chapter: "speed and distance", link: "downloadfiles\\speed.pdf" }
        ],
        COD : [
            { chapter: "number system", link: "downloadfiles\\number.pdf" },
            { chapter: "memory", link: "downloadfiles\\memory.pdf" }
        ]
    },
    videos: {
        Math: [
            { topic: "Algebra", link: "https://video-algebra.com" },
            { topic: "Calculus", link: "https://video-calculus.com" }
        ],
        Physics: [
            { topic: "Mechanics", link: "https://video-mechanics.com" },
            { topic: "Optics", link: "https://video-optics.com" }
        ],
        Chemistry: [
            { topic: "Organic", link: "https://video-organic.com" },
            { topic: "Inorganic", link: "https://video-inorganic.com" }
        ]
    }
    }
    };
    
        // Notes Button Action
        lecButton.addEventListener("click", () => {
            if (subjects[semester]) {
                let tableHTML = `<table><tr><th>Subject</th><th>Notes</th></tr>`;
                subjects[semester].subjects.forEach((subject) => {
                    tableHTML += `<tr class="notes-table-row"><td>${subject}</td>
                    <td><button class="toggle-btn" data-subject="${subject}">View Topics</button></td></tr>`;
                });
                tableHTML += `</table>`;
                dataContainer.innerHTML = tableHTML;
    
                // Add event listeners to toggle buttons
                document.querySelectorAll('.toggle-btn').forEach(button => {
                    button.addEventListener('click', (event) => {
                        const chosenSubject = event.target.dataset.subject;
                        const parentRow = event.target.closest('tr'); // Find the current table row
                        const nextRow = parentRow.nextElementSibling; // Find the next row
    
                        // Check if the chapter row already exists
                        if (nextRow && nextRow.classList.contains('notes-chapter-row')) {
                            nextRow.remove(); // Remove the chapter row if it already exists (toggle off)
                        } else {
                            // If the chapter row does not exist, create it
                            if (subjects[semester].notes[chosenSubject]) {
                                let chapterList = `<ul>`;
                                subjects[semester].notes[chosenSubject].forEach(note => {
                                    chapterList += `<li>${note.chapter}: <a href="${note.link}" target="_blank">Download</a></li>`;
                                });
                                chapterList += `</ul>`;
    
                                // Create a new row for the chapter list
                                const newRow = document.createElement('tr');
                                newRow.classList.add('notes-chapter-row');
                                newRow.innerHTML = `<td colspan="2">${chapterList}</td>`;
                                parentRow.after(newRow); // Insert the new row after the current row
                            }
                        }
                    });
                });
            } else {
                alert("Semester not available!");
            }
        });
    
        // Important Questions Button Action
        impButton.addEventListener("click", () => {
            if (subjects[semester]) {
                let tableHTML = `<table><tr><th>Subject</th><th>Important Questions</th></tr>`;
                subjects[semester].subjects.forEach((subject) => {
                    tableHTML += `<tr class="questions-table-row"><td>${subject}</td>
                    <td><button class="toggle-btn" data-subject="${subject}">View Questions</button></td></tr>`;
                });
                tableHTML += `</table>`;
                dataContainer.innerHTML = tableHTML;
    
                // Add event listeners to toggle buttons
                document.querySelectorAll('.toggle-btn').forEach(button => {
                    button.addEventListener('click', (event) => {
                        const chosenSubject = event.target.dataset.subject;
                        const parentRow = event.target.closest('tr'); // Find the current table row
                        const nextRow = parentRow.nextElementSibling; // Find the next row
    
                        // Check if the chapter row already exists
                        if (nextRow && nextRow.classList.contains('questions-chapter-row')) {
                            nextRow.remove(); // Remove the chapter row if it already exists (toggle off)
                        } else {
                            // If the chapter row does not exist, create it
                            if (subjects[semester].notes[chosenSubject]) {
                                let chapterList = `<ul>`;
                                subjects[semester].notes[chosenSubject].forEach(note => {
                                    chapterList += `<li>${note.chapter}: <a href="${note.link}" target="_blank">View</a></li>`;
                                });
                                chapterList += `</ul>`;
    
                                // Create a new row for the chapter list
                                const newRow = document.createElement('tr');
                                newRow.classList.add('questions-chapter-row');
                                newRow.innerHTML = `<td colspan="2">${chapterList}</td>`;
                                parentRow.after(newRow); // Insert the new row after the current row
                            }
                        }
                    });
                });
            } else {
                alert("Semester not available!");
            }
        });
    
        // Videos Button Action
        vidButton.addEventListener("click", () => {
            if (subjects[semester]) {
                let tableHTML = `<table><tr><th>Subject</th><th>Videos</th></tr>`;
                subjects[semester].subjects.forEach((subject) => {
                    tableHTML += `<tr class="videos-table-row"><td>${subject}</td>
                    <td><button class="toggle-btn" data-subject="${subject}">View Videos</button></td></tr>`;
                });
                tableHTML += `</table>`;
                dataContainer.innerHTML = tableHTML;
    
                // Add event listeners to toggle buttons
                document.querySelectorAll('.toggle-btn').forEach(button => {
                    button.addEventListener('click', (event) => {
                        const chosenSubject = event.target.dataset.subject;
                        const parentRow = event.target.closest('tr'); // Find the current table row
                        const nextRow = parentRow.nextElementSibling; // Find the next row
    
                        // Check if the chapter row already exists
                        if (nextRow && nextRow.classList.contains('videos-chapter-row')) {
                            nextRow.remove(); // Remove the chapter row if it already exists (toggle off)
                        } else {
                            // If the chapter row does not exist, create it
                            if (subjects[semester].videos[chosenSubject]) {
                                let videoList = `<ul>`;
                                subjects[semester].videos[chosenSubject].forEach(video => {
                                    videoList += `<li>${video.topic}: <a href="${video.link}" target="_blank">Watch</a></li>`;
                                });
                                videoList += `</ul>`;
    
                                // Create a new row for the video list
                                const newRow = document.createElement('tr');
                                newRow.classList.add('videos-chapter-row');
                                newRow.innerHTML = `<td colspan="2">${videoList}</td>`;
                                parentRow.after(newRow); // Insert the new row after the current row
                            }
                        }
                    });
                });
            } else {
                alert("Semester not available!");
            }
        });
    });
    