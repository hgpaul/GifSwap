# GifSwap
Takes any site and sets it back 20 years!

##Description
Remember when websites had the wonderful flare of horribly animated text GIFs? Bring back that feeling with GifSwap! This plugin works on most websites and takes any headline, converts it into an ugly, sparkly GIF and reinserts it into the page. In the repository you will find only the code and some screenshots of the plugin in the screenshots folder. No GIFs are contained in the plugin itself, since they are generated for each headline individually upon running the extension.

##Technical Description
This plugin gets the text content of any h1, h2 or h3 tag (headlines), picks a random color and font from a defined list, parses it into a URL, submits this URL in an AJAX query to a GIF generating website to retrieve a JSON object which contains an animated GIF with the properties chosen earlier, and then inserts this GIF into the page where the headline is, and then deletes the original headline tag.

##Issues
The primary issue is that the GIFs are served up via HTTP, and not HTTPS, and thus, on a secure website, there is an issue of mixed content, which many browsers will not allow. In Google Chrome, some sites will let you consent to using mixed content, but other sites will just block the GIFs from loading without a choice. On normal, unsecured HTTP, this isn't an issue, however, many of the best websites are served with HTTPS. The other issue with the plugin is the speed. It can take quite a while for a page with a lot of headlines to load, since each GIF is being created on another website and can take 2-3 seconds to generate. 
