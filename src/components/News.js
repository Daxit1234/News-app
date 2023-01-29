import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articals = [
    {
      "source": { "id": "cbs-news", "name": "CBS News" },
      "author": "Kerry Breen",
      "title": "3 dead, 4 wounded after latest shooting in California - CBS News",
      "description": "No information about a suspect or possible motive has been released.",
      "url": "https://www.cbsnews.com/news/california-shooting-three-dead-four-injured/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/01/28/36247de5-a25f-48a6-bc00-27cec046ea81/thumbnail/1200x630/e572d2717ae988f8c24e0c8bba221325/beverly-crest-shooting.jpg",
      "publishedAt": "2023-01-29T02:28:00Z",
      "content": "At least three people were killed and four others wounded in an overnight shooting in California, according to the Associated Press. \r\nLos Angeles Police Department Sgt. Frank Preciado told the Assoc… [+1930 chars]"
    },
    {
      "source": { "id": "abc-news", "name": "ABC News" },
      "author": "Stephanie Guerilus, Jessie DiMartino",
      "title": "1 dead, 4 injured in Baltimore shooting, crash: Police - ABC News",
      "description": "Two children were injured in the incident, police said.",
      "url": "https://abcnews.go.com/US/1-dead-4-injured-baltimore-shooting-crash-police/story?id=96744692",
      "urlToImage": "https://s.abcnews.com/images/General/Breaking-News-banner-abc-ps-181024_hpMain_16x9_992.jpg",
      "publishedAt": "2023-01-29T02:26:15Z",
      "content": "One person was killed and four others were injured following a mass shooting Saturday in Baltimore after a passenger was shot and crashed their car, police said.\r\nThe incident took place around 6:39 … [+1517 chars]"
    },
    {
      "source": { "id": null, "name": "mlive.com" },
      "author": "Mark Torregrossa | mtorregr@mlive.com",
      "title": "Winter Storm Warning upgrade for swath from Grand Rapids to Saginaw Valley region - MLive.com",
      "description": "The winter weather advisory has been upgraded to a winter storm warning.",
      "url": "https://www.mlive.com/weather/2023/01/winter-storm-warning-upgrade-for-swath-from-grand-rapids-to-saginaw-valley-region.html",
      "urlToImage": "https://www.mlive.com/resizer/bwFpErWj0H4LDySe_JWncoRA6I8=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/D6AT634ACVFJZMT5HGTM2JO54Y.png",
      "publishedAt": "2023-01-29T02:19:00Z",
      "content": "The previous winter weather advisory has been beefed up to a winter storm warning for the counties below, shaded in pink.\r\nWinter Storm Warning for tonight and early Sunday morning for the pink shade… [+2139 chars]"
    },
    {
      "source": { "id": null, "name": "HuffPost" },
      "author": "Mary Papenfuss",
      "title": "Priscilla Presley Contests Her Daughter's Estate, Calls Signature 'Invalid' - Yahoo! Voices",
      "description": "Presley was jettisoned as a co-trustee from her daughter's Promenade Trust in a 2016 amendment.",
      "url": "https://www.huffpost.com/entry/priscilla-lisa-marie-estate-trust-signature-challenged_n_63d5a3efe4b04d4d18e66790",
      "urlToImage": "https://media.zenfs.com/en/the_huffington_post_584/aa3ea23c4b65908580bbbc3c785ae1b3",
      "publishedAt": "2023-01-29T01:32:00Z",
      "content": "Priscilla Presley has filed papers in Los Angeles Superior Court challenging a critical portion of her late daughters estate.\r\nElvis Presleys widow is arguing that a 2016 amendment to her daughters P… [+1705 chars]"
    },
    {
      "source": { "id": null, "name": "The Times of Israel" },
      "author": null,
      "title": "Security cabinet decides to ‘strengthen settlements’ after Jerusalem terror attack - The Times of Israel",
      "description": "Netanyahu vows to 'exact a price' from terrorists and supporters, issue more civilian gun permits; Ben Gvir says he will introduce death penalty legislation",
      "url": "https://www.timesofisrael.com/security-cabinet-decides-to-strengthen-settlements-after-jerusalem-terror-attack/",
      "urlToImage": "https://static.timesofisrael.com/www/uploads/2023/01/Untitled-3-6-1024x640.jpg",
      "publishedAt": "2023-01-29T01:30:57Z",
      "content": "Prime Minister Benjamin Netanyahu said the security cabinet had decided on a series of steps to combat terror and exact a price from terrorists and their supporters” during a meeting held late Saturd… [+5912 chars]"
    },
    {
      "source": { "id": null, "name": "ESPN" },
      "author": "Alaina Getzenberg",
      "title": "Bills' Damar Hamlin expresses gratitude in first public comments - ESPN",
      "description": "Bills safety Damar Hamlin expressed his appreciation for all the love and support he has received over the past month in his first public comments since suffering cardiac arrest on the field on Jan. 2.",
      "url": "https://www.espn.com/nfl/story/_/id/35547501/bills-damar-hamlin-expresses-gratitude-first-public-comments",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0115%2Fr1118004_1296x729_16%2D9.jpg",
      "publishedAt": "2023-01-29T01:23:48Z",
      "content": "BUFFALO, N.Y. -- Bills safety Damar Hamlin shared his first public comments since suffering cardiac arrest on Jan. 2 by posting a nearly six-minute video to his Instagram account on Saturday night th… [+4421 chars]"
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author:
        "Nouran Salahieh, Jamiel Lynch, Chuck Johnston, Shawn Nottingham, Andy Rose, Christina Maxouris",
      title:
        "Memphis police permanently disband unit tied to deadly beating of Tyre Nichols - CNN",
      description:
        "A day after the public release of video showing the horrific police beating of Tyre Nichols, the Memphis police department announced it is permanently deactivating the unit that five of the involved officers belonged to.",
      url: "https://www.cnn.com/2023/01/28/us/tyre-nichols-protests-saturday/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230128174408-01-tyre-nichols-protest-0128-memphis.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-01-29T03:59:00Z",
      content:
        "Editors Note: This article contains graphic videos and descriptions of violence.\r\nA day after the public release of video showing the horrific police beating of Tyre Nichols, the Memphis police depar… [+7232 chars]",
    },
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Al Jazeera",
      title:
        "Iran thwarts drone attacks on Isfahan military site - Al Jazeera English",
      description:
        "Iranian defence ministry says a loud blast heard in Isfahan was caused by ‘unsuccessful’ drone attacks.",
      url: "https://www.aljazeera.com/news/2023/1/29/iran-thwarts-drone-attacks-on-isfahan-military-site",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/01/2022-09-08T161230Z_1519560838_RC2JBW9ZSVM7_RTRMADP_3_IRAN-MILITARY.jpg?resize=1920%2C1333",
      publishedAt: "2023-01-29T03:42:44Z",
      content:
        "Irans defence ministry has reported several drone attacks on a military plant in the countrys central city of Isfahan.\r\nThe attacks were unsuccessful and there were no casualties, the ministry said i… [+2043 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articals: this.articals,
      loading: false,
    };
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=bf88de657d0640ba95a6091aee70a77a";
    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData)
  }
  render() {
    return (
      <div className="container my-3">
        <h1>newsMonkey -Top Headlines</h1>
        <div className="row">
          {this.state.articals.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title.slice(0,45)}
                  discription={element.description.slice(0,88)}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
