-- Lists all privileges of the users user_0d_1 and user_0d_2.
SHOW GRANTS FOR 'user_0d_1'@'localhost';
SHOW GRANTS FOR 'user_0d_2'@'localhost';

-- Script to list all privileges for specific MySQL users

SELECT user, host, Db, Select_priv, Insert_priv, Update_priv, Delete_priv, Create_priv, Drop_priv, Grant_priv, Index_priv, Alter_priv, Create_tmp_table_priv, Lock_tables_priv, Create_view_priv, Show_view_priv, Create_routine_priv, Alter_routine_priv, Execute_priv, Event_priv, Trigger_priv
FROM mysql.db
WHERE user IN ('user_0d_1', 'user_0d_2');

SELECT Grantee, Table_catalog, Privilege_type, Is_grantable
FROM information_schema.user_privileges
WHERE Grantee LIKE "'user_0d_1'@'localhost'" OR Grantee LIKE "'user_0d_2'@'localhost'";

