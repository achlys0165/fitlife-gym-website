
USE fitlife_gym;
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE trainer_payouts;
TRUNCATE TABLE payments;
TRUNCATE TABLE sessions;
TRUNCATE TABLE bookings;
TRUNCATE TABLE classes;
TRUNCATE TABLE membership;
TRUNCATE TABLE membership_plan;
TRUNCATE TABLE membership_type;
TRUNCATE TABLE service_type;
TRUNCATE TABLE trainers;
TRUNCATE TABLE members;
SET FOREIGN_KEY_CHECKS = 1;


INSERT INTO membership_type (type_name, monthly_fee, perks) VALUES
('Gold', 2500.00, 'Unlimited classes, Priority booking'),
('Silver', 1500.00, 'Limited classes, Standard booking');


INSERT INTO membership_plan (membership_type_id, plan_name, duration_months, price) VALUES
(1,'Monthly',1,2500.00),
(2,'Monthly',1,1500.00),
(1,'Annual',12,30000.00),
(2,'Annual',12,18000.00);


INSERT INTO members (member_id, full_name, phone, email, join_date) VALUES
(1,'Dingdong Dantes','0917-100-0001','dingdongdantes@example.com','2024-01-15'),
(2,'Marian Rivera','0917-100-0002','marianrivera@example.com','2024-02-01'),
(3,'Ogie Alcasid','0917-100-0003','ogiealcasid@example.com','2024-06-01'),
(4,'Regine Velasquez','0917-100-0004','reginevelasquez@example.com','2024-03-10'),
(5,'Vhong Navarro','0917-100-0005','vhongnavarro@example.com','2024-07-01'),
(6,'Anne Curtis','0917-100-0006','annecurtis@example.com','2024-05-20'),
(7,'Jhong Hilario','0917-100-0007','jhonghilario@example.com','2024-08-15'),
(8,'Vice Ganda','0917-100-0008','viceganda@example.com','2024-01-01'),
(9,'Karylle Yuzon','0917-100-0009','karylleyuzon@example.com','2024-09-01'),
(10,'Teddy Corpuz','0917-100-0010','teddycorpuz@example.com','2023-12-01'),
(11,'Jugs Jugueta','0917-100-0011','jugsjugueta@example.com','2024-01-01'),
(12,'Ryan Bang','0917-100-0012','ryanbang@example.com','2024-11-01'),
(13,'Ion Perez','0917-100-0013','ionperez@example.com','2024-10-15'),
(14,'Jackie Gonzaga','0917-100-0014','jackiegonzaga@example.com','2024-02-14'),
(15,'Lassy Marquez','0917-100-0015','lassymarquez@example.com','2024-05-01'),
(16,'MC Muah','0917-100-0016','mcmuah@example.com','2024-05-01'),
(17,'Cianne Dominguez','0917-100-0017','ciannedominguez@example.com','2024-12-01'),
(18,'Kim Chiu','0917-100-0018','kimchiu@example.com','2024-06-15'),
(19,'Paulo Avelino','0917-100-0019','pauloavelino@example.com','2024-06-20'),
(20,'JM De Guzman','0917-100-0020','jmdeguzman@example.com','2024-01-10'),
(21,'Barbie Forteza','0917-100-0021','barbieforteza@example.com','2024-08-01'),
(22,'David Licauco','0917-100-0022','davidlicauco@example.com','2024-09-01'),
(23,'Jak Roberto','0917-100-0023','jakroberto@example.com','2024-02-01'),
(24,'Ruru Madrid','0917-100-0024','rurumadrid@example.com','2024-03-01'),
(25,'Bianca Umali','0917-100-0025','biancaumali@example.com','2024-04-01');


INSERT INTO trainers (trainer_id, full_name, phone, email, hire_date) VALUES
(1,'Alex Cruz','0918-200-0001','alexcruz@fitlife.com','2023-01-01'),
(2,'Bianca Reyes','0919-200-0002','biancareyes@fitlife.com','2023-01-01'),
(3,'Carlo Santos','0920-200-0003','carlosantos@fitlife.com','2023-01-01'),
(4,'Dina Lopez','0921-200-0004','dinalopez@fitlife.com','2023-01-01'),
(5,'Ethan Lim','0922-200-0005','ethanlim@fitlife.com','2023-01-01');


INSERT INTO service_type (service_type_id, service_name, description) VALUES
(1,'Abs Core','Imported from workout_programs'),
(2,'Arm Day','Imported from workout_programs'),
(3,'Boxer Routine','Imported from workout_programs'),
(4,'Calisthenics','Imported from workout_programs'),
(5,'Cardio Blast','Imported from workout_programs'),
(6,'Endurance','Imported from workout_programs'),
(7,'Explosive','Imported from workout_programs'),
(8,'Full Body','Imported from workout_programs'),
(9,'HIIT','Imported from workout_programs'),
(10,'Hypertrophy','Imported from workout_programs'),
(11,'Kettlebell','Imported from workout_programs'),
(12,'Leg Day','Imported from workout_programs'),
(13,'Marathon Prep','Imported from workout_programs'),
(14,'Muscle Gain','Imported from workout_programs'),
(15,'Pilates','Imported from workout_programs'),
(16,'Powerlifting','Imported from workout_programs'),
(17,'Pull Day','Imported from workout_programs'),
(18,'Push Day','Imported from workout_programs'),
(19,'Quick Burn','Imported from workout_programs'),
(20,'Rehab','Imported from workout_programs'),
(21,'Senior Fit','Imported from workout_programs'),
(22,'Swimming','Imported from workout_programs'),
(23,'Weight Loss','Imported from workout_programs'),
(24,'Yoga Flow','Imported from workout_programs'),
(25,'Zumba','Imported from workout_programs');


INSERT INTO classes (class_id, class_name, service_type_id, trainer_id, starts_at, duration_minutes, capacity, location) VALUES
(1,'Abs Core Class',1,1,'2026-02-15 06:00:00',60,20,'Main Studio'),
(2,'Arm Day Class',2,2,'2026-02-15 07:00:00',60,20,'Main Studio'),
(3,'Boxer Routine Class',3,3,'2026-02-15 08:00:00',60,20,'Main Studio'),
(4,'Calisthenics Class',4,4,'2026-02-15 09:00:00',60,20,'Main Studio'),
(5,'Cardio Blast Class',5,5,'2026-02-15 10:00:00',60,20,'Main Studio'),
(6,'Endurance Class',6,1,'2026-02-15 11:00:00',60,20,'Main Studio'),
(7,'Explosive Class',7,2,'2026-02-15 12:00:00',60,20,'Main Studio'),
(8,'Full Body Class',8,3,'2026-02-15 13:00:00',60,20,'Main Studio'),
(9,'HIIT Class',9,4,'2026-02-15 14:00:00',60,20,'Main Studio'),
(10,'Hypertrophy Class',10,5,'2026-02-15 15:00:00',60,20,'Main Studio'),
(11,'Kettlebell Class',11,1,'2026-02-16 06:00:00',60,20,'Main Studio'),
(12,'Leg Day Class',12,2,'2026-02-16 07:00:00',60,20,'Main Studio'),
(13,'Marathon Prep Class',13,3,'2026-02-16 08:00:00',60,20,'Main Studio'),
(14,'Muscle Gain Class',14,4,'2026-02-16 09:00:00',60,20,'Main Studio'),
(15,'Pilates Class',15,5,'2026-02-16 10:00:00',60,20,'Main Studio'),
(16,'Powerlifting Class',16,1,'2026-02-16 11:00:00',60,20,'Main Studio'),
(17,'Pull Day Class',17,2,'2026-02-16 12:00:00',60,20,'Main Studio'),
(18,'Push Day Class',18,3,'2026-02-16 13:00:00',60,20,'Main Studio'),
(19,'Quick Burn Class',19,4,'2026-02-16 14:00:00',60,20,'Main Studio'),
(20,'Rehab Class',20,5,'2026-02-16 15:00:00',60,20,'Main Studio'),
(21,'Senior Fit Class',21,1,'2026-02-17 06:00:00',60,20,'Main Studio'),
(22,'Swimming Class',22,2,'2026-02-17 07:00:00',60,20,'Main Studio'),
(23,'Weight Loss Class',23,3,'2026-02-17 08:00:00',60,20,'Main Studio'),
(24,'Yoga Flow Class',24,4,'2026-02-17 09:00:00',60,20,'Main Studio'),
(25,'Zumba Class',25,5,'2026-02-17 10:00:00',60,20,'Main Studio');


INSERT INTO membership (membership_id, member_id, membership_plan_id, start_date, end_date, status) VALUES
(1,1,1,'2024-01-15','2025-01-15','active'),
(2,2,1,'2024-02-01','2025-02-01','active'),
(3,3,2,'2024-06-01','2024-12-01','expired'),
(4,4,1,'2024-03-10','2025-03-10','active'),
(5,5,2,'2024-07-01','2025-01-01','active'),
(6,6,1,'2024-05-20','2025-05-20','active'),
(7,7,2,'2024-08-15','2025-02-15','active'),
(8,8,1,'2024-01-01','2025-01-01','active'),
(9,9,2,'2024-09-01','2025-03-01','active'),
(10,10,2,'2023-12-01','2024-06-01','expired'),
(11,11,2,'2024-01-01','2024-07-01','expired'),
(12,12,1,'2024-11-01','2025-11-01','active'),
(13,13,1,'2024-10-15','2025-10-15','active'),
(14,14,2,'2024-02-14','2024-08-14','expired'),
(15,15,2,'2024-05-01','2024-11-01','expired'),
(16,16,2,'2024-05-01','2024-11-01','expired'),
(17,17,1,'2024-12-01','2025-12-01','active'),
(18,18,1,'2024-06-15','2025-06-15','active'),
(19,19,1,'2024-06-20','2025-06-20','active'),
(20,20,2,'2024-01-10','2024-07-10','expired'),
(21,21,2,'2024-08-01','2025-02-01','active'),
(22,22,1,'2024-09-01','2025-09-01','active'),
(23,23,1,'2024-02-01','2025-02-01','active'),
(24,24,2,'2024-03-01','2024-09-01','expired'),
(25,25,1,'2024-04-01','2025-04-01','active');


INSERT INTO bookings (booking_id, member_id, class_id, booked_at, status, notes) VALUES
(1,1,23,'2026-02-10 08:00:00','attended','Imported from attendance_logs (check-in)'),
(2,2,14,'2026-02-10 08:15:00','attended','Imported from attendance_logs (check-in)'),
(3,3,5,'2026-02-10 08:30:00','attended','Imported from attendance_logs (check-in)'),
(4,4,24,'2026-02-10 09:00:00','attended','Imported from attendance_logs (check-in)'),
(5,5,16,'2026-02-10 10:00:00','attended','Imported from attendance_logs (check-in)'),
(6,6,8,'2026-02-10 11:00:00','attended','Imported from attendance_logs (check-in)'),
(7,7,6,'2026-02-10 12:00:00','attended','Imported from attendance_logs (check-in)'),
(8,8,1,'2026-02-10 13:00:00','attended','Imported from attendance_logs (check-in)'),
(9,9,3,'2026-02-10 14:30:00','attended','Imported from attendance_logs (check-in)'),
(10,10,21,'2026-02-10 16:00:00','attended','Imported from attendance_logs (check-in)'),
(11,11,9,'2026-02-10 17:00:00','attended','Imported from attendance_logs (check-in)'),
(12,12,12,'2026-02-10 17:30:00','attended','Imported from attendance_logs (check-in)'),
(13,13,17,'2026-02-10 18:00:00','attended','Imported from attendance_logs (check-in)'),
(14,14,18,'2026-02-10 19:00:00','attended','Imported from attendance_logs (check-in)'),
(15,15,22,'2026-02-11 08:00:00','attended','Imported from attendance_logs (check-in)'),
(16,16,13,'2026-02-11 09:00:00','attended','Imported from attendance_logs (check-in)'),
(17,17,4,'2026-02-11 10:00:00','attended','Imported from attendance_logs (check-in)'),
(18,18,19,'2026-02-11 11:00:00','attended','Imported from attendance_logs (check-in)'),
(19,19,20,'2026-02-11 12:00:00','attended','Imported from attendance_logs (check-in)'),
(20,20,25,'2026-02-11 15:00:00','attended','Imported from attendance_logs (check-in)'),
(21,21,10,'2026-02-11 17:00:00','attended','Imported from attendance_logs (check-in)'),
(22,22,7,'2026-02-11 18:00:00','attended','Imported from attendance_logs (check-in)'),
(23,23,11,'2026-02-11 19:00:00','attended','Imported from attendance_logs (check-in)'),
(24,24,15,'2026-02-12 08:00:00','attended','Imported from attendance_logs (check-in)');


INSERT INTO payments (payment_id, member_id, membership_id, booking_id, session_id, amount, payment_date, method, reference_no) VALUES
(1,1,1,NULL,NULL,2500.00,'2024-01-15','cash','INIT-001'),
(2,2,2,NULL,NULL,2500.00,'2024-02-01','cash','INIT-002'),
(3,3,3,NULL,NULL,1500.00,'2024-06-01','cash','INIT-003'),
(4,4,4,NULL,NULL,2500.00,'2024-03-10','cash','INIT-004'),
(5,5,5,NULL,NULL,1500.00,'2024-07-01','cash','INIT-005'),
(6,6,6,NULL,NULL,2500.00,'2024-05-20','cash','INIT-006'),
(7,7,7,NULL,NULL,1500.00,'2024-08-15','cash','INIT-007'),
(8,8,8,NULL,NULL,2500.00,'2024-01-01','cash','INIT-008'),
(9,9,9,NULL,NULL,1500.00,'2024-09-01','cash','INIT-009'),
(10,10,10,NULL,NULL,1500.00,'2023-12-01','cash','INIT-010'),
(11,11,11,NULL,NULL,1500.00,'2024-01-01','cash','INIT-011'),
(12,12,12,NULL,NULL,2500.00,'2024-11-01','cash','INIT-012'),
(13,13,13,NULL,NULL,2500.00,'2024-10-15','cash','INIT-013'),
(14,14,14,NULL,NULL,1500.00,'2024-02-14','cash','INIT-014'),
(15,15,15,NULL,NULL,1500.00,'2024-05-01','cash','INIT-015'),
(16,16,16,NULL,NULL,1500.00,'2024-05-01','cash','INIT-016'),
(17,17,17,NULL,NULL,2500.00,'2024-12-01','cash','INIT-017'),
(18,18,18,NULL,NULL,2500.00,'2024-06-15','cash','INIT-018'),
(19,19,19,NULL,NULL,2500.00,'2024-06-20','cash','INIT-019'),
(20,20,20,NULL,NULL,1500.00,'2024-01-10','cash','INIT-020'),
(21,21,21,NULL,NULL,1500.00,'2024-08-01','cash','INIT-021'),
(22,22,22,NULL,NULL,2500.00,'2024-09-01','cash','INIT-022'),
(23,23,23,NULL,NULL,2500.00,'2024-02-01','cash','INIT-023'),
(24,24,24,NULL,NULL,1500.00,'2024-03-01','cash','INIT-024'),
(25,25,25,NULL,NULL,2500.00,'2024-04-01','cash','INIT-025'),
(26,4,4,NULL,NULL,2500.00,'2026-02-11','gcash','AUTO-004'),
(27,12,12,NULL,NULL,500.00,'2026-02-12','cash','BAL-012');
