SELECT *
FROM inventory
WHERE shelf = $1
AND bin = $2;