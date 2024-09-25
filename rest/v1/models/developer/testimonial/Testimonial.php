<?php

class Testimonial
{
    public $testimonial_aid;
    public $testimonial_title;
    public $testimonial_subtitle;
    public $testimonial_img_a;
    public $testimonial_img_b;
    public $testimonial_img_c;
    public $testimonial_name_a;
    public $testimonial_name_b;
    public $testimonial_name_c;
    public $testimonial_description_a;
    public $testimonial_description_b;
    public $testimonial_description_c;
    public $testimonial_created;
    public $testimonial_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblTestimonial;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblTestimonial = "tbl_testimonial";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblTestimonial} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblTestimonial} set ";
            $sql .= "testimonial_title = :testimonial_title, ";
            $sql .= "testimonial_subtitle = :testimonial_subtitle ";
            $sql .= "where testimonial_aid = :testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_title" => $this->testimonial_title,
                "testimonial_subtitle" => $this->testimonial_subtitle,
                "testimonial_aid" => $this->testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialA()
    {
        try {
            $sql = "update {$this->tblTestimonial} set ";
            $sql .= "testimonial_img_a = :testimonial_img_a, ";
            $sql .= "testimonial_name_a = :testimonial_name_a, ";
            $sql .= "testimonial_description_a = :testimonial_description_a ";
            $sql .= "where testimonial_aid = :testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_img_a" => $this->testimonial_img_a,
                "testimonial_name_a" => $this->testimonial_name_a,
                "testimonial_description_a" => $this->testimonial_description_a,
                "testimonial_aid" => $this->testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialB()
    {
        try {
            $sql = "update {$this->tblTestimonial} set ";
            $sql .= "testimonial_img_b = :testimonial_img_b, ";
            $sql .= "testimonial_name_b = :testimonial_name_b, ";
            $sql .= "testimonial_description_b = :testimonial_description_b ";
            $sql .= "where testimonial_aid = :testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_img_b" => $this->testimonial_img_b,
                "testimonial_name_b" => $this->testimonial_name_b,
                "testimonial_description_b" => $this->testimonial_description_b,
                "testimonial_aid" => $this->testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialC()
    {
        try {
            $sql = "update {$this->tblTestimonial} set ";
            $sql .= "testimonial_img_c = :testimonial_img_c, ";
            $sql .= "testimonial_name_c = :testimonial_name_c, ";
            $sql .= "testimonial_description_c = :testimonial_description_c ";
            $sql .= "where testimonial_aid = :testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_img_c" => $this->testimonial_img_c,
                "testimonial_name_c" => $this->testimonial_name_c,
                "testimonial_description_c" => $this->testimonial_description_c,
                "testimonial_aid" => $this->testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
