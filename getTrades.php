<?php
/*
 * showTrades.php
 * PHP page shows Trades data rows in JSON format
 *
 * @author bjiang 10/2/2014
 * 
 */
require_once '../data/daoTrades.php';
//Init DataBase Access object, get the DB handler.
$dao = new daoTrades();
$dao->connect();

//Mark the php for JSON format output.
header('Content-Type: application/json');

$result = $dao->getTrades();
if($result === true) {
    $jsond = array('rowCount' => $dao->getRows(), 'data' => $dao->getResult());
    echo(json_encode( $jsond ));
}
else {
    var_dump($result);
}

?>

