# UM-NAV

A mobile-first pilot for Block B, Floor 1. Open site/index.html in a browser to try it. No installation or build is required. The SVG is a schematic redrawn from the supplied senior’s map. Marker positions identify areas, and doors, distances and routes have not been surveyed.

## Put the files on GitHub

1. Extract this ZIP. Inside you will see site/, README.md and netlify.toml.
2. Visit https://github.com/new and create a repository named faculty-wayfinder. Leave the initialization options empty.
3. On the empty repository page choose “uploading an existing file”. Drag site/ and both root files onto the upload area from your file manager. Commit the changes.
4. At the top of the repository you should see site/, README.md and netlify.toml. Open site/ to check that index.html is directly inside it.

## Publish with Netlify

1. In the Netlify dashboard choose Add new project, then Import an existing project. Choose GitHub and authorize access to this repository.
2. Select faculty-wayfinder and the branch you committed to (normally main). Leave the base directory and build command empty. The included netlify.toml sets the publish directory to site.
3. Deploy and open the assigned Netlify URL on your phone. Search for DK1, select the result, tap Copy link and open the copied URL in another tab. It should open on the same room. Search for MM next and check that all three labs appear.
4. Commit later edits to the connected production branch to redeploy. The map reference was provided by a senior. Confirm the room labels and attribution with them before distributing the link.

## Edit and expand

- site/places.js contains the floor registry and searchable directory. IDs appear in shared links, so keep existing IDs stable. Coordinates are relative to the top-left corner of the SVG viewBox.
- site/maps/block-b-1.svg contains the visible floor geometry and labels. When a room moves or gets renamed, update its directory entry and map label together.
- Add a floor by saving its SVG under site/maps/, adding its id, name, map, width and height to floors, and appending its entries to places, e.g. places.push({id:'a1-example',floor:'a1',code:'EX',name:'Example Room',x:100,y:150}). Replace the example with verified room details. Search covers all registered places and opens the matching floor.
- Two areas on the source both say Lecturer Rooms. The directory distinguishes them by position on the image. Stair labels follow the same convention.
- The zoom controls adjust the floor map. Swipe to pan a zoomed map. Fit floor restores the overview. The app uses no external fonts, scripts or map services.

Official guides: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository and https://docs.netlify.com/start/quickstarts/deploy-from-repository/
