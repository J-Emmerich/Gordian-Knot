const {editCurrentProject} = require("../use-cases/user-use-cases");

module.exports = (methods) => {
    async function editOne(req, res) {
        try {
          const user = req.user;

          const currentProject = req.body;
          const editedUser = await editCurrentProject(methods, currentProject._id, user);
          res.status(200).json(editedUser);
        } catch (err) {
          res.send(err.message);
        }
      }

return { editOne };
};