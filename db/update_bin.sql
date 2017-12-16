UPDATE inventory
SET name = $3, price = $4
WHERE shelf = $1 AND bin = $2
RETURNING *;