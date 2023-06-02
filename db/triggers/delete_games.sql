DROP TRIGGER IF EXISTS delete_games;
DELIMITER $$

CREATE TRIGGER delete_games BEFORE DELETE ON ladder
FOR EACH ROW
BEGIN
  DELETE FROM ladder_user WHERE ladder_id = OLD.ladder_id;
  DELETE FROM games where ladder_id = OLD.ladder_id;
  DELETE FROM player_progression where ladder_id = OLD.ladder_id;
END$$

DELIMITER ;