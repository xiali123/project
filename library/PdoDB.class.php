<?php
namespace library;
class PdoDB{

    private $host;
    private $dbname;
    private $user;
    private $pwd;
    private $port;
    private $dbms;
    private $dns;
    private $pdo;
    private $pconnect = 1;
    private $alive = false;
    private $info = array(
        'dbms'     => '',
        'host'     => '',
        'user'     => '',
        'password' => '',
        'port'     =>  3306,
        'dbname'   => '',
        'charset'  => 'utf8',
        'pconnect' => 1
    );

    function __construct($mysql_arr = array()) {
        foreach($mysql_arr as $key => $value) {
            if(isset($this->info[$key])) {
                $this->info[$key] = $value;
            }
        }

        $this->dbms = $this->info['dbms'];
        $this->user = $this->info['user'];
        $this->pwd = $this->info['password'];
        $this->port = $this->info['port'];
        $this->dbname = $this->info['dbname'];
        $this->charset = $this->info['charset'];
        $this->pconnect = $this->info['pconnect'];
        $this->host = $this->info['host'];
        $this->dns = $this->dbms.":host=".$this->host.",dbname=".$this->dbname;
    }

    public function selectDb() {

    }

    public function connect() {
        try{
            $this->pdo = new PDO(
                $this->dns,
                $this->user,
                $this->pwd,
                array(
                    PDO::ATTR_PERSISTENT => $this->pconnect //长连接配置
                )
            );
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //开启异常处理
        } catch(PDOException $e) {
            echo "数据库连接失败：".$e->getMessage();
            return false;
        }
        $this->alive = true;
        return true;
    }

    private function reconnect() {
        try{
            $this->pdo = new PDO(
                $this->dns,
                $this->dbuser,
                $this->dbpass,
                array(
                    PDO::ATTR_PERSISTENT => $this->pconnect //长连接配置
                )
            );
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //开启异常处理
        }catch (PDOException $e){
            echo "数据库连接失败：".$e->getMessage();
            return false;
        }
        $this->alive = true;
        return true;
    }

    private function query($sql) {
        $sth = $this->pdo->prepare($sql);
        return $sth;
    }

    public function insert(array $insert_arr, $table = '') {

    }

    public function select($sql) {
        $sth = $this->query($sql);
        $sth->execute();
        $result = $sth->fetchAll();
        return $result;
    }

    public function update() {

    }

    public function delete() {

    }

    public function alterTable() {

    }

    public function __call($name, array $arguments){
        $result = false;
        while(true){
            try {
                $result = call_user_func_array(array($this,$name), $arguments);
                break;
            } catch (PDOException $e) {
                if ($e->getCode() != 'HY000' || !stristr($e->getMessage(), 'server has gone away')) {
                    throw $e;
                }
                $this->reconnect();
            }
        }
        return $result;
    }
}