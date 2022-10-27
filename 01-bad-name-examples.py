from datetime import datetime


class BlogPost:
    def __init__(self, title, description, publishDate):
        self.title = title
        self.description = description
        self.publishDate = publishDate
    def print(self):
        print('Title: ' + self.title)
        print('Description: ' + self.description)
        print('Published: ' + self.publishDate)

postTitle = 'Clean Code Is Great!'
description = 'Actually, writing Clean Code can be pretty fun. You\'ll see!'
formatedDate = datetime.now().strftime('%Y-%m-%d %H:%M')

post = BlogPost(postTitle, description, formatedDate)

post.print()