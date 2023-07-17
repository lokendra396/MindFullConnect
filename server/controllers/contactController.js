import contactModel from "../models/contactModel.js";
export const createContactConstroller = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }
    const post = await new contactModel({
      name,
      email,
      phone,
      subject,
      message,
    }).save();
    res.status(201).send({
      success: true,
      message: "new Contact created",
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Post",
    });
  }
};
