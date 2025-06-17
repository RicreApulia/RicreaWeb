
	// By default good-old text/javascript is being used where all is public.
	// You can use the 'require' attribute to the script to specify the name of the
	// components you need, divided by space.
	// To use the ECMAScript modules:
	//  - globally: change the settings on your JSON project settings file to '"module": "ecma"',
	//  - only on a component: add the attribute 'module="ecma"' to the script tag.
	// To include a component script at page level using modules you need to add 'entrypoint' on the script.
	// To imports other stuffs you use the normal syntax like:
	// import { useDisplay, useBinds } from '@wed/utils';
	// but if you're using a dynamic component you still needs to require it


	// Example of useDisplay
	const show = useDisplay(".title", (text) => text + " !");
	console.log(show("Welcome"));

	// Example of useBinds
	const explore = useBinds("section");
