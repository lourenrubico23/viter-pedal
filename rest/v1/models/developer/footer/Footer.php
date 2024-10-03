<?php

class Footer
{
    public $footer_aid;
    public $footer_copyright;
    public $footer_created;
    public $footer_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblFooter;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblFooter = "tbl_footer";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblFooter} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblFooter} set ";
            $sql .= "footer_copyright = :footer_copyright ";
            $sql .= "where footer_aid = :footer_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "footer_copyright" => $this->footer_copyright,
                "footer_aid" => $this->footer_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
