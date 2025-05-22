import requests 
from bs4 import BeautifulSoup

url = "https://www.eventbrite.com/d/tn--nashville/events/"

header = {
    "User-Agent" : "Mozilla/5.0"
}

response = requests.get(url, header=header)
soup = BeautifulSoup(response.content, "html.parser")

events = soup.select("div.eds-event-card-content_primary-content")


for event in events:
    title : str = event.select_one("h3.eds-event-card-title").text.strip()
    link : str = event.select_one("a").get["href"]
    
    print("Title:", title.text.strip())
    print("Link:", link)