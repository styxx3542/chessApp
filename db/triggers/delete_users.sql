DROP TRIGGER IF EXISTS delete_users;
DELIMITER $$

CREATE TRIGGER delete_users BEFORE DELETE ON users
FOR EACH ROW
BEGIN
  INSERT INTO deleted_users values (old.name,old.id);
END$$

DELIMITER ;