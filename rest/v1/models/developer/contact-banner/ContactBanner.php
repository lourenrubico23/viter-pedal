<?php

class ContactBanner
{
    public $contact_banner_aid;
    public $contact_banner_img;
    public $contact_banner_title;
    public $contact_banner_button_text;
    public $contact_banner_created;
    public $contact_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblContactBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblContactBanner = "tbl_contact_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblContactBanner} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblContactBanner} set ";
            $sql .= "contact_banner_img = :contact_banner_img, ";
            $sql .= "contact_banner_title = :contact_banner_title, ";
            $sql .= "contact_banner_button_text = :contact_banner_button_text ";
            $sql .= "where contact_banner_aid = :contact_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_banner_img" => $this->contact_banner_img,
                "contact_banner_title" => $this->contact_banner_title,
                "contact_banner_button_text" => $this->contact_banner_button_text,
                "contact_banner_aid" => $this->contact_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
