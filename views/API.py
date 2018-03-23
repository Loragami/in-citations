import praw

reddit = praw.Reddit(client_id='fUgQhB2PwJvnkw',
                     client_secret=	'P1Pv0mwczDrY11NjAkS1z-eV7q0',
                     user_agent="my user agent")

for submission in reddit.subreddit('citations').hot(limit=10);
 print(submission.title)
 print('--------------------')
