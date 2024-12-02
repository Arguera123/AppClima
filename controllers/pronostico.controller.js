import PronosticoModel from "../models/Pronostico.model.js";

const controller = {};

controller.createPronostico = async (req, res, next) => {
  try {
    const { humedad, temperatura, presion, luz, lluvia } = req.body;

    if (!humedad || !temperatura || !presion || !luz || !lluvia) {
      return res.status(400).json({ message: 'Todos los datos son requeridos' });
    }

    const pronostico = new PronosticoModel({ humedad, temperatura, presion, luz, lluvia });

    await PronosticoModel.create(pronostico);

    return res.status(201).json({ message: 'Pronostico creado' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

controller.getPronosticos = async (req, res, next) => {
  try {
    const pronostico = await PronosticoModel.find();

    return res.status(200).json(pronostico);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default controller;
