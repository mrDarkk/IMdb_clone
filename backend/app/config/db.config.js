module.exports = {
    HOST: "ec2-54-90-13-87.compute-1.amazonaws.com",
    USER: "fgyyymbxawoxma",
    PASSWORD: "c8916cf35f7007ee8435b1bb94eca10fbe519e02e6fdc3c963f046040a8154a1",
    DB: "dcbmfejb2694tn",
    dialect: "postgres",
    pool: {
      max: 5, 
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };