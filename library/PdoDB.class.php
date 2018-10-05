<?php
class PdoDB{

    private $host;
    private $dbname;
    private $user;
    private $pwd;
    private $port;
    private $dbms;
    private $dns;
    private $pdo;
    private $charset;
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
        $this->dns = $this->dbms.":host=".$this->host.";dbname=".$this->dbname;
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

    public function insert(array $insert_arr, $table = '', $type = 0) {
        $sql = $this->getInsertSql($insert_arr, $table, $type);
        $sth = $this->query($sql);
        $result = $sth->execute();
        return ($result == 0) ? true: false;
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


    /***************************私有方法开始***********************************/
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
        $this->pdo->exec('set names utf8');
        $this->alive = true;
        return true;
    }

    private function query($sql) {
        $sth = $this->pdo->prepare($sql);
        return $sth;
    }

    private function getInsertStr(array $insert_arr){
        if(empty($insert_arr)) {
            return false;
        }
        $str_field = "";
        $str_v = "";
        foreach($insert_arr as $key => $value) {
            $str_field .= ",{$key}";
            $v_type = gettype($value);
            if($v_type == "string") {
                $str_v1 = '"'.$value.'"';
            }
            $str_v .= ','.$str_v1;
        }
        $str_v = "(".trim($str_v, ',').")";
        $str_field = "(".trim($str_field, ',').")";
        $result = array();
        $result['field'] = $str_field;
        $result['value'] = $str_v;
        return $result;
    }

    private function getInsertSql(array $insert_arr, $table, $type = 1) {
        if(empty($insert_arr) || empty($table)) {
            return false;
        }

        if($type == 1) {
            $sql_str_arr = array();
            foreach($insert_arr as $k => $v) {
                $sql_str_arr[] = $this->getInsertStr($v);
            }

            $str_sql = "insert into ".$table." ({$sql_str_arr[0]['field']}) value";
            foreach($sql_str_arr as $k => $v) {
                $str_sql .= $v['value'].",";
            }
            $str_sql = trim($str_sql, ",");
        } else {
            $sql_str_arr = $this->getInsertStr($insert_arr);
            $str_sql = "insert into ".$table." ({$sql_str_arr[0]['field']}) value".$sql_str_arr['value'];
        }

        return $str_sql;
    }

    /***************************私有方法结束***********************************/
}