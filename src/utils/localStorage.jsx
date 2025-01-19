const employees=[
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Complete report submission",
                "task_description": "Prepare and submit the weekly progress report.",
                "date": "2025-01-20",
                "category": "Reporting"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Attend team meeting",
                "task_description": "Participate in the quarterly strategy meeting.",
                "date": "2025-01-15",
                "category": "Meeting"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Client presentation",
                "task_description": "Prepare the slides for the upcoming client presentation.",
                "date": "2025-01-22",
                "category": "Presentation"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Feedback review",
                "task_description": "Analyze the client feedback from the last project.",
                "date": "2025-01-16",
                "category": "Review"
            },
            {
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true,
                "task_title": "Submit budget proposal",
                "task_description": "Draft and submit the Q1 budget proposal.",
                "date": "2025-01-14",
                "category": "Finance"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false,
                "task_title": "Database update",
                "task_description": "Update the client database with recent entries.",
                "date": "2025-01-19",
                "category": "Database"
            },
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Organize training session",
                "task_description": "Plan a technical training session for new recruits.",
                "date": "2025-01-23",
                "category": "Training"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Inventory check",
                "task_description": "Conduct a complete inventory check and report.",
                "date": "2025-01-12",
                "category": "Logistics"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": true,
                "task_title": "Marketing campaign",
                "task_description": "Launch the new social media marketing campaign.",
                "date": "2025-01-18",
                "category": "Marketing"
            },
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Team coordination",
                "task_description": "Coordinate with the sales team for the upcoming product launch.",
                "date": "2025-01-25",
                "category": "Coordination"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "IT system upgrade",
                "task_description": "Upgrade the office IT systems with the latest software.",
                "date": "2025-01-10",
                "category": "IT"
            },
            {
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false,
                "task_title": "Conduct interviews",
                "task_description": "Assist HR in conducting interviews for new positions.",
                "date": "2025-01-20",
                "category": "HR"
            },
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Prepare financial report",
                "task_description": "Compile the annual financial report for the management team.",
                "date": "2025-01-26",
                "category": "Finance"
            }
        ]
    }
]

const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}
]

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))

    console.log(admin,employees);
    
    


}