USE employee_DB;

INSERT INTO department(name)
VALUES ("Engineering"), ("Sales"), ("Finance"), ("Marketing"), ("Human Resource Management"), ("Legal");

INSERT INTO role(title, salary, department_id)
VALUES ("Kuantas", "Salone", 3, NULL),
	("Brandon", "Johnson", 1, 1),
	("Bre", "Taelore", 2, 1),
	("Karissa", "Braxton", 5, NULL),
	("Valerie", "Smith", 4, 4),
	("Cheif","Wiggums",7, NULL),
	("Dead","Pool", 11, NULL),
	("Raydon", "Randall",10, 7)
    ;

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Kuantas", "Salone", 3, NULL),
	("Brandon", "Johnson", 1, 1),
	("Bre", "Taelore", 2, 1),
	("Karissa", "Braxton", 5, NULL),
	("Valerie", "Smith", 4, 4),
	("Cheif","Wiggums",7, NULL),
	("Dead","Pool", 11, NULL),
	("Raydon", "Randall",10, 7)
    ;