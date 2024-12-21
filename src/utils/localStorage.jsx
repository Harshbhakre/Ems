const employees = [
  {
    id: 1,
    name: "Arjun",
    email: "arjun@e.com",
    password: "123",
    tasks: [
      {
        title: "Prepare monthly report",
        description: "Compile and analyze sales data for the month.",
        date: "2024-12-15",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Discuss project progress with the team.",
        date: "2024-12-16",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client follow-up",
        description: "Follow up with client regarding the project deliverables.",
        date: "2024-12-17",
        category: "Client Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    name: "Priya",
    email: "priya@e.com",
    password: "123",
    tasks: [
      {
        title: "System maintenance",
        description: "Perform routine system maintenance.",
        date: "2024-12-14",
        category: "IT Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update documentation",
        description: "Revise project documentation with recent updates.",
        date: "2024-12-18",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Debug application",
        description: "Fix bugs in the application module.",
        date: "2024-12-20",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 3,
    name: "Vikram",
    email: "vikram@e.com",
    password: "123",
    tasks: [
      {
        title: "Prepare training material",
        description: "Develop material for the new training program.",
        date: "2024-12-13",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Host webinar",
        description: "Conduct a webinar for the new product launch.",
        date: "2024-12-15",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Review applications",
        description: "Evaluate applications for the open positions.",
        date: "2024-12-19",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    name: "Sneha",
    email: "sneha@e.com",
    password: "123",
    tasks: [
      {
        title: "Analyze marketing campaign",
        description: "Evaluate the performance of the recent marketing campaign.",
        date: "2024-12-12",
        category: "Analysis",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Organize workshop",
        description: "Plan and organize a workshop for new hires.",
        date: "2024-12-18",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Budget review",
        description: "Review the quarterly budget and make adjustments.",
        date: "2024-12-21",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 5,
    name: "Kavya",
    email: "kavya@e.com",
    password: "123",
    tasks: [
      {
        title: "Coordinate event",
        description: "Coordinate with vendors for the annual event.",
        date: "2024-12-15",
        category: "Event Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update website",
        description: "Make necessary updates to the company website.",
        date: "2024-12-16",
        category: "Web Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Inventory check",
        description: "Perform inventory check and update records.",
        date: "2024-12-18",
        category: "Operations",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    }
  }
];

  
  const admin =[{
      id: 1,
      email: "admin@e.com",
      password: "123"
    }]

  export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalStorage = ()=>{
   const employees =JSON.parse(localStorage.getItem('employees'))
   const admin =JSON.parse(localStorage.getItem('admin'))

   return{employees,admin}
  } 