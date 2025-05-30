INSERT INTO "country" (name) VALUES ('Argentina'), ('Brasil'), ('Uruguay'), ('Perú');

INSERT INTO "province" (name) VALUES ('Chaco'), ('Cordoba'), ('Salta');

INSERT INTO "locality" (name) VALUES ('Charata'), ('Pinedo'), ('Las Breñas'), ('Saenz Peña'), ('Resistencia');

INSERT INTO "province" (name, localities) VALUES ('Chaco', [1, 2, 3]);

SELECT * FROM "locality";
SELECT * FROM "province";
SELECT * FROM "country";