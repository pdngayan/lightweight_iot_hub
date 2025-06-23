db = db.getSiblingDB('BDCompany');

db.createCollection('bd_user');
db.createCollection('bd_company');
db.createCollection('bd_plant');

var companyId = db.bd_company.insertOne({
  compName: "Main Org.",
  compStatus: "Active",
  compNoOfSitesAttached: 5,
  compNoOfDevicesDeployed: 0,
  compLocation: "Colombo",
  compSitesAttached: [],
  compDeviceSuppliers: [],
  _class: "com.IoTAdmin.IoTAdminBackend.entity.CompanyManagement"
}).insertedId;

// Insert user
db.bd_user.insertOne({
  name: "admin",
  email: "admin@ncinga.net",
  password: "$2a$10$yi7vjGzLmyFSRHQoEZQ6N./75iXMUm2JaNhb44JAGt7bDcIGc4SUy",
  userRole: "SUPER_ADMIN",
  companyRegistered: "",
  _class: "com.IoTAdmin.IoTAdminBackend.entity.UserManagement"
});

db.bd_user.insertOne({
  name: "client",
  email: "client@ncinga.net",
  password: "$2a$10$yi7vjGzLmyFSRHQoEZQ6N./75iXMUm2JaNhb44JAGt7bDcIGc4SUy",
  userRole: "CLIENT",
  companyRegistered: [companyId.toString()],
  _class: "com.IoTAdmin.IoTAdminBackend.entity.UserManagement"
});

db.bd_user.createIndex({ email: 1 }, { unique: true });

db.bd_plant.insertOne({
  dashboardName: "IFINITY",
  dashboardLocation: "Colombo",
  dashboardURL: "http://localhost/grafana/d/e47ef940-8b6b-43fa-8ba4-5192be80b2/ifinity?orgId=1&from=now-3h&to=now&timezone=browser&theme=light",
  dashboardDevices: "device 1",
  company: companyId.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

db.bd_plant.insertOne({
  dashboardName: "IFINITY Zone wise",
  dashboardLocation: "Colombo",
  dashboardURL: "http://localhost/grafana/d/af6d510d-8984-4683-bd32-7737d37840df3/ifinity-zone-wise?orgId=1&from=now-6h&to=now&timezone=browser&var-assertID=data_set_MODBUS13&theme=light",
  dashboardDevices: "device 1",
  company: companyId.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

db.bd_plant.insertOne({
  dashboardName: "NCINGA",
  dashboardLocation: "Colombo",
  dashboardURL: "http://localhost/grafana/d/e47ef940-8b6b-43fa-8ba4-5192be80b670dsds/ncinga?orgId=1&from=now-3h&to=now&timezone=browser&theme=light",
  dashboardDevices: "device 1",
  company: companyId.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

db.bd_plant.insertOne({
  dashboardName: "NCINGA Zone wise",
  dashboardLocation: "Colombo",
  dashboardURL: "http://localhost/grafana/d/af6d510d-8984-4683-bd32-7737d37840df2/ncinga-zone-wise?orgId=1&from=now-6h&to=now&timezone=browser&var-assertID=data_set_MODBUS10&theme=light",
  dashboardDevices: "device 1",
  company: companyId.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

db.bd_plant.insertOne({
  dashboardName: "Overall",
  dashboardLocation: "Colombo",
  dashboardURL: "http://localhost/grafana/d/f1dfe679-2a9d-46c6-bf6b-b2761c9d01d1/overall?orgId=1&from=now-30m&to=now&timezone=browser&theme=light",
  dashboardDevices: "device 1",
  company: companyId.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});