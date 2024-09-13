<?php

class Services
{
    public $services_aid;
    public $services_title;
    public $services_subtitle;
    public $services_product_a;
    public $services_product_b;
    public $services_product_c;
    public $services_description_a;
    public $services_description_b;
    public $services_description_c;
    public $services_button_text_a;
    public $services_button_text_b;
    public $services_button_text_c;
    public $services_img_a;
    public $services_img_b;
    public $services_img_c;
    public $services_created;
    public $services_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblServices;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblServices = "tbl_services";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblServices} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblServices} set ";
            $sql .= "services_title = :services_title, ";
            $sql .= "services_subtitle = :services_subtitle ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_title" => $this->services_title,
                "services_subtitle" => $this->services_subtitle,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateProductA()
    {
        try {
            $sql = "update {$this->tblServices} set ";
            $sql .= "services_product_a = :services_product_a, ";
            $sql .= "services_description_a = :services_description_a, ";
            $sql .= "services_button_text_a = :services_button_text_a, ";
            $sql .= "services_img_a = :services_img_a ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_product_a" => $this->services_product_a,
                "services_description_a" => $this->services_description_a,
                "services_button_text_a" => $this->services_button_text_a,
                "services_img_a" => $this->services_img_a,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateProductB()
    {
        try {
            $sql = "update {$this->tblServices} set ";
            $sql .= "services_product_b = :services_product_b, ";
            $sql .= "services_description_b = :services_description_b, ";
            $sql .= "services_button_text_b = :services_button_text_b, ";
            $sql .= "services_img_b = :services_img_b ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_product_b" => $this->services_product_b,
                "services_description_b" => $this->services_description_b,
                "services_button_text_b" => $this->services_button_text_b,
                "services_img_b" => $this->services_img_b,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateProductC()
    {
        try {
            $sql = "update {$this->tblServices} set ";
            $sql .= "services_product_c = :services_product_c, ";
            $sql .= "services_description_c = :services_description_c, ";
            $sql .= "services_button_text_c = :services_button_text_c, ";
            $sql .= "services_img_c = :services_img_c ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_product_c" => $this->services_product_c,
                "services_description_c" => $this->services_description_c,
                "services_button_text_c" => $this->services_button_text_c,
                "services_img_c" => $this->services_img_c,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
