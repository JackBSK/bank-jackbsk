//Clients -> Accounts
//Un cliente tiene muchas cuentas
//Una cuenta pertenece a un cliente

//Sequelize
//Client.hasMany(Accounts)
//Account.belongsTo(Client)

//Client.belongsTo(Accounts) -> En la tabla Accounts tenemos una FK (llave foranea) que proviene de la tabla Clientes
//Accounts.hasMany(Clients) -> El modelo de cuentas tiene muchos usuarios
this.belongsTo(models.Accounts), {
    foreignKey: 'client_id'
  }
  this.hasMany(models.Clients), {
    foreignKey: 'client_id'
  }

//Un tipo de cuenta tiene muchas cuentas
//Una cuenta pertenece a un tipo de cuenta
//Account_types
this.hasMany(Accounts)
//Account
this.belongsTo(Account_types)
