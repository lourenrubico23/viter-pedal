<?php

class Header
{
    public $header_aid;
    public $header_logo_img;
    public $header_banner_img;
    public $header_nav_a;
    public $header_nav_b;
    public $header_nav_c;
    public $header_nav_d;
    public $header_banner_text;
    public $header_button_text;
    public $header_created;
    public $header_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblHeader;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHeader = "tbl_header";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblHeader} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblHeader} set ";
            $sql .= "header_nav_a = :header_nav_a, ";
            $sql .= "header_nav_b = :header_nav_b, ";
            $sql .= "header_nav_c = :header_nav_c, ";
            $sql .= "header_nav_d = :header_nav_d ";
            $sql .= "where header_aid = :header_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_nav_a" => $this->header_nav_a,
                "header_nav_b" => $this->header_nav_b,
                "header_nav_c" => $this->header_nav_c,
                "header_nav_d" => $this->header_nav_d,
                "header_aid" => $this->header_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateLogoImg()
    {
        try {
            $sql = "update {$this->tblHeader} set ";
            $sql .= "header_logo_img = :header_logo_img ";
            $sql .= "where header_aid = :header_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_logo_img" => $this->header_logo_img,
                "header_aid" => $this->header_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateBanner()
    {
        try {
            $sql = "update {$this->tblHeader} set ";
            $sql .= "header_banner_img = :header_banner_img, ";
            $sql .= "header_banner_text = :header_banner_text, ";
            $sql .= "header_button_text = :header_button_text ";
            $sql .= "where header_aid = :header_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_banner_img" => $this->header_banner_img,
                "header_banner_text" => $this->header_banner_text,
                "header_button_text" => $this->header_button_text,
                "header_aid" => $this->header_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
   
}
