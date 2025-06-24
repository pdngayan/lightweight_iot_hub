db = db.getSiblingDB('BDCompany');

db.createCollection('bd_user');
db.createCollection('bd_company');
db.createCollection('bd_plant');

var mainOrg = db.bd_company.insertOne({
  compName: "Main Org.",
  compStatus: "Active",
  compNoOfSitesAttached: 5,
  compNoOfDevicesDeployed: 0,
  compLocation: "Colombo",
  compSitesAttached: [],
  compDeviceSuppliers: [],
  _class: "com.IoTAdmin.IoTAdminBackend.entity.CompanyManagement"
}).insertedId;

var epicOrg = db.bd_company.insertOne({
  compName: "EPIC",
  compStatus: "Active",
  compNoOfSitesAttached: 10,
  compNoOfDevicesDeployed: 0,
  compLocation: "Blangladesh",
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
  name: "ncinga_client",
  email: "ncinga@ncinga.net",
  password: "$2a$10$yi7vjGzLmyFSRHQoEZQ6N./75iXMUm2JaNhb44JAGt7bDcIGc4SUy",
  userRole: "CLIENT",
  companyRegistered: [mainOrg.toString()],
  _class: "com.IoTAdmin.IoTAdminBackend.entity.UserManagement"
});

db.bd_user.insertOne({
  name: "epic_client",
  email: "epic@ncinga.net",
  password: "$2a$10$yi7vjGzLmyFSRHQoEZQ6N./75iXMUm2JaNhb44JAGt7bDcIGc4SUy",
  userRole: "CLIENT",
  companyRegistered: [epicOrg.toString()],
  _class: "com.IoTAdmin.IoTAdminBackend.entity.UserManagement"
});

db.bd_user.createIndex({ email: 1 }, { unique: true });




db.bd_plant.insertOne({
  dashboardName: "IFINITY",
  dashboardLocation: "Colombo",
  dashboardURL: "http://localhost/grafana/d/e47ef940-8b6b-43fa-8ba4-5192be80b2/ifinity?orgId=1&from=now-3h&to=now&timezone=browser&theme=light",
  dashboardDevices: "device 1",
  company: mainOrg.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

db.bd_plant.insertOne({
  dashboardName: "IFINITY Zone wise",
  dashboardLocation: "Colombo",
  dashboardURL: "http://localhost/grafana/d/af6d510d-8984-4683-bd32-7737d37840df3/ifinity-zone-wise?orgId=1&from=now-6h&to=now&timezone=browser&var-assertID=data_set_MODBUS13&theme=light",
  dashboardDevices: "device 1",
  company: mainOrg.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

db.bd_plant.insertOne({
  dashboardName: "NCINGA",
  dashboardLocation: "Colombo",
  dashboardURL: "http://localhost/grafana/d/e47ef940-8b6b-43fa-8ba4-5192be80b670dsds/ncinga?orgId=1&from=now-3h&to=now&timezone=browser&theme=light",
  dashboardDevices: "device 1",
  company: mainOrg.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

db.bd_plant.insertOne({
  dashboardName: "NCINGA Zone wise",
  dashboardLocation: "Colombo",
  dashboardURL: "http://localhost/grafana/d/af6d510d-8984-4683-bd32-7737d37840df2/ncinga-zone-wise?orgId=1&from=now-6h&to=now&timezone=browser&var-assertID=data_set_MODBUS10&theme=light",
  dashboardDevices: "device 1",
  company: mainOrg.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

db.bd_plant.insertOne({
  dashboardName: "Overall",
  dashboardLocation: "Colombo",
  dashboardURL: "http://localhost/grafana/d/f1dfe679-2a9d-46c6-bf6b-b2761c9d01d1/overall?orgId=1&from=now-30m&to=now&timezone=browser&theme=light",
  dashboardDevices: "device 1",
  company: mainOrg.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});


db.bd_plant.insertOne({
  dashboardName: "Landing Page",
  dashboardLocation: "Bangladesh",
  dashboardURL: "http://localhost:3000/grafana/d/cf5546ad-8bcf-41b4-9bc9-34a64d882e99/landing-page?orgId=2&from=now%2Fd&to=now&timezone=browser&theme=light",
  dashboardDevices: "device 1",
  company: epicOrg.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

db.bd_plant.insertOne({
  dashboardName: "Landing Page 2",
  dashboardLocation: "Bangladesh",
  dashboardURL: "http://localhost:3000/grafana/d/cf5546ad-8bcf-41b4-9bc9-34a64d882e992/landing-page-2?orgId=2&from=now%2Fd&to=now&timezone=browser&theme=light",
  dashboardDevices: "device 1",
  company: epicOrg.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

db.bd_plant.insertOne({
  dashboardName: "Compressor",
  dashboardLocation: "Bangladesh",
  dashboardURL: "http://localhost:3000/grafana/d/ec59cf43-a25e-4403-9460-ef2d5296e677/compressor?orgId=2&from=now%2Fd&to=now%2Fd&timezone=browser&theme=light",
  dashboardDevices: "device 1",
  company: epicOrg.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

db.bd_plant.insertOne({
  dashboardName: "Power analyzer",
  dashboardLocation: "Bangladesh",
  dashboardURL: "http://localhost:3000/grafana/d/fe2a78f3-a70b-40c2-8479-d62b0eb769a6/power-analyzer?orgId=2&from=now%2Fd&to=now%2Fd&timezone=browser&var-power_analyser=gasgen1&theme=light",
  dashboardDevices: "device 1",
  company: epicOrg.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

db.bd_plant.insertOne({
  dashboardName: "Steam flow meter",
  dashboardLocation: "Bangladesh",
  dashboardURL: "http://localhost:3000/grafana/d/bdaa5bea-518b-4302-82e6-fa8a73ca1d21/steam-flow-meter?orgId=2&from=now%2Fd&to=now%2Fd&timezone=browser&var-power_analyser=gasgen1&theme=light",
  dashboardDevices: "device 1",
  company: epicOrg.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

db.bd_plant.insertOne({
  dashboardName: "Sustainability dashboard",
  dashboardLocation: "Bangladesh",
  dashboardURL: "http://localhost:3000/grafana/d/ec59cf43-a25e-4403-9460-ef2d5296e679/sustainability-dashboard?orgId=2&from=now%2Fd&to=now%2Fd&timezone=browser&theme=light",
  dashboardDevices: "device 1",
  company: epicOrg.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

db.bd_plant.insertOne({
  dashboardName: "Temperature and humidity",
  dashboardLocation: "Bangladesh",
  dashboardURL: "http://localhost:3000/grafana/d/ec59cf43-a25e-4403-9460-ef2d5296e6771/temperature-and-humidity?orgId=2&from=now%2Fd&to=now%2Fd&timezone=browser&theme=light",
  dashboardDevices: "device 1",
  company: epicOrg.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

db.bd_plant.insertOne({
  dashboardName: "Water flow meter",
  dashboardLocation: "Bangladesh",
  dashboardURL: "http://localhost:3000/grafana/d/ae277448-653a-463c-989c-f08ccb7fe613/water-flow-meter?orgId=2&from=now%2Fd&to=now%2Fd&timezone=browser&theme=light",
  dashboardDevices: "device 1",
  company: epicOrg.toString(),
  _class: "com.IoTAdmin.IoTAdminBackend.entity.DashboardManagement"
});

