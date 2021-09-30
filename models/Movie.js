const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');


//modelo de Movie y validaciones de los campos
class Movie extends Model {}

Movie.init({

  title: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {

      notNull: {
        msg: 'Debe escribir un titulo.'
      },
      notEmpty: {
        args: true,
        msg: 'Debe escribir un titulo.'
      },
      is: {
        args: /^[a-zA-Z0-9 ]+$/i,
        msg: 'EL titulo solo puede contener letras y numeros.'
      },
      len: {
        args: [3, 255],
        msg: 'El titulo debe contener entre 3 y 255 caracteres.'
      },

    }
  },

  year: {
    allowNull: false,
    type: DataTypes.INTEGER,
    validate: {

      len: {
        args: [4, 4],
        msg: 'Debe ingresar un año valido.'
      },
      isNumeric: {
        args: true,
        msg: 'Debe ingresar un año valido2.'
      }

    }  
  },

  image: {
    type: DataTypes.STRING,
    defaultValue: 'default.jpg'
  },

  score: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  }



}, { sequelize , modelName: 'movie'})



module.exports = Movie;