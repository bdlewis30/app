INSERT INTO inventory(name, shelf, bin, image, price)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;