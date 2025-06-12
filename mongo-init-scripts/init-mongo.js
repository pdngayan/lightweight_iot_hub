db = db.getSiblingDB('BDCompany');

db.createCollection('bd_user');
db.createCollection('bd_company');
db.createCollection('bd_plant');

db.bd_user.insertOne({
  name: "admin",
  email: "admin@ncinga.net",
  password: "$2a$10$yi7vjGzLmyFSRHQoEZQ6N./75iXMUm2JaNhb44JAGt7bDcIGc4SUy",
  userRole: "SUPER_ADMIN",
  companyRegistered: "",
  _class: "com.IoTAdmin.IoTAdminBackend.entity.UserManagement"
});

db.bd_user.createIndex({ email: 1 }, { unique: true });
