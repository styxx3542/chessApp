drop function if exists get_max_elo;
DELIMITER $$

create function get_max_elo(ladder_id int)
returns int reads sql data
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE max_id int;
    DECLARE max_elo int default 0;
    DECLARE player_id int default 0;
    DECLARE player_elo int;
    DECLARE c CURSOR FOR 
        SELECT user_id,elo from ladder_user where ladder_user.ladder_id = ladder_id;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;
    
    open c;
    label: loop
    fetch c into player_id,player_elo;
    if player_elo > max_elo THEN
        set max_elo = player_elo;
        set max_id = player_id;
    end if;
    IF done = 1 THEN LEAVE label;
    end if;
    end loop;
    close c;
    
    return (max_id);
END$$

DELIMITER ;

