# SC Grid System 
#### Made with SASS 

A "just add water" WordPress plugin in which you can manage column sizes with shortcodes
It is a 12 columns Grid System (from 1 to 12, 12 being 100% width)


## To specify the column size of your element, just follow the exemple bellow

```css
[6_of_12]
	{{content}}
[/6_of_12]
/* If you want to use the 6-column grid, for example */

[12_of_12]
	{{content}}
[/col_12_of_12]
/* If you want to use the 12-column grid, for example */

/* Pattern */
[{n}_of_12]
	{{content}}
[/{n}_of_12]
/* Where {n} is your column size from 1 to 12 and {{content}} could be whatever you want to show inside the column element */
```

### Download from WordPress plugins repository
[SC GridSystem - You can download from the WordPress Plugins Repository](https://wordpress.org/plugins/sc-gridsystem/)


## License
[![WTFPL](wtfpl-badge.png "WTFPL")](https://github.com/zergiocosta/SC-GridSystem/blob/master/LICENSE)
