<?php
namespace library;
class M{

    private $table;
    private $pdo;
    private $prepare = array(
        'insert' => '',
        'update' => '',
        'select' => '',
        'delect' => ''
    );
    private $field = array();

    public function __construct($table, $pdo)
    {
        $this->table = $table;
        $this->pdo = $pdo;
    }

    public function insert(array $insert_arr) {

    }

    public function select(array $select_arr) {

    }

    public function update(array $insert_arr) {

    }

    public function delete(array $select_arr) {

    }

    /***************************私有方法开始***********************************/
    private function getField(){
        if($this->pdo->alive == true) {
            $sql = "select * from ".$this->table." limit 0, 1";
            $result = $this->pdo->select($sql);
            foreach($result as $key => $value) {

            }
        }
    }
    /***************************私有方法结束***********************************/
}