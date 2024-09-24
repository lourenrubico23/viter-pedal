<?php

class About
{
    public $about_aid;
    public $about_img_a;
    public $about_img_b;
    public $about_title_a;
    public $about_title_b;
    public $about_description_a;
    public $about_description_b;
    public $about_content_title_a;
    public $about_content_title_b;
    public $about_content_title_c;
    public $about_content_description_a;
    public $about_content_description_b;
    public $about_content_description_c;
    public $about_contact_text;
    public $about_contact_number;
    public $about_created;
    public $about_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblAbout;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblAbout = "tbl_about";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblAbout} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblAbout} set ";
            $sql .= "about_img_a = :about_img_a ";
            $sql .= "where about_aid = :about_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "about_img_a" => $this->about_img_a,
                "about_aid" => $this->about_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateImageB()
    {
        try {
            $sql = "update {$this->tblAbout} set ";
            $sql .= "about_img_b = :about_img_b ";
            $sql .= "where about_aid = :about_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "about_img_b" => $this->about_img_b,
                "about_aid" => $this->about_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTitleAndDescriptionA()
    {
        try {
            $sql = "update {$this->tblAbout} set ";
            $sql .= "about_title_a = :about_title_a, ";
            $sql .= "about_description_a = :about_description_a ";
            $sql .= "where about_aid = :about_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "about_title_a" => $this->about_title_a,
                "about_description_a" => $this->about_description_a,
                "about_aid" => $this->about_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTitleAndDescriptionB()
    {
        try {
            $sql = "update {$this->tblAbout} set ";
            $sql .= "about_title_b = :about_title_b, ";
            $sql .= "about_description_b = :about_description_b, ";
            $sql .= "about_contact_text = :about_contact_text, ";
            $sql .= "about_contact_number = :about_contact_number ";
            $sql .= "where about_aid = :about_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "about_title_b" => $this->about_title_b,
                "about_description_b" => $this->about_description_b,
                "about_contact_text" => $this->about_contact_text,
                "about_contact_number" => $this->about_contact_number,
                "about_aid" => $this->about_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateContents()
    {
        try {
            $sql = "update {$this->tblAbout} set ";
            $sql .= "about_content_title_a = :about_content_title_a, ";
            $sql .= "about_content_title_b = :about_content_title_b, ";
            $sql .= "about_content_title_c = :about_content_title_c, ";
            $sql .= "about_content_description_a = :about_content_description_a, ";
            $sql .= "about_content_description_b = :about_content_description_b, ";
            $sql .= "about_content_description_c = :about_content_description_c ";
            $sql .= "where about_aid = :about_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "about_content_title_a" => $this->about_content_title_a,
                "about_content_title_b" => $this->about_content_title_b,
                "about_content_title_c" => $this->about_content_title_c,
                "about_content_description_a" => $this->about_content_description_a,
                "about_content_description_a" => $this->about_content_description_a,
                "about_content_description_b" => $this->about_content_description_b,
                "about_content_description_c" => $this->about_content_description_c,
                "about_aid" => $this->about_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

   
}
