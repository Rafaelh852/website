import os
import markdown

path = "./src/content"
fileNames = os.listdir(path)

# outline for posts
#[{header:meta,content:body},{}]
posts = []    
#for files in fileNames:
with open(path + "/" + fileNames[0],"r") as article:
        md = markdown.Markdown(extensions=["meta"])
        m = article.read()
        body = md.convert(m)
        meta = md.Meta
        posts.append({"header":meta,"content":m[m.find("#"):]})
        
# posts is passed to the server and will output depending on the query
''' markdown headers should have the following without quotes
preview:  
banner: 
path: 
author: 
title: 
date: 
update-date: 
publish: 1s
    
# TITLE GOES HEAR
the rest of markdown...
'''


