# SC Grid System 2.0
#### Made with SASS 

A "just add water" WordPress plugin in which you can manage column sizes with shortcodes
It is a 10, 12 and 16 columns Grid System


## To specify the column size of your element, just follow the exemples bellow

```css
[6_of_12]
	{{content}}
[/6_of_12]
/* If you want to use 6 columns in the 12 columns grid system */

[12_of_16]
	{{content}}
[/col_12_of_16]
/* If you want to use 12 columns in the 16 columns grid system */

/* Pattern */
[{n}_of_{x}]
	{{content}}
[/{n}_of_{x}]
/*
{n} being the column size from 1 to {x}
{x} being the amount of columns for each line (10, 12 or 16)
{{content}} could be whatever you want to show inside the column element
*/
```

### Download from WordPress plugin repository
[SC GridSystem - You can download from the WordPress Plugin Repository](https://wordpress.org/plugins/sc-gridsystem/)


## License
[![WTFPL](wtfpl-badge.png "WTFPL")](https://github.com/zergiocosta/SC-GridSystem/blob/master/LICENSE)
