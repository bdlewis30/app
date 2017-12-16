DELETE FROM inventory
WHERE shelf = $1 and bin = $2;