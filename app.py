from flask import Flask

import os
import markdown

app = Flask(__name__)


@app.route("/blog/<post>")
def index(post):
    ''' markdown headers should have the following without quotes and paths with no /
    preview:  
    banner: 
    path: 
    author: 
    title: 
    date: 
    update-date: 
    publish:
    avatar: 
        
    # TITLE GOES HEAR
    the rest of markdown...
    '''
    path = "./src/content"
    fileNames = os.listdir(path)
    paths = []
    # outline for posts
    #[{header:meta,content:body},{}]
    posts = [] 
    headers = []

    for files in fileNames:
        with open(path + "/" + files,"r") as article:
            md = markdown.Markdown(extensions=["meta"])
            m = article.read()
            body = md.convert(m)
            meta = md.Meta
            posts.append({"header":meta,"content":m[m.find("#"):]})
            headers.append({"header":meta})
            paths.append(meta["path"][0])
    
    # ** might want to check for post == '/' or empty string or null idk yet **
    if post == "index":
        return {"names":paths,"headers":headers}
    # posts is passed to the server and will output depending on the query
    for content in posts:
        print(content["header"]["path"][0])
        if post == content["header"]["path"][0]:
            return content
    
    return {"error": "POST NOT FOUND"}        

if __name__ == '__main__':
    app.run()
