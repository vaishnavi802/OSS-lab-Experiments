-- init-db.sql

CREATE TABLE IF NOT EXISTS sample_table (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

INSERT INTO sample_table (name) VALUES
    ('John Doe'),
    ('Jane Doe'),
    ('Alice Smith');
