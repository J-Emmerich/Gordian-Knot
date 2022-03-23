const {
  fetchAllProjects,
  addProject,
  editProject,
  findUser,
  editCurrentProject,
} = require("../use-cases/setting-use-cases");

module.exports = (methods) => {
  async function fetchUser(req, res, next) {
    try {
      const { user } = req;
      const updatedUser = await findUser(methods, user);
      res.status(200).json({ success: true, data: updatedUser });
    } catch (err) {
      next(err);
    }
  }

  async function fetchAll(req, res, next) {
    try {
      const { user } = req;
      const projects = await fetchAllProjects(methods, user);
      res.status(200).json({ success: true, data: projects });
    } catch (err) {
      next(err);
    }
  }

  async function createProject(req, res, next) {
    try {
      const { user } = req;
      const newProject = req.body;
      const userUpdated = await addProject(methods, newProject, user);
      console.log(userUpdated);
      res.status(201).json({ success: true, data: userUpdated });
    } catch (err) {
      err.route = "Setting";
      next(err);
    }
  }
  async function editOne(req, res, next) {
    try {
      const { user } = req;
      const { id } = req.params;
      const newProject = req.body;
      const editedProject = await editProject(methods, newProject, id, user);
      res.status(200).json({ success: true, data: editedProject });
    } catch (err) {
      next(err);
    }
  }

  async function editCurrentOne(req, res, next) {
    try {
      const { user } = req;
      const currentProject = req.body;
      const editedCurrentProject = await editCurrentProject(
        methods,
        currentProject._id,
        user
      );
      res.status(200).json({ success: true, data: editedCurrentProject });
    } catch (err) {
      next(err);
    }
  }

  // async function deleteOne(req, res) {
  //   try {
  //     const { user } = req;
  //     const { id } = req.params;
  //     await deleteProject(methods, id, user);
  //     res.status(200).json({ success: true, data: "deleted" });
  //   } catch (err) {
  //     res.send(err.message);
  //   }
  // }

  return {
    fetchUser,
    fetchAll,
    createProject,
    editOne,
    editCurrentOne,
  };
};
