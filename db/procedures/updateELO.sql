DROP PROCEDURE IF EXISTS update_elo;
DELIMITER $$

CREATE procedure update_elo(in player1_id INT, in player1_elo INT,in  player2_id INT, in player2_elo INT, in result INT, in ladder_id INT)
BEGIN
  DECLARE player1_new_elo INT;
  DECLARE player2_new_elo INT;
  
  -- Calculate new elo scores
  SET player1_new_elo = get_new_elo(player1_elo,player2_elo,result);
  SET player2_new_elo = get_new_elo(player2_elo,player1_elo,1-result);
  
  -- Update player1 elo in ladder_user table
  UPDATE ladder_user SET ladder_user.elo = player1_new_elo WHERE ladder_user.user_id = player1_id and ladder_user.ladder_id = ladder_id;
  
  -- Update player2 elo in ladder_user table
  UPDATE ladder_user SET ladder_user.elo = player2_new_elo WHERE ladder_user.user_id = player2_id and ladder_user.ladder_id = ladder_id;
  
END $$

DELIMITER ;
