const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Learn react-Beautiful-dnd" },
    "task-2": { id: "task-2", content: "Learn React Router" },
    "task-3": { id: "task-3", content: "Learn Authentication" },
    "task-4": { id: "task-4", content: "Learn Database Security" },
    "task-5": { id: "task-5", content: "Add new tasks to the cards" },
    "task-6": { id: "task-6", content: "Add the invoice feature to this" }
  },
  cards: {
    "card-1": {
      id: "card-1",
      title: "To do",
      isInsertingTask: false,
      taskIds: ["task-3", "task-4", "task-5", "task-6"]
    },
    "card-2": {
      id: "card-2",
      title: "In progress",
      isInsertingTask: false,
      taskIds: ["task-2"]
    },

    "card-3": {
      id: "card-3",
      title: "Done",
      isInsertingTask: false,
      taskIds: ["task-1"]
    }
  },
  // Facilitate reordering columns
  cardOrder: ["card-1", "card-2", "card-3"]
};

export default initialData;
