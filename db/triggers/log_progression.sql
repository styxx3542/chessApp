DROP TRIGGER IF EXISTS track_progression_update;
DROP TRIGGER IF EXISTS track_progression_insert;
DELIMITER $$

CREATE TRIGGER track_progression_update AFTER UPDATE ON ladder_user
FOR EACH ROW
BEGIN
    INSERT INTO player_progression VALUES(NEW.USER_ID,NEW.LADDER_ID,CURRENT_TIMESTAMP,NEW.ELO);
END$$

CREATE TRIGGER track_progression_insert AFTER INSERT ON ladder_user
FOR EACH ROW
BEGIN
    INSERT INTO player_progression VALUES(NEW.USER_ID,NEW.LADDER_ID,CURRENT_TIMESTAMP,NEW.ELO);
END$$

DELIMITER ;