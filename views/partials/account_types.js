// Clients -> Accounts
// Un cliente tiene muchas cuentas

// Sequelize -->
// Client.hasMany(Accounts)
// Accounts.belongsTo(Client)
// Client.belongsTo(Accounts) -> En la tabla accounts tenemos una llave foranea que proviene de la tabla Clients
// Accounts.hasMany(Clients) -> El modelo tiene muchos clientes

this.hasMany(models.Clients, {
    foreignKey: 'client_id'
  });
  this.belongsTo(models.Accounts, {
    foreignKey: 'clients_id'
  });