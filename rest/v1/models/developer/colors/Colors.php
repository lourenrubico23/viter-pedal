<?php

class Colors
{
    public $colors_aid;
    public $colors_primary;
    public $colors_secondary;
    public $colors_accent;
    public $colors_text;
    public $colors_hover;
    public $colors_created;
    public $colors_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblColors;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblColors = "tbl_colors";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblColors} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblColors} set ";
            $sql .= "colors_primary = :colors_primary, ";
            $sql .= "colors_secondary = :colors_secondary, ";
            $sql .= "colors_accent = :colors_accent, ";
            $sql .= "colors_text = :colors_text, ";
            $sql .= "colors_hover = :colors_hover ";
            $sql .= "where colors_aid = :colors_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "colors_primary" => $this->colors_primary,
                "colors_secondary" => $this->colors_secondary,
                "colors_accent" => $this->colors_accent,
                "colors_text" => $this->colors_text,
                "colors_hover" => $this->colors_hover,
                "colors_aid" => $this->colors_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
