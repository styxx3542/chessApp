DROP function if exists get_new_elo;
DELIMITER $$

create function get_new_elo(player1_elo int, player2_elo int, result int)
returns int deterministic
BEGIN
    DECLARE player1_expected FLOAT;
    DECLARE player2_expected FLOAT;
    DECLARE player1_new_elo INT;

    SET player1_expected = 1 / (1 + POWER(10, (player2_elo - player1_elo) / 400));
    SET player1_new_elo = player1_elo + ROUND(32 * (result - player1_expected));
    return (player1_new_elo);
END$$

DELIMITER ;