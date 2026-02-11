
USE fitlife_gym;

SHOW TABLES;


SELECT 
    m.full_name,
    mt.type_name,
    mp.plan_name,
    ms.start_date,
    ms.end_date,
    ms.status
FROM members m
JOIN membership ms       ON m.member_id = ms.member_id
JOIN membership_plan mp  ON ms.membership_plan_id = mp.membership_plan_id
JOIN membership_type mt  ON mp.membership_type_id = mt.membership_type_id
ORDER BY m.member_id;



SELECT 
    mem.full_name,
    p.amount,
    p.method,
    p.payment_date
FROM payments p
JOIN members mem ON p.member_id = mem.member_id
ORDER BY p.payment_date;



SELECT 
    mem.full_name,
    c.class_name,
    st.service_name,
    b.status,
    c.starts_at
FROM bookings b
JOIN members mem     ON b.member_id = mem.member_id
JOIN classes c       ON b.class_id = c.class_id
JOIN service_type st ON c.service_type_id = st.service_type_id
ORDER BY c.starts_at;



SELECT
    mem.full_name AS member_name,
    t.full_name   AS trainer_name,
    st.service_name,
    s.starts_at,
    s.status
FROM sessions s
JOIN members mem     ON s.member_id = mem.member_id
JOIN trainers t      ON s.trainer_id = t.trainer_id
JOIN service_type st ON s.service_type_id = st.service_type_id
ORDER BY s.starts_at;



SELECT * FROM membership_type;
SELECT * FROM membership_plan;
SELECT * FROM service_type;
SELECT * FROM trainers;


-- adding member 
INSERT INTO members (full_name, phone, email, join_date)
VALUES ('Juan Dela Cruz', '09123456789', 'juan@email.com', '2025-02-11');


SELECT * FROM members;

-- safe mode 
SET SQL_SAFE_UPDATES = 0;


-- delete the specific user/member
DELETE FROM members
WHERE full_name = 'Juan Dela Cruz'
AND phone = '09123456789'
AND email = 'juan@email.com'
AND join_date = '2025-02-11';


SELECT *
FROM members
WHERE email = 'juan@email.com';
