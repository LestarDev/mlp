# My Little Pony RPG App
## By LestarDev

### config

- npm v10.2.4
- yarn v1.22.22
- node v21.4.0

- config.tsx :

```TS
export const sqlHostLink = "https://mlp-rpg.zsti.me/phpData/fetch.php?SQL=";
export const sqlHostPush = "https://mlp-rpg.zsti.me/phpData/push.php?SQL=";
export const loginPageID = 0;
export const mainPageID = 1;
export const shopPageID = 2;
export const adminPageID = 3;
```

- vite.config.ts : 

```TS
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mlp/"
})
```

- hooks/backend/dbConfig.php :

```PHP
<?php

    return array(
        'dbUserName' => 'lestardev',
        'dbPassword' => 'OptimusPrime9001!',
        'dbHost' => 'localhost',
        'dbName' => 'lestardev_mlp'
    )

?>
```

***

### More info

> Site [zsti.me][1] is only for schoolers of ZSTI Gliwice in Poland made by [Michal Pasierbski][2]
> In  [/backend/] you can find file named "mlp_db.sql", it's database for your site with a few users
> Remember to put all [.php] files from backend in your server 

---

### Versions

* App: **v0.1.0**
* Backend: **v1.0.3**
*  Images: **v0.0.2**
* Documentation: **v0.0.0** - no exists [yet]

## Graphics by Wera

Portfolio: [todo][3]

[1]: https://zsti.me/
[2]: https://pasierb.ski/ 
[3]: https://blank.com/