-- Specify database feedharvey for use
USE feedharvey_db;



-- Insert four entries into the food table
-- default in schema to set "devoured" to false, as this will be updated using the Eat-Da-Burger application
-- INSERT INTO food (food_name) VALUES ("Peach cobbler");
-- INSERT INTO food (food_name) VALUES ("Fried grasshopper soup");
-- INSERT INTO food (food_name) VALUES ("Mushroom frenzy grub");
-- INSERT INTO food (food_name) VALUES ("Hug your mama tofu grub");
-- INSERT INTO food (food_name) VALUES ("Photosynthesis pie");

UPDATE food
SET devoured = true
WHERE food_name = "Photosynthesis pie";

-- INSERT INTO food (food_name, devoured) VALUES ("Moon pie", true);

SELECT * FROM feedharvey_db.food;