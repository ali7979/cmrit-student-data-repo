exports.CREATE_STUDENT_TABLE = `CREATE TABLE IF NOT EXISTS student(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), usn varchar(255), password varchar(255), name varchar(255), department varchar(255), mailId varchar(255), phoneNumber varchar(255))`;

exports.CREATE_PLACEMENT_TABLE = `CREATE TABLE IF NOT EXISTS placement(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), usn varchar(255), studentName varchar(255), companyName varchar(255), salary int(255), date Date, driveType varchar(255), companyType varchar(255), type varchar(255), description text, filterDate Date, department varchar(255),coe varchar(255))`;

exports.CREATE_PROJECTS_TABLE = `CREATE TABLE IF NOT EXISTS projects(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), type varchar(255), sem varchar(255), title varchar(255), duration varchar(255), location varchar(255), startDate date, endDate date, prize varchar(255), coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_INTERNSHIP_CELL_TABLE = `CREATE TABLE IF NOT EXISTS internship_cell(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), title varchar(255), companyName varchar(255), semester varchar(255), stipend varchar(255), duration varchar(255), startDate date, endDate date, coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_RESULTS_TABLE = `CREATE TABLE IF NOT EXISTS results(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), department varchar(255), semester varchar(255), resultDate date, academicYear varchar(255), section char(1), avgCGPA float, passPercent float, nFail int, nAppear int, nPass int, coe varchar(255), description varchar(255), filterDate date)`;

exports.CREATE_DEPARTMENT_LIST_TABLE = `CREATE TABLE IF NOT EXISTS department(id int AUTO_INCREMENT , name varchar(255), PRIMARY KEY(id))`;
