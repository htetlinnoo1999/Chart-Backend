const Op = require("../models").Sequelize.Op;
const Chart = require("../models").Chart;

exports.getAllData = (req, res) => {
  Chart.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(500).json(err));
};

exports.createNewRecord = (req, res) => {
  Chart.create({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
  })
    .then((data) => {
      res.status(201).json({
        status: "created",
        created_data: data,
      });
    })
    .catch((err) => res.status(500).json(err));
};

exports.barChartData = (req, res) => {
  const young_adults = Chart.count({
    where: {
      age: {
        [Op.between]: [0, 35],
      },
    },
  });

  const adults = Chart.count({
    where: {
      age: {
        [Op.between]: [36, 50],
      },
    },
  });

  const seniors = Chart.count({
    where: {
      age: {
        [Op.gt]: [50],
      },
    },
  });

  Promise.all([young_adults, adults, seniors]).then((values) => {
    res.status(200).json(values);
  });
};

exports.pieChartData = (req, res) => {
  Chart.count({
    group: ["gender"],
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(500).json(err));
};
