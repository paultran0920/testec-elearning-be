DROP TABLE IF EXISTS "user";

CREATE TABLE IF NOT EXISTS "user"
(
    user_name character varying NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    email character varying NOT NULL,
    phone character varying NOT NULL,
    password character varying NOT NULL,
    user_role character varying NOT NULL,
    
    CONSTRAINT "PK_user_user_name" PRIMARY KEY (user_name)
);


INSERT INTO "user"(
    user_name, first_name, last_name, email, phone, password, user_role)
VALUES ('paul.tran', 'Paul', 'Tran', 'paul.tran.0920@gmail.com', '123456789', 
        '$2b$10$h1PkmrcSA8FdeLrnuVo4seR7q6n/ONI8mks8Hwx1g6fB0LUjaQKNC', 'admin');
            
INSERT INTO "user"(
    user_name, first_name, last_name, email, phone, password, user_role)
VALUES ('student.1', 'Student', '1', 'student.1@gmail.com', '123456789', 
    '$2b$10$h1PkmrcSA8FdeLrnuVo4seR7q6n/ONI8mks8Hwx1g6fB0LUjaQKNC', 'student');

INSERT INTO "user"(
    user_name, first_name, last_name, email, phone, password, user_role)
VALUES ('mentor.1', 'Mentor', '1', 'mentor.1@gmail.com', '123456789', 
    '$2b$10$h1PkmrcSA8FdeLrnuVo4seR7q6n/ONI8mks8Hwx1g6fB0LUjaQKNC', 'mentor');