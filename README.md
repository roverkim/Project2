![Pixprience Logo](readme_files/PixprienceLogo.jpg)
# Pixprience
Pixprience is a web application that allows users to upload photos along with a note, rating, and title. By extracting the metadata from these photos we are able to visually contextualize these memories for the user by displaying them on either a timeline or a map. In the current version, the user signs in through google and is re-directed to their personal account, in future versions we will incorporate faceook and twitter authentication. 
http://www.pixprience.com

## Features

Current Supported Features Include:
* Create an account with us through google!
* Upload your favorite (or least favorite) photos, along with some notes and even a rating!
* View your photos on a timeline!
* View your photos on a map!

### Prerequisites

You will need

* [Node.js](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/) 

### Installing

If you would like to run this application locally, go to command line and type in:

```
git clone https://github.com/Codevengers/Project2.git
```

You will need to install the modules you need. Simply go to your command line and type in: 
```
npm install
```
To start the app from inside your cloned project, type:

```
node server.js
```

Now go to your browser, type in https://localhost:8080 and start uploading photos!! 

## Technologies

| Tool   | Purpose|
| ------------- | ------------- |
| [Google Auth] |Allows users to log in through google! |
| [Firebase]  |  Stores our image and returns a link! |
| [MySQL] | Allows us to store our user and photo data |
| [Materialize]| Was used for the modals |
| [CSS 3 Animations] | Front page animations |
| [Sequilize] |  How we create/manipulate/query data models in mySQL through javascript! | 
| [SVG] | Our Logo! |
| [Jquery] | JavaScript Magic| 
|[SAS]| css pre-process|

## Future Updates

1. Allow users to log in through facebook and twitter
2. Create a smart search where users can ask the application complex questions like "where did I eat last week"
3. Expand this smart search to accept voice input as well as text input
4. Develop a social aspect to the application so members can view and interact with other users timelines
5. Extraction of more data from photos using google vision 
6. Allow users to take photos from the mobile site instead of ruploading

## PIX!
![Conception](readme_files/a.jpg)
![Conception](readme_files/b.jpg)
![Conception](readme_files/c.jpg)
![Conception](readme_files/d.jpg)

## Built by: Codevengers;

* **Nadia Noui-Mehidi** - [nadianm](https://github.com/nadianm)
* **Ryan Kim** - [roverkim](https://github.com/roverkim)
* **Paige Lo** - [sk8asd123](https://github.com/sk8asd123)
* **Babak Shah** - [BabakShah](https://github.com/babakshah)
