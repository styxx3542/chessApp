DROP TRIGGER IF EXISTS update_elo_ratings;
DELIMITER $$

CREATE TRIGGER update_elo_ratings AFTER INSERT ON games
FOR EACH ROW
BEGIN
    DECLARE player_1_elo int;
    DECLARE player_2_elo int;
    DECLARE elo_difference int;
    select elo into player_1_elo from ladder_user where user_id = NEW.player_1_id and ladder_id = NEW.ladder_id;
    select elo into player_2_elo from ladder_user where user_id = NEW.player_2_id and ladder_id = NEW.ladder_id;
    if (player_1_elo < player_2_elo and new.result = 1) then 
        set elo_difference = player_2_elo - player_1_elo;
        insert into upsets values(new.player_1_id,new.player_2_id,elo_difference,new.time_of_game);
    elseif (player_1_elo > player_2_elo and new.result = 0) then
        set elo_difference = player_1_elo - player_2_elo;
        insert into upsets values(new.player_2_id,new.player_1_id,elo_difference,new.time_of_game);
    end if;
  CALL update_elo(new.player_1_id,player_1_elo,new.player_2_id,player_2_elo,new.result,new.ladder_id);
END$$

DELIMITER ;