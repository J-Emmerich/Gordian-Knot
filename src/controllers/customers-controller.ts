import { Customer } from "@models";

export const customersController = () => {
  async function fetchCustomers(req, res, next) {
    try {
      const customers = await Customer.find({
        project: req.context.currentProject._id,
      });
      res.status(200).json({ success: true, data: customers });
    } catch (err) {
      next(err);
    }
  }

  async function saveCustomer(req, res, next) {
    try {
      // need to validate request
      const customer = req.body;
      customer.projectId = req.context.currentProject._id;
      const newCustomer = new Customer(customer);
      await newCustomer.save();

      res.status(201).json({ success: true, data: newCustomer });
    } catch (err) {
      next(err);
    }
  }
  async function deleteOne(req, res, next) {
    try {
      const { user } = req;
      const { id } = req.params;

      await Customer.deleteOne({ _id: id });
      res.status(200).json({ success: true, data: "User deleted" });
    } catch (err) {
      next(err);
    }
  }

  async function editOne(req, res, next) {
    try {
      const { id } = req.params;
      const newCustomer = req.body;
      const editedCustomer = await Customer.replaceOne(
        { _id: id },
        newCustomer
      );

      res.status(200).json({ success: true, data: editedCustomer });
    } catch (err) {
      next(err);
    }
  }

  return {
    fetchCustomers,
    saveCustomer,
    deleteOne,
    editOne,
  };
};
