function showRoadmap(){
    const career = document.getElementById("career").value;
    const result = document.getElementById("result");

    const roadmaps = {
        java: {
            title: "Java Developer Roadmap",
            skills: ["Core Java", "OOP", "Collections", "JDBC", "Spring Boot", "MySQL", "REST API", "Git"],
            roadmap: ["Learn Core Java", "Practice OOP and DSA", "Build console projects", "Learn JDBC and MySQL", "Learn Spring Boot", "Create REST API projects", "Upload projects on GitHub"],
            projects: ["Employee Management System", "Bank Management System", "Online Quiz System", "Library Management System"],
            tips: ["Revise OOP concepts", "Practice SQL queries", "Learn API testing using Postman", "Prepare Java interview questions"],
            salary: "₹3 LPA – ₹6 LPA for freshers"
        },

        software: {
            title: "Software Engineer Roadmap",
            skills: ["Java/Python", "DSA", "OOP", "DBMS", "Operating System", "Computer Networks", "Git", "Problem Solving"],
            roadmap: ["Build programming fundamentals", "Practice DSA daily", "Understand core CS subjects", "Build real-world projects", "Contribute to GitHub", "Prepare aptitude and coding interviews"],
            projects: ["Portfolio Website", "Expense Tracker", "Job Application Tracker", "Task Management System"],
            tips: ["Solve coding problems regularly", "Revise DBMS and OS", "Improve communication skills", "Explain your projects clearly"],
            salary: "₹3 LPA – ₹8 LPA for freshers"
        },

        web: {
            title: "Web Developer Roadmap",
            skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "GitHub Pages", "Node.js", "API", "Database"],
            roadmap: ["Master HTML and CSS", "Learn JavaScript DOM", "Build responsive websites", "Learn Git and GitHub", "Build portfolio projects", "Learn backend basics", "Deploy projects online"],
            projects: ["Portfolio Website", "E-commerce Website", "Career Roadmap Website", "Weather App"],
            tips: ["Focus on UI design", "Make websites mobile-friendly", "Add live project links", "Show screenshots in GitHub README"],
            salary: "₹2.5 LPA – ₹5 LPA for freshers"
        },

        data: {
            title: "Data Analyst Roadmap",
            skills: ["Excel", "SQL", "Python", "Pandas", "Data Cleaning", "Power BI", "Statistics", "Visualization"],
            roadmap: ["Learn Excel basics", "Practice SQL queries", "Learn Python for data analysis", "Use Pandas and Matplotlib", "Create dashboards", "Build portfolio case studies"],
            projects: ["Sales Dashboard", "Expense Analysis", "Student Performance Analysis", "Customer Data Report"],
            tips: ["Practice SQL daily", "Create dashboards", "Explain insights clearly", "Learn storytelling with data"],
            salary: "₹3 LPA – ₹6 LPA for freshers"
        }
    };

    if(career === ""){
        result.innerHTML = `
            <h3>Please select a career goal first.</h3>
            <p>Choose one option from the dropdown to generate your personalized roadmap.</p>
        `;
        return;
    }

    const data = roadmaps[career];

    result.innerHTML = `
        <h3>${data.title}</h3>

        <p><strong>Expected Fresher Salary:</strong> ${data.salary}</p>

        <h4>Required Skills</h4>
        <ul>
            ${data.skills.map(skill => `<li>${skill}</li>`).join("")}
        </ul>

        <h4>Learning Roadmap</h4>
        <ul>
            ${data.roadmap.map(step => `<li>${step}</li>`).join("")}
        </ul>

        <h4>Recommended Projects</h4>
        <ul>
            ${data.projects.map(project => `<li>${project}</li>`).join("")}
        </ul>

        <h4>Interview Preparation Tips</h4>
        <ul>
            ${data.tips.map(tip => `<li>${tip}</li>`).join("")}
        </ul>
    `;
}