// ==UserScript==
// @name           0AutoPagerize SITEINFO
// @namespace      http://ss-o.net/
// @description    oAutoPagerize SITEINFO
// @include        http*
// @checkurl       http://ss-o.net/userjs/0AutoPagerize.SITEINFO.user.js
// ==/UserScript==
(function(){
	if (this.chrome) {
		window.addEventListener('ChromeAutoPagerizeInitialize',function(evt){
			if (evt.setSiteinfo) evt.setSiteinfo(window.AutoPagerizeWedataSiteinfo);
		}, false);
	}

window.AutoPagerizeWedataSiteinfo = [
{
"pageElement":"id(\"bodyContent\")//ul[last()]|id(\"bodyContent\")//ol[contains(concat(\" \", @class, \" \"), \" special \")]",
"url":"^http://[^.]+\\.wik(?:i(?:[mp]edia|books|news|quote|s(?:ource|pecies)|versity)|tionary)\\.org/w(?:iki/|/index\\.php\\?title=)(?:Special|%E7%89%B9%E5%88%A5)(?::|%3A)(?:(?:Ancient|Deadend|Lonely|New|MostLinked|Short|Uncategorized)Pages|(?:MostLink|Un(?:categoriz|us)|Want)ed(?:Categori|Templat)es|AbuseLog|BlockList|(?:Broken|Double)Redirects|C(?:ategorie|ontribution|rossNamespaceLink)s|Disambiguations|FewestRevisions|Global(?:BlockList|Users)|L(?:i(?:nkSearch|st(?:Redirect|User)s)|og)|Most(?:Categorie|Revision)s|Protected(?:Page|Title)s|W(?:hatLinksHere|ithoutInterwiki|anted(?:File|Page)s)|%E(?:3%8(?:2%AB%E3%83%86%E3%82%B4%E3%83%AA%E3%81%AE%E5%A4%9A%E3%81%84%E3%83%9A%E3%83%BC%E3%82%B8|3%AD%E3%82%B0)|6%(?:8A%95%E7%A8%BF%E8%A8%98%E9%8C%B2|96%B0%E(?:3%81%97%E3%81%84%E3%83%9A%E3%83%BC%E3%82%B8|7%9D%80%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB))|7%B7%A8%E9%9B%86%E5%B1%A5%E6%AD%B4%E3%81%AE%E5%A4%9A%E3%81%84%E3%83%9A%E3%83%BC%E3%82%B8|8%A2%AB%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%AE%E5%A4%9A%E3%81%84%E3%83%(?:86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88|9(?:5%E3%82%A1%E3%82%A4%E3%83%AB|A%E3%83%BC%E3%82%B8))))",
"nextLink":"//a[@rel=\"next\" or @class=\"mw-nextlink\"]"
},
{
"insertBefore":"id(\"toolbox_art_bot\")",
"pageElement":"id(\"article_text\")",
"url":"^http://www\\.wired\\.com/(?!(?:[^/]+/)*multimedia/|autopia|dangerroom|epicenter|g(?:a(?:dgetlab|melife)|eekdad)|rawfile|th(?:isdayintech|reatlevel)|underwire|wiredscience)",
"nextLink":"id(\"toolbox_art_bot\")/div[@class=\"float_r\"]/div[@class=\"tool\"][2]/ul/li[last()]/a"
},
{
"pageElement":"//div[@class=\"coment\"]",
"url":"^http://erogamescape\\.d(?:do\\.jp|yndns\\.org)/~ap2/ero/toukei_kaiseki/(?:(?:game_|pov_)?comment(?:_(?:(?:before|new)game|respons|t(?:ime|ouhyou)))?|usersql_list)\\.php",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"//div[starts-with(@id, \"illust_c\")]",
"url":"^http://www\\.pixiv\\.net/(?:bookmark(?:_new_illust|(?!_illust_user)(?!.+?type=user))|(?:member|(?:mypixiv_)?new)_illust|search|tags|tools|event_birthday_illust)",
"nextLink":"//div[starts-with(@id, \"content\")]//a[starts-with(text(), \"\u6b21\u306e\")][contains(@href,\"p=\")]"
},
{
"pageElement":"id(\"PAGEBODY\")//div[@class=\"content_672\" or @class=\"content_672_solo\"]/*[./preceding::p[@class=\"pager\"] and ./following::p[@class=\"pager\"]]",
"url":"^http://www\\.nicovideo\\.jp/(?:newarrival|myvideo|migiue|openlist|recent|related_tag|search|tag|mylist_search|(?:my|user/\\d+)/(?:channel|community|watchlist))",
"nextLink":"id(\"PAGEBODY\")//p[@class=\"pager\"]/*[last()][self::a]"
},
{
"pageElement":"//table[@class=\"standard_list\"]",
"url":"^https?://(?:www\\.k\\.kyoto-u\\.ac\\.jp|student\\.iimc\\.kyoto-u\\.ac\\.jp/iwproxy/KULASIS)/student/(?:la|[gu]/[a-z]+)/(?:syllabus/|timeslot/lecture_)search",
"nextLink":"//a[@class=\"pager_link\"][contains(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"coment\"][2]",
"url":"^http://erogamescape\\.d(?:do\\.jp|yndns\\.org)/~ap2/ero/toukei_kaiseki/user_(?:pov_)?comment(?:_(?:group|(?:hi)?touhyou|respons(?:ed)?|tokuten))?\\.php",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"content\")/div[starts-with(@id, \"post\")]",
"url":"^http://www\\.wired\\.com/(?:autopia|dangerroom|epicenter|g(?:a(?:dgetlab|melife)|eekdad)|rawfile|th(?:isdayintech|reatlevel)|underwire|wiredscience)",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"back\"]/a"
},
{
"pageElement":"id(\"paperRes authorRes confRes jourRes igRes paperList\")",
"url":"^http://libra\\.msra\\.cn/(?:[Aa]uthor(?:[Dd]etail|Result)|ConferenceResult|IGResult(?:_paper)?|JournalResult|[Pp]aper(?:cited|[Rr]esult))\\.aspx.",
"nextLink":"id(\"pageLst_next\")"
},
{
"pageElement":"id(\"nesycms\")/*[not(@class=\"related\")]",
"url":"^http://www\\.itarchitect\\.jp/(?:beginners|issue|xml|enterprise|methodology_and_design|technology_and_programming|news)/-/\\d+(?:-\\d+)*?\\.html",
"nextLink":"//p[@class=\"pagenav\"]/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"id(\"paginator\")/preceding::table[@class=\"highlightable\"]",
"url":"^http://(?:danbooru\\.donmai\\.us|nekobooru\\.net|(?:chan\\.sankakucomplex|konachan)\\.com|moe\\.imouto\\.org)/(?:artist|pool|tag)(?:$|[#/?])",
"nextLink":"id(\"paginator\")/div[@class=\"pagination\"]/a[.=\">>\"]"
},
{
"pageElement":"//div[@class=\"usersearch_box\" or @class=\"line_h24px\" or @class=\"work_list_item\"]",
"url":"^http://(?:[^/]+\\.)?novelist\\.jp/(?:category|(?:ranking_(?:author|day|week))|tag(?:_list)?|(?:user_)?search|work_list(?:_all)?)\\.php",
"nextLink":"//a[@title=\"next page\"]"
},
{
"pageElement":"id(\"badge_list follow_list illust_list\")/*[not(@id=\"page_select\")]",
"url":"^http://www.pixa.cc/(?:(badges|follows)/list_(?:\\1|search)|illustrations/list_(?:follows|main|nickname|search|tag)|profiles/show/\\d)",
"nextLink":"id(\"page_next\")/parent::a"
},
{
"pageElement":"id(\"hot_kuchikomi\")",
"url":"^http://(?:www\\.)?mogo2\\.jp/(?:top|home(?:/archive_(?:all|res)|/res)?|(?:(?:member(?:/keyword)?|comment|keyword/search)/)?[1-9])",
"nextLink":"id(\"t_all_read\")/p/a[last()]"
},
{
"pageElement":"id(\"blog_entries\") | id(\"list_entries diary_entries\")/ul | id(\"content_panel_container\")/div[@class=\"person_medium\"]",
"url":"^http://www\\.iknow\\.co\\.jp/(?:lists/(?:search\\?|tagged/)|user(?:/[^/]+/journal|s/diaries/tagged/)|search/(?:diaries|user))",
"nextLink":"//div[@class=\"paging_right\"]/a[@class=\"selected\"]/following-sibling::a[1]"
},
{
"pageElement":"//span[@class=\"thumb\"]",
"url":"^http://(?:(?:cuulgle\\.com|booru\\.makai-anime\\.net)|(?:ebolacola\\.org|dontstickthatthere\\.com)/shimmie)/post/list/",
"nextLink":"id(\"paginator\")/b/following::a"
},
{
"pageElement":"id(\"TheTable\")",
"url":"^http://(?:www\\.)?(?:3839dm|alllikes|comic(?:guy|ic)|m(?:a(?:ngabox|ytobe)|rmanga)|th(?:aiping|exinxin)|web1699)\\.cn/",
"nextLink":"//a[@id=\"next\"]"
},
{
"pageElement":"//div[@align=\"center\" or contains(@style, \"text-align: center;\")][a]",
"url":"^http://(?:dl|www)\\.toranoana\\.jp/(?:comiholi_a|webcomic/holic)/[^/]+(?:/webcomic)?/(?:\\d+|comics/summary)/.+\\.html",
"nextLink":"//div[@align=\"center\" or contains(@style, \"text-align: center;\")]/a"
},
{
"pageElement":"//span[@class=\"hotranking-number\"]/ancestor::table[1]",
"url":"^http://(?:www\\.)?discas\\.net/netdvd/hotranking(?:Top(?:Monthly|Total|Weekly)|GenreDetail[MTW]|GenerationDetail[MW])",
"nextLink":"//table[@width=\"775\"]/descendant::table[@width=\"540\"][1]//td[child::strong]/following-sibling::td[2]//a"
},
{
"pageElement":"//table[@cellspacing=\"1\" and @cellpadding=\"1\" and @border=\"0\"]",
"url":"^https://trading[14]\\.sbisec\\.co\\.jp/ETGate/?\\?[^?#]*\\b_ActionID=(?:getListByBusinessKind|searchByIndustryType)",
"nextLink":"//a[contains(node(), \"\u2192\")]"
},
{
"pageElement":"//div[@class=\"main\"]/p",
"url":"^http://(?:(?:nightgs|talker)\\.sakura\\.ne\\.jp/denpa[^/]*/izumimain/.|green\\.ribbon\\.to/.+?koneta/denpa/[^/]+/.)",
"nextLink":"//div[@class=\"main\"]/a[contains(text(),\"NEXT\")]"
},
{
"insertBefore":"//div[@class=\"section\"]/following-sibling::node()",
"pageElement":"//div[@class=\"section\"]",
"url":"^http://photozou\\.jp/(?:photo|video|mypage)/(?:list|everyone|friend|popular|favorite|cc|tagged|community_photo)/",
"nextLink":"//li[@class=\"page_next\"]/a"
},
{
"pageElement":"id(\"chiecoListLarge productListLarge reviewListLarge\")|id(\"otherSearch\")/following-sibling::text()[1]",
"url":"^http://www\\.cosme\\.net/(?:brand/brand|product/product)_id/\\d+/(?:board|chieco|(?:product|review)s)(?:$|[#/?])",
"nextLink":"id(\"pagination\")/li[@class=\"next\"]/a"
},
{
"pageElement":"//h1[1] | //h1[1]/following-sibling::node()",
"url":"^https?://[^?#]+/(?:19|20)\\d\\d(?:-?(?:0[1-9]|1[0-2])|-[A-Z][a-z]+)/(?:msg)?\\d+\\.html(?:\\?[^#]*(?:#.*)?)?$",
"nextLink":"//a[text()=\"Thread Next\"][1] | //li[starts-with(normalize-space(), \"Next message:\")][1]/a"
},
{
"pageElement":"//table[@class=\"file\"]",
"url":"^http://[^.]+\\.(?:seattleserv0\\.)?(?:d(?:do|ip|yndns)|m(?:oehome|ydns))\\.(?:jp|org|tv)/up(?:[_/]|loader/)",
"nextLink":"//div[@class=\"page_info\"]/em/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"nsi-body\")//font[@class=\"QWZ12-120\"]/a[contains(text(), \"\u306e\u30da\u30fc\u30b8\")]/ancestor::table[1]/following-sibling::table[./following::font[@class=\"QWZ12-120\"]/a[contains(text(), \"\u306e\u30da\u30fc\u30b8\")]]",
"url":"^https?://rikunabi-next\\.yahoo\\.co\\.jp/rnc/docs/cp_s0(?:0(?:05|4[36]|7[16]|8[689]|90)0|2(?:04|20)0)\\.jsp",
"nextLink":"id(\"nsi-body\")//font[@class=\"QWZ12-120\"]/a[starts-with(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"rightResults atfResults btfResults Results\")//div[@class=\"listView\" or @class=\"defaultView\"]|id(\"Results\")/table",
"url":"^https?://www\\.amazon\\.(?:c(?:a|o(?:m|\\.(?:jp|uk)))|de|fr)/(?:[^/]+/)?(?:[bs]|(?:gp|exec/obidos)/search)",
"nextLink":"id(\"pagnNextLink\")"
},
{
"pageElement":"id(\"showcase\")",
"url":"^http://(?:directory|esearch)\\.rakuten\\.co\\.jp/rms/sd/(?:directory|esearch)/vc\\?[^#]*\\bv=3(?:[&#]|$)",
"nextLink":"//td[img[@src=\"http://image.www.rakuten.co.jp/com/img/icon/tri/w14/right.gif\"]]/preceding-sibling::td[1]//a[b]"
},
{
"pageElement":"//dl",
"url":"^http://(?:members\\.jcom\\.home\\.ne\\.jp/w3c/omake/diary\\.html|noz\\.hp\\.infoseek\\.co\\.jp/diary/)",
"nextLink":"//dt[contains(text(), \"\u524d\")]/following::dd[2]/a"
},
{
"pageElement":"//table[@class=\"PeopleRS\"]",
"url":"^http://(?:assets\\d|cn|de|es|it|jp|nl|p(?:l|t(?:-br)?)|ru|tw|upload|www)\\.zooomr\\.com/search/people/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"DeleteForm\")",
"url":"^http://(?:www\\.)?ib4f\\.com/board/bara0/(?:(?:draw|gaiji)n|f(?:it|urry)|oekaki|(?:re|soci)al|videos)/",
"nextLink":"id(\"DeleteForm\")/table/tbody/tr/td/table/tbody/tr/td/b/following-sibling::a"
},
{
"pageElement":"id(\"productReviews\")//table",
"url":"^https?://www\\.amazon\\.(?:c(?:a|o(?:m|\\.(?:jp|uk)))|de|fr)/(?:[^/]+/)?(?:customer|product)-reviews/",
"nextLink":"//span[@class=\"paging\"]/span[@class=\"on\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"search-results\")/dl",
"url":"^http://(?:community\\.adobe\\.com/help/search\\.html|www\\.adobe\\.com/cfusion/search/index\\.cfm)\\?",
"nextLink":"id(\"search-pagination\")//a[last()]"
},
{
"insertBefore":"id(\"google_adsense\")",
"pageElement":"id(\"articles\")/div",
"url":"^http://slashdot\\.jp/(?!\\w+/[\\d/]+\\.shtml|(?:article|journal)\\.pl\\?|(?:~[^/]+|authors)/journal)",
"nextLink":"id(\"articles\")/a[last()]"
},
{
"pageElement":"//div[@class=\"contBlockNB\"]//div[starts-with(@id, \"schedule-\") or contains(concat(\" \", @class, \" \"), \" utileList \")]",
"url":"^http://tv\\.so-net\\.ne\\.jp/(?:m/schedulesByFilter\\.action\\?|s(?:chedulesBySearch\\.action\\?|/))",
"nextLink":"//a[@class=\"linkArrowE\"]"
},
{
"pageElement":"//div[@class=\"main\"]",
"url":"^https://www\\.lib\\.toyonaka\\.osaka\\.jp/licsxp-opac/WOpacTif(?:SchCmpdExec|TilListDisp)Action\\.do",
"nextLink":"//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"PhotoStream\")/* | //td[contains(@class,\"PhotosColumn\")]/*",
"url":"^http://www\\.flickr\\.com/photos/(?!(?:friend|tag)s(?:[/?#]|$))[^/?#]+(?:/(?:page\\d|[?#]|$)|[?#]|$)",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"fans_comments\")/div[@class=\"line-height_comment\"]/div[not(@class=\"display_where_case\")]",
"url":"^http://erogamescape\\.d(?:do\\.jp|yndns\\.org)/~ap2/ero/toukei_kaiseki/creater_fans_comments\\.php",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"pov_contents comments\")/div",
"url":"^http://erogamescape\\.d(?:do\\.jp|yndns\\.org)/~ap2/ero/toukei_kaiseki/povlist(?:_comment)?\\.php",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"pbBlock3080024 pbBlock3166169 pbBlock3230957\")//div[@class=\"tolCitColumnAWrap\" or @class=\"tolListRvwContainerB\" or contains(@class,\"tolListRvwWrapB\")]/following-sibling::*",
"url":"^http://store\\.tsutaya\\.co\\.jp/(?:item/(?:s(?:tore_search/|earch_))|storelocator/)result\\.html",
"nextLink":"id(\"pbBlock3080024 pbBlock3166169 pbBlock3230957\")//li[@class=\"tolLRWBliEnd\"]/a"
},
{
"pageElement":"id(\"threadslist posts\") | id(\"inlinemodform\")/table[starts-with(@id, \"post\")]",
"url":"^http://(?:www\\.)?(?:neogaf\\.com/forum|ga-forum\\.com)/(?:forumdisplay|showthread|search)\\.php",
"nextLink":"//div[@class=\"pagenav\"]//a[text()=\">\"]"
},
{
"pageElement":"id(\"SubNav\")/following-sibling::table[1]/tbody[1]/tr[1]/td[1]/table[1]",
"url":"^http://(?:assets\\d|cn|de|es|it|jp|nl|p(?:l|t(?:-br)?)|ru|tw|upload|www)\\.zooomr\\.com/photos/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" reportMainBox \")]",
"url":"^http://www\\.carview\\.co\\.jp/(?:green/report/road_imp|magazine/market_watch|road_impression)/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pagingNumBox \")]/ul/li/a[contains(text(), \"\u6b21\u3078\")]"
},
{
"insertBefore":"//td[@class=\"outer\"]/div",
"pageElement":"//td[@class=\"outer\"]/table[@width]",
"url":"^http://(?:www\\.)?animecentral\\.com\\.br/forums\\.php\\?(?:[^?#]*&)?action=view(?:forum|topic)",
"nextLink":"//td[@class=\"outer\"]/p[1]//a[.=\"Next >>\"]"
},
{
"insertBefore":"(//td[table/@cellspacing=\"3\"]|//div[@class=\"col1\"])/table[.//font=\"\u25cf\u4ee5\u4e0b\u306e\u30b8\u30e3\u30f3\u30eb\u304c\u898b\u3064\u304b\u308a\u307e\u3057\u305f\"]/following-sibling::*",
"pageElement":"(//td[table/@cellspacing=\"3\"]|//div[@class=\"col1\"])/table[.//@bgcolor=\"#f6f6dc\"]",
"url":"^http://(?:(?:directory|esearch)?\\.rakuten\\.co\\.jp/rms/sd|search\\.rakuten\\.co\\.jp/search)/",
"nextLink":"//td[img[@src=\"http://image.www.rakuten.co.jp/com/img/icon/tri/w14/right.gif\"]]/preceding-sibling::td[1]//a[b]"
},
{
"pageElement":"id(\"rounded_container\")/table[1]/tbody[1]/tr[1]/td[2]/table[1]",
"url":"^http://(?:assets\\d|cn|de|es|it|jp|nl|p(?:l|t(?:-br)?)|ru|tw|upload|www)\\.zooomr\\.com/search/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"bannerB2\")/preceding-sibling::*",
"url":"^http://www\\.(?:new-akiba\\.com|ura-akiba\\.jp)/(?:entry/[^/]+/)?archives/\\d+/\\d+/\\w+\\.html",
"nextLink":"//div[@class=\"kiji-column-main\"]/div[@align=\"center\"]/p/a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://(?:cn\\.last\\.fm|www\\.last(?:\\.fm|fm\\.(?:com\\.[bt]r|[^./]{2})))/user/[^/]+/journal",
"nextLink":"id(\"content\")//div[contains(concat(\" \", @class, \" \"), \" pagination \")]/a[contains(concat(\" \", @class, \" \"), \" nextlink \")]"
},
{
"insertBefore":"id(\"content\")/div[@class=\"skylineRight\"]/div[@class=\"skyWrap\"]/div[@class=\"pagination\"]",
"pageElement":"id(\"users\")",
"url":"^http://(?:cn\\.last\\.fm|www\\.last(?:\\.fm|fm\\.(?:com\\.[bt]r|[^./]{2})))/user/[^/]+/friends",
"nextLink":"id(\"content\")/div[@class=\"skylineRight\"]/div[@class=\"skyWrap\"]/div[@class=\"pagination\"]/a[@class=\"nextlink\"]"
},
{
"insertBefore":"//form[@name=\"editItems\"][last()]/table/following-sibling::node()",
"pageElement":"//form[@name=\"editItems\"]/table",
"url":"^https?://www\\.amazon\\.(?:co(?:m|\\.jp)|de)/(?:gp/)?registry/(?:wishlist[/?]|registry\\.html)",
"nextLink":"//span[contains(concat(\" \",normalize-space(@class),\" \"), \" pagSide \")][last()]/a"
},
{
"pageElement":"//table[@class=\"candyStriped tracklist\"]",
"url":"^http://(?:cn\\.last\\.fm|www\\.last(?:\\.fm|fm\\.(?:com\\.[bt]r|[^./]{2})))/user/[^/]+/tracks",
"nextLink":"//a[@class=\"nextlink\"]"
},
{
"insertBefore":"//div[@class=\"pagination\"][last()]",
"pageElement":"id(\"deletablert\")",
"url":"^http://(?:cn\\.last\\.fm|www\\.last(?:\\.fm|fm\\.(?:com\\.[bt]r|[^./]{2})))/user/[^/]+/charts",
"nextLink":"//a[@class=\"nextlink\"]"
},
{
"pageElement":"id(\"photoflash headlinephoto\")",
"url":"^http://(?:[^.]+\\.keizai\\.biz|www\\.(?:hama|shibu)kei\\.com)/(?:photoflash|headline/photo)/",
"nextLink":"id(\"nextItemLink\")"
},
{
"pageElement":"//div[@class=\"ListView\"]/div/div[contains(@class,\"mg_widget_item\")]",
"url":"^http://www\\.goodsmile\\.info/page/all/jpn/product/category/bishojo/all/all/all/[^.]+\\.html",
"nextLink":"//a[@class=\"pagerNext\"]"
},
{
"pageElement":"id(\"paginator\")/preceding-sibling::div[1][./*[(self::ul and @id=\"post-list-posts\" and ./*[contains(concat(\" \", @class, \" \"), \" javascript-hide \")]) or (self::span and contains(concat(\" \", @class, \" \"), \" blacklisted \"))]]/../*",
"url":"^http://(?:danbooru\\.donmai\\.us|konachan\\.com|moe\\.imouto\\.org)/(?:note|post)(?:$|[#/?])",
"nextLink":"id(\"paginator\")/div[@class=\"pagination\"]/a[.=\">>\"]"
},
{
"insertBefore":"id(\"googlead\")",
"pageElement":"//div[@class=\"frame\"]/div[@class=\"main\"]/table",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/(?:(?:community|diary|zone)_list|message_box)\\.cgi",
"nextLink":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"pageElement":"id(\"body\")//ul[@class=\"fanlist\"]",
"url":"^http://www\\.hatena\\.ne\\.jp/[a-zA-Z][\\w-]{1,30}[a-zA-Z\\d]/(?:f(?:a(?:n|vorite)|riend)s)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"pagecontent\")",
"url":"^http://(?:nwnw(?:01|\\.globat)\\.com|torone\\.net:8080/torone)/view(?:forum|topic)\\.php\\?",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[contains(@class, \"post_table\")]",
"url":"^http://[^.]+\\.areablog\\.jp/(?!blog/[^/]+/.+\\.html|(?:more_post|page_(?:img|list))\\.asp)",
"nextLink":"//a[descendant::font[text()=\"\u4ee5\u524d\u306e\u8a18\u4e8b\u3078>>\"]]"
},
{
"pageElement":"id(\"listPlanArea listHotelArea\")",
"url":"^http://web\\.travel\\.rakuten\\.co\\.jp/portal/my/(?:mt_map\\.chk|ry_kensaku\\.k2)(?:\\?|$)",
"nextLink":"//div[@class=\"pagingArea\"]//a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"id(\"site-body\")//div[@class=\"pagenavi\"][1]/following-sibling::*[1][self::div or self::table]",
"url":"^http://c(?:h|om).nicovideo.jp/(?:c(?:hannel|om(?:_new|munity))|live_archives|member|search)",
"nextLink":"id(\"site-body\")//div[@class=\"pagenavi\"]//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class='tBlock']/div[contains(@class, 'productBlock ') or @id='specialtab']",
"url":"^http://www\\.bhphotovideo\\.com/(?:c/(?:shop|category)/|bnh/controller/home\\?.*A=Search)",
"nextLink":"//a[@class='pagination'][span[text()='Next']]"
},
{
"pageElement":"(/html/*[not(self::body)]|/html/body/*)[.//@class=\"resourcepage_photoGalleryImage\" or .//@class=\"resourcepage_caption\"]|/html/body/script",
"url":"^http://[^/]+\\.impress\\.co\\.jp/img/\\w+/docs/\\d+/\\d+/photogallery/[^/]+\\.jpg\\.html",
"nextLink":"//div[@class=\"next_link\"]/a"
},
{
"pageElement":"//ul[@class=\"artistsWithInfo\" or @class=\"artistList\"]",
"url":"^http://(?:cn\\.last\\.fm|www\\.last(?:\\.fm|fm\\.(?:com\\.[bt]r|[^./]{2})))/music/[^/]+/",
"nextLink":"//div[@class=\"pagination\"]/a[@class=\"nextlink\"]"
},
{
"pageElement":"//div[@class=\"news\"]/div[contains(@class, \"alert\")]",
"url":"^https?://github\\.com/(?:$|dashboard|(?:timeline|[^/]+/[^/]+/(?:comments|network/feed)))",
"nextLink":"//a[@hotkey=\"l\"]"
},
{
"pageElement":"//hr/following-sibling::table[@align=\"right\"]/preceding-sibling::node()[not(self::center or self::p or self::hr and @width)]",
"url":"^http://(?:[^.]+\\.(?:dreamhosters\\.com|komica\\.org)|2cat\\.twbbs\\.org/~twocat)/[^/]+/",
"nextLink":"//form[substring(@action, string-length(@action) - string-length(\".htm\") + 1) = \".htm\"][last()]"
},
{
"pageElement":"//table[contains(@class, \"list\")] | //dl[@class=\"hist\"]",
"url":"^http://www8\\.atpages\\.jp/owatamap/(?:index\\.php(?:/menu\\.php)?)?\\?(?:[hl]ist|ss)\\b",
"nextLink":"//a[contains(text(), \">>\")]"
},
{
"pageElement":"id(\"timeline\")",
"url":"^http://(?:assets\\d|cn|de|es|it|jp|nl|p(?:l|t(?:-br)?)|ru|tw|upload|www)\\.zooomr\\.com/",
"nextLink":"id(\"timeline\")/following-sibling::h2[1]/a[last()]"
},
{
"pageElement":"id(\"resultsBody\")/table[1]",
"url":"^http://(?:www\\.)?excite\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/search\\.gw\\?.*?\\btarget=image",
"nextLink":"id(\"resultsBody\")/table[last()]//a[contains(text(),\">>\")]"
},
{
"pageElement":"id(\"ytrvTmWrMain\")/div[@class=\"ytrvTmWrDomMain\" or @class=\"ytrvTmWrAbrMain\"]/div[@class=\"ytrvTmWrDomMainBody\" or @class=\"ytrvTmWrAbrMainBody\"]/div[@class=\"ytrvTmMdTdList\" or @class=\"ytrvTmMdRepList\" or @class=\"ytrvTmMdLine\"]",
"url":"^http://community\\.travel\\.yahoo\\.co\\.jp/(?:abroad|domestic).*/b(?:log|uzz)\\.html",
"nextLink":"//li[contains(concat(\" \",@class,\" \"), \" next \")]/a"
},
{
"pageElement":"id(\"posts threadslist\")",
"url":"^http://(?:(?:www\\.)?candlepowerforums|forum\\.gamevn|www\\.e-cigarette-forum)\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"addon-listing\") | //ul[@class=\"thumbs\"] | id(\"content-main\")/*[@class=\"pagination\"]/preceding-sibling::div | //div[@class=\"item\"] | //div[@class=\" item\"]",
"url":"^https://addons\\.mozilla\\.org/[^/]+/[^/]+/(?:browse/type:[124]/cat:|reviews/|search)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"pagecontent\")",
"url":"^http://(?:torrentjp\\.com/gdfjp/|gdf\\.torrentjp\\.com/)view(?:forum|topic)\\.php\\?",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"yui-main\")",
"url":"^http://tw\\.(?:search\\.)?bid\\.yahoo\\.com/(?:tw/.*?category-leaf\\.html|search/ac)",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"body\")/div/ul/li/div[1]",
"url":"^http://www\\.hatena\\.ne\\.jp/[a-zA-Z][\\w-]{1,30}?[a-zA-Z\\d]/a(?:ntenna|ctivities)",
"nextLink":"//a[contains(text(),\"\u6b21\u306e100\u4ef6>\")]"
},
{
"pageElement":"id(\"list01\")",
"url":"^http://(?:search\\d*|list\\d+|storeuser\\d+|openuser)?\\.auctions\\.yahoo\\.co\\.jp/",
"nextLink":"//img[contains(@src, \"arrow_next\")]/parent::a"
},
{
"pageElement":"//div[@class=\"main\"]/center/table/tbody/tr[2]/td/table",
"url":"^https?://(?:www\\.)?amusement-center\\.com/project/emusic/cgi/eggmusic_catalog\\.cgi",
"nextLink":"//div[@class=\"main\"]/center/table/tbody/tr[1]/td[last()]/a[last()]"
},
{
"pageElement":"//*[preceding-sibling::table[descendant::img[@src=\"../../images/next_icon.gif\"]]][following-sibling::table[descendant::img[@src=\"../../images/next_icon.gif\"]]]",
"url":"^http://www\\.nhk\\.or\\.jp/nikki/(?:bbs(?:_\\d)?|enquete|nikki)/\\d+/page\\d+\\.html",
"nextLink":"//img[@src=\"../../images/next_icon.gif\"]/.."
},
{
"pageElement":"id(\"video_grid\")|id(\"baseDiv\")[not(id(\"video_grid\"))]//div[@class=\"list-view\"]",
"url":"^http://www\\.youtube\\.com/(?:(?:channel|result)s|vi(?:deos|ew_play_list))(?:$|[#?])",
"nextLink":"id(\"baseDiv\")//div[@class=\"searchFooterBox\"]/div[@class=\"yt-uix-pager\"]/*[last()][@href]"
},
{
"pageElement":"//div[@class=\"profile-results-section\"]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/profiles\\?[^?#]*?\\bq=[^?#=&;]",
"nextLink":"//div[@class=\"profile-results-paginator\"]//a[descendant::img[contains(@src, \"/nav_next.gif\")]]"
},
{
"pageElement":"//div[@id=\"content2\"]//div[./a/img] | //div[@id=\"content2\"]//div[./a/img][position()=last()]/following-sibling::br[position()=1]",
"url":"^http://www\\.pixiv\\.net/(?:bookmark.+type=(?:reg_)?user|mypixiv_all|personal_tags)",
"nextLink":"//div[starts-with(@id,\"content\")]//a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"f_left\")/div[@class=\"f_center\"]/table[@class=\"box_all\"]",
"url":"^http://cgi4\\.nhk\\.or\\.jp/gatten/(?:archive/back_number|recipe/recipe_list)\\.cgi",
"nextLink":"id(\"f_left\")/div[@class=\"page_changer\"]/span[@class=\"page_pagelink\"]/span[@class=\"page_now\"]/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"yarticle yphtsingle yphtgallery\")//div[@class=\"mbd\" or @class=\"mft\"]",
"url":"^http://tw\\.myblog\\.yahoo\\.com/[^/]+/(?:ar(?:chiv|ticl)e|gallery|photo)(?:[?#]|$)",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"chapter\" or @class=\"section\" or @class=\"preface\" or @class=\"part\" or @class=\"toc\" or @class=\"appendix\"]",
"url":"^https?://(?:[^.]+\\.(?:redhat\\.com|centos\\.org)/docs|docs\\.fedoraproject\\.org)/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"content\")/div[last()]",
"url":"^http://events\\.php\\.gr\\.jp/(?:events(?:/(?:index(?:/(?:page(?::\\d*)?)?)?)?)?)?$",
"nextLink":"id(\"pagination\")/a[last()]"
},
{
"pageElement":"id(\"article\")/a[@name] | id(\"articles commentwrap commentlisting\")|id(\"articles-suffix\")/div",
"url":"^http://slashdot\\.jp/(?:\\w+/[\\d/]+\\.shtml|article\\.pl\\?(?:[^?#]*&)?sid=[\\d/])",
"nextLink":"id(\"articles-suffix\")/div[contains(@class,\"comments-suffix-prev-next\")]/ul/li[@class=\"start\"]/span/a"
},
{
"pageElement":"//table[@class=\"resultTable\"]",
"url":"^http://(?:www\\.)?hikaku\\.com/shopping/index\\.html\\?module=search&action=Search",
"nextLink":"//a[starts-with(text(), \"\u6b21\u3078\uff1e\")]"
},
{
"pageElement":"//p[@class=\"g\"]/..",
"url":"^http://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/hws/search\\?.*?\\bclient=fenrir",
"nextLink":"id(\"nextPageUrl\")"
},
{
"pageElement":"id(\"blog-head blog-body-container trackback comment\")",
"url":"^http://(?:(?:[^.]+\\.)+?webry\\.info|blog\\.tendice\\.jp)/\\d+/article_\\d+\\.html",
"nextLink":"//table[@class=\"navi\"]/tbody/tr/td[1]/a"
},
{
"pageElement":"id(\"photonews\")/ul/li",
"url":"^http://(?:[^.]+\\.keizai\\.biz|www\\.(?:hama|shibu)kei\\.com)/photonews/archives/",
"nextLink":"id(\"pageswitch\")/a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@class=\"listitem\" or @class=\"contents_list\" or @class=\"gsc-webResult\"]|//div[@class=\"pager\"]/following-sibling::dl|id(\"article\")/*",
"url":"^http://(?:c(?:areer|ode)|enterprise|m(?:arke|oney)|)zine\\.jp/(?:article/|search)",
"nextLink":"//td[@class=\"pg_bar_next\"]/a|//div[@class=\"utility\"]//li[@class=\"next\"]/a|//td[@class=\"active\"]/following-sibling::td[1]/a|//span[@class=\"pg_next\"]/a"
},
{
"pageElement":"id(\"l_anime\")/ancestor::div[1]/following-sibling::*[self::div or self::br]",
"url":"^http://asame\\d+\\.(?:web\\.infoseek\\.co|sakura\\.ne)\\.jp/cgi-bin/bbsnote\\.cgi",
"nextLink":"//a[./b[contains(.,\"BACK\")]]"
},
{
"insertBefore":"https://search.sbisec.co.jp/v2/popwin/tools/yutai/yutai_search_c1.html",
"pageElement":"//td[contains(text(), \"\u9298\u67c4\")]/ancestor::table[2]",
"url":"^https://search\\.sbisec\\.co\\.jp/v2/popwin/tools/yutai/yutai_search_c\\d+\\.html",
"nextLink":"//a[contains(node(), \"\u2192\")]"
},
{
"pageElement":"id(\"posts\")/*",
"url":"^http://www\\.tumblr\\.com/(?:dashboard|show|tumblelog|filter|tagged)[^-]*\\?back$",
"nextLink":"id(\"pagination\")/a[contains(text(), \"Previous page\")]"
},
{
"pageElement":"id(\"content\")/table",
"url":"^http://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/coop/subscribedlinks/directory/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pager \")]/a[last() - 1]"
},
{
"pageElement":"id(\"quick-edit\")/following-sibling::*[1][self::div]/span | id(\"note-list\")/div/span | id(\"post-list-posts\")/li",
"url":"^http://(?:danbooru\\.donmai\\.us|konachan\\.com|moe\\.imouto\\.org)/(?:post|note)",
"nextLink":"id(\"paginator\")/div[@class=\"pagination\"]/a[.=\">>\"]"
},
{
"pageElement":"//*[@class=\"ResultBoxMar\"]",
"url":"^http://(?:www\\.)?itp\\.ne\\.jp/servlet/jp\\.ne\\.itp\\.sear\\.SGSSVWebDspCtrl\\?",
"nextLink":"//a[preceding-sibling::strong][1]"
},
{
"pageElement":"id(\"headline\")/div[@class=\"articles\"]",
"url":"^http://(?:[^.]+\\.keizai\\.biz|www\\.(?:hama|shibu)kei\\.com)/headline/archives/",
"nextLink":"id(\"pageswitch\")/a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@class=\"search-data-content\"]",
"url":"^http://(?:search|class)\\.ruten\\.com\\.tw/(?:search|category)/s(?:0|ub)00\\.php",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"Main\")//div[@class=\"Pages\"]",
"pageElement":"id(\"Main\")//div[@class=\"HoldPhotos\"]",
"url":"^http://www\\.flickr\\.com/(?:groups/[^/]+/pool|photos(?:/friends|of))(?:[/?#]|$)",
"nextLink":"id(\"Main\")//a[@class=\"Next\"]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" day \")]",
"url":"^http://www\\.perfume-web\\.jp/(?:information|fanclub|pta/(?:report|staff|blog))/",
"nextLink":"//a[@rel=\"Next\"]"
},
{
"pageElement":"id(\"list\")",
"url":"^http://service\\.osa-p\\.net/rea-log/member/member/index\\.html\\?member_no=\\d",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"main\")/*",
"url":"^http://realtimeweb\\.jp/(?:archives/(?:(?:category|date|tag)/.|\\d)|page/\\d|$)",
"nextLink":"id(\"pnavi\")//span[@class=\"current\"]/following-sibling::a[1]|id(\"navi\")/span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"main\")//form/div[4]/table",
"url":"^https://trading[14]\\.sbisec\\.co\\.jp/ETGate/?\\?[^?#]*\\b_ActionID=DefaultAID",
"nextLink":"//a[contains(node(), \"\u2192\")]"
},
{
"pageElement":"//div[@class=\"navheader\"]/following-sibling::div[following-sibling::div[@class=\"navfooter\"]]",
"url":"^http://docs\\.amazonwebservices\\.com/AWSECommerceService/\\d{4}-\\d{2}-\\d{2}/",
"nextLink":"//a[@accesskey=\"n\"]"
},
{
"insertBefore":"//a[contains(text(),\"\u8a18\u4e8b\u5168\u6587\")]/following-sibling::*|//a[contains(text(),\"\u8a18\u4e8b\u5168\u6587\")]/../following-sibling::*|//a[contains(text(),\"\u8a18\u4e8b\u5168\u6587\")]/../../following-sibling::*",
"pageElement":"id(\"detailHeadline detailNewsOpen ynDetail\")|//div[@class=\"magDetailedArticle\"]",
"url":"^http://(?:(?:daily|zasshi\\.)new|headline)s\\.yahoo\\.co\\.jp/(?:article|fc|hl)",
"nextLink":"//a[contains(text(),\"\u8a18\u4e8b\u5168\u6587\")]"
},
{
"pageElement":"//table[@class=\"group result\"]",
"url":"^http://(?:www\\.)?nomu\\.com/pro/index/module/BuildingRef/action/DetailSearch/.",
"nextLink":"//div[@id=\"index01\"]//li[@class=\"last\"]/a"
},
{
"pageElement":"id(\"contestRanking\")/table/tbody/tr",
"url":"^http://contest\\.pets\\.yahoo\\.co\\.jp/hiroba/photocontest/contest/\\d+/list/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//td[@width=\"425\"]/table[2]",
"url":"^https://trading\\d\\.sbisec\\.co\\.jp/ETGate/\\?.*\\b_PageID=WPLETmkR001Ndtl10",
"nextLink":"//a[contains(text(),\"\u2192\")]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://www\\.enecho\\.meti\\.go\\.jp/topics/hakusho/2009kaisetu/wakarukaisetu/",
"nextLink":"id(\"content\")//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//dd[@class=\"body\"]/ol",
"url":"^http://(?:www\\.)?mypress\\.jp/v2_writers/tomihiro/idx/\\?.*\\bmycategory_id=.",
"nextLink":"//b/following-sibling::a"
},
{
"pageElement":"id(\"chiecoListSmall productListSmall reviewListSmall\")|id(\"mainContent\")/text()[last()]",
"url":"^http://www\\.cosme\\.net/item/item_id/\\d+/(?:chieco|products|ranking|reviews)",
"nextLink":"id(\"pagination\")/li[@class=\"next\"]/a"
},
{
"pageElement":"//table[@class=\"tablebg\"]",
"url":"^http://(?:nwnw(?:01|\\.globat)\\.com|torone\\.net:8080/torone)/search\\.php\\?",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//hr[1]/following-sibling::*[not(self::hr)]",
"url":"^http://www\\.ntticc\\.or\\.jp/Archive/1995/The_Museum_Inside_The_Network/mega/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u65e5\u8a18\u3078\")]"
},
{
"pageElement":"//div[@class=\"articleContent\"]",
"url":"^http://journal\\.mycom\\.co\\.jp/(?:articles|column|kikaku|s(?:eries|pecial))",
"nextLink":"//li[@class=\"nextBtn\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"article-image\"]",
"url":"^http://natalie\\.mu/(?:[^/]+/)*?gallery/show/news_id/\\d+[/&]image_id[/=]\\d",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\u753b\u50cf\")]"
},
{
"pageElement":"id(\"res\")/div[ol or div]",
"url":"^http://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/(?:c(?:se|ustom)|search)",
"nextLink":"id(\"nav\")//td[last()]/a | id(\"nn\")/parent::a"
},
{
"pageElement":"//ul[@class=\"floatlist memolist\"]",
"url":"^http://(?:flipnote\\.hatena\\.com|ugomemo\\.hatena\\.ne\\.jp)/(?:ch/|movies)",
"nextLink":"id(\"memo-navigation-bottom\")//span[@class=\"pager\"]//span[@class=\"right-arrow-btn\"]/.."
},
{
"pageElement":"id(\"cardFileList\")|//table[@class=\"tradeTables\"]",
"url":"^http://s\\d+\\.3gokushi\\.jp/(?:card|union)/(?:deck|index|learn|trade)\\.php",
"nextLink":"//ul[@class=\"pager\"]/li[@class=\"last\"]/a[1]"
},
{
"pageElement":"id(\"threadlist postlist\")",
"url":"^http://(?:www\\.)?hongfire\\.com/forum/(?:forumdisplay|showthread)\\.php\\?",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"//hr/following-sibling::table[@align=\"right\"]",
"pageElement":"//hr/following-sibling::table[@align=\"right\"]/preceding-sibling::node()[not(self::center or self::p or self::hr and @width)]",
"url":"^http://(?:www\\.)?symphonic-net\\.com/futaba/(?:miku|yatu\\.?)/[^.]+\\.htm$",
"nextLink":"//form[substring(@action, string-length(@action) - string-length(\".htm\") + 1) = \".htm\"][last()]"
},
{
"pageElement":"//table[descendant::hr][position() > 1]",
"url":"^http://(?:www\\.)?itp\\.ne\\.jp/servlet/jp\\.ne\\.itp\\.sear\\.SKWSVmain\\?",
"nextLink":"//a[text() = \"\u6b21\u3000\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//table[@class=\"tableBorder\"][2]",
"url":"^http://www\\.taipeimarathon\\.org\\.tw/forum/forum_(?:post|topic)s\\.asp\\?",
"nextLink":"//a[@class=\"pageLink\" and @title=\"\u4e0b\u500b\u6708 \u9801\u9762\"]"
},
{
"pageElement":"id(\"content_top2\")/div[@class=\"item_list_box\"]",
"url":"^https://www\\.iy-net\\.jp/nsmarket/(get[a-z]*products|searchresult)\\.do\\?",
"nextLink":"//span[@class=\"span_next\"]/parent::a"
},
{
"pageElement":"//div[@class=\"body1\"]",
"url":"^http://(?:www\\.)?mypress\\.jp/v2_writers/tomihiro/story/\\?.*\\bstory_id=.",
"nextLink":"id(\"NAVIGATION-ITEM-PREV\")/a"
},
{
"pageElement":"id(\"resultArea\")",
"url":"^http://web\\.travel\\.rakuten\\.co\\.jp/portal/my/tabimado_search\\.main\\?",
"nextLink":"//a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"id(\"pixiv\") | id(\"manga_top\")/parent::div",
"url":"^http://www\\.pixiv\\.net/member_illust\\.php\\?(?:[^?#&]*&)*?illust_id=\\d",
"nextLink":"id(\"content2\")//a[contains(@href, \"member_illust.php?mode=manga\")]"
},
{
"insertBefore":"//div[@class=\"maincontbox\"]",
"pageElement":"//div[@class=\"maincontoutboxatt\"]",
"url":"^https?://groups\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/group/[^/]+/topics",
"nextLink":"(//div[@class=\"maincontbox\"]//a[@class=\"uitl\"])[last()]"
},
{
"pageElement":"id(\"Main\")//table[@class=\"GroupsResults\" or @class=\"PeopleResults\"]/tbody/tr | id(\"ResultsThumbsDiv\") | id(\"Main\")//div[@class=\"DetailResults\"]/div[@class=\"box\"]",
"url":"^http://www\\.flickr\\.com/search(?:/(?:groups|people))?/?\\?(?:[^&]+&)*q=",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"content2\")/div[contains(@class,\"link_visited\")]",
"url":"^http://www\\.pixiv\\.net/bookmark_illust_user\\.php\\?.*?\\billust_id=\\d",
"nextLink":"id(\"content2\")/div/a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"mainContentsArea\")/*",
"url":"^http://blogs\\.yahoo\\.co\\.jp/[^/]+/(?:MYBLOG/yblog|folder/[^.]+)\\.html",
"nextLink":"id(\"mainContentsArea\")/div[last()]/p[@class=\"forwardNext\" and last()]/a[last()] | id(\"mainContentsArea\")/ul[contains(@class,\"pagingNavi\")]/li/a[last()]"
},
{
"pageElement":"//div[@class=\"l600\"]/comment()[string()=\"BODY\"]/following-sibling::node()[not(descendant::a[text()=\"\u524d\u306e\u30da\u30fc\u30b8\"]) and not(descendant::a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]) and following::comment()[string()=\"BODYEND\"]] | id(\"r400\")/node()[preceding::*[@class=\"cmsabstract\"] and following::*[descendant::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\") or contains(text(), \"\u524d\u306e\u30da\u30fc\u30b8\")]]] | id(\"rap-in\")//div[@class=\"articlebody-in\"]/*[not(@class=\"toolbar\") and not(@class=\"box\") and following::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\") or contains(text(), \"\u524d\u306e\u30da\u30fc\u30b8\")]]",
"url":"^http://(?:www|plusd)\\.itmedia\\.co\\.jp/[^/]+/articles/0(?:[0-5]|60[12])",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"post-list\")/div[@class=\"content\"]/*",
"url":"^http://(?:(?:www\\.)?(?:gelbooru\\.com|safebooru\\.org)|nekobooru\\.net)/",
"nextLink":"id(\"paginator\")/div[@class=\"pagination\"]/span[@class=\"current\"]/following-sibling::a[1] | id(\"paginator\")/a[@alt=\"next\"]"
},
{
"pageElement":"//td[contains(@class,\"overflow-hide\")]/*",
"url":"^https?://groups\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/group/[^/]+/search",
"nextLink":"id(\"bottom_marker\")/descendant::a[last()]"
},
{
"pageElement":"//div[@class=\"results\"]",
"url":"^http://m\\.facebook\\.com/(?!(?:eventhome|grouphome|notes|stories)\\.php)",
"nextLink":"//div[@class=\"pager\"]/a[last()]"
},
{
"pageElement":"id(\"EntryBlock\")//div[@class=\"EntryInnerBlock\"] | id(\"content\")//div[@class=\"entry_body\"] | id(\"entry\")//div[@class=\"pad\"] | id(\"entryarea\")/node()[@class!=\"page_navi\"] | id(\"e-zone\")/node()[@class!=\"PageLinkBlock\"] | id(\"Contents\")/div[@id=\"Left\"] | id(\"main\")/*[@class=\"entry_table\" or @align=\"center\"] | id(\"contents\")/div[@class=\"entry\"]",
"url":"^http://[^.]+\\.blog\\.shinobi\\.jp/(?:Category|Date|Entry|Page|Search|$)",
"nextLink":"//*[contains(\" PageLinkBlock EntryInnerBlock navi page_navi entry_navi contents_10link \", concat(\" \", @class, \" \")) or contains(\" PageLinkBlock EntryBlock prev_next NaviBlock \", concat(\" \", @id, \" \"))]//a[contains(text(), \"\u6b21\") or contains(translate(text(), \"etx\", \"ETX\"), \"NEXT\") or contains(text(), \">>\") or contains(text(), \"\u904e\u53bb\")]"
},
{
"pageElement":"//td[@background=\"images/index_ura_r5_c4.gif\"]/ancestor::tr[2]/following-sibling::tr",
"url":"^http://www\\.nhk\\.or\\.jp/nikki/ura/index(?:_re)?_main(?:_\\d+)?\\.html",
"nextLink":"//img[@name=\"index_ura_r5_c9\"]/.."
},
{
"pageElement":"id(\"main-content\")/table[1]/tbody/tr",
"url":"^http://sourceforge\\.jp/search/[^?]*\\?.*?\\bt(?:ype_of_search)?=soft\\b",
"nextLink":"id(\"main-content\")/table[2]//a[contains(@href,\"offset=\")]"
},
{
"insertBefore":"id(\"vsPagination\")",
"pageElement":"id(\"setThumbs\")",
"url":"^http://www\\.flickr\\.com/photos/[^/]+/sets/(?![^/]+/detail(?:[/?#]|$))",
"nextLink":"//a[@class=\"Next\"]"
},
{
"insertBefore":"//address",
"pageElement":"id(\"entries\")",
"url":"^http://community\\.livejournal\\.com/vintagephoto/\\d{4}/\\d{2}/\\d{2}/",
"nextLink":"id(\"skiplinks\")/li[last()]/a"
},
{
"pageElement":"id(\"frmMain\")/div[@style]",
"url":"^http://kindai\\.(?:da\\.)?ndl\\.go\\.jp/scrpt/ndlimageviewer-rgc\\.aspx",
"nextLink":"id(\"lnkNextPage\")"
},
{
"pageElement":"id(\"contenuPhotoReportage\")",
"url":"^http://www\\.tomshardware\\.com/picturestory/\\d+(?:-\\d)?-[^/]+\\.html",
"nextLink":"//a[text()=\"Next Picture\"] | //*[@class=\"next\"]//a"
},
{
"pageElement":"id(\"diary_comment\")",
"url":"^http://www\\.otakuma\\.net/index\\.php/diary/(?:member|newdiary|search)",
"nextLink":"id(\"diary_pageing\")/table/tbody/tr/td[last()]/span/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"ContentsBody\")",
"url":"^http://trend\\.netadguide\\.yahoo\\.co\\.jp/guide/(?:adcolumn|feature)/",
"nextLink":"//a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"ImgCont\")/table | id(\"ImgContent\")",
"url":"^http://images\\.google(?:\\.[^./]{2,3}){1,2}/images\\?(?:[^?#]*&)?gbv=1",
"nextLink":"id(\"nn\")/parent::a | id(\"navbar navcnt\")//td[last()]/a"
},
{
"pageElement":"id(\"results\")/ul[@class=\"sb_results\"]",
"url":"^http://(?:www|cnweb)\\.bing\\.com/(?:[^/]+/)*?(?:results\\.aspx|search)",
"nextLink":"id(\"results_area\")//a[contains(concat(\" \",@class,\" \"),\" sb_pagN \")]"
},
{
"pageElement":"//table[@class=\"tablebg\"]",
"url":"^http://(?:torrentjp\\.com/gdfjp/|gdf\\.torrentjp\\.com/)search\\.php\\?",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"ytrvTmWrSearchBody\")/div[@class=\"ytrvTmMdSearchTdList\" or @class=\"ytrvTmMdSearchRepList\" or @class=\"ytrvTmMdLine\"]",
"url":"^http://community\\.travel\\.yahoo\\.co\\.jp/search/search_result\\.html",
"nextLink":"//li[contains(concat(\" \",@class,\" \"), \" next \")]/a"
},
{
"pageElement":"id(\"mainpic\")|//div[@class=\"mainPhotoInfo\"]",
"url":"^http://[^.]+\\.oricon\\.co\\.jp/news/photo/index\\.php\\?(?:.+&)?p_id=",
"nextLink":"//img[@name=\"button_nextPct_bottom\"]/.."
},
{
"pageElement":"id(\"bodyCell\")//div[contains(concat(\" \",@class,\" \"),\" bPageBlock \")]//table[1]",
"url":"^https?://(?:ap|emea|na[1-6]|ssl)\\.salesforce\\.com/[0-9a-zA-Z]{3}[/?]",
"nextLink":"id(\"bodyCell\")/div[contains(concat(\" \",@class,\" \"),\" bNext \")]//div[contains(concat(\" \",@class,\" \"),\" next \")]/a[last()]"
},
{
"pageElement":"//table[contains(concat(\" \",@class,\" \"),\" newslist \")]/tbody/tr",
"url":"^http://www\\.fezero\\.jp/notice_(?:event|mente|news|update)list\\.aspx",
"nextLink":"id(\"ctl00_ctl00__MainContent__MainContent__NextPage\")[descendant::img[@src=\"/images/com/button_next.gif\"]]"
},
{
"pageElement":"id(\"related-article-links\")",
"url":"^http://(?:www|entertainment|women|technology)\\.timesonline\\.co\\.uk/",
"nextLink":"//a[text()=\"Next Page\"]"
},
{
"insertBefore":"id(\"AdArea\")",
"pageElement":"id(\"ListArea\")",
"url":"^http://(?:ip\\.)?tosp\\.co\\.jp/[bB][kK]/[tT][oO][sS][bB][kK]100\\.asp",
"nextLink":"id(\"NaviArea\")/a"
},
{
"pageElement":"//div[@class=\"summary\" and not(@id=\"search\")]/following-sibling::div[not(./a[@accesskey=\"6\"])]",
"url":"^http://m\\.facebook\\.com/(?:eventhome|grouphome|notes|stories)\\.php",
"nextLink":"//a[@accesskey=\"6\"]/parent::div/preceding-sibling::div[@class=\"pager\"][1]/node()[local-name()=\"a\" and position()=last()-1 and normalize-space(./following-sibling::text())=\"\u00a0\"]"
},
{
"pageElement":"id(\"container\")//div[@class=\"node\"] | id(\"container\")//dl[@class=\"search-results\"]",
"url":"^http://plugins\\.jquery\\.com/(?:latest_releases|most_popular|search)",
"nextLink":"id(\"container\")//div[@class=\"pager\"]/a[contains(., \"next\")]"
},
{
"insertBefore":"id(\"googlead\")",
"pageElement":"id(\"shikakusanlist\")",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/(?:footprint|user_list)\\.cgi",
"nextLink":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"pageElement":"id(\"bookmarked_user\")",
"url":"^ttp://b\\.hatena\\.ne\\.jp/(?!entry/)[a-zA-Z][-\\w]{1,30}[a-zA-Z\\d]/",
"nextLink":"//a[@class=\"pager-next\" or @class=\"pager-prev\"]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"),\" elementListBrown \" )] | //table[contains(concat(\" \",@class,\" \"),\" tableList \")]",
"url":"^http://www\\.goodreads\\.com/(?:book/show|search/search|review/list)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"main\")/child::*[self::h2 or self::div[@id=\"year\" or @class=\"topentry-body\" or @class=\"footer\"]]",
"url":"^http://shopdd\\.blog51\\.fc2\\.com/(?:$|page|blog-category|category)",
"nextLink":"//div[@class=\"pageselect\"]/descendant::a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//div[@class=\"pts-mb30\"]",
"url":"^http://(?:www\\.)?4travel\\.jp/(?:domestic|overseas)/.+?/travelogue/",
"nextLink":"//div[@class=\"common-page-list-right\"]/a"
},
{
"pageElement":"id(\"news-content\")/div[@class=\"snap_shots\"] | id(\"news-content\")",
"url":"^http://www\\.tomshardware\\.com/reviews/[^,/]+,\\d+(?:-\\d+)?\\.html",
"nextLink":"//ul[@class=\"paginationReviews clearfix\"]/li[@class=\"pagin next\"]/a"
},
{
"pageElement":"//td[@class=\"gh_box_b g_pt5\"]/ancestor::table[1]",
"url":"^http://(rikunabi2010\\.yahoo\\.co\\.jp|2010\\.rikunabi\\.com)/bin/.+",
"nextLink":"//a[starts-with(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//div[./div/div/a/img[contains(@src,\"i.americanapparel.net\")]]",
"url":"^http://i\\.americanapparel\\.net/storefront/UGCStyle/BestBottom2010/",
"nextLink":"//div/a[./img[contains(@src,\"Next.png\")]]"
},
{
"pageElement":"id(\"content\")/table",
"url":"^http://vimperator\\.org/trac/gitweb/\\?p=vimperator\\.git;a=shortlog",
"nextLink":"id(\"content\")//tr[last()]//a"
},
{
"pageElement":"id(\"log\")",
"url":"^http://(?:www\\.)?zftalk\\.com/logs/view/[^/]+/\\d{4}/\\d{2}/\\d{2}/",
"nextLink":"id(\"paginationControl\")//a[contains(text(), \"Next\")]"
},
{
"insertBefore":"id(\"primaryContent\")/div[contains(concat(\" \", @class, \" \"), \" pageNavigation \")]",
"pageElement":"id(\"primaryContent\")",
"url":"^http://secondlife\\.reuters\\.com/stories/category/second-life/blog/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pageNavigation \")][last()]/a[last() and text()=\"Older Stories >\"]"
},
{
"pageElement":"//table[2]",
"url":"^http://www\\.taipeimarathon\\.org\\.tw/.+/(?:Image|Thum)\\d*\\.html$",
"nextLink":"//img[@src=\"navigator_s.gif\"]/following-sibling::map/area[@coords=\"58,0,82,21\"] | //a[contains(text(),\"\u4e0b\u4e00\u500b\")] | //img[@src=\"navigator_t.gif\"]/following-sibling::map/area[@coords=\"87,0,111,21\"]"
},
{
"pageElement":"//table",
"url":"^http://www\\.library\\.yonezawa\\.yamagata\\.jp/scripts/books\\.dll/",
"nextLink":"//a[img[@src=\"/img/allow_r.gif\"]]"
},
{
"pageElement":"id(\"table1\")",
"url":"^http://www\\.enecho\\.meti\\.go\\.jp/topics/hakusho/2009energyhtml/",
"nextLink":"(//table)[last()]//a[descendant::*[text()=\"\u6b21\u306e\u9805\u76ee\u306b\u9032\u3080\"]]"
},
{
"insertBefore":"//div[@class=\"Pages\"]",
"pageElement":"id(\"Main\")/table[last()]",
"url":"^http://www\\.flickr\\.com/photos/[^/]+/sets/[^/]+/detail(?:[/?#]|$)",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"), \" ytrvKlgQstn \")]",
"url":"^http://chiebukuro\\.travel\\.yahoo\\.co\\.jp/(?:list|search)\\.html",
"nextLink":"//li[contains(concat(\" \",@class,\" \"), \" next \")]/a"
},
{
"pageElement":"descendant::table[.//td//small[contains(text(),\"\u56de\u7b54\u5185\u5bb9\")]][last()]",
"url":"^http://my\\.chiebukuro\\.yahoo\\.co\\.jp/my/myspace_ansdetail\\.php",
"nextLink":"//a[contains(text(),\"\u6b21\u3078\")]"
},
{
"insertBefore":"id(\"navbar\")",
"pageElement":"id(\"m\")/div[2]",
"url":"^http://blogsearch\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/blogsearch",
"nextLink":"id(\"navbar\")//a[child::img[@src=\"nav_next.gif\"]]"
},
{
"pageElement":"//div[@class=\"list\"]",
"url":"^http://[^.]+\\.amazon\\.co(?:m|\\.[^./]+)/gp/(?:best|move|most|new)",
"nextLink":"//td[@class=\"paginationCurPage\"]/following-sibling::td[2]/a"
},
{
"pageElement":"//div[@class=\"jive-thread-list\"]",
"url":"^http://(?:forums|otn)\\.oracle\\.co(?:m|\\.jp)/forums?/forum\\.jspa",
"nextLink":"//a[text()=\"Next\" or text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"history_table\")",
"url":"^https://point\\.rakuten\\.co\\.jp/PointHistory/PointHistoryDisplay/",
"nextLink":"//a[contains(@href,\"/PointHistoryDisplay/?page=\")][starts-with(.,\"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"articleContent\"]",
"url":"^http://journal\\.mycom\\.co\\.jp/(?:articles|column|special|series)",
"nextLink":"//li[@class=\"nextBtn\"]/a[last()]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" entryList \")]",
"url":"^http://www\\.instructables\\.com/tag/type:id/.+?\\bsort=FEATURED\\b",
"nextLink":"//div[@class=\"pager\"]/div[1]/a[last()]"
},
{
"pageElement":"//span[@class=\"thumb\"]",
"url":"^http://(?:www\\.kawaiyume\\.net|danbooru\\.nyaatorrents\\.org)/post",
"nextLink":"id(\"paginator\")//a[contains(text(),\">>\")]"
},
{
"pageElement":"//td[@class=\"cat\"]/table[@class=\"maintable\"]/tbody/tr[2]/td[@class=\"alt1\"]/ul[@class=\"messages-stream\"]",
"url":"^http://www\\.furaffinity\\.net/(?:favorites|gallery|scraps)/[^/]+/",
"nextLink":"//form[child::button[@value=\"Next\"]]"
},
{
"pageElement":"id(\"res\")",
"url":"^http://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/[^#]*(?:#|fp=)",
"nextLink":"id(\"nav\")//td[last()]/a | id(\"nn\")/parent::a"
},
{
"pageElement":"//div[@class=\"cLeft\"]//div[@class=\"oneBox\" or @class=\"commentBox\"]",
"url":"^http://www\\.csselite\\.com/category/(?:resources|showcase)(?:$|/)",
"nextLink":"//div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"user_list\")",
"url":"^http://www\\.otakuma\\.net/index\\.php/community/userlist/details/",
"nextLink":"id(\"box2\")/div[@class=\"pager\"][last()]/b/following-sibling::a[1]"
},
{
"pageElement":"id('area-left')/div[contains(@class,'rsv-list-hotel')]",
"url":"^http://reserve\\.4travel\\.jp/domestic/hotel/result(?:\\.php\\?|/)",
"nextLink":"id('area-left')/div[contains(@class, 'dm-result-page')][1]/a[last()]"
},
{
"pageElement":"//table[@id=\"bangumi_onair\" or @id=\"bangumi\"]",
"url":"^http://mataanimemitetari\\.shimasu\\.net/(?:index\\.php)?(?:$|\\?)",
"nextLink":"//a[contains(text(),\"\u2192\")]"
},
{
"pageElement":"id(\"incontents\")/*",
"url":"^http://(?:green\\.)?search\\.goo\\.ne\\.jp/(?:search|web\\.jsp)\\?",
"nextLink":"//div[@class=\"paging\"]/span[@class=\"cur\"]/following-sibling::span[1]/a"
},
{
"pageElement":"//body/div[@class=\"b\"]|//body/table[@class=\"e\"]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/reader/m/view/",
"nextLink":"//a[@accesskey=\"0\"]"
},
{
"pageElement":"id(\"items\")/div[@class=\"item\"]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/reader/shared/",
"nextLink":"id(\"more\")/a"
},
{
"pageElement":"id(\"textsizer\")/following-sibling::*",
"url":"^http://www\\.iwakamiyasumi\\.com/column/politics/item_\\d+\\.html",
"nextLink":"id(\"flip1\")/li[@class=\"newer\"]/a"
},
{
"pageElement":"//div[@id=\"expandarticle\" or @class=\"story\"]/p[@class=\"wordlink\"]",
"url":"^http://www\\.nationalgeographic\\.co\\.jp/news/news_article\\.php",
"nextLink":"//div[@id=\"expandarticle\" or @class=\"story\"]//a[contains(text(), \"\u8a18\u4e8b\u5168\u6587\")]"
},
{
"pageElement":"//p[.//td[@bgcolor=\"#f5f5f5\"]]",
"url":"^http://tanasinn\\.web\\.infoseek\\.co\\.jp/cgi-bin/tanasinn\\.cgi",
"nextLink":"//td[./input[contains(@value, \"NEXT5\")]]//b/following-sibling::a[1]"
},
{
"pageElement":"//img[contains(@src, \"title.jpg\")]/../../following-sibling::tr[following::img[contains(@src, \"try_next.gif\") or contains(@src, \"try_back.gif\")]]",
"url":"^http://www\\.dosv\\.jp/(?:feature|sp_page|wdc|other|intel)/[^/]+/",
"nextLink":"//img[contains(@src, \"try_next.gif\")]/../preceding-sibling::td/a[last()] | //a[text()=\"Next\"]"
},
{
"pageElement":"//table[@summary=\"upinfo\"]",
"url":"^http://imas(?:\\.ath\\.cx|upd\\.ddo\\.jp)/~imas/cgi-bin/.+\\.html",
"nextLink":"//a[contains(text(), \"[HOME]\")]/following-sibling::text()[not(a) and normalize-space(self::text())]/following-sibling::a"
},
{
"pageElement":"id(\"main\")/form/table[@class=\"listing\"]",
"url":"^http://(?:www\\.)?(:?tokyotosho\\.(?:info|se)|tokyo-tosho\\.net)/",
"nextLink":"id(\"main\")/form/table//tr/td[@class=\"nav\"]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"postlist\")/node()",
"url":"^http://(?:www\\.)?militaryphotos\\.net/forums/showthread\\.php\\?",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"g\"]",
"url":"^http://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/c(?:ustom|se)",
"nextLink":"//td[@class=\"b\"][last()]//a"
},
{
"pageElement":"//table[@summary=\"\u8a18\u4e8b\u4e00\u89a7\"]/tbody/tr",
"url":"^http://(?:aurasoul\\.)?mb2\\.jp/_[^/]+/p[0-9]+(?:-[0-9]+)?\\.html",
"nextLink":"//td[@class=\"page_past\"]/a[text()=position()+1]"
},
{
"pageElement":"//div[contains(@class, \"under_line3\")]",
"url":"^http://www\\.kagoshima-u\\.ac\\.jp/html/(?:Infomation|Topics)List",
"nextLink":"//div[@class=\"tugi\"]/a"
},
{
"pageElement":"id(\"contentsContainer\")/form/div[contains(@class,\"itemListArea\")]",
"url":"^http://www\\.kakuyasu\\.co\\.jp/ec/disp/CSfDispListPage_001\\.jsp",
"nextLink":"id(\"contentsContainer\")/div[@class=\"pagerArea\"]//a[@class=\"next\"]"
},
{
"pageElement":"id(\"main\")[not(./div[@id=\"sub_contents\"])]//div[@class=\"entry\"] | id(\"main\")[./div[@id=\"sub_contents\"]]//div[@class=\"entry\"]/node()",
"url":"^http://(?:www\\.)?(?:gizmodo|kotaku|lifehacker|myspiritual)\\.jp/",
"nextLink":"id(\"main\")//ul[@class=\"page_navi\"]/li[@class=\"next\"]/a"
},
{
"pageElement":"//table[@class=\"BgColor06\" and @summary=\"layout\"]",
"url":"^https://www\\.mydocomo\\.com/dcm/dfw/i_mode/myd/storage/addrlist",
"nextLink":"//a[@class=\"color-0035c9u\" and contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"index\"]/form/fieldset/table",
"url":"^https://siteexplorer\\.search\\.yahoo\\.co\\.jp/mysite/advsearch",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//table[@width=580][2]",
"url":"^http://www\\.businessweekly\\.com\\.tw/webarticle2?\\.php\\?id=.",
"nextLink":"//a[contains(text(), \"\u4e0b\u4e00\u9801\")]"
},
{
"pageElement":"id(\"main gadget_list skin_list\") | //div[@class=\"main_content has_right_sidebar\"]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/ig/directory",
"nextLink":"//p[@class=\"pagelinks\"]//a[last()]"
},
{
"insertBefore":"id(\"content\")/div[@class=\"xhnewbb\"]/div[@class=\"topicviewctrl\"][last()]",
"pageElement":"id(\"content\")/div/table",
"url":"^http://www\\.thinkpad-club\\.net/modules/xhnewbb/viewtopic\\.php",
"nextLink":"id(\"content\")/div/table/tbody/tr[@class=\"foot\"]/td/a[last()]"
},
{
"pageElement":"id(\"issuetable\")/tbody/tr[starts-with(@id, \"issuerow\")]",
"url":"^https?://(?:[^/]+/)+secure/(?:IssueNavigator|QuickSearch)\\.jspa",
"nextLink":"//a[text()=\"Next >>\"]"
},
{
"pageElement":"id(\"yschqlist\")/ol/li",
"url":"^http://search\\.chiebukuro\\.yahoo\\.co\\.jp/search/search\\.php",
"nextLink":"id(\"yschpg\")/p[2]/big/b/a[text()=\"\u6b21\u3078\"]"
},
{
"insertBefore":"id(\"lastpost\") | id(\"threadslist\")/following-sibling::node()",
"pageElement":"id(\"posts\")/div/div/parent::node() | id(\"threadslist\")",
"url":"^http://forums\\.civfanatics\\.com/(?:forumdisplay|showthread)\\.",
"nextLink":"//a[text()=\">\"]"
},
{
"pageElement":"//div[@class=\"booklist\"]",
"url":"^http://www\\.books-sanseido\\.co\\.jp/reserve/bookSearch\\.do\\?",
"nextLink":"//a[@class=\"page-link\"][text()=\"\u6b21\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"//div[@class=\"forabg\"]",
"url":"^http://bbs\\.operachina\\.com/search\\.php\\?(?!.*\\bkeywords=).",
"nextLink":"//p[@class=\"rightside pagination\"]/a[last()]"
},
{
"pageElement":"id(\"main\")/div[4]",
"url":"^https://www\\.welbox\\.com/WelboxSecondEdition/welbox/WelboxTop/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"results\")/table | //table[@class=\"dsp-downloads\"]//tr[child::td]",
"url":"^http://www\\.microsoft\\.com/downloads/(?:[^/]+/)?results\\.aspx",
"nextLink":"//p[@id=\"position\" and last()]/nobr/span/a[last()] | id(\"ctl00_ctl15_ResultPager1_NextAnchor\")"
},
{
"pageElement":"id(\"Contents ContentsBlog\")[1]/*",
"url":"^http://(?:www\\.)?pipa\\.jp/tegaki/V(?:BlogList|New|Rank|Search)",
"nextLink":"//*[(self::td or self::div) and @class=\"PageBar\"][1]/a[last()-1]"
},
{
"insertBefore":"id(\"commentForm\")",
"pageElement":"id(\"Center\")",
"url":"^http://sns\\.my-freedom\\.org/\\?.*?target_c_commu_topic_id=\\d+",
"nextLink":"//div[@class=\"parts\"]/div[@class=\"pagerRelative\" and position()=3]/p[@class=\"next\"]/a"
},
{
"pageElement":"id(\"form_bookmark form_content_list form_message_delete\")/div[not(contains(concat(\" \", @class, \" \"), \" page_navi \"))]",
"url":"^http://(?:www\\.)?piapro\\.jp/(?:bookmark|content_list|message)/",
"nextLink":"id(\"form_bookmark form_content_list form_message_delete\")/div[contains(concat(\" \", @class, \" \"), \" page_navi \")]/ul/li[last()]/a"
},
{
"insertBefore":"id(\"Footer\")",
"pageElement":"id(\"Center\")",
"url":"^http://sns\\.my-freedom\\.org/\\?m=pc&a=page_h_diary_list_friend",
"nextLink":"//div[@class=\"parts\"]/div[@class=\"pagerRelative\" and position()=2]/p[@class=\"next\" and last()]/a"
},
{
"pageElement":"id(\"right_area\")/div[1]/following-sibling::*[following::hr[last()-3]]",
"url":"^http://(?:s\\d\\.)?bannch\\.jp/bc/Search210\\?.*sel2=[35](?:&|$)",
"nextLink":"//a[text()=\"\u6b21\u306e3\u4ef6\"]"
},
{
"pageElement":"id(\"main\")//div[@class=\"article\"]/table[@class=\"menulist\" or @class=\"oekaki-list\"]",
"url":"^http://dic\\.nicovideo\\.jp/(?:m/[nu]|s)/(?:[aciuv]|oekaki|mml)/",
"nextLink":"id(\"main\")//div[@class=\"article\"]/div[@class=\"pager\"]/*[last()][self::a and @class=\"navi\"]"
},
{
"pageElement":"//div[@class=\"photo_sbox\"]",
"url":"^http://www\\.otakuma\\.net/index\\.php/album/(?:member/|search.)",
"nextLink":"id(\"diary_pageing\")/table/tbody/tr/td[last()]//b/following-sibling::a[1]"
},
{
"insertBefore":"id(\"discussion_buttons\")",
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" journal \")] | id(\"commentwrap commentlisting\")",
"url":"^http://slashdot\\.jp/(?:(?:~[^/]+|authors)/journal|journal\\.pl)",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" journalpage \")]//a[contains(text(), \"\u4ee5\u524d\u306e\")] | //div[contains(concat(\" \", @class, \" \"), \" storylinks \")]//a[not(starts-with(text(),substring(@title,0,10))) or contains(text(), \"\u5f8c\u306e\")]"
},
{
"pageElement":"//table[@bgcolor=\"#ffffff\"][.//b[text()=\"\u8a55\u4fa1\uff1a\"]]",
"url":"^http://rating\\d*\\.auctions\\.yahoo\\.co\\.jp/jp/show/rating\\?",
"nextLink":"//small/b/a[text()=\"\u6b21\u306e25\u4ef6\"]"
},
{
"pageElement":".//div[1]/table[1]/tbody/tr[1]/td[1]/div[1]/p[contains(@align, \"center\")]",
"url":"^http://(?:www\\.)?bible\\.or\\.jp/vers_search/vers_search\\.cgi",
"nextLink":".//a[contains(@href, \"flag_pre_next=next\")]"
},
{
"insertBefore":"//div[@class=\"related\"][last()]",
"pageElement":"//div[@class=\"documentwrapper\"]",
"url":"^http://docs\\.python\\.org/dev/[a-z]+/(?!index\\.html).+\\.html",
"nextLink":"//a[@accesskey=\"N\"]"
},
{
"pageElement":"//div[@class=\"Code\"]/div[contains(@class, \"Table01\")]",
"url":"^http://(?:www\\.)?starbucks\\.co\\.jp/search/result_store\\.php",
"nextLink":"//td[last()]/u/font[last()]/a"
},
{
"insertBefore":"id(\"block_story\")//div[contains(concat(\" \", @class, \" \"), \" photopanel \")]",
"pageElement":"id(\"block_story\")/*",
"url":"^http://japan\\.zdnet\\.com/sp/feature/ziddy/story/[\\d,]+\\.htm",
"nextLink":"id(\"block_story\")//div[contains(concat(\" \", @class, \" \"), \" photopaging \")]//a[contains(concat(\" \", @class, \" \"), \" button next \")]"
},
{
"pageElement":"//div[@align=\"center\"]/a[img]",
"url":"^http://www\\.h7\\.dion\\.ne\\.jp/~n_circus/hybrid/hi\\d+\\.html",
"nextLink":"//div[@align=\"center\"]/a[img]"
},
{
"pageElement":"id(\"punviewtopic\")/node()[contains(@class, \"blockpost\") or position()=last()]",
"url":"^https?://(?:[^/]*/)+viewtopic\\.php\\?(?:[^?#;&]*[;&])*id=[1-9]",
"nextLink":"//p[@class=\"pagelink conl\"]/strong/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"Contents\")/div[@class=\"GridSet\"]",
"url":"^http://www\\.hitachi\\.co\\.jp/Prod/comp/Secureplaza/sec_trend/",
"nextLink":"id(\"Contents\")//*[@class=\"next\"]/a"
},
{
"pageElement":"id(\"search-results\")",
"url":"^http://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/videosearch",
"nextLink":"id(\"main-pagi-next\")"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" Extends-details \")]",
"url":"^http://detail\\.chiebukuro\\.yahoo\\.co\\.jp/qa/question_detail",
"nextLink":"id(\"yschnxtb\")/a"
},
{
"pageElement":"//p[table[@class=\"msg_table\"]] | //table[@class=\"msg_table\" and not(parent::p)]",
"url":"^http://otn\\.oracle\\.co\\.jp/otn_pl/otn_tool2/search_forum_exe",
"nextLink":"//p[@align=\"right\"]/b/font[@color=\"red\"]/../following-sibling::b[1]/a"
},
{
"pageElement":"id(\"contents\")/div[@class=\"ytrvCmnMltCol\"]/div[@class=\"ytrvCmnMltCol bottom-col\"]",
"url":"^http://domestic\\.hotel\\.travel\\.yahoo\\.co\\.jp/bin/ajsearch",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"( //div[contains(concat(\" \", @class, \" \"), \" header \") or contains(concat(\" \", @class, \" \"), \" title_text \") or contains(concat(\" \", @class, \" \"), \" log_body \")] )",
"url":"^http://vimperator\\.org/trac/gitweb/\\?p=vimperator\\.git;a=log",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" page_nav \")]/a[last()]"
},
{
"pageElement":"//div[@class=\"contents_left\"]",
"url":"^http://www\\.ntticc\\.or\\.jp/Exhibition/2009/MetaverseProject/",
"nextLink":"//span[@class=\"tonext\"]/a"
},
{
"pageElement":"id(\"addon-entries\")/div[@class=\"entry\"]",
"url":"^https://addons\\.mozilla\\.jp/firefox/(?:extensions/|search\\?)",
"nextLink":"id(\"addon-entries\")/div[@class=\"footer-pagination\"]/p[@class=\"pages\"]/strong/following-sibling::a"
},
{
"pageElement":"//div[@class=\"newsbox\"]/*",
"url":"^https?://www\\.amusement-center\\.com/project/emusic/news\\.php",
"nextLink":"//a[@title=\"Next item\"]"
},
{
"pageElement":"id(\"mainbn\")/ul/li[contains(@class,\"bn\")]",
"url":"^http://event\\.media\\.yahoo\\.co\\.jp/nikkeibp/archives\\.html",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"cntFdWrp\")/div[@class=\"cntFdHead\" or @class=\"cntFdBody\"]",
"url":"^http://(?:ejje|shuwa|thesaurus|www)\\.weblio\\.jp/content_find/",
"nextLink":"id(\"cntFdWrp\")/div[@class=\"cntFdPaging\"]/a[contains(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"article_body\")",
"url":"^http://mag\\.executive\\.itmedia\\.co\\.jp/executive/articles/.",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"list\")",
"url":"^http://monster-girl\\.homelinux\\.net/(?:upload\\.cgi|index|$)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//form[@action=\"http://www.sofmap.com/product_compare/exec/\"]",
"url":"^http://www\\.sofmap\\.com/(?:product_list|search_result)/exec/",
"nextLink":"//form[@action=\"http://www.sofmap.com/product_compare/exec/\"]/preceding::a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//td[@background=\"p/bg002.gif\"]/ancestor::table[1]",
"url":"^http://(?:www\\.)?minnano-av\\.com/(?:actress|free)_list\\.php",
"nextLink":"//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"//table[@class=\"res\"]/tbody/tr[contains(@class, \"valign\")]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/bookmarks/",
"nextLink":"//td[contains(concat(\" \", @class, \" \"), \" bl \")][last() - 1]/a"
},
{
"insertBefore":"id(\"navbar\")",
"pageElement":"//*[self::div[@class=\"h\"] or self::pre[@class=\"j\"] or self::div[@class=\"f\"]]",
"url":"^http://[^.]+\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/codesearch",
"nextLink":"(id(\"navbar\")//td[@class=\"b\"]/a)[last()]"
},
{
"pageElement":"id(\"ListTableIn\")/table",
"url":"^http://www\\.tagindex\\.com/cgi-lib/(?:q[1-4])?bbs/patio\\.cgi",
"nextLink":"//div[@class=\"PageLinks\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"topicsnewslist\")/ul[@class=\"linklist16\"]/li",
"url":"^http://topics\\.jp\\.msn\\.com/(?:[^/]+/)+?articleindex\\.aspx",
"nextLink":"id(\"tpnewslinkbottom\")/ul/li[@class=\"last\" and last()]/a"
},
{
"insertBefore":"id(\"notice\")",
"pageElement":"id(\"tmplBody\")/div[@class=\"inner\"]/child::*[not(@class=\"ctrl\")]",
"url":"^http://bizmakoto\\.jp/makoto/articles/(?:09(?:0[4-9]|1)|[1-9])",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"More\")/ul",
"url":"^http://crossreview\\.jp/(?:[\\w-]+/)?friends/(?:follower|more)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//tbody[@id=\"content_body\"]/tr",
"url":"^http://(?:(?:www|gold)\\.)?darkthrone\\.com/userlist/attack\\?",
"nextLink":"//a[text()=\"Next\"]"
},
{
"insertBefore":"id(\"bodyMainArea\")/div[@class=\"relationDiary\"]/div[@class=\"pageNavigation01\"][last()]",
"pageElement":"id(\"bodyMainArea\")/div[@class=\"relationDiary\"]/div[@class=\"quoteDiaryArea01\"]|id(\"bodyMainArea\")/div[@class=\"newsList\"]/div[@class=\"contents\"]",
"url":"^http://news\\.mixi\\.jp/list_(?:quote_diar|news_categor)y\\.pl",
"nextLink":"//div[@class=\"pageNavigation01\"]/div[@class=\"pageList02\"]/ul/li/a[text()=\"\u6b21\u3092\u8868\u793a\"]"
},
{
"pageElement":"//div[@class=\"content_col\" or @id=\"main_padding\"]/table[1]",
"url":"^http://www\\.web-career\\.com/contents/(?:buyuden|engineer25)/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\u2192\"]"
},
{
"pageElement":"id(\"Imagesmain\")/table",
"url":"^http://(?:booru\\.nanochan\\.org|shimmie\\.shishnet\\.org/v2)/",
"nextLink":"id(\"main\")/p[@class=\"paginator\"]/b/following::a"
},
{
"pageElement":"//div[contains(\" c02r_in c_t02l_in \", concat(\" \", @class, \" \"))]",
"url":"^http://(?:www\\.)?moura\\.jp/ecologue/(?:atomiccafe|economy)/",
"nextLink":"//div[@class=\"f_navi_in\"]/span[1]/following-sibling::a[1]"
},
{
"pageElement":"//ul[contains(concat(\" \",@class,\" \"), \" ytrvKlgDetailAns \")]/li",
"url":"^http://chiebukuro\\.travel\\.yahoo\\.co\\.jp/detail/.+\\.html",
"nextLink":"//li[contains(concat(\" \",@class,\" \"), \" next \")]/a"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"id(\"content\")",
"url":"^http://www\\.vox\\.com/(?:reader/neighborhood|explore)/posts/",
"nextLink":"//ul[@class=\"pager-list\"]/li[@class=\"item next\"]/a"
},
{
"pageElement":"//div[@class=\"rbroundbox2\"]/div[@class=\"rbcontent\"]/node()[self::div[contains(concat(\" \", @class, \" \"), \" forum_box \")] or self::br]",
"url":"^http://projecteuler\\.net/index\\.php\\?section=forum&id=\\d+",
"nextLink":"//li[@class=\"currentpage\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//div[starts-with(@id, \"illust_c\")]",
"url":"^http://www\\.pixiv\\.net/(?:(?:personal_)?tags.+?tag=|search)",
"nextLink":"//a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"//ul[@class=\"excerptedpostblock\"]",
"url":"^https?://www\\.sociomedia\\.co\\.jp/category/uidesignpatterns",
"nextLink":"//li[@class=\"active_page\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"search-stories\")",
"url":"^http://(?:[^.]+\\.)?google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/news",
"nextLink":"id(\"end-next\")/.."
},
{
"pageElement":"id(\"headline\")/p[contains(concat(\" \", @class, \" \"), \" article \")] | id(\"headline\")/*[not(@id=\"kiji\") and preceding::*[@class=\"headline\" or @class=\"headline2\"][last()] and following::*[@class=\"hit_navi\"][last()]]",
"url":"^http://it\\.nikkei\\.co\\.jp/[^/]+/[^/]+/\\w+\\.aspx\\?n=\\w+",
"nextLink":"id(\"kiji\")/a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"threadslist\")",
"url":"^http://(?:www\\.)?akiba-online\\.com/forum/forumdisplay\\.php",
"nextLink":"//div[@class=\"pagenav\"]/descendant::a[contains(@title,\"Next Page\")]"
},
{
"pageElement":"id(\"main\")/div[contains(concat(\" \",@class,\" \"),\" block \")]",
"url":"^http://www\\.osaka-info\\.jp/jp/search/list/sightseeing\\.php",
"nextLink":"id(\"listnavigation\")/ul/li[last()]/a[text()=\"NEXT\u203a\u203a\"]"
},
{
"pageElement":"//td[@width=\"100%\"][@valign=\"top\"]/table[@class=\"tborder\"]",
"url":"^http://(?:www|forum)\\.pcdvd\\.com\\.tw/forumdisplay\\.php\\?",
"nextLink":"//div[@class=\"pagenav\"]//a[text()=\"\u4e0b\u4e00\u9801\"]"
},
{
"pageElement":"id('middleContentArea')/table",
"url":"^http://(?:www\\.)?netto-online\\.de/angebote/handzettel\\.php",
"nextLink":"//a[text()=\"\u00bb\u00bb\u00bb\"]"
},
{
"pageElement":"//td[@colspan=\"2\"]/a/img",
"url":"^http://akiba-pc\\.watch\\.impress\\.co\\.jp/hotline/.+/image/",
"nextLink":"//td[@align=\"right\"]/small/a"
},
{
"pageElement":"id(\"in-center\")//div[@class=\"content-body\"]/node()[@class=\"mod-entry-set\" or position()=last()]|id(\"mod-comments\")",
"url":"^http://blog\\.goo\\.ne\\.jp/victory-sakuragawamegu(?:$|[/?#])",
"nextLink":"id(\"mod-prev-next\")//li[@class=\"mod-pre-nex-prev\"]/a"
},
{
"pageElement":"id(\"browseList\")/li",
"url":"^http://www\\.veoh\\.com/(?:browse|search)/(?:videos|channels)",
"nextLink":"id(\"browse-videos-top-next\")"
},
{
"pageElement":"id('contentsBody')/table",
"url":"^http://ichiba\\.nicovideo\\.jp/search/(?:az|gg|mobile|ys|nd)/",
"nextLink":"//a[text()=\"\u6b21\u3078 >>\"]"
},
{
"pageElement":"id(\"content\")/div/form[@action=\"viewforum.php\"]",
"url":"^http://xoops\\.ec-cube\\.net/modules/newbb/viewforum\\.php\\?",
"nextLink":"id(\"content\")//span[@class=\"orange\"]/following-sibling::a[1]"
},
{
"pageElement":"//form[@name=\"gs\"]/following-sibling::node()[ following::div[contains(concat(\" \", @class, \" \"), \" n \")] ]",
"url":"^http://scholar\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/scholar",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" n \")]/table/tbody/tr/td[last()]/a"
},
{
"pageElement":"//div[@class=\"twoThirds gutter\"]",
"url":"^http://www\\.telegraph\\.co\\.uk/[^/]+/[^/]*picturegalleries/",
"nextLink":"id(\"tmglSite\")//div[@class=\"rightTool\"]/a[@class=\"next\"]"
},
{
"pageElement":"id(\"center\")/div[not(@class=\"paging\")]",
"url":"^http://wwwx\\.fujitv\\.co\\.jp/zoo/blog/index\\.jsp\\?cid=233",
"nextLink":"//div[@class=\"paging-next\"]/a"
},
{
"pageElement":"//p|//center",
"url":"^http://yotsuba\\.saiin\\.net/~heart-of-haa/[a-z]+[0-9]+\\.htm",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//table[@class=\"tablebg\" and //div[@class=\"postbody\"]] | //tr[td[contains(@class,\"row\")] and //node()[@class=\"postbody\"]] | //table[@class=\"forumline\"] | //table[tbody/tr/td/@class=\"nav\"] | //div[@id=\"page-body\"] | //table[@class=\"border-bleu-jos\"]",
"url":"^https?://.+?/viewtopic\\.php\\?(?:f=[1-9][0-9]*[&;])?t=[1-9]",
"nextLink":"//node()[@class=\"gensmall\" or @class=\"genmed\"]//a[contains(@href, \"viewtopic.php\") and preceding-sibling::node()[not(self::a) and number()>0]] | (//table/tbody/tr/td[@class=\"nav\"])[last()]/b[last()]/following-sibling::a[1] | //div[@class=\"pagination\"]/span/strong/following-sibling::a[1]"
},
{
"insertBefore":"//div[@class=\"footer\"]",
"pageElement":"//table[@class=\"message_list\"]",
"url":"^https?://[^.]+\\.collaboware\\.net/[^?]*\\?.*\\baction=board",
"nextLink":"//a[@class=\"arrow_next\"]"
},
{
"insertBefore":"//table//table[last()]//tr[@bgcolor = \"#eaf6ff\" or @bgcolor = \"#ffffff\"][last()]",
"pageElement":"//table//table[last()]//tr[@bgcolor = \"#eaf6ff\" or @bgcolor = \"#ffffff\"][position() < last()]",
"url":"^http://(?:www\\.)?digitalmars\\.com/webnews/newsgroups\\.php",
"nextLink":"//a[img[contains(@src, \"next_arrow.gif\")]]"
},
{
"pageElement":"id(\"content_top\")/div[@id=\"recipi_menu_chanco\" or @class=\"bob_sen2\"]",
"url":"^https://www\\.iy-net\\.jp/nsmarket/recipe/recipelist\\.do\\?",
"nextLink":"//span[@class=\"span_next\"]/parent::a"
},
{
"pageElement":"//div[@class=\"content\"]/div[@class=\"full_width_area\"]",
"url":"^http://windowsclient\\.net/downloads/folders/controlgallery/",
"nextLink":"//div[@class=\"CommonPagingArea\"]/a[contains(text(),\"Next\")]"
},
{
"insertBefore":"//a[@name=\"order\"]",
"pageElement":"//table[@width=\"600\"]/node()",
"url":"^http://(?:www\\.)?mangaoh\\.co\\.jp/php/search_product\\.php",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"sentences_list\") | //div[contains(concat(\" \", @class, \" \"), \" column_left \") and contains(concat(\" \", @class, \" \"), \" clr \")]//ul[@class=\"courses\"]",
"url":"^http://www\\.iknow\\.co\\.jp/(?:courses|sentences/search\\?)",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pagination \")]/a[@rel=\"next\"]"
},
{
"pageElement":"//div[contains(@class,\"setWrap\")]",
"url":"^http://(?:www\\.)?shouga-bu\\.com/recipe/search/result\\.php",
"nextLink":"//ul[contains(@class,\"pageNav\")]/li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"contents\")/table/tbody/tr/td[1]/table",
"url":"^http://(?:www\\.)?shomei\\.tv/signature/signature_list\\.php",
"nextLink":"id(\"contents\")/table/tbody/tr/td[1]/div[2]/a[last()-1]"
},
{
"pageElement":"//div/table",
"url":"^http://www\\.nijibox3\\.com/magical/futaba/[^/]+/viewa\\.php",
"nextLink":"//div/a[contains(text(),\"\u6b21\u3078\")]"
},
{
"insertBefore":"id(\"comments sponsors_link\")",
"pageElement":"id(\"entryBody\")",
"url":"^http://wiredvision\\.jp/(?:news|blog/[^/]+)/\\d+/\\d+\\.html",
"nextLink":"id(\"entryBody\")/ul[@class=\"entryPaging\"]/li[@class=\"forward\"]/a|id(\"entryBody\")/p/a[contains(text(), \"\u3078\u7d9a\u304f\")]"
},
{
"pageElement":"id(\"bbsSpace\")/div[@class=\"bbsGroup\"]",
"url":"^http://profile\\.ameba\\.jp/general/bbs/showCommentList\\.do",
"nextLink":"id(\"bbsSpace\")/div[@class=\"paging\"]/a[@class=\"right\"]"
},
{
"pageElement":"//table[@class=\"res\"]",
"url":"^https?://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/history/",
"nextLink":"//td[@class=\"bl\"][last()-1]/a|//div[@class=\"nn\"]/parent::a"
},
{
"pageElement":"id(\"rank-tbl\")",
"url":"^http://blogscouter\\.cyberbuzz\\.jp/list/daily_ranking\\.php",
"nextLink":"id(\"rank-box\")//a[contains(text(), \"next>>\")]"
},
{
"pageElement":"//div[@class=\"list\"]/ul/li",
"url":"^http://cu\\.yahoo\\.co\\.jp/\\?.*\\ba=page_c_member_list\\b",
"nextLink":"//div[@class=\"page_manage2\"]/ul/li[@class=\"pager\"]/a[contains(text(),\"\u6b21\")]"
},
{
"insertBefore":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]",
"pageElement":"//div[@class=\"frame\"]/div[@class=\"main\"]/table",
"url":"^http://www\\.gumonji\\.net/cgi-bin/(?:idea_list|beam)\\.cgi",
"nextLink":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"pageElement":"id(\"RES\")/div",
"url":"^http://(?:aurasoul\\.)?mb2\\.jp/_[^/]+/[0-9]+_[0-9]+\\.html",
"nextLink":"//span[@class=\"ryaku\"]/a[text()=\"\u2193\u6b21\u306e\u30da\u30fc\u30b8\u3092\u8aad\u3080\"]"
},
{
"insertBefore":"//div[@class=\"year_calendar\"]",
"pageElement":"//div[@class=\"story\" or @class=\"date\"]",
"url":"^http://mplus-fonts\\.sourceforge\\.jp/cgi-bin/blosxom\\.cgi",
"nextLink":"//div[@class=\"entries\"]//a"
},
{
"pageElement":"id(\"main\")/div[contains(@class, \"leaf_body\")]",
"url":"^http://medical\\.nikkeibp\\.co\\.jp/(?:[^/]+/)+[^/]+\\.html",
"nextLink":"//*[@class=\"arrow_next\"]/descendant::a"
},
{
"pageElement":"//div[contains(concat(' ', normalize-space(@class), ' '), ' mainCont01Box ') and child::div[contains(concat(' ', normalize-space(@class), ' '), ' mainCont01ProBox01 ')]]",
"url":"^http://(?:www\\.)?askul\\.jp/product/(?:category|search)\\?",
"nextLink":"//a[child::img[@alt=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]]"
},
{
"pageElement":"id(\"yschnpg\")/following-sibling::ul",
"url":"^http://list\\.chiebukuro\\.yahoo.co\\.jp/(?:list/|dir/list)",
"nextLink":"id(\"yschnpg\")//a[contains(@class,\"next\")]"
},
{
"pageElement":"//table[.//font[.=\"\u767a\u751f\u65e5\u6642\"]]",
"url":"^https://partner\\.afl\\.rakuten\\.co\\.jp/af/a_report\\.cgi",
"nextLink":"//a[contains(@href,\"/a_report.cgi?\")][starts-with(.,\"\u6b21\u306e\")]"
},
{
"pageElement":"//ul[@class=\"topiclist\"] | //div[@class=\"post postbg\"] | //form[fieldset/@class=\"display-options\"]",
"url":"^http://bbs\\.operachina\\.com/search\\.php\\?.*\\bkeywords=",
"nextLink":"//p[@class=\"rightside pagination\"]/a[last()]"
},
{
"insertBefore":"//div[@class=\"Pages\"]",
"pageElement":"id(\"favoriteThumbs\")",
"url":"^http://www\\.flickr\\.com/photos/[^/]+/favorites(?:[/?#]|$)",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"content_productgroup\")",
"url":"^http://www\\.urbanoutfitters\\.com/urban/catalog/.+\\.jsp.+",
"nextLink":"//li[@class=\"filtering_next\"]/a"
},
{
"pageElement":"id(\"content\")/div[@class=\"blog\"]",
"url":"^http://[^.]+\\.sblo\\.jp/(?:archives|category)/[^.]+\\.html",
"nextLink":"//div[not(preceding-sibling::div[@class=\"navi\"])][not(following-sibling::div[@class=\"navi\"]/a[text()=\">>\"])]/a[text()=\"<<\"]|//div[preceding-sibling::div[@class=\"navi\"]][@class=\"navi\"]/a[text()=\">>\"]"
},
{
"pageElement":"id(\"chartColumn\")",
"url":"^http://tv\\.so-net\\.ne\\.jp/(?:chart/[\\w/]+?\\.action|m/)",
"nextLink":"//a[descendant::img[@src=\"/tv/digital/img/btn/btn_arrow_j.gif\"]]"
},
{
"pageElement":"id(\"alpha-inner\")",
"url":"^http://www\\.the-journal\\.jp/contents/[^/]+/\\d{4}/\\d\\d/",
"nextLink":"id(\"alpha-inner\")/p[@class=\"content-nav\"]/a[1][starts-with(.,\"\u00ab\")]"
},
{
"pageElement":"//div[@align=\"right\"]//following-sibling::h3[not(@class)]|//div[@align=\"right\"]//following-sibling::p[@class=\"bbs\"]",
"url":"^http://(?:www|shigoto)\\.nikki\\.ne\\.jp/(?:\\?action=)?bbs",
"nextLink":"//div[@align=\"right\"]//font[@color=\"#cc6600\"]/parent::b/following-sibling::b[1]/a"
},
{
"pageElement":"id(\"content\")/table",
"url":"^https?://userscripts\\.org/(?:(?:forum|tag|user)s/|scripts)",
"nextLink":"id(\"content\")/div[@class=\"pagination\"]/a[contains(@rel,'next')]"
},
{
"pageElement":"id(\"posts\") | id(\"posts\")/following-sibling::div[@align=\"center\"][position() < last()]",
"url":"^http://(?:www|forum)\\.pcdvd\\.com\\.tw/showthread\\.php\\?",
"nextLink":"//div[@class=\"pagenav\"]//a[text()=\"\u4e0b\u4e00\u9801\"]"
},
{
"pageElement":"id(\"articlebody m_body\")",
"url":"^http://www\\.nikkeibp\\.co\\.jp/article/column/[^/]+/[^/]+/",
"nextLink":"id(\"pages\")//a[@class=\"next\" or contains(text(), \"\u6b21\")]"
},
{
"insertBefore":"//span/strong/a[contains(\" Continued... \u7d9a\u304f... \",concat(\" \",normalize-space(text()),\" \"))]",
"pageElement":"//div[@id=\"resizeableText\"]",
"url":"^http://(?:(?:president\\.)?jp|www)\\.reuters\\.com/article/",
"nextLink":"concat(substring-after(//a[contains(\" Print \u8a18\u4e8b\u3092\u5370\u5237\u3059\u308b \",concat(\" \",normalize-space(text()),\" \"))]/@href,\"articlePrint?\"),\"?pageNumber=\",//div[@class=\"pageNavigation\"]/strong+1)"
},
{
"pageElement":"id(\"postlist\")",
"url":"^http://favlook\\.osa-p\\.net/(?:best|hot|index|new)\\.html",
"nextLink":"id(\"next\")"
},
{
"insertBefore":"id(\"btmbox5\")",
"pageElement":"id(\"ppbox\")",
"url":"^http://www\\.style\\.com/peopleparties/search/thumb/person",
"nextLink":"(//a[@class=\"paginator\"])[last()]"
},
{
"pageElement":"//div[@class=\"widget-wapper arrival1 ttl2Orange\"]//div[@class=\"widget-cont-inner\"]/table",
"url":"^http://\\w+\\.blogmura\\.com/tb_entry\\d+(?:_\\d+)?\\.html",
"nextLink":"//div[@class=\"page-tab\"]/ul/li[last()]/a"
},
{
"insertBefore":"id(\"footerArea\")",
"pageElement":"id(\"oldContents\")/table",
"url":"^http://(?:video\\.)?mixi\\.jp/search_(?:review|video)\\.pl",
"nextLink":"//a[text()=\"\u6b21\u3092\u8868\u793a\"]"
},
{
"insertBefore":"//div[@class=\"pagedListing\"]",
"pageElement":"id(\"blocks\")",
"url":"^http://widgets\\.opera\\.com/(?:new|search|popular|rated)/",
"nextLink":"//div[@class=\"pagedListing\"]/ol/li[last()]/a"
},
{
"pageElement":"id(\"image-block tag-block\")",
"url":"^http://natalie\\.mu/(?:[^/]+/)*?(?:gallery/ho|hottag/lis)t",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"listing\"]/div[not(@class=\"pagination\")]",
"url":"^http://(?:www\\.)?apolon\\.jp/(?:pro(?:file|ject)s|offers)",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"logs\")",
"url":"^http://www2\\.jrt\\.co\\.jp/cgi-bin3/ikuniweb/tomozo\\.cgi",
"nextLink":"id(\"navi\")/ul/li[last()]/a"
},
{
"insertBefore":"//div[@class=\"l_b_bott\"]",
"pageElement":"//div[@class=\"l_b_cen\"]",
"url":"^https?://cgi2\\.nhk\\.or\\.jp/gatten/archive/program\\.cgi",
"nextLink":"//div[@class=\"up_page\"]/div[./img[@class=\"l\"]]/div[@class=\"tab01\"]/a"
},
{
"insertBefore":"id(\"notice\")",
"pageElement":"//div[@class=\"outBody\"]/div[@class=\"inBody\"]/div/div[@class=\"maincol\"]/div[@class=\"newart\"]/div[@class=\"newart\"]",
"url":"^http://bizmakoto\\.jp/makoto/articles/rn0(?:[0-8]|90[1-3])",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"contentpanel\")/table",
"url":"^http://maps\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/maps\\?",
"nextLink":"//a[descendant::div[@id=\"nn\"]]"
},
{
"pageElement":"//div[@class=\"SearchResult\"]",
"url":"^http://blogsearch\\.livedoor\\.com/search/(?:article|blog)",
"nextLink":"//span[@class=\"pageNext\"]/a"
},
{
"pageElement":"//div[contains(@class,\"item\")]",
"url":"^http://www\\.toysrus\\.co\\.jp/product/product_list\\.aspx",
"nextLink":"//div[contains(@class,\"listbar\")][1]//table//td[1]//td/a[preceding::b][1]"
},
{
"pageElement":"//*[self::p or self::center or self::hr]",
"url":"^http://www\\.geocities\\.jp/asumithi/(?:[^/]+/)?\\w+\\.htm",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"main\")/div[contains(concat(\" \", @class, \" \"), \" wrpreview \")]",
"url":"^http://restaurant\\.gourmet\\.yahoo\\.co\\.jp/\\d+/review/",
"nextLink":"id(\"main\")//div[contains(concat(\" \", @class, \" \"), \" list-tab \")]//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"mainColumn\")//div[@class=\"contentBox\"]",
"url":"^http://news\\.livedoor\\.com/(?:article|category)/images?/",
"nextLink":"id(\"mainColumn\")//li[@class=\"next\"]/a"
},
{
"insertBefore":"//td[@class=\"maintext\"]/p[1]/following-sibling::node()",
"pageElement":"//td[@class=\"maintext\"]/p[1]",
"url":"^http://(?:[^.]+\\.)?hardwarezone\\.com/articles/view\\.php",
"nextLink":"//td[@class=\"maintext\"]//a[@class=\"page\" and contains(text(),\">>\")]"
},
{
"pageElement":"id(\"main_il_cnt list_box theme_bbs_main\")/*",
"url":"^http://seiga\\.nicovideo\\.jp/(?:bbs|illust|search|theme)/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"//h1/following-sibling::table/following-sibling::node()",
"pageElement":"//h1/following-sibling::table",
"url":"^http://www\\.vim\\.org/scripts/script_search_results\\.php",
"nextLink":"//a[text()=\"next\"]"
},
{
"pageElement":"//td[@class=\"fo12_33\"]/../../.. | //table[@class=\"fo10x12_33\"] | //table[@class=\"fo10_gr\"] | //br[@class=\"fo12\"]/following-sibling::node()[following::a[text()=\"\u2190 b_a_c_k \" or text()=\"n_e_x_t \u2192\"]] | //div[@id='linkalert-box']/following-sibling::table",
"url":"^http://(?:www\\.)?japandesign\\.ne\\.jp/HTM/(?:REPORT|NY)/",
"nextLink":"//a[text()=\"N E X T\" or text()=\"n_e_x_t \u2192\"] | //font[text()=\"N E X T\"]/.."
},
{
"pageElement":"id(\"categoly\")/form",
"url":"^http://www\\.nitori-net\\.jp/shop/category/category\\.aspx",
"nextLink":"id(\"categoly\")/div[@class=\"transitionArea01\"]/p[@class=\"navi\"]/a[contains(text(),\"\u6b21\")]"
},
{
"insertBefore":"id(\"resultsBody\")/table[last()]",
"pageElement":"id(\"resultsBody\")/div[@class=\"hit\"][./table[not(@id) and ./preceding-sibling::*]]",
"url":"^http://(?:w(?:ww|oman)\\.)?excite\\.co\\.jp/search\\.gw\\?",
"nextLink":"id(\"resultsBody\")/table[last()]//a[contains(., \">>\")]"
},
{
"pageElement":"id('shouhinlist')//table[contains(@class,'item')]",
"url":"^http://shop\\.kitamura\\.jp/disp/CSfDispListPage_001\\.jsp",
"nextLink":"id('shouhinlist')//a[text()='\u6b21\u3078']rn"
},
{
"pageElement":"id(\"content\")/div/table[@class=\"outer\"]",
"url":"^http://xoops\\.ec-cube\\.net/modules/newbb/viewtopic\\.php",
"nextLink":"id(\"content\")//tr[@class=\"foot\"]//a[last()][u[contains(text(),\"\u6b21\u3078\u2192\")]]"
},
{
"pageElement":"id(\"hatena-archive\")/div[@class=\"day\"]/div",
"url":"^https?://(?:d|[^.]+\\.g)\\.hatena\\.ne\\.jp/[^/]+/archive",
"nextLink":"id(\"hatena-archive\")/div[@class=\"calendar\"]/a[contains(text(), \"\u53e4\u3044\")]"
},
{
"pageElement":"id(\"base_center_container_2\")/form[@name=\"cart_whole\"]",
"url":"^http://www\\.7netshopping\\.jp/.+/(?:rank|search_result)/",
"nextLink":"id(\"base_center_container_2\")//li[position()=last() and @class=\"next\"]/a"
},
{
"insertBefore":"id(\"ygrp-msg-ext\")/div/table[@class=\"datatable\"]/following-sibling::node()",
"pageElement":"id(\"ygrp-msg-ext\")/div/table[@class=\"datatable\"]",
"url":"^http://[^.]+\\.groups\\.yahoo\\.com/group/[^/]+/messages/",
"nextLink":"//td[@class=\"viewright\"]/a[contains(text(), \">\")]"
},
{
"pageElement":"//center[position() > 3 and position() < last()-2]",
"url":"^http://www[^.]*\\.oekakibbs\\.com/bbs/[^/]+/oekakibbs.cgi",
"nextLink":"//center[4]//td[last()]/a[last()]"
},
{
"pageElement":"//div[@class=\"bbs-box\"]",
"url":"^http://mypage\\.toei-anim\\.co\\.jp/tv/fresh_precure/bbs/",
"nextLink":"//div[@class=\"nextpage\"]/a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"posts\")",
"url":"^http://forums\\.animesuki\\.com/showthread\\.php\\?t=\\d+",
"nextLink":"//a[starts-with(@title, \"Next Page\")]"
},
{
"pageElement":"//div[@class=\"novel\"]",
"url":"^http://(?:www\\.)?syosetu\\.net/pc/.*(?:main|novel)\\.php",
"nextLink":"//img[contains(@src,\"next.gif\")][last()]/parent::a"
},
{
"pageElement":"//table[@class=\"questionlisttable\"]",
"url":"^http://q\\.hatena\\.ne\\.jp/[^/]+/(?:question|answer)list",
"nextLink":"//div[@class=\"pager\"]/strong/following-sibling::a"
},
{
"insertBefore":"//div[contains(@class, \"gallery\")]/ul[contains(@class, \"menu\")]",
"pageElement":"//div[contains(@class, \"galleryContent\")]",
"url":"^http://wiredvision\\.jp/(?:gallery|news)/\\d+/\\d+\\.html",
"nextLink":"//div[contains(@class, \"galleryContent\")]//ul[contains(@class, \"navigation\")]/li/a"
},
{
"pageElement":"id(\"maincol commentsandtrackbacks\")/*",
"url":"^http://(?:www\\.)?publickey1?\\.jp/[^/]+/\\d+/\\w+\\.html",
"nextLink":"id(\"maincol\")/div[last()]/em[contains(.,\"\u226a\")]/following-sibling::a"
},
{
"pageElement":"id(\"contents\")/div[@class=\"entry\"] ",
"url":"^http://www\\.skyarc\\.co\\.jp/engineerblog/skyarc_plugin/",
"nextLink":"//div[@class=\"pagenate\"]/ul/li[last()]/a "
},
{
"pageElement":"id(\"punviewtopic\")/div[contains(concat(\" \", @class, \" \"), \" blockpost \")]",
"url":"^http://forum\\.ubuntulinux\\.jp/viewtopic\\.php\\?id=\\d+",
"nextLink":"id(\"punviewtopic\")//p[contains(concat(\" \", @class, \" \"), \" pagelink \")]/strong/following-sibling::a[1]"
},
{
"insertBefore":"//div[@id=\"ctl00_cphBody_divPaging\"]",
"pageElement":"//div[@class=\"HomepageBody\"]",
"url":"^http://www\\.shufuni\\.com/(?!SearchResult\\.asp|videos/)",
"nextLink":"id(\"ctl00_cphBody_divPaging\")/a[last()]"
},
{
"pageElement":"id('main')",
"url":"^http://[^.]+\\.asablo\\.jp/blog/\\d{4}/\\d{2}/\\d{2}/\\d+",
"nextLink":"id(\"navi-top\")/a[1]"
},
{
"pageElement":"//div[@class=\"articles\"]",
"url":"^http://gamez\\.itmedia\\.co\\.jp/games/articles/.+\\.html",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"contents_main\")/div[@class = \"list\"]",
"url":"^http://www\\.otakuma\\.net/index\\.php/community/search/.",
"nextLink":"id(\"contents_main\")/p[(last())]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"orders_shipped\")/tbody/tr/td/table",
"url":"^https://www\\.amazon\\.co\\.jp/gp/css/history/view\\.html",
"nextLink":"//font[contains(text(),\"\u305d\u306e\u4ed6\u306e\u6ce8\u6587\")]/../child::font[last()]/following-sibling::a[1]"
},
{
"pageElement":"id(\"article_body\")",
"url":"^http://www\\.washingtonpost\\.com/wp-dyn/content/article/",
"nextLink":"id(\"pagination_bottom\")//a[text()=\"Next\"]"
},
{
"pageElement":"//dl",
"url":"^http://nanabatu\\.web\\.fc2\\.com/.+?/\\d{10}_\\d+\\.html",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"content02\")/form[@name=\"frm0\"]/table[2]",
"url":"^http://(?:www\\.)?sunhayato\\.co\\.jp/products/list\\.php",
"nextLink":"id(\"content02\")//a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":".//div[@class=\"scontentarea\"]",
"url":"^http://books\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/books",
"nextLink":"id(\"navbar\")//td[child::span[@class=\"i\"]]/following-sibling::td[1]/a[1]"
},
{
"pageElement":"//div[@class=\"cat\"]",
"url":"^http://(?:www\\.)?fallout3nexus\\.com/downloads/cat\\.php",
"nextLink":"//div[@class=\"cat_top\"]/a[last()]"
},
{
"pageElement":"id(\"Main\")/table[@class]",
"url":"^http://www\\.flickr\\.com/explore/interesting(?:/\\d+){3}",
"nextLink":"id(\"Main\")//a[@class=\"Next\"]"
},
{
"pageElement":"//tr[not(@class=\"ch\") and starts-with(@id, \"taw\")]",
"url":"^http://www\\.technobahn\\.com/(?:apps|cgi-bin)/fn/plot\\?",
"nextLink":"//img[contains(@src, \"nav_next.png\") or contains(@src, \"nav_next_small.gif\")]/.."
},
{
"pageElement":"id(\"main\")/dl[contains(@class,\"search-result\")]",
"url":"^http://gourmet\\.yahoo\\.co\\.jp/restaurant/shoplist/\\w+",
"nextLink":"//span[contains(@class,\"listNext\")]/a"
},
{
"pageElement":"//div[contains(@class, \"search_box01 \")]",
"url":"^https?://job\\.rikunabi\\.com/2011/search/company/result/",
"nextLink":"//div[contains(@class, \"search_page_top\")]//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//div[contains(concat(\" \",normalize-space(@class),\" \"), \" title \")] | //dl[contains(concat(\" \",normalize-space(@class),\" \"), \" doodles \")]",
"url":"^http://www\\.google\\.[^./]{2,3}(?:\\.[^./]{2,3})?/logos/",
"nextLink":"//a[contains(text(), \"\u00ab\")]"
},
{
"pageElement":"//div[@class=\"pages\"]/parent::td/parent::tr",
"url":"^http://(?:[^./]+\\.)?imdb\\.com/(?:[^/]+/)+board/[^/]+/.",
"nextLink":"//div[@class=\"pages\"]/span[@class=\"current\"]/following-sibling::span[1]/a"
},
{
"insertBefore":"id(\"googlead\")",
"pageElement":"id(\"album_list\")",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/album_list\\.cgi",
"nextLink":"//div[@class=\"pager_next\"]/a"
},
{
"pageElement":"id(\"ae-datastore-explorer-entities\")",
"url":"^https?://appengine\\.google\\.com/datastore/explorer\\?.",
"nextLink":"id(\"ae-datastore-explorer\")//a[@class=\"ae-paginate-next\"]"
},
{
"pageElement":"id(\"article_body\")/*[not(@class=\"ctrl\") and not(@class=\"endkwd\") and not(@id=\"notice\") and not(descendant::*[@id=\"red\" and @class=\"box\"])] | //div[@class=\"newart\"]/h5/following-sibling::*[not(@class=\"ctrl\") and not(@class=\"endkwd\") and not(@id=\"notice\") and following::p[@id=\"byline\"]]",
"url":"^http://(?:www|plusd)\\.itmedia\\.co\\.jp/[^/]+/articles/",
"nextLink":"id(\"next\")/a|//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"recipe-list-wrap\")/table",
"url":"^http://recipe\\.gourmet\\.yahoo\\.co\\.jp/list\\.html\\?",
"nextLink":"id(\"recipe-list-wrap\")/div[4]/p[5]/span[@class=\"listNextcl\" or @class=\"listNext cl\"]/a"
},
{
"pageElement":"//body/table[1]",
"url":"^http://www\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/movies",
"nextLink":"//td[@class=\"b\"]/a"
},
{
"pageElement":"//table[@class=\"ok_list\"]",
"url":"^http://(?:[^.]+\\.)?okwave\\.jp/(?:\\d+/)*c[^.]+\\.html$",
"nextLink":"//div[@class=\"ok_paging\"]//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"//div[@class=\"text\"]",
"url":"^http://www\\.nikkeibp\\.co\\.jp/article/(?:nba|skillup)/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//center/table//center/table",
"url":"^http://(?:www\\.)?mr-lee-catcam\\.de/pe_catcam\\d+\\.htm",
"nextLink":"//a[text()=\"Continue to next trip\"]"
},
{
"pageElement":"//table[@class=\"forumline\"]",
"url":"^http://torrent-jp\\.info/forum/view(?:forum|topic)\\.php",
"nextLink":"//span[@class=\"nav\"]/a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"main\")/table//table//table//tr",
"url":"^http://v\\.search\\.goo\\.ne\\.jp/convenience/shop\\.cgi",
"nextLink":"//span[@class=\"cur\"]/following-sibling::span[@class=\"fb\"]/a"
},
{
"pageElement":"//div[starts-with(@id,\"list_box\")]",
"url":"^http://www\\.sengoku\\.co\\.jp/mod/sgk_cart/search\\.php",
"nextLink":"id(\"list_txt02\")//a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"main\")/div[@class=\"unitResultList\"]",
"url":"^http://www\\.mikke\\.go\\.jp/p(?:ost|hotoGallery)/search",
"nextLink":"id(\"main\")/div[@class=\"navPager\"]/ul/li[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"m_link\")",
"pageElement":"id(\"m_body\")",
"url":"^http://www\\.nikkeibp\\.co\\.jp/style/biz/column/tahara/",
"nextLink":"id(\"pages\")//a[last()]"
},
{
"pageElement":"//center/table",
"url":"^http://[^.]+\\.oekakibbs\\.com/bbs/[^/]+/oekakibbs\\.cgi",
"nextLink":"//font[contains(text(),\"\u6b21\")]/.."
},
{
"pageElement":"//div[@class=\"snap_shots\"]",
"url":"^http://www\\.tomshardware\\.com/reviews/(?:\\d+\\.html)?",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"insertBefore":"//table/tbody/tr/td/table/tbody/tr[not(following-sibling::tr)]",
"pageElement":"//table/tbody/tr/td/table/tbody/tr",
"url":"^http://(?:www\\.)?showyourdick\\.org/cocks_archive\\.php",
"nextLink":"//table/tbody/tr/td/table/tbody/tr/td/h2/a"
},
{
"pageElement":"id(\"column-main\")/ul",
"url":"^http://r\\.tabelog\\.com/.+/(?:rst_?)?lst/(?!#searchbox)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"pages\")",
"pageElement":"id(\"pages\")/preceding-sibling::*",
"url":"^http://www\\.nikkeibp\\.co\\.jp/(?:style/(?:biz|eco)|lc)",
"nextLink":"id(\"pages\")/a[last()]"
},
{
"pageElement":"//div[contains(@class, \"thumbnailBorder\")]",
"url":"^http://(?:www\\.)?dirtydirtydancing\\.com/default\\.aspx",
"nextLink":"//span[@class=\"ArchiveLinks\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"CtgObj\")/node()[not(self::input or self::hr)]",
"url":"^https?://(?:www\\.)?biccamera\\.com/bicbic/(?:ap|js)p/w/",
"nextLink":"//img[@alt=\"\u6b21\u30da\u30fc\u30b8\"]/parent::a"
},
{
"pageElement":"id(\"categoryLR\")/p[@class=\"cate_text2\"]/following-sibling::div[1]",
"url":"^https?://(?:www\\.)?marutsu\\.co\\.jp/user/ichiran\\.php",
"nextLink":"id(\"nextpage\")/a[position()=1 and following-sibling::br]"
},
{
"pageElement":"id(\"main\")/div/div[@class=\"result\"]/div[@class=\"itemrow\"]",
"url":"^http://(?:www\\.)?monoclip\\.jp/[^/]+/(?:mono|user)list/",
"nextLink":"//a[@title=\"next page\"]"
},
{
"pageElement":"id(\"contents\")/div[@id=\"pager\"]/preceding-sibling::*[not(@class=\"topbanner\" or @class=\"colum_banner\")]",
"url":"^http://events\\.nikkeibp\\.co\\.jp/skillup/column/[^/]+/",
"nextLink":"id(\"pager\")//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"mp-ie\")/preceding-sibling::*[not(@class=\"frame2\")]",
"url":"^http://(?:jbpress|gendai|wedge)\\.ismedia\\.jp/articles/",
"nextLink":"id(\"multipage\")/div[@class=\"next_p\"]//a[last()]"
},
{
"pageElement":"//td[@width=600]/*[preceding-sibling::table[tbody/tr/td[@background=\"img/search/line_title.gif\"]] and following-sibling::table[tbody/tr/td[@background=\"img/search/line_title.gif\"]]]",
"url":"^http://search\\.discas\\.net/netdvd/search.{0,4}Dvd\\.do",
"nextLink":"//table[@width=570]/descendant::td[@class=\"tx04\"]/descendant::a[starts-with(text(),\"\u6b21\u3078\")]"
},
{
"insertBefore":"id(\"banner2\")",
"pageElement":"id(\"content\")/div[@class=\"each_result\"]",
"url":"^http://search\\.www\\.infoseek\\.co\\.jp/(?:Blog|Web)\\?",
"nextLink":"id(\"pagenavi\")/span[@class=\"pn\"]/following-sibling::*[1][self::a]"
},
{
"insertBefore":"(//div[@class=\"clearFix pagingNavi2\"])[last()]",
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://blogs\\.yahoo\\.co\\.jp/[^/]+/MYBLOG/yblog\\.html",
"nextLink":"((//p[@class=\"forwardNext\"]/a))[2]"
},
{
"pageElement":"id(\"sr-ul\")",
"url":"^http://video\\.search\\.yahoo\\.co\\.jp/search/video\\?",
"nextLink":"id(\"yschnxtb\")/a"
},
{
"pageElement":"//ul[@class=\"title\"]/following-sibling::*[following::div[@class=\"pagenum\"]]",
"url":"^http://weiqi\\.sports\\.tom\\.com/php/listqipu.*\\.html",
"nextLink":"//div[@class=\"pagenum\"]/a[contains(text(),\"\u4e0b\")]"
},
{
"insertBefore":"id(\"jobListButton\")",
"pageElement":"id(\"pageset\")/form/div[@class=\"jobListList\"]",
"url":"^https://haken\\.en-japan\\.com/jobsearch/job_list\\.cfm",
"nextLink":"id(\"pageset\")/div[contains(@class,\"jobListLink\")][last()]/a[contains(@class,\"next\")]"
},
{
"pageElement":"id(\"main\")/div[@class=\"inner\"]",
"url":"^http://(?:www\\.)?gamemeter\\.net/(?:s|u/\\d+/gamelist)",
"nextLink":"id(\"main\")/div[@class=\"inner\"]/center/a[contains(text(),\"\u2192next\")]"
},
{
"pageElement":"id(\"block_story\")/*[not(self::h3 and position()=last())]",
"url":"^http://japan\\.zdnet\\.com/[\\w/-]+/story/[\\d,]+\\.htm",
"nextLink":"id(\"script_pagination_next\")"
},
{
"pageElement":"id(\"main\")//div[@class=\"ymuiDotLine\"]",
"url":"^http://headlines\\.yahoo\\.co\\.jp/hl\\?a=.+\\.view-000",
"nextLink":"id(\"subNav\")/ul[@class=\"subNavPaging\"]/li[@class=\"last\"]/a"
},
{
"insertBefore":"//table[@width=\"100%\"]/following-sibling::*[1][self::p][@class=\"maT6B6\"]",
"pageElement":"//table[@class=\"maT10\"]/tr/td[@class=\"alignT\"]",
"url":"^http://select-baito\\.weban\\.jp/webapp/sel/list\\.aspx",
"nextLink":"//span[@id=\"pager2\"]/span[@class=\"txt12_orange\"]/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"c2\")/div[@class=\"entry\" or @class=\"spacer20\"]",
"url":"^http://space\\.geocities\\.yahoo\\.co\\.jp/gl/alice0775",
"nextLink":"id(\"glnavi\")/a[contains(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"commit\")/div",
"url":"^https?://github\\.com/(?:changelog|[^/]+/[^/]+/commits)",
"nextLink":"//a[@hotkey=\"l\"]"
},
{
"pageElement":"//div[@class=\"essay\"]/h3 | //div[@class=\"message\"]",
"url":"^http://(?:www\\.)?theit\\.jp/(?:essay|talk)/column/\\d+",
"nextLink":"//div[@class=\"essay\"]/div[@class=\"pieces\"]/dl/*[2][not(a)]/../../following-sibling::div/dl/*[2]/a[1]"
},
{
"pageElement":"//div[@class=\"article\"]/div[@class=\"recent-images\" or @class=\"archive-info\"]",
"url":"^http://earthobservatory\\.nasa\\.gov/IOTD/archive\\.php",
"nextLink":"//div[@class=\"article\"]/div[@class=\"archive-info\"]//li[1]/a"
},
{
"pageElement":"//div[@id=\"searchResultsPageView\"]/div[@class=\"milClearfix\"]/div[@class=\"milColumn1\"]",
"url":"^https://jp\\.match\\.com/search/searchsubmit\\.aspx\\?.",
"nextLink":"//a[@id=\"hypNext\""
},
{
"insertBefore":"id(\"googlead\")",
"pageElement":"//div[@class=\"frame\"]/div[@class=\"main\"]",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/beam_list\\.cgi",
"nextLink":"//div[@class=\"pager_next\"]/a"
},
{
"pageElement":"id(\"content\")/table[2]//table[(position()>2) and (position()<last()-2)]",
"url":"^http://direct\\.ips\\.co\\.jp/directsys/search\\.cfm\\?",
"nextLink":"id(\"content\")//a[contains(text(),\"\u6b21\u306e\u7d50\u679c\")]"
},
{
"pageElement":"//table[@class=\"n\" or .//td/a[@onmousedown]]",
"url":"^http://(?:www\\.)?baidu\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/s",
"nextLink":"//a[@class=\"nx\"] | //div[@class=\"p\"]/a[last()]"
},
{
"pageElement":"id(\"main\")/table",
"url":"^http://(?:www\\.)?morimorisozai\\.net/photo/photo\\.php",
"nextLink":"id(\"main\")/p/b/following-sibling::a"
},
{
"pageElement":"id(\"content-in\")/div[contains(concat(\" \", @class, \" \"), \" container \")]",
"url":"^http://miterew\\.sparrow\\.tv/(?:ranking|kiterew)\\.php",
"nextLink":"id(\"content-in\")/div[contains(concat(\" \", @class, \" \"), \" pagination \")]//a[contains(text(), \"\u9032\u3080\")]"
},
{
"pageElement":"id(\"seihin_wrap\")",
"url":"^https?://(?:www\\.)?marutsu\\.co\\.jp/user/seihin\\.php",
"nextLink":"//a[img[@src=\"seihin_img/seihin_next.gif\"]]"
},
{
"pageElement":"id(\"photos\")",
"url":"^http://rephoto\\.jpn\\.org/(?:$|photo|recent|color|r18)",
"nextLink":"//a[@class=\"pager\" and contains(@title,\"Next\")]"
},
{
"pageElement":"id(\"update\")/following-sibling::node()[not(self::div[@class=\"ctrl\"])][not(self::div[@id=\"notice\"])][following::div[@class=\"ctrl\"]]",
"url":"^http://www\\.itmedia\\.co\\.jp/[^/]+/articles/.+\\.html",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"//div/table[1]",
"url":"^http://(?:www\\.)?net-sprout\\.com/bandstory/.+?\\.html",
"nextLink":"//a[child::img[contains(@src, \"next.gif\") or contains(@src, \"next3.gif\")] or text()=\"\u6b21\u306e\u30a8\u30d4\u30bd\u30fc\u30c9\u3078\"]"
},
{
"pageElement":"id(\"sub-ranking\")/table/tbody/tr[position()>1]",
"url":"^http://puyo\\.sega\\.jp/cgi-bin/puyopuyo7/ranking\\.cgi",
"nextLink":"id(\"sub-ranking\")/ul/li[@class=\"list-next\"]/a"
},
{
"pageElement":"id(\"main\")/div[@id=\"layout0\"]",
"url":"^http://ekizo\\.mandarake\\.co\\.jp/shop/ja/search.do\\?",
"nextLink":"id(\"list\")//a[normalize-space()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"blog\")/div | id(\"content\")/div[@class=\"blog\"] | id(\"main\")/div[@class=\"column-inner\"]/div[@class=\"column-inner-2\"]",
"url":"^http://(?:blog\\.livedoor\\.jp|[^.]+\\.livedoor\\.biz)/",
"nextLink":"//div[@class=\"menu\"]/a[contains(text(),\"\u524d\u306e\u8a18\u4e8b\") or contains(text(),\"<<\")] | //a[contains(descendant::text(),\"\u6b21\u306e\u30da\u30fc\u30b8\")] | //li[@class=\"prev\"]/a"
},
{
"pageElement":"//*[preceding-sibling::a[@id=\"main\"]][following-sibling::table[@class=\"graph-date\"]]",
"url":"^http://www\\.yomiuri\\.co\\.jp/photonews/photo\\.htm\\?",
"nextLink":"//td[@class=\"r\"]/a"
},
{
"pageElement":"//table[@class=\"result\"]/tbody/tr",
"url":"^http://www2\\.kget\\.jp/releaseresult/index\\.aspx\\?d=",
"nextLink":"(//ul[contains(concat(\" \",@class,\" \"),\" fll \")][last()]/li[last()]/a[last()])[1]"
},
{
"insertBefore":"//div[@class=\"paging\"]",
"pageElement":"//div[@class=\"search_related\" or @class=\"blog_related\"]",
"url":"^http://blog\\.search\\.goo\\.ne\\.jp/search_goo/result/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\u2192\"]"
},
{
"pageElement":"//div[@class=\"tepore_main\"]/table[@class=\"table_height\"]//table[@bgcolor=\"#fa8610\" and @width=\"550\"]",
"url":"^http://(?:www\\.)?tepore\\.com/cooking/mitsukete/list/.",
"nextLink":"//table[@class=\"page_navi_table\"]//a[last()]"
},
{
"pageElement":"id(\"itemList\")",
"url":"^http://search\\.rakuten\\.com\\.tw/s/(?:search|paging).",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//table[contains(\" article-table artist-table item-table \", concat(\" \", @class, \" \"))]",
"url":"^http://natalie\\.mu/(?:[^/]+/)*?(?:artist|news|pp|work)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"//p[@class=\"pagination\"][2]",
"pageElement":"id(\"default_right_area\")",
"url":"^http://www\\.futabasha\\.co\\.jp/booksdb/book/listview/",
"nextLink":"//p[@class=\"pagination\"][2]/a[starts-with(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"//table[@class=\"MSP9\"][1]",
"url":"^http://(?:www\\.)?whss\\.biz/~culdds/database\\.cgi\\?",
"nextLink":"//a[text()=\"NEXT\"][1]"
},
{
"pageElement":"id('MainContainerFull')",
"url":"^http://gallery\\.live\\.com/results\\.aspx\\?bt=1&pl=1",
"nextLink":"id(\"ctl00_ContentPlaceHolder1_PageNext2\")"
},
{
"pageElement":"id(\"content\")/table[contains(@class,\"gadget\")]",
"url":"^http://desktop\\.google\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/",
"nextLink":"id(\"content\")/table[@class=\"header\"]/tbody/tr/td/a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"//table",
"url":"^http://www\\.geocities\\.jp/santaigreen/08hase-itiran/",
"nextLink":"//table//tbody//td[last()]//a"
},
{
"pageElement":"id(\"articlecontent\")/p",
"url":"^http://realsimple\\.nikkeibp\\.co\\.jp/article/columns",
"nextLink":"id(\"articlecontent\")/div/table//tr/td[last()]/a[@class=\"noborder\"]"
},
{
"insertBefore":"id(\"ask_your_comment\")",
"pageElement":"id(\"m_body\")",
"url":"^http://www\\.nikkeibp\\.co\\.jp/style/biz/[^/]+/[^/]+/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"pagination\")/ul",
"url":"^https?://(?:api\\.)?twitter\\.com/(?:[^/]+/)?following",
"nextLink":"//a[@rel=\"me next\"]"
},
{
"pageElement":"id(\"posts\")/div",
"url":"^http://ubuntuforums\\.org/showthread\\.php\\?[tp]=\\d+",
"nextLink":"//div[@class=\"pagenav\"]//a[text()=\">\"]"
},
{
"pageElement":"id(\"bks\")//tr[@bgcolor]/following-sibling::*[following-sibling::tr/td[@colspan]/table or position()=last() and /html/head/script]",
"url":"^http://www\\.bk1\\.jp/(?:books/s|keywordS)earchResult/",
"nextLink":"id(\"bks\")//a[text()=\"\u6b21\u3078\u2192\"]"
},
{
"pageElement":"id(\"searchResults\")/ul",
"url":"^https://developer\\.mozilla\\.org/[^?]+\\?.*\\bsearch=",
"nextLink":"id(\"pagePagination\")/a[last()]"
},
{
"pageElement":"//div[contains(@class, \"main-item\")] | //div[contains(@class, \"main-content\")]/div[contains(@class, \"post\")]",
"url":"^http://www\\.warsow\\.net/forum/view(?:forum|topic)\\.",
"nextLink":"//div[contains(@id, \"brd-pagepost-end\")]/p[contains(@class, \"paging\")]/a[last()]"
},
{
"pageElement":"id(\"article\")/br[@class=\"clearfix\"][1]/preceding-sibling::*",
"url":"^http://www\\.scientificamerican\\.com/article\\.cfm\\?",
"nextLink":"id(\"article\")/span[@class=\"pagination\"]/*[last()][self::a]"
},
{
"pageElement":"id(\"content_inner\")/div[@class=\"nimage section\"]/ul",
"url":"^http://image\\.search\\.naver\\.com/search\\.naver\\?.",
"nextLink":"id(\"content_inner\")/div[@class=\"paging page_w100\"]/a[@class=\"next\"]"
},
{
"pageElement":"id(\"contents_main\")/table",
"url":"^http://www\\.otakuma\\.net/index\\.php/event/eventlist",
"nextLink":"id(\"contents_main\")/p[(last())]/b/following-sibling::a[1]"
},
{
"insertBefore":"id(\"box2\")/table[last()]/following-sibling::node()",
"pageElement":"id(\"box2\")/*[@class=\"comment_list\"]",
"url":"^http://www\\.otakuma\\.net/index\\.php/community/topic",
"nextLink":"id(\"box2\")/div[@class=\"topic_pager\"][last()]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"viewer\")",
"url":"^http://(?:[^.]+\\.)*mangafox\\.com/manga/(?:[^/]+/){2}",
"nextLink":"id(\"viewer\")/a[img]"
},
{
"insertBefore":"id(\"googlead\")",
"pageElement":"id(\"list\")",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/bbs_list\\.cgi",
"nextLink":"id(\"main\")/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"pageElement":"id(\"cart_list_add\")/h2[1]/following-sibling::*",
"url":"^http://www\\.yoteihyo\\.com/shop/[a-z]+/date/.+\\.html",
"nextLink":"//div[@class=\"rinkcascade\"]/a/img[@src=\"/img/next.gif\"]/.."
},
{
"pageElement":"//p[./a/img[@src=\"image/icon5.gif\"]][1]/following-sibling::*[./following-sibling::p[./a/img[@src=\"image/icon5.gif\"]]]",
"url":"^http://cse\\.naro\\.affrc\\.go\\.jp/takezawa/r-tips/r/",
"nextLink":"//img[@src=\"image/icon5.gif\"]/parent::a[1]"
},
{
"pageElement":"//table[@class=\"forumline\"]/tbody/tr",
"url":"^http://(?:[^.]+\\.)?atbb\\.jp/[^/]+/viewtopic\\.php\\?",
"nextLink":"//span[@class=\"nav\" and last()]/a[last() and text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//table[@class=\"lst\"]",
"url":"^http://www1\\.axfc\\.net/uploader/[^/]+/search\\.pl\\?",
"nextLink":"id(\"main\")/p/a[text()=\"Next\"]"
},
{
"insertBefore":"//center//center/table[4]",
"pageElement":"//center//center/table[3]",
"url":"^http://(?:www\\.)?autumnleaf\\.jp/shop/show_unit\\.php",
"nextLink":"//center//center/table[4]//td[2]//a"
},
{
"pageElement":"//body/table[@class=\"mainouter\"]/tbody/tr/td[@class=\"outer\"]/table",
"url":"^http://(?:www\\.)?animecentral\\.com\\.br/browse\\.php",
"nextLink":"//b[text()=\"Next >>\"]"
},
{
"pageElement":"id(\"centercol\")/node()[following::img[contains(@src, \"next.gif\") or contains(@src, \"prev.gif\")]]",
"url":"^http://www\\.atmarkit\\.co\\.jp/club/print/print\\.php",
"nextLink":"//img[contains(@src, \"next.gif\")]/parent::a"
},
{
"pageElement":"//div[@class=\"mibbs_thread\"][2]",
"url":"^http://www\\.e-mansion\\.co\\.jp/cgi-local/mibbs\\.cgi",
"nextLink":"id(\"mibbs_main\")//div[@class=\"pages\"]/span[@class=\"current\"]/following-sibling::a"
},
{
"pageElement":"//center[descendant::img]",
"url":"^http://kato-manga\\.sakura\\.ne\\.jp/.+[0-9]{2}\\.html",
"nextLink":"//a[text()=\"\u6b21\u3078\" or descendant::img[contains(@src,\"NEXT.jpg\")]]"
},
{
"pageElement":"//div[@class=\"pageTitle\"]/following-sibling::table[1]",
"url":"^http://[^.]+\\.amazon\\.de/gp/(?:best|mo(?:st|ve)|new)",
"nextLink":"//td[@class=\"paginationCurPage\"]/following-sibling::td[2]/a"
},
{
"pageElement":"//table[@cellspacing=\"3\"]/following-sibling::table[position()=1]/following-sibling::table[@cellspacing=\"4\"][position()=1]/preceding-sibling::table[@cellspacing=\"0\"]",
"url":"^http://directory\\.rakuten\\.co\\.jp/rms/sd/directory/",
"nextLink":"//b[starts-with(text(), \"\u6b21\")]/parent::a"
},
{
"pageElement":"//table[@class=\"FixFrame\"]//tr[position()>1]",
"url":"^http://www\\.toranoana\\.jp/cgi-bin/R2/allsearch\\.cgi",
"nextLink":"//td[@class=\"DTW_td_r\"]//a[child::b[contains(text(),\">\")]][last()]"
},
{
"pageElement":"id(\"Main\")",
"url":"^http://www\\.asahi-net\\.or\\.jp\\/~ye5n-mrfj/journal/",
"nextLink":"descendant::link[@rel=\"prev\"]"
},
{
"pageElement":"id(\"main\")/table",
"url":"^http://(?:kita\\.kitaa\\.net|10\\.niceboat\\.org)/10/",
"nextLink":"id(\"main\")/a[last()]"
},
{
"pageElement":"id(\"bloc_center_unit_2c\")/div[@class=\"pager_unit\"]/following-sibling::*[./following-sibling::div[@class=\"pager_unit\"]]",
"url":"^http://www\\.eb-store\\.com/NASApp/mnas/MxMProduct\\?",
"nextLink":"^http://(?:www\\.)?ebten\\.jp/eb-store/"
},
{
"pageElement":"id(\"body\")/div[@class=\"section\"]/ul[@class=\"commentlist\"]",
"url":"^https://www\\.hatena\\.ne\\.jp/shop/benefit\\.comment",
"nextLink":"id(\"body\")/p[@class=\"pager\"]/a[@rel=\"next\"]"
},
{
"pageElement":"id(\"Center\")",
"url":"^http://sns\\.my-freedom\\.org/\\?m=pc&a=page_fh_diary",
"nextLink":"//div[contains(@class, \"parts\")]/p[@class=\"prev\"]/a[1]"
},
{
"pageElement":"id(\"news-body\")",
"url":"^http://natalie\\.mu/(?:(?!news/)[^/]+/)*news(?!/list)",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" btn-zoom-image \")]/a | //a[contains(text(), \"\\u6b21\\u306e\\u753b\\u50cf\")]"
},
{
"insertBefore":"id(\"bottom\")",
"pageElement":"id(\"content\")/table",
"url":"^http://www\\.trek(?:earth|lens|nature)\\.com/gallery/",
"nextLink":"id(\"content\")/div[@id=\"pages\"]/a[last()-1]"
},
{
"pageElement":"(((.//select[@name=\"order\"]/ancestor::tr)/following-sibling::tr[.//img])[1]/descendant::table)[1]",
"url":"^http://www\\.etsy\\.com/(?:search_results|shop)\\.php",
"nextLink":"//td[@class=\"orange_link\"]/following-sibling::td[1]//a"
},
{
"pageElement":"//table[@class=\"page\"]//td[@valign=\"top\"]//tbody[contains(@id, \"collapseobj_module_\")]/tr",
"url":"^http://[^.]+\\.akiba-online\\.com/forum/main\\.php\\?",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"section entry\"]",
"url":"^http://[^.]+\\.tamiya-plamodelfactory\\.co\\.jp/blog/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[starts-with(text(), \"\u6b21\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"SerachList\")/table",
"url":"^http://rd?s\\.gnavi\\.co\\.jp/search/search\\.php\\?.",
"nextLink":"//a[descendant::font[contains(text(),\"\u6b21\")]]"
},
{
"pageElement":"//div[@class=\"page_full\"]",
"url":"^http://(?:[^./]+\\.)?creattica(?:\\.[^./]{2,3}){1,2}/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"beta-inner\")/div[contains(concat(\" \", @class, \" \"), \" entry \")]",
"url":"^http://foo\\.secondlifeherald\\.com/slh/[^/]+/[^/]+/.",
"nextLink":"//p[@class=\"content-nav\"]/a[1 and text()!=\"Main\"]"
},
{
"pageElement":"id(\"ContentsBlog\")/*",
"url":"^http://(?:www\\.)?pipa\\.jp/tegaki/VBlog\\d?\\.jsp\\?",
"nextLink":"id(\"ContentsBlog\")/div/table/tbody/tr/td[@class=\"Navi_P\"]/a[contains(text(),\"\u524d\u3078\")]"
},
{
"pageElement":"id(\"main_contents2\")/div[@class=\"transitionArea03\"]/following-sibling::node()",
"url":"^http://www\\.nitori-net\\.jp/shop/goods/search\\.aspx",
"nextLink":"id(\"main_contents2\")/div[@class=\"transitionArea01\"]/p[@class=\"navi\"]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"relyingParties\")/table/tbody/tr",
"url":"^http://mixi\\.jp/openid_history\\.pl(?:\\?page=\\d+)?",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pageNavigation01 \")]//a[starts-with(text(), \"\u6b21\u3092\")]"
},
{
"pageElement":"//form[@class=\"productListForm\"]/div[contains(@class, \"productList01\")]",
"url":"^http://www\\.conran\\.ne\\.jp/shop/ProductSearch\\.do",
"nextLink":"//div[contains(@class, \"bottom\")]/div[@class=\"pageNavigation\"]/a[last()]"
},
{
"pageElement":"//tr[td[@class=\"boxmidlrg\"]]",
"url":"^http://www\\.orkut\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/Main",
"nextLink":"//td[@class=\"boxmidlrg\"]/form/span/a[contains(text(), \">\")]"
},
{
"pageElement":"id(\"ftsr_dataList\")",
"url":"^http://(?:www\\.)?seikatsusoken\\.jp/futuretimeline/.",
"nextLink":"id(\"ft_sr_top\")//li[./span[@class=\"ftsr_pnav_li_selected\"]]/following-sibling::li[1]//a"
},
{
"insertBefore":"id(\"wordListsResults\")/p",
"pageElement":"id(\"wordListsResults\")",
"url":"^http://www\\.mnemonicdictionary\\.com/wordlist\\.html",
"nextLink":"id(\"wordListsResults\")/p/a"
},
{
"pageElement":"id(\"threadslist\")",
"url":"^http://www\\.akiba-online\\.com/forum/search\\.php\\?",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@id=\"popular_tag\"]",
"url":"^http://www\\.pixiv\\.net/(?:personal_)?tags(?!.+tag=)",
"nextLink":"//div[@id=\"content3\"]//a[starts-with(text(),\"\u6b21\u306e\")][contains(@href,\"p=\")]"
},
{
"pageElement":"id(\"contents\")/div[contains(@class,\"search_result_list02\") or contains(@class,\"clear_space\")]",
"url":"^https?://www\\.find-job\\.net/fj/(?:search|new)\\.cgi",
"nextLink":"id(\"contents\")//li[@class=\"foreward\"]/a"
},
{
"pageElement":"//table[@class=\"callstable\"]",
"url":"^https?://myaccount\\.voiparound\\.com/clx/calls\\.php",
"nextLink":"//table[@class=\"pagination\"]//span[@class=\"thispage\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@id=\"XbcShellBody\"]/div[@class=\"XbcProfileTableContainer\"]/table[@class=\"XbcProfileTable XbcFriendsListTable\"]",
"url":"^http://live\\.xbox\\.com/[^/]+/profile/Friends\\.aspx",
"nextLink":"//div[@id=\"XbcPag\"]/a[@class=\"XbcNP\"]"
},
{
"insertBefore":"id(\"ft\")",
"pageElement":"id(\"sorttable\")",
"url":"^http://admin\\.c(?:united\\.dyndns\\.org|yta\\.jp)/a/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"photo_sbox\"] | //div[@class=\"photo_sbox\"]/following-sibling::table[1]",
"url":"^http://www\\.otakuma\\.net/index\\.php/album/newalbum",
"nextLink":"//div[@class=\"photo_box\"]/table[last()]//td[last()]//b/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"contents\"]/*[self::h3 or self::*[preceding-sibling::h3]][following-sibling::ul[@class=\"pager\"]]",
"url":"^http://b\\.hatena\\.ne\\.jp/html/backstage_interview/",
"nextLink":"//ul[@class=\"pager\"]//img[contains(@src,\"_o.gif\")]/ancestor::li/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"result-body\")|id(\"result-body\")/following-sibling::div[@class=\"clear-dot-line\"][1]",
"url":"^http://www\\.tokyo-calendar\\.tv/dining/search\\.php",
"nextLink":"id(\"page_navi-next\")/a"
},
{
"pageElement":"id(\"content-body-inner\")/div[last()]/div[@class=\"books\"]",
"url":"^http://stack\\.nayutaya\\.jp/(?:user/[^/]+/)?author/",
"nextLink":"//div[@class=\"pagination\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"mainContent4\")/div[@id=\"diary_comment\"][last()]/following-sibling::node()",
"pageElement":"id(\"mainContent4\")/*",
"url":"^http://www\\.otakuma\\.net/index\\.php/album/detail/",
"nextLink":"id(\"diary_pageing\")/table/tbody/tr/td[1]/span/a"
},
{
"pageElement":"id(\"mainContent\")//table[@class=\"diary\"]",
"url":"^http://www\\.otakuma\\.net/index\\.php/diary/mydiary",
"nextLink":"id(\"diary_pageing_home\")/table/tbody/tr/td[last()]/span/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"table\")",
"url":"^http://r\\.hatena\\.ne\\.jp/(?:[^/]+/)+\\?mode=table",
"nextLink":"//a[starts-with(text(), \"<\u524d\u306e\")]"
},
{
"insertBefore":"//td[@class=\"zh\"]/../../../../*/following-sibling::node()[last()]",
"pageElement":"//td[@class=\"zh\"]/../../..",
"url":"^http://news\\.baidu\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/ns",
"nextLink":"//div[@class=\"pg\"]/a[last()][child::font]"
},
{
"pageElement":"id(\"page\")/div[@class=\"page_inner\"]/div[@id]",
"url":"^http://(?:ae|audio|net|psd|vector)\\.tutsplus\\.com/",
"nextLink":"id(\"page\")/div[@class=\"page_inner\"]/div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"detailNews\")",
"url":"^http://dailynews\\.yahoo\\.co\\.jp/.+?/news_list/\\?",
"nextLink":"id(\"mainMargin\")/div[@class=\"pagelinkArea clr\"]/ul/li[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"commentlinks\"]",
"url":"^http://\\w+\\.engadget\\.com/\\d{4}/\\d{2}/\\d{2}/.+",
"nextLink":"id(\"cmt_paging\")/strong/following-sibling::a[1]"
},
{
"pageElement":"//img[@alt=\"pixel\"][@height=\"1\"]/preceding-sibling::table/following-sibling::*",
"url":"^http://www\\.amazon\\.co\\.jp/gp/cdp/member-reviews/",
"nextLink":"//td[@class=\"small\"][@align=\"right\"]/b/child::text()[string()!=\" | \"][2]/following-sibling::a|//td[@class=\"small\"][@align=\"right\"]/b/a[position()=text()-1]"
},
{
"insertBefore":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]",
"pageElement":"//div[@class=\"frame\"]/div[@class=\"main\"]/ul",
"url":"^http://www\\.gumonji\\.net/cgi-bin/friend_list\\.cgi",
"nextLink":"//div[@class=\"frame\"]/div[@class=\"main\"]/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"pageElement":"//div[@class=\"fileinfo\" or @class=\"fileinfo_odd\"]",
"url":"^http://www\\.(?:nyhash|sharedb)\\.info/index\\.php/.",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//div[@class=\"fpost\"]",
"url":"^http://my\\.opera\\.com/community/forums/topic\\.dml",
"nextLink":"//p[@class=\"pagenav\"]/a[last() and @class=\"nxt\"]"
},
{
"pageElement":"//table/tbody/tr/td/table[@class=\"p\"]",
"url":"^http://pixivrank\\.net/ht2?/tag[0-9]+/p[0-9]+\\.html",
"nextLink":"//table/tbody/tr/td/p/a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8\u2192\")]"
},
{
"insertBefore":"//table[3]//table[@cellspacing=\"1\"]/following-sibling::node()",
"pageElement":"//table[3]//table[@cellspacing=\"1\"]",
"url":"^http://(?:www\\.)?utamap\\.com/searchkasi\\.php\\?.+",
"nextLink":"//a[contains(text(), \">>>\")][last()]"
},
{
"pageElement":"//pre",
"url":"^https://www\\.lib\\.city\\.yokohama\\.jp/cgi-bin/Sw.",
"nextLink":"//img[@src=\"/image/next0.gif\"]/parent::*"
},
{
"pageElement":"id(\"tr-maincontent2\")/div",
"url":"^http://(?:www\\.)?4travel\\.jp/traveler/[^/]+/album/",
"nextLink":"(//li[contains(concat(\" \", @class, \" \"), \" linkend \")][last()]/a[last()])[last()]"
},
{
"pageElement":"//div[contains(@class, \"blog_list\") or contains(@class, \"photo_pickup_page\")]",
"url":"^http://[^.]+\\.areablog\\.jp/page_(?:img|list)\\.asp",
"nextLink":"//div[contains(@class, \"post_list_table\")]/div[last()]//a[preceding-sibling::font[@color=\"red\"] or text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"main\")/*",
"url":"^http://transit\\.map\\.yahoo\\.co\\.jp/search/result",
"nextLink":"id(\"main\")/dl[contains(concat(\" \", @class, \" \"), \" page-navi \")]/dd/a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"article\"] | //noindex[following-sibling::div[@class=\"article\"] or preceding-sibling::div[@class=\"article\"]]",
"url":"^http://earthobservatory\\.nasa\\.gov/IOTD/view\\.php",
"nextLink":"//div[@class=\"article\"]/div[@class=\"image-navigation\"]/noindex[last()]/a"
},
{
"pageElement":"//table[preceding-sibling::font[@color=\"#cd5c5c\"]][following-sibling::table[descendant::a[@class=\"sLink\"]]]",
"url":"^http://(?:www\\.)?junkudo\\.co\\.jp/search2\\.jsp\\?",
"nextLink":"//img[@src=\"ar.gif\"]/.."
},
{
"pageElement":"//div[@id=\"posts\"]/div/div[@class=\"page\"]/div",
"url":"^http://forums\\.secondlife\\.com/showthread\\.php\\?",
"nextLink":"//td[@class=\"alt1\"]/a[text()=\">\"]"
},
{
"pageElement":"//div[@class=\"st_body\"]",
"url":"^http://owarai\\.variety\\.yahoo\\.co\\.jp/[qa]/list/",
"nextLink":"//p[@class=\"prenxt\"]/a[last()]"
},
{
"pageElement":"//table[@class=\"table\"]",
"url":"^http://(?:www\\.)?kakakuportal\\.com/search\\.php\\?",
"nextLink":"//a[descendant::img[@src=\"images/button_next.gif\"]]"
},
{
"pageElement":"//table[@cellspacing=\"5\"]",
"url":"^http://www\\.e-tomcat\\.com/shop/(?:category|goods)/",
"nextLink":"//a[normalize-space()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"aspnetForm\")/div",
"url":"^http://minkara\\.carview\\.co\\.jp/userid/\\d+/blog/",
"nextLink":"//a[contains(@id,\"HyperLink_Next\")]"
},
{
"pageElement":"//table[@class=\"topiclist\"]",
"url":"^http://my\\.opera\\.com/community/forums/forum\\.dml",
"nextLink":"//p[@class=\"pagenav\"]/a[last() and @class=\"nxt\"]"
},
{
"insertBefore":"//div[@class=\"mainfloatleft\"]",
"pageElement":"id(\"maincontents02\")/ul[@class=\"ulnewsmore\" or @class=\"uleventmore\"]",
"url":"^http://www\\.chuo-u\\.ac\\.jp/chuo-u/(?:news|event)/",
"nextLink":"//div[@class=\"mainfloatright\"]/a[text()=\"\u6b21\u306e10\u4ef6>>\"]"
},
{
"insertBefore":"id(\"mainContent3\")/div[@id=\"diary_comment\"][last()]/following-sibling::node()",
"pageElement":"id(\"mainContent3\")/*",
"url":"^http://www\\.otakuma\\.net/index\\.php/diary/detail/",
"nextLink":"id(\"diary_pageing\")/table/tbody/tr/td[1]/span/a"
},
{
"pageElement":"//table[@align=\"center\"]",
"url":"^http://wordgear\\.x0\\.com/.*diary\\.cgi\\?mode=view",
"nextLink":"//a[text()=\"\u6b21\u3078\u9032\u3080\u2191\"]"
},
{
"pageElement":"id(\"right\")",
"url":"^http://bookweb\\.kinokuniya\\.co\\.jp/guest/cgi-bin/",
"nextLink":"id(\"right\")/div[@class=\"page-list\"]/div[@class=\"page-pw\"]/a"
},
{
"pageElement":"id(\"dt2\")",
"url":"^http://search\\.rental\\.rakuten\\.co\\.jp/dvdcd/s/",
"nextLink":"//a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"//form[contains(text(), \"\u753b\u50cf\u30bf\u30a4\u30c8\u30eb\")]/node()[following::input[@value=\"\u524a\u9664\"]]",
"url":"^http://sylphys\\.ddo\\.jp/upld2nd/[^/]+/[^.]+\\.htm",
"nextLink":"descendant::form[last()]"
},
{
"pageElement":"//span[@class=\"listshopname\"]/ancestor::table[parent::div[@class=\"main\"]]/tbody/tr/td/table/tbody/tr",
"url":"^http://g\\.pia\\.co\\.jp/front/contents/pseosearch/",
"nextLink":"//span[@class=\"listlink\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://latlonglab\\.yahoo\\.co\\.jp/macro/list\\.rb",
"nextLink":"//div[@class=\"contents\"]/a[last()]"
},
{
"pageElement":"id(\"newslist\")/tbody/tr",
"url":"^http://www\\.jsgoal\\.jp/news/(?:list_\\d+\\.html)?",
"nextLink":"//a[starts-with(text(), \"\u524d\u306e\")]"
},
{
"pageElement":"//div[@class=\"list-content\"]",
"url":"^http://(?:list|search[^.]*)\\.taobao\\.com/browse/.",
"nextLink":"//a[@class=\"page-next\"]"
},
{
"pageElement":"id(\"clublist\")/tbody/tr",
"url":"^http://www\\.jsgoal\\.jp/club/(?:list_\\d+\\.html)?",
"nextLink":"id(\"clubarea\")/div[@class=\"nextbackarea\" and position()=1]/div[@class=\"nextback\"]/a"
},
{
"pageElement":"//div[@class=\"listc\"]/*[not(self::p)]",
"url":"^http://www\\.ebest\\.co\\.jp/shop/goods/goods\\.asp",
"nextLink":"//a[contains(text(), \"\u6b21\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//div[@class=\"section\"]/div[@class=\"section\"]",
"url":"^http://return0\\.dyndns\\.org/log/[^/]+/[^/]+/[^/]+",
"nextLink":"id(\"navigation\")/p/a[text()=\"<<\"]"
},
{
"pageElement":"id(\"CenterCntBox\")//table[starts-with(@class, \"DispListTable\")]",
"url":"^http://www\\.edion\\.com/(?:disp/)?CSfDispListPage_",
"nextLink":"id(\"CenterCntBox\")//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8 >>\")]"
},
{
"pageElement":"id(\"maincol\")/div[@class=\"content\"]",
"url":"^http://gigazine\\.net/index\\.php\\?/news/comments/",
"nextLink":"id(\"maincol\")//*[contains(text(), \"\u524d\u306e\u8a18\u4e8b:\")]/a"
},
{
"pageElement":"id(\"articlebody\")",
"url":"^http://kuraki\\.livedoor\\.jp/archives/[^.]+\\.html",
"nextLink":"//div[@class=\"menu\"]/a[starts-with(text(),\"\u524d\")]"
},
{
"pageElement":"//div[@class=\"nwbody\"]/node()[not(descendant::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\") or contains(text(), \"\u524d\u306e\u30da\u30fc\u30b8\")])]",
"url":"^http://news\\.goo\\.ne\\.jp/(?:article|topstories)/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]|id('incontents')/descendant::a[contains(text(), '\u7d9a\u304d\u3092\u8aad\u3080')][1]"
},
{
"pageElement":"id(\"intelliTxt\")//table[@class=\"narrow_listheadings_issk\" or @class=\"narrow_listheadings\"] | id(\"intelliTxt\")//div[@class=\"skres_notice\"]",
"url":"^http://(?:\\w+\\.)?softpedia\\.com/dyn-search\\.php",
"nextLink":"id(\"cse-search-box\")/preceding-sibling::a[contains(., \">>\")]"
},
{
"pageElement":"id(\"rightContents\")/div[contains(@class,\"contentsBox\")]",
"url":"^http://search\\.books\\.rakuten\\.co\\.jp/bksearch/",
"nextLink":"id(\"yajirushi\")"
},
{
"pageElement":"//img[contains(@src,\"./image/back.gif\") or contains(@src,\"./image/next.gif\")]/ancestor::table[2]",
"url":"^http://ordermade\\.net/con/(?:sample|cr)_list\\.cgi",
"nextLink":"(//a[descendant::img[@src=\"./image/next.gif\"]])[1]"
},
{
"pageElement":"id(\"tenpo_list\")/*",
"url":"^http://demae-can\\.com/search/shop_list2\\.html\\?.",
"nextLink":"id(\"shop_count\")/a[contains(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"left\")/div[@class=\"leaderboard\"]/div[@class=\"content\"]/*",
"url":"^http://www\\.mygamercard\\.net/leaderboard\\.php\\?",
"nextLink":"id(\"left\")//div[@class=\"rightColumn\"]/a"
},
{
"pageElement":"id(\"mainContents\")rn",
"url":"^http://www\\.ventforet\\.co\\.jp/vfkblog/dailyblog/",
"nextLink":"//p[contains(concat(\" \",normalize-space(@class),\" \"), \" alCenter \")]/a[contains(text(), \"\u00ab\")]rn"
},
{
"pageElement":"id(\"contentmid\")/div[@class=\"artikel\"]/*[not(@id=\"contentUntereGrenze\")]",
"url":"^http://(?:www\\.)?hbe-shop\\.de/katalog/index\\.php",
"nextLink":"id(\"contentUntereGrenze_links\")//a[@class=\"seitenzahl\" and contains(text(),\"weiter\")]"
},
{
"insertBefore":"//table[@cellpadding=\"2\"][@cellspacing=\"2\"][@width=\"100%\"][last()]",
"pageElement":"//table[@cellpadding=\"2\"][@cellspacing=\"1\"][@width=\"100%\"]",
"url":"^http://(?:www\\.)?warez-bb\\.org/viewforum\\.php\\?",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"//table[@class=\"tlist\"]",
"url":"^http://(?:(?:www|sukebei?)\\.)?nyaatorrents\\.org/",
"nextLink":"//tr[@class=\"pages\"]/td[last()]/a"
},
{
"pageElement":"id(\"maincontents\")/div/div[@class=\"entry\"]",
"url":"^http://(?:www\\.)?motordays\\.com/newcar/articles/",
"nextLink":"id(\"maincontents\")//a[contains(@class,\"nextpage\")]"
},
{
"pageElement":"id(\"right\")/div[@class=\"gallery\"]",
"url":"^http://(?:www\\.)?public-domain-photos\\.com/[^/]+",
"nextLink":"(//div[contains(concat(\" \", @class, \" \"), \" navigation \")]/a[last()])[last()]"
},
{
"pageElement":"//div[@class=\"inner\"]/table/tbody/tr[contains(@class, \"tr_bg\")]",
"url":"^http://book\\.akahoshitakuya\\.com/u/\\d+/favorite",
"nextLink":"//a[contains(text(), \"\u2192next\")]"
},
{
"insertBefore":"//form[last()]",
"pageElement":"//table",
"url":"^http://selenic\\.com/repo/index\\.cgi/hg/shortlog/",
"nextLink":"//a[text()=\"-60\"]"
},
{
"insertBefore":"//td[@width=\"540\" and @align=\"center\"]/ancestor::table[last()]/following-sibling::node()[1]",
"pageElement":"//td[@width=\"540\" and @align=\"center\"]/ancestor::table[last()]",
"url":"^http://portal\\.nifty\\.com/special\\d+/\\d+/\\d+/",
"nextLink":"//td[@width=\"540\" and @align=\"center\"]//a[contains(string(.),\"\uff1e\")]"
},
{
"insertBefore":"id(\"footer\")/preceding-sibling::table[1]",
"pageElement":"//table[@class=\"bumblebee\" and .//tr[@class=\"results\"]]",
"url":"^http://developer\\.apple\\.com/cgi-bin/search\\.pl",
"nextLink":"//tr[@class=\"results\"]//span[@class=\"right\"]/a[contains(., \"Next\")]"
},
{
"pageElement":"(//*[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"])[1]/ancestor::table[1]/following-sibling::table[1]",
"url":"^http://biz\\.yahoo\\.co\\.jp/stockholder/search\\?",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"result_box\")",
"url":"^http://jp\\.misumi-ec\\.com/ec/CategorySearchView/",
"nextLink":"id(\"pagerNext_0\")"
},
{
"pageElement":"id(\"mnc\")",
"url":"^http://autos\\.yahoo\\.co\\.jp/ncar/review/report/",
"nextLink":"//div[contains(@class, \"yaut-md01\")]/p/a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"comments view_topic\")",
"url":"^http://www\\.fakku\\.net/view(?:manga|topic)\\.php",
"nextLink":"id(\"more_comments_pag bot_right_bot\")/a[last()]"
},
{
"pageElement":"//div[@class=\"gradient\"]",
"url":"^http://(?:www\\.)?smileycat\\.com/design_elements/",
"nextLink":"//p[@class=\"paginate\"]/a[contains(., \"Next\")]"
},
{
"pageElement":"//div[table/descendant::td[@class=\"sqtdq\"]]",
"url":"^http://(?:[^.]+\\.)?thinkexist\\.com/quotes/[^/]+/",
"nextLink":"//a[img[contains(@src,\"paging/next.gif\")]]"
},
{
"pageElement":"descendant::table[contains(concat(\" \",normalize-space(@class),\" \"),\" scripts \") or contains(concat(\" \",normalize-space(@class),\" \"),\" users \")]",
"url":"^http://(?:beta\\.)?wescript\\.net/(?:script|user)s",
"nextLink":"descendant::a[contains(concat(\" \",normalize-space(@class),\" \"),\" next_page \")]"
},
{
"pageElement":"//div[@class=\"aw_tb\"] | //p[@class=\"rev\"] | //div[@class=\"bd\"]",
"url":"^http://info\\.movies\\.yahoo\\.co\\.jp/userreview/",
"nextLink":"//p[@class=\"flR\" and position()=3]/a[text()=\"\u6b21\u306e10\u4ef6\"]"
},
{
"insertBefore":"//table[@cellpadding=\"7\"]/following-sibling::node()",
"pageElement":"//table[@cellpadding=\"7\"]",
"url":"^http://(?:www\\.)?netkeiba\\.com/news/.+backnumber",
"nextLink":"//div[@align=\"center\"]/a[last()]"
},
{
"pageElement":"id(\"gameList\")",
"url":"^http://(?:www\\.)?freegame\\.on\\.arena\\.ne\\.jp/",
"nextLink":"id(\"contents\")/div[@class=\"pageNavi\"]/a[@class=\"link_next\"]"
},
{
"pageElement":"descendant::*[.//span[@class=\"AUTHOR\"] and .//*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]][last()]/*[not(.//a[text()=\"\u30ed\u30b0\u30a4\u30f3\"]) and following-sibling::*/descendant-or-self::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]]",
"url":"^http://(?:blog\\.excite\\.co|[^.]+\\.exblog)\\.jp/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//table//table//table//table[2]",
"url":"^http://(?:www\\.)?reloadbags\\.com/bags/list\\.php",
"nextLink":"//p/a[preceding-sibling::strong][1]"
},
{
"pageElement":"id(\"content\")/*[(self::h2 and @class=\"ishinfo\") or (self::div and @class=\"item\")]|id(\"results\")",
"url":"^http://www\\.alistapart\\.com/(?:articles|search)/",
"nextLink":"id(\"content\")/a[contains(., \"Next\")]|id(\"content\")/div[@class=\"pages\"]/strong/following-sibling::a[1]"
},
{
"insertBefore":"id(\"leftRes\")//div[@class=\"pg\"]",
"pageElement":"id(\"leftRes\")/table[@class=\"list\"]",
"url":"^http://mp3\\.baidu\\.(?:[^.]{2,3}\\.)?[^./]{2,3}/m",
"nextLink":"id(\"leftRes\")//div[@class=\"pg\"]/a[last()][child::font]"
},
{
"insertBefore":"//div[contains(@class, \"footer\")]",
"pageElement":"//div[contains(@class, \"main\")]",
"url":"^http://ninjin[^.]*\\.x0\\.com/wolf[^/]*/index\\.rb",
"nextLink":"//div[contains(@class, \"main\")]/a[last()]"
},
{
"pageElement":"id(\"revisions\")//tr",
"url":"^http://(?:[^.]+\\.)?jottit\\.com/[^?]+\\?m=history",
"nextLink":"id(\"pagination\")/strong/a[text()=\"Next\"]"
},
{
"pageElement":"id(\"columnA_2columns\")/*[self::div[contains(@class,\"thumbnail\")] or self::br]",
"url":"^http://www\\.freecsstemplates\\.org/css-templates/",
"nextLink":"id(\"columnA_2columns\")/div[@class=\"pager\"]/a[last()]"
},
{
"pageElement":"//ul[@class=\"image-list\"]",
"url":"^http://serif\\.hatelabo\\.jp/serif_generator/image",
"nextLink":"(//a[contains(concat(\" \", @class, \" \"), \" pager-next \")][last()])[last()]"
},
{
"pageElement":"//dl/../node()[self::dl or position()=last()]",
"url":"^http://(?:[^.]+\\.)*pksp\\.jp/[^/]+/t?bbs\\.cgi\\?",
"nextLink":"//a[@accesskey=\"3\"]"
},
{
"pageElement":"id(\"vf\")",
"url":"^http://forum\\.ubuntulinux\\.jp/viewforum\\.php\\?",
"nextLink":"//div[@class=\"linksb\"]/div/p[@class=\"pagelink conl\"]/strong/following-sibling::a"
},
{
"pageElement":"id(\"tcmainlay\")",
"url":"^http://[^.]+\\.ap\\.teacup\\.com/[^/]+/\\d+\\.html",
"nextLink":"//div[@class=\"nextpage\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"listbody\"]",
"url":"^http://minkara\\.carview\\.co\\.jp/(?:note|parts)/",
"nextLink":"//a[contains(@id,\"HyperLink_Next\")]"
},
{
"pageElement":"id(\"gsContent\")",
"url":"http://imagebase\\.davidniblack\\.com/main\\.php\\?",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"mainColumn\")//div[@class=\"photo-detail\"]/img",
"url":"^http://news\\.livedoor\\.com/article/image_detail/",
"nextLink":"id(\"mainColumn\")//li[@class=\"link-next\"]/a"
},
{
"pageElement":"id(\"content-body-inner\")/div[@class=\"books\"]",
"url":"^http://stack\\.nayutaya\\.jp/user/[^/]+/books/\\w+",
"nextLink":"id(\"content-body-inner\")/div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"id(\"meisai\")",
"url":"^http://www\\.irisplaza\\.co\\.jp/Index\\.asp\\?KB=",
"nextLink":"id(\"contents\")//a[img[@src=\"img/item_next.gif\"]]"
},
{
"pageElement":"//tr",
"url":"^http://www2\\.jasrac\\.or\\.jp/eJwid/main\\.jsp\\?",
"nextLink":"//a[descendant::img[@src=\"img/nextArrowOn.png\"]]"
},
{
"pageElement":"id(\"threadlist postlist\")",
"url":"^https?://.+/(?:forum|thread-\\d+)-\\d+-\\d+\\.html",
"nextLink":"//div[@class=\"pages\"]/a[@class=\"next\"]"
},
{
"pageElement":"//form[@action=\"/bare/vote.html\"]",
"url":"^http://musicbrainz\\.org/mod/search/results\\.html",
"nextLink":"//a[@title=\"Go to next page\"]"
},
{
"pageElement":"//div[@class=\"comic\"]",
"url":"^http://(?:www\\.)?dominic-deegan\\.com/view\\.php",
"nextLink":"id(\"bottom\")//li/a[img[@alt=\"Next\"]]"
},
{
"pageElement":"id(\"aspnetForm\")/table",
"url":"^http://(?:www\\.)?designlinkdatabase\\.net/datas/",
"nextLink":"id(\"_ctl0_cphMain_lnkNext2\")"
},
{
"pageElement":"id(\"content\")",
"url":"^https?://ubiquity\\.mozilla\\.com/trac/report/\\d",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"jive-search-results\"]/ol",
"url":"^http://forums\\.oracle\\.com/forums/search\\.jspa",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"//table[@class=\"userTable\" or @class=\"memberTable\"]/tbody/tr",
"url":"^http://riro\\.jp/comment/(list|image|flag)\\.html",
"nextLink":"//a[@class=\"navi\" and starts-with(text(),\"\u6b21\")]"
},
{
"insertBefore":"id(\"pages\")",
"pageElement":"id(\"pages\")/preceding-sibling::*",
"url":"^http://www\\.nikkeibp\\.co\\.jp/style/secondstage",
"nextLink":"id(\"p_next\")"
},
{
"pageElement":"id(\"article_body\")",
"url":"^http://camera\\.itmedia\\.co\\.jp/[^/]+/articles/",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"results\")/*",
"url":"^http://www\\.technorati\\.jp/(?:search|channel)/.",
"nextLink":"id(\"pages\")/ol/li[@class=\"next\"]/a"
},
{
"pageElement":"(id(\"content\")//table[descendant::div[@class=\"date-stamp\"]])[last()]",
"url":"^http://blog\\.trendmicro\\.co\\.jp/{1,2}archives/",
"nextLink":"id(\"content\")//a[img[@alt=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]]"
},
{
"pageElement":"id(\"content\")//div[@class=\"entry-more\"]//tr",
"url":"^http://www\\.moeyo\\.com/\\d+/\\d+/_no\\d+\\.html",
"nextLink":"//a[descendant::img[@src=\"http://www.moeyo.com/blogparts/go.gif\"]]"
},
{
"pageElement":"//div[contains(@class,\"post_table\")]/../node()[self or following-sibling::br or following-sibling::script]",
"url":"^http://[^.]+\\.areablog\\.jp/blog/[^/]+/.+\\.html",
"nextLink":"id(\"blog_right\")/div[last()]//a[preceding-sibling::font[@color=\"red\"] or text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"ZSEARCH_ZR_home-searccolumn-searchlist\")",
"url":"^http://zozo\\.jp/_search/search_result\\.html\\?.",
"nextLink":"id(\"ZSEARCH_ZR_home-searccolumn-searchpage-all2\")/a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"maincontent\")/*[position() > 1 and position() < 4]",
"url":"^http://yourfilehost-browser\\d?\\.opal\\.ne\\.jp/",
"nextLink":"//a[contains(@title,\"Go to Next Page\")]"
},
{
"insertBefore":"id(\"main\")/div[@class=\"page2\"]",
"pageElement":"id(\"main\")/div[@class=\"bbs\"]/div[@class=\"comment_body\"]",
"url":"^http://(?:www\\.)?gumonji\\.net/cgi-bin/bbs\\.cgi",
"nextLink":"id(\"main\")/div[@class=\"page2\"]/div[@class=\"pager_next\"]/a"
},
{
"pageElement":"//table[@border=\"2\"]",
"url":"^http://(?:www\\.)?domo2\\.net/search/search\\.cgi",
"nextLink":"//a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"//div[contains(@class, \"CommentList\")]",
"url":"^http://(?:www\\.)?pipa\\.jp/techan/VThreadComment",
"nextLink":"//div[contains(@class, \"PageBar\")]//a[last()-1]"
},
{
"pageElement":"//div[@class=\"pagenate\"][1]/following-sibling::*[not(@class=\"pagenate\") and not(@class=\"adsense\")]",
"url":"^http://(?:www\\.)?(?:ura-)?rephoto\\.orig\\.jp/.+",
"nextLink":"//div[@class=\"pagenate\"]/a[text()=\"\u6b21 >\"]"
},
{
"pageElement":"//div[contains(@class,\"trivial\")]",
"url":"^http://sea-mew\\.jp/nox/modules/webarc/2ch/[^/]+/",
"nextLink":"//a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"//html/body/table",
"url":"^http://syosetu\\.com/pc/main\\.php.*ncode=.*novel",
"nextLink":"//a[contains(text(), \"NEXT\")]"
},
{
"pageElement":"//img[@src=\"images/title.gif\"]/ancestor::table[1]/following-sibling::*",
"url":"^http://media\\.excite\\.co\\.jp/book/news/topics/",
"nextLink":"//a[./img[contains(@src, \"images/topics_next.gif\")]]"
},
{
"pageElement":"id(\"content\")//div[@class=\"imgtable\"]/*",
"url":"^http://search\\.www\\.infoseek\\.co\\.jp/Image\\?",
"nextLink":"id(\"pagenavi\")/a[@class=\"next-url\"]"
},
{
"pageElement":"//center/table[@width=\"94%\"]",
"url":"^http://www\\.network54\\.com/Forum/47210/thread/.",
"nextLink":"//a[text()=\"Next Topic >>\"]"
},
{
"pageElement":"//td[@class=\"border-top\"]/ancestor::tbody[1]/tr",
"url":"^http://posren\\.livedoor\\.com/(?:power_)?search/",
"nextLink":"id(\"pagingNext\")"
},
{
"pageElement":"//table[@class='maintable']",
"url":"^http://www\\.underground-gamer\\.com/browse\\.php",
"nextLink":"//b[contains(text(),'Next >>')]"
},
{
"pageElement":"//div[@class=\"blog\"]",
"url":"^http://(?:www\\.)?socialnetworking\\.jp/archives/",
"nextLink":"id(\"menu\")/a[1]"
},
{
"pageElement":"//table[@class='tablebg']",
"url":"^http://www\\.ngamer\\.es/foros/viewtopic\\.php\\?",
"nextLink":"//a[contains(text(),'Siguiente')]"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://www\\.fileformat\\.info/info/unicode/char/",
"nextLink":"//a[img[contains(@src, \"vcrforward.png\")]]"
},
{
"pageElement":"id(\"page-body\")//ul[contains(concat(\" \",@class,\" \"), \" topics \")]",
"url":"^http://forums\\.mozillazine\\.org/viewforum\\.php",
"nextLink":"id(\"page-body\")//a[contains(concat(\" \",@class,\" \"), \" right \")]"
},
{
"pageElement":"id('content')/div[@class=\"post\"]",
"url":"^http://tumblr\\.inucara\\.net/(?:page/|search/|$)",
"nextLink":"id('footer')/a[contains(text(), \"Next\")]"
},
{
"pageElement":"id(\"main_area\")/div[contains(@class, \"movie_block\")]",
"url":"^http://(?:beta\\.)?nantokadoga\\.com/search\\.php",
"nextLink":"//div[@class=\"paging\"]/a[not(following-sibling::a)]"
},
{
"pageElement":"//table[@class=\"reader\"]",
"url":"^http://(?:[^.]+\\.)?mangatoshokan\\.com/read/[^/]",
"nextLink":"//td[@class=\"rpage\"]/a[img]"
},
{
"insertBefore":"id(\"page-body\")/div[@class=\"topic-actions\"][2]",
"pageElement":"id(\"page-body\")/div[starts-with(@class, \"post\")]",
"url":"^http://forums\\.mozillazine\\.org/viewtopic\\.php",
"nextLink":"//a[starts-with(@href, \"./viewtopic.php\") and text()=\"Next\"]"
},
{
"pageElement":"id(\"frame-left\")/div[@class=\"post\"]",
"url":"^http://(?:www\\.)?macthemes2\\.net/forum\\.php\\?",
"nextLink":"//div[@class=\"linksb\"]/div/p[@class=\"pagelink conl\"]/strong/following-sibling::a"
},
{
"pageElement":"//ul[@class=\"linkedimglinkabslist1\"]/li",
"url":"^http://topics\\.jp\\.msn\\.com/photo/index\\.aspx",
"nextLink":"id(\"topicslstpagelinkbottom\")/ul/li[@class=\"last\" and last()]/a"
},
{
"pageElement":"id(\"posts\")/*[starts-with(@id, \"edit\")]",
"url":"^http://(?:www\\.)?tarfandestan\\.com/forum/thread",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"http://ajaxrain.com/tagcloud.php?tag=jquery",
"pageElement":"//div[@class=\"scriptdis\"]",
"url":"^http://(?:www\\.)ajaxrain\\.com/tagcloud\\.php\\?",
"nextLink":"//a[@class=\"paging1\"]"
},
{
"pageElement":"//center",
"url":"^http://(?:www\\.)?big-men\\.net/face/joyful\\.cgi",
"nextLink":"//td/b/following-sibling::a[1]"
},
{
"pageElement":"//tr[td[@id=\"TDlink\"] and position()>1]",
"url":"^http://(?:www\\.)?loadingvault\\.com/search\\.php",
"nextLink":"//a[text()=\">\"]"
},
{
"pageElement":"id(\"listLeft\") | //div[@class=\"eventinfo\"]",
"url":"^http://event\\.jr-odekake\\.net/(?:sights|walk)/",
"nextLink":"//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"entry_detail\")",
"url":"^http://lab\\.jibun\\.atmarkit\\.co\\.jp/entries/",
"nextLink":"//a[descendant-or-self::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]]"
},
{
"pageElement":"id(\"headmenu\")/following-sibling::*[following-sibling::*[(descendant::img[@src=\"/images/next2.gif\" or @src=\"/images/prev.gif\"]) or (descendant::img[@src=\"/images/thispag2.gif\"] and not(preceding-sibling::*/descendant::img[@src=\"/images/next2.gif\" or @src=\"/images/prev.gif\"]))]]",
"url":"^http://(?:www|jibun)\\.atmarkit\\.co\\.jp/.*five",
"nextLink":"//img[@src=\"/images/thispag2.gif\"]/ancestor::tr/following-sibling::tr[1]//a"
},
{
"pageElement":"//td[@class=\"main01\"]/table[last()]",
"url":"^http://www\\.tbs\\.co\\.jp/gacchiri/[^.]+\\.html",
"nextLink":"//td[@class=\"main01\"]/table[last()]/tbody/tr[2]/td[2]/div[last()]/a"
},
{
"pageElement":"//table[@class=\"tabTable\"]",
"url":"^http://(?:www\\.)?ontonson\\.com/index\\.php\\?.",
"nextLink":"//a[@title=\" \u6b21\u306e\u30da\u30fc\u30b8 \"]"
},
{
"pageElement":"//div[@class=\"main\"]",
"url":"^http://rinrin\\.saiin\\.net/~zshp/denpa_gs/main/",
"nextLink":"//a[text()=\"NEXT\"]"
},
{
"pageElement":"//ol[@class=\"searchList\"]",
"url":"^http://search\\.nifty\\.com/websearch/search\\?.",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"Tertiary\")/following-sibling::table[position()=1]",
"url":"^http://www\\.flickr\\.com/photos/[^/]+/tags/[^/]",
"nextLink":"//a[@class=\"Next\"]"
},
{
"insertBefore":"//div[@class=\"ml\"]",
"pageElement":"id(\"Writinglist\")/div[not(@class)]",
"url":"^http://db\\.netkeiba\\.com/(?:horse/bbs|.*board)",
"nextLink":"//ul[@class=\"pager\"]//span[@class=\"active\"]/../following-sibling::li[not(@class=\"Not_Pager\")][1]/a"
},
{
"pageElement":"id('main')",
"url":"^http://[^.]+\\.asablo\\.jp/blog/(?:$|\\?offset=)",
"nextLink":"id(\"navi-top\")/a[last()]"
},
{
"pageElement":"//div[contains(@class, \"articles\")]/div[@class=\"btnlist\"]/following-sibling::node()[not(self::div[@class=\"ctrl\"]) and following::div[(@id=\"notice\") or (@id=\"red\" and @class=\"box\")]]",
"url":"^http://(?:mag\\.)?executive\\.itmedia\\.co\\.jp/",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"content\")/div[contains(@id,\"post-\")]",
"url":"^http://techlife\\.cookpad\\.com/(?:$|[?#]|page/)",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"insertBefore":"//div[contains(@class, \"photo-info\")]",
"pageElement":"//div[contains(@class, \"photo-body\")]",
"url":"^http://\\w+\\.engadget\\.com/photos/[^/]+/[^/]+/",
"nextLink":"//div[contains(@class, \"photo-body\")]/a"
},
{
"pageElement":"id(\"propertylist\")",
"url":"^http://www\\.penyards\\.com/SearchResults\\.aspx",
"nextLink":"//div[@id=\"property_search\"]//p[@class=\"pages\"]/a[last()]"
},
{
"pageElement":"//a[img/@class=\"manga-page\"]",
"url":"^http://(?:[^.]+\\.)?onemanga\\.com/(?:[^/]+/){3}",
"nextLink":"//a[img/@class=\"manga-page\"]"
},
{
"pageElement":"//table[@class=\"forumline\"]",
"url":"^http://forums\\.mozillazine\\.jp/viewforum\\.php",
"nextLink":"//td[@class=\"bodyline\"]/form/table[last()]/tbody/tr[1]/td[last()]/span[@class=\"nav\" and last()]/a[last()]"
},
{
"pageElement":"id(\"ynsubnav\")/following-sibling::table[2]//table[3]//table[position()>1 and position()<last()]",
"url":"^http://backnumber\\.dailynews\\.yahoo\\.co\\.jp/",
"nextLink":"id(\"ynsubnav\")/following-sibling::table[2]//a[(contains(@href,\"prevnect\") and contains(text(),\"\u6b21\")) and last()]"
},
{
"pageElement":"//table[@class=\"listBox\"]",
"url":"^http://www\\.pocketbooks-japan\\.com/index\\.php",
"nextLink":"//p[@class=\"listPrevNext\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"SC\"]/*",
"url":"^http://jappydolls\\.net/(?:page/\\d+)?(?:$|[?#])",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[.=\"\u00bb\"]"
},
{
"pageElement":"//hr[@size=\"1\" and @noshade=\"1\"]|//hr[@size=\"1\" and @noshade=\"1\"]/following-sibling::p[1]|//hr[@size=\"1\" and @noshade=\"1\"]/following-sibling::p[2]|//hr[@size=\"1\" and @noshade=\"1\"]/following-sibling::div[1]",
"url":"^http://www\\.imdb\\.com/title/[^/]+/usercomments",
"nextLink":"//img[@alt=\"[Next]\"]/ancestor::a"
},
{
"pageElement":"//font/parent::b/parent::td/parent::tr/following-sibling::tr",
"url":"^http://(?:[^.]+\\.)?imdb\\.com/.+/board(?:$|\\?)",
"nextLink":"//td/font[starts-with(normalize-space(), \"Pages:\")]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"maintable\")",
"url":"^http://www\\.empireonline\\.com/500/[0-9]+\\.asp",
"nextLink":"//img[@name=\"img1\"]/parent::a"
},
{
"pageElement":"id(\"hyouji\")/following-sibling::div[@class=\"navipage_\"][1]/following-sibling::*[./following-sibling::*/descendant-or-self::div[@class=\"navipage_\"]]",
"url":"^http://(?:[es]c\\.)?akizukidenshi\\.com/catalog/",
"nextLink":"id(\"hyouji\")/following-sibling::div[@class=\"navipage_\"]/a[img[starts-with(@alt,\"\u6b21\")]]"
},
{
"pageElement":"//div[contains(\" res_top res_txt res_foot \", concat(\" \", @class, \" \"))]",
"url":"^https?://cgi2\\.nhk\\.or\\.jp/ss-real/memberbbs/",
"nextLink":"//a[./img[@alt=\"\u6b21\u306e\u30da\u30fc\u30b8\"]]"
},
{
"insertBefore":"//div[@id=\"pages_btns\"]",
"pageElement":"//div[@class=\"mainbox threadlist\"]",
"url":"^http://jpmp3\\.com/(?:forumdisplay|search)\\.php",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//center[not(script)] | //center[not(script)]/following-sibling::p",
"url":"^http://(?:apod|antwrp\\.gsfc)\\.nasa\\.gov/apod/",
"nextLink":"//a[contains(text(), \"<\")]"
},
{
"pageElement":"id(\"squeeze\")//div[@class=\"view-content\"]/div[contains(concat(\" \", @class, \" \"), \" views-row \")]|id(\"squeeze\")//form/div/table",
"url":"^http://tech-seminar\\.jp/(?:$|seminar|admin|tag)",
"nextLink":"id(\"squeeze\")//li[@class=\"pager-next\"]/a|id(\"squeeze\")//span[@class=\"next\"]/a"
},
{
"pageElement":"//ol[@class=\"p1\"]",
"url":"^http://(?:www\\.)?yandex\\.[a-z]{2,3}/yandsearch",
"nextLink":"//a[text()=\"\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f\"]"
},
{
"insertBefore":"//hr",
"pageElement":"//dl",
"url":"^http://yui\\.cynthia\\.bne\\.jp/test/read\\.cgi/",
"nextLink":"//a[text()=\"\u6b2125\"]"
},
{
"pageElement":"//center",
"url":"^http://(?:www\\.)?tefutefu\\.jp/bbs/index1\\.cgi",
"nextLink":"//td/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"article\")",
"url":"^http://(?:www\\.)?legitreviews\\.com/article/\\d",
"nextLink":"id(\"article\")/h3/a"
},
{
"pageElement":"//div[@class=\"box_w_data\"]/parent::div",
"url":"^http://(?:www\\.)?eroshare\\.com/(?:$|all/|tag/)",
"nextLink":"//span[@class=\"paginations\"][number(text())>0]/following::a[1]"
},
{
"pageElement":"id('article')",
"url":"^http://event\\.media\\.yahoo\\.co\\.jp/nikkeibp/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"zebra\")/table[@class=\"qlist\"]",
"url":"^http://(?:www\\.)?moug\\.net/faq/search\\.php\\?",
"nextLink":"id(\"center\")/table//a[starts-with(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"//div[@class=\"detail\"]/ol",
"url":"^http://100\\.yahoo\\.co\\.jp/(?:search|category)",
"nextLink":"//span[@class=\"listNext\"]/a"
},
{
"pageElement":"//div[contains(concat(\" \",normalize-space(@class),\" \"), \" post \")]",
"url":"^http://www\\.optimagraphics\\.org/dannna_o/blog/",
"nextLink":"//a[contains(text(), \"\u00ab Older Entries\")]"
},
{
"pageElement":"//div[@class=\"results\"]/table",
"url":"^http://search\\.nttdocomo\\.co\\.jp/query\\.html",
"nextLink":"//a[last()][descendant::img[@src=\"http://www.nttdocomo.co.jp/images/mark/arrow_right_normal.gif\"]]"
},
{
"pageElement":"//div[@class=\"page_left\"]/div[(position() > 2) and (position() < last() - 1)]",
"url":"^http://xlink\\.planex\\.co\\.jp/procedure_74_jp/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//td[@width=\"640\" and @align=\"center\"]/*",
"url":"^http://portal\\.nifty\\.com/[0-9a-z]+/\\d+/\\d+/",
"nextLink":"//td[@class=\"tx12px\"]/a[contains(., \"\uff1e\")]"
},
{
"pageElement":"//div[@class=\"forum_content_main\"]",
"url":"^http://www\\.mobile01\\.com/topicdetail\\.php\\?",
"nextLink":"//a[@class=\"page\"][contains(., \"\u4e0b\u4e00\")]"
},
{
"pageElement":"//table[@class=\"data_table\"]/tbody/tr[2]",
"url":"^http://www\\.slmame\\.com/admin/atja_point\\.php",
"nextLink":"//div[@class=\"block\"]/a[starts-with(text(),\"\u00ab\")]"
},
{
"pageElement":"id(\"clsfds_list\")",
"url":"^http://www\\.car\\.gr/classifieds/(?:[^/]+/)+\\?",
"nextLink":"//span[@class=\"next_page\"]/a"
},
{
"pageElement":"//td[@class=\"blue_bg\"]/table",
"url":"^http://seiji\\.yahoo\\.co\\.jp/vote/comment/list",
"nextLink":"//div[@class=\"page-link yjS\"]/em/a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"results\")",
"url":"^https?://ubiquity\\.mozilla\\.com/trac/search\\?",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"center\")/div[4]",
"url":"^http://(?:www\\.)?picfor\\.me/(?:popular|recent)",
"nextLink":"//div[@class=\"next\"]/.."
},
{
"pageElement":"id(\"read\")",
"url":"^http://(?:www\\.)?coolboys\\.jp/pic/face\\d\\d?/",
"nextLink":"id(\"page\")/a[contains(text(),\"\u6b2120\u4ef6\")]"
},
{
"pageElement":"id(\"zebra\")/table[@class=\"qlist\"]",
"url":"^http://(?:www\\.)?moug\\.net/faq/viewforum\\.php",
"nextLink":"id(\"center\")/div[@class=\"txtC\"]/a[starts-with(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"_ctl0_MainContentHolder_prolisting1_MyList\")/tbody/tr",
"url":"^http://(?:[^.]+\\.)?avfantasy\\.com/[^.]+\\.aspx",
"nextLink":"//a[font[text()=\"Next\"]]"
},
{
"pageElement":"//*",
"url":"^http://www\\.geocities\\.co\\.jp/SweetHome/1863/",
"nextLink":"//a[last()]"
},
{
"pageElement":"//div[@class=\"torikumi_boxbg\"]|//table[following-sibling::div[@class=\"torikumi_boxbg\"]]",
"url":"^http://sumo\\.goo\\.ne\\.jp/hon_basho/hoshitori/",
"nextLink":"//td[a[contains(@href,\"hoshitori\")]][preceding-sibling::td[strong or b]][1]/a"
},
{
"pageElement":"id(\"contents_in\")/div[@class=\"c02l\"]/div[@class=\"c02l_in\"]",
"url":"^http://(?:www\\.)?moura\\.jp/ecologue/cosmology/",
"nextLink":"//div[@class=\"f_navi_in\"]/span[1]/following-sibling::a[1]"
},
{
"pageElement":"id(\"container\")/descendant::div[contains(concat(\" \", @class, \" \"), \" search_navi \")][1]/ancestor::table[1]/following-sibling::*[1][self::center]",
"url":"^http://www\\.nicomimi\\.net/(?:new|tag|ranking)",
"nextLink":"id(\"container\")//a[@class=\"next\"]"
},
{
"pageElement":"(id(\"articleHead artHeader\")|id(\"contdefault\")/h1)/following-sibling::*[not(@class=\"newauthor\" or @class=\"sbm\") and following::div[contains(@class, \"pager\") or contains(@class, \"pages pgbottom\")]]",
"url":"^http://(?:www\\.)?ascii\\.jp/elem/(?:[^/]+/){4}",
"nextLink":"//a[@class=\"next\" or parent::span[@class=\"next\"]]| //span[@class=\"next\" and last()]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"content-i\"]/table",
"url":"^http://(?:www\\.)?pimpyourfont\\.com/by-style/.",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" nav_cur \")][last()]"
},
{
"pageElement":"id(\"main\")//div[@class=\"ooogalaxy\"]",
"url":"^http://templates\\.services\\.openoffice\\.org/",
"nextLink":"id(\"main\")//div[@class=\"pager\"]/a[contains(concat(\" \", @class, \" \"), \" pager-next \")]"
},
{
"insertBefore":"//b[contains(text(), \"Next >>\")]/ancestor::p[1]",
"pageElement":"//img[contains(@src,\"pic/dl.gif\")]/ancestor::table[1]",
"url":"^http://(?:[^.]+\\.)?empornium\\.us/browse\\.php",
"nextLink":"//center/p[last()]/a[last()]"
},
{
"pageElement":"//div[@class=\"review-list\"]",
"url":"^http://[ru]\\.tabelog\\.com/.+/(rst|dtl)?rvwlst",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[starts-with(@id, \"node-\")]",
"url":"^http://www\\.dezinerfolio\\.com/blog(?:[/?#]|$)",
"nextLink":"//li[@class=\"pager-next\"]/a"
},
{
"pageElement":"//div[@id='main']",
"url":"^http://special\\.nikkeibp\\.co\\.jp/ts/article/",
"nextLink":"//a[img/@alt='Next']"
},
{
"pageElement":"id('result_3')/div[@class='newsarea']",
"url":"^http://www\\.kyoto-np\\.co\\.jp/search\\.php\\?",
"nextLink":"//div[@style='text-align: center;']/a[contains(text(),'\u6b21\u306e')]"
},
{
"pageElement":"//table[contains(@class, \"goods_search_list_style\")]",
"url":"^http://www\\.nagomi\\.ne\\.jp/Page/GOODS_SEARCH",
"nextLink":"//a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"//table[@class=\"result\"]//tr[position()!=1]",
"url":"^http://www\\.chefkoch\\.de/(?:rs/s|suche\\.php)",
"nextLink":"//strong/a[contains(text(),\"n\u00e4chste\")]"
},
{
"pageElement":"id(\"LeftCullum\")",
"url":"^http://(?:www\\.)?webdesign(?:file|clip)\\.com/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[last()-1]"
},
{
"pageElement":"id(\"slideImg\")",
"url":"^http://www\\.wired\\.com/(?:[^/]+/)*multimedia/",
"nextLink":"id(\"img_links\")/a[contains(text(),\"next\")]"
},
{
"pageElement":"//p[@class=\"time\"]/following-sibling::*[not(p[@class=\"pagenp\"]) and not(@class=\"acolumn\") and (following::self[@class=\"acolumn\"] or following::p[@class=\"pagenp\"])]",
"url":"^http://www\\.computerworld\\.jp/(?:topic|new)s/",
"nextLink":"id(\"article\")/div[@class=\"boxadd\"]/p/*/following-sibling::a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\u3078\")]"
},
{
"pageElement":"//div[@class=\"photo\"]",
"url":"^http://www\\.[fc]g-site\\.net/(?:content|tag)s/",
"nextLink":"//div[@class=\"wide_box\"]/div[last()]/span[@class=\"current\"]/following-sibling::*[1][self::span]/a"
},
{
"pageElement":"id(\"content\")/div[starts-with(@id, \"post-\")]",
"url":"^http://www\\.odysseygate\\.com/(?!archives/\\d)",
"nextLink":"id(\"nav-above\")/div[@class=\"nav-previous\"]/a"
},
{
"pageElement":"id(\"gridlist\")",
"url":"^http://image-search\\.yahoo\\.co\\.jp/search\\?",
"nextLink":"//a[@class=\"mmsnxtb\"]"
},
{
"pageElement":"id(\"content\")//ol[contains(concat(\" \", @class, \" \"), \" statuses \")] | id(\"content\")//table[contains(concat(\" \", @class, \" \"), \" doing \")]",
"url":"^ttps?://(?:(?:api|explore|m)\\.)?twitter\\.com/",
"nextLink":"//a[contains(concat(\" \", translate(normalize-space(@rel), \"EPRV\", \"eprv\"), \" \"), \" prev \") or contains(concat(\" \", translate(normalize-space(@rel), \"ENTX\", \"entx\"), \" \"), \" next \")]"
},
{
"insertBefore":"id(\"universal\")/*[@class][last()]",
"pageElement":"id(\"universal\")/div[not(@*)]",
"url":"^http://www\\.google(?:\\.[^./]{2,3}){1,2}/m\\?.",
"nextLink":"//*[starts-with(text(), \"Next page\") or starts-with(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//*[preceding-sibling::div[@class=\"pager1\"]][following-sibling::div[@class=\"pager2\"]]",
"url":"^http://www\\.microsoft\\.com/japan/powerpro/TF/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"listHotelArea\")",
"url":"^http://web\\.travel\\.rakuten\\.co\\.jp/portal/",
"nextLink":"//a[text()=\"\u6b21\u306e30\u4ef6\"]"
},
{
"insertBefore":"id(\"trackback\")/following-sibling::node()",
"pageElement":"id(\"content\")/div[@class=\"blog\"]",
"url":"^http://[^.]+\\.seesaa\\.net/article/\\d+\\.html",
"nextLink":"id(\"content\")/div[@class=\"navi\"]/a[text()=\"<<\"]"
},
{
"pageElement":"id(\"index\")/following-sibling::tr",
"url":"^http://(?:www\\.)?freespot\\.com/map/list\\.php",
"nextLink":"//a[text()=\"\u6b21\u3092\u8868\u793a\"]"
},
{
"insertBefore":"//div[@class=\"pager\"][last()]",
"pageElement":"id(\"hourlyreport\")/table",
"url":"^http://counter\\.hatena\\.ne\\.jp/.+?/report\\?",
"nextLink":"//div[@class=\"pager\"][last()]/a[last()]"
},
{
"pageElement":"//table[@class=\"problems\"]",
"url":"^http://www\\.spoj\\.pl/(?:problem|rank|statu)s/",
"nextLink":"//a[@class=\"pager_link\"][text()=\"Next\"]"
},
{
"pageElement":"id(\"punwrap\")",
"url":"^http://bbs\\.archlinux\\.org/viewforum\\.php\\?",
"nextLink":"id(\"punviewforum\")/div[@class=\"linksb\"]/div[@class=\"inbox\"]/p[@class=\"pagelink conl\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"//div[starts-with(@class, \"shop-detail\")]",
"url":"^http://www\\.fujiya-peko\\.co\\.jp/shop/result/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"wikipedia\")",
"url":"^http://(?:www\\.)?flinker\\.jp/keyword/fkeyword",
"nextLink":"id(\"wikipedia\")/following::div[@class=\"right\"]/a"
},
{
"pageElement":"id(\"results\")/tbody/tr",
"url":"^http://(?:www\\.)?haskell\\.org/hoogle/3/\\?q=.",
"nextLink":"id(\"select\")/a[@class=\"active\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"punwrap\")",
"url":"^http://bbs\\.archlinux\\.org/viewtopic\\.php\\?",
"nextLink":"id(\"punviewtopic\")/div[@class=\"postlinksb\"]/div[@class=\"inbox\"]/p[@class=\"pagelink conl\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"index_content\")//table[@summary=\"\u4e00\u89a7\"]",
"url":"^http://www\\.niconicommons\\.jp/(?:recent|tag)/",
"nextLink":"id(\"index_content\")//a[@class=\"arrow_next\"]"
},
{
"pageElement":"id('searchResult')/table",
"url":"^http://(?:www\\.)?nikkeibook\\.com/errata\\.php",
"nextLink":"id('searchResult')//a[contains(text(), \">>\")]"
},
{
"pageElement":"id(\"searchtable\")/tbody/tr",
"url":"^http://sourceforge\\.net/s(?:earch|oftwaremap)/",
"nextLink":"id(\"searchtable\")/tfoot/tr/td/form/a[last()]"
},
{
"pageElement":"id(\"discographyContentWrapper\")/div[position()>1 and position()< last()]",
"url":"^http://(?:www\\.)?8bitpeoples\\.com/discography",
"nextLink":"//div[@class=\"discographyPagesBlock\"]/a[contains(text(), \"NEXT\")]"
},
{
"pageElement":"id(\"contents\")/form",
"url":"^http://webshop\\.montbell\\.jp/goods/list\\.php",
"nextLink":"id(\"contents\")//div[@class=\"opeArea\"]/div[@class=\"leftArea\"]/p[@class=\"here\"]/a"
},
{
"pageElement":"//node()[preceding-sibling::hr and following-sibling::hr]",
"url":"^http://(?:www\\.)?alabout\\.com/s?list\\.php\\?",
"nextLink":"//a[contains(text(),\"\u6b21\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"nowListArea\")/li",
"url":"^http://now\\.ameba\\.jp/[^/]+/follow(?:ers|ing)",
"nextLink":"id(\"mainArea\")/div[@class=\"paging\"]/a[@class=\"right\"]"
},
{
"pageElement":"//div[@class=\"g-section cx-search-result\"]",
"url":"^https://chrome\\.google\\.com/extensions/list/.",
"nextLink":"//div[@class=\"g-section cx-paginator\"]//span[last()]/a"
},
{
"insertBefore":"id(\"albumnav\")",
"pageElement":"id(\"mypix\")",
"url":"^http://my\\.opera\\.com/[^/]+/albums/show\\.dml",
"nextLink":"id(\"albumnav\")/p[@class=\"pagenav\"]/a[last()]"
},
{
"pageElement":"//div[contains(concat(\" \",normalize-space(@class),\" \"), \" tlGray \") or contains(concat(\" \",normalize-space(@class),\" \"), \" tlWhite \")]",
"url":"^http://(?:www\\.movatwi|movatwitter)\\.jp/user/",
"nextLink":"//a[@accesskey=\"6\"]"
},
{
"pageElement":"id(\"mainContentsWrapSecond\")/div[@class=\"searchListInner\"]/div[contains(@class, \"article\")]",
"url":"^http://www\\.hotpepper\\.jp/(?:A_1[12]100|CSP)/",
"nextLink":"id(\"mainContentsWrapSecond\")/div[@class=\"searchListInner\"]/div[@class=\"searchResults\"]/div[@class=\"linearNav\"]/ul/li[contains(@class, \"next\")]/a"
},
{
"pageElement":"//div[@class=\"work_read_header\"]/following-sibling::node()[ following::div[@class=\"work_read_footer\"] ]",
"url":"^http://(?:[^/]+\\.)?novelist\\.jp/.+_p.+\\.html",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"searchresult\")/div[@class=\"content\"]/div[contains(@class,\"unit\")]",
"url":"^http://search-web\\.slmame\\.com/cgi-bin/search",
"nextLink":"id(\"searchresult\")//p[contains(concat(\" \",@class,\" \"),\" pager \") and last()]/a[last() and contains(text(),\"\u6b21\")]"
},
{
"pageElement":"//table[@class=\"maintable\"]",
"url":"^http://www\\.animewallpapers\\.com/wallpapers/",
"nextLink":"//a[starts-with(text(), \"Next\")]"
},
{
"pageElement":"id('tmplBody')/div/*[not(self::div[@id=\"notice\"]) and not(self::div[@class=\"ctrl\"])] | id(\"update\")/following-sibling::*[not(@class=\"ctrl\") and not(@id=\"notice\") and following::*[@class=\"ctrl\"]]",
"url":"^http://bizmakoto\\.jp/bizid/articles/.+\\.html",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"main\")//div[contains(@class, \"article-main\")]/p[contains(@class, \"article-lead\")]/following-sibling::*",
"url":"^http://diamond\\.jp/series/[^/]+/(?!bn\\.html)",
"nextLink":"id(\"main\")//div[contains(@class, \"pagination\")]//a[@class=\"next\"]"
},
{
"pageElement":"id(\"alpha-inner\")/div[position() > 1 and position() < 12]",
"url":"^http://[^.]+\\.vox\\.com/explore/neighborhood/",
"nextLink":"//div[@class=\"pager-inner\"]/ul/li[@class=\"item next\"]/a"
},
{
"pageElement":"id(\"main\")//div[@class=\"headline\"]/p[@class=\"pageNavgation\"][1]/following-sibling::*[following-sibling::p[@class=\"pageNavgation\"]]",
"url":"^http://(?:www\\.)?spiralmarket\\.com/archives/",
"nextLink":"id(\"main\")//p[@class=\"pageNavgation\"]/span[last()]/a"
},
{
"pageElement":"id(\"list\")",
"url":"^http://(?:www\\.)?readitlaterlist\\.com/unread",
"nextLink":"//a[@id=\"next\"][contains(concat(\" \",@class,\" \"),\" active \")]"
},
{
"pageElement":"id(\"resultstable\")//tr",
"url":"^http://code\\.google\\.com/p/(?:[^/]+/){2}list",
"nextLink":"id(\"bub\")//div[contains(concat(\" \", @class, \" \"), \" pagination \")]/a[contains(., \"\u203a\")]"
},
{
"insertBefore":"//center/table/tbody/tr/td/table[last()-1]",
"pageElement":"//center/table/tbody/tr/td/table[last()-2]",
"url":"^http://blog-search\\.yahoo\\.co\\.jp/search\\?",
"nextLink":"//a[child::img[contains(@src, \"ar_next.gif\")]]"
},
{
"pageElement":"id(\"mb_title\")/following-sibling::node() | id(\"author_profile\")",
"url":"^http://www\\.nikkeibp\\.co\\.jp/style/biz/abc/",
"nextLink":"id(\"pages\")/tbody/tr/td[last()]/a"
},
{
"pageElement":"id(\"body\")",
"url":"^http://www\\.theregister\\.co\\.uk/(\\d+/){3}.",
"nextLink":"id(\"pages-nav\")/li[@class=\"last\"]/a"
},
{
"pageElement":"id(\"gray02Wrapper\")/table[@class=\"commonTables\"]",
"url":"^http://s\\d+\\.3gokushi\\.jp/user/status\\.php",
"nextLink":"id(\"gray02Wrapper\")/ul[@class=\"pager\"]/li[@class=\"last\"]/a[1]"
},
{
"pageElement":"//table[last()]",
"url":"^http://cgiserv01\\.fc2web\\.com/g-i-m-g-s/top/",
"nextLink":"//a[starts-with(@href,\"top_\")][last()]"
},
{
"pageElement":"//table[@class=\"listtable2\"]",
"url":"^http://g\\.hatena\\.ne\\.jp/grouplist(?:$|\\?)",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//table[@class=\"list0\"]/tbody/tr",
"url":"^http://find\\.2ch\\.net/enq/result_index\\.php",
"nextLink":"//td[last()]/div[last()]/a[contains(text(),\">\")]"
},
{
"insertBefore":"(//div[@class=\"clearFix pagingNavi2\"])[last()]",
"pageElement":"id(\"newestImages2\")",
"url":"^http://blogs\\.yahoo\\.co\\.jp/[^/]+/GALLERY/.",
"nextLink":"//p[@class=\"forwardNext\"]/a[2]"
},
{
"pageElement":"id(\"widgets_list\")",
"url":"^http://(?:www\\.)?chumby.com/guide/category/.+",
"nextLink":"//div[@class=\"paginator\"]//a[@class=\"current_page\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"md_interviewdetail\")//div[@class=\"section\"]",
"url":"^http://r25\\.yahoo\\.co\\.jp/interview/detail/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"intelliTxt\")/following-sibling::node()[1]",
"pageElement":"id(\"intelliTxt\")",
"url":"^http://www\\.oreillynet\\.com/pub/a/.+?\\.html",
"nextLink":"id(\"page-break\")//p[@class=\"secondary\"]/a[last()]"
},
{
"insertBefore":"//form/center/table[@width=\"95%\"]/following-sibling::*",
"pageElement":"//form/center/table[@width=\"95%\"]",
"url":"^http://nijinochocolate\\.homelinux\\.net/niji/",
"nextLink":"(//form/center/span/a[text()=\"\u6b21\"])[last()]"
},
{
"insertBefore":"//form[@name=\"narabi\"]/following-sibling::table[2]",
"pageElement":"//form[@name=\"narabi\"]/following-sibling::table[1]",
"url":"^http://www\\.bh-jinbocho\\.com/zkin/bhj_search",
"nextLink":"//img[@src=\"/img/next.gif\"]/parent::a"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"kiji\")]",
"url":"^http://fxwiki\\.blog63\\.fc2\\.com/(?:$|page-)",
"nextLink":"id(\"page_navi\")/table/tbody/tr/td[last()]/a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://(?:us\\.)?(?:gizmodo|lifehacker)\\.com/",
"nextLink":"(id(\"searchpager\") | //div[contains(concat(\" \", @class, \" \"), \" page_navigation \")])//a[contains(text(), \"next\")]"
},
{
"insertBefore":"//div[contains(@class,\"bottombar\")]",
"pageElement":"id('lt_catalog_list')",
"url":"^http://www\\.librarything\\.com/catalog_bottom",
"nextLink":"(//a[contains(@class,\"pageShuttleButton\")][not(contains(@href,\"offset=0\"))])[last()]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" item \")]",
"url":"^http://(?:www\\.)?idee-online\\.com/shopbrand/",
"nextLink":"//div[@class=\"page_list_top\"]//a[contains(text(),\"[\u6b21]\")]"
},
{
"pageElement":"id(\"maincol\")/div[@class=\"content\"]",
"url":"^http://(?:www\\.)?gigazine\\.net/(?:$|[^/]+/P)",
"nextLink":"id(\"maincol\")//div[@class=\"paginate\"]/a[contains(text(),\"\u6b21\u3078\") or text()=\">\"]"
},
{
"pageElement":"id(\"left\")/div[@class=\"leaderboard\"]/div[@class=\"content\"]",
"url":"^http://[^.]+\\.mygamercard\\.net/clboard\\.php",
"nextLink":"//div[@class=\"rightColumn\"]/a"
},
{
"pageElement":"//div[@class=\"content\"]/child::*[not(@class=\"navigation\")]",
"url":"^http://google-mania\\.net/(?:$|tag/|archives/)",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"//td[contains(@class,\"bbsCont1\")]/table[contains(@class,\"bbsContEnt\")]",
"url":"^http://(?:www\\.)?[^-]+-bbs\\.com/cgi-bin/bbs/",
"nextLink":"//a[starts-with(@href,\"?page=\") and preceding-sibling::b]"
},
{
"pageElement":"id(\"liveItemsWrap\")/*",
"url":"^http://live\\.nicovideo\\.jp/(?:recent|search)",
"nextLink":"id(\"liveList\")//a[@class=\"next\"]"
},
{
"pageElement":"//table",
"url":"^http://uni\\d+\\.ogame\\.jp/game/pranger\\.php",
"nextLink":"//a[contains(text(), \">>\")]"
},
{
"pageElement":"id('main_frame')/div[@class=\"pa_t10\"][2]",
"url":"^http://(?:www\\.)?tvais\\.jp/more_list\\.php.+",
"nextLink":"id('main_frame')/div[4]/div/table/descendant::td/a[last()]"
},
{
"pageElement":"id(\"category main-inner\")",
"url":"^http://web\\.doujindou\\.com/(?:category|new)/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30ea\u30b9\u30c8\")]"
},
{
"pageElement":"//table[@class=\"table-list\"]//tr[contains(@class,\"hatena-star-entry\")]",
"url":"^http://d\\.hatena\\.ne\\.jp/designset(?:$|\\?)",
"nextLink":"//div[@class=\"pager-r\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"keyword-list\"]/ul/li[not(@class=\"pager\")]",
"url":"^http://d\\.hatena\\.ne\\.jp/keywordlist($|\\?)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"forum_content_main\"]",
"url":"^http://www\\.mobile01\\.com/topiclist\\.php\\?",
"nextLink":"//a[@class=\"page\"][contains(., \"\u4e0b\u4e00\")]"
},
{
"pageElement":"id(\"ListProducts\")",
"url":"^http://(?:www\\.)?takeoff-clothing\\.com/shop/",
"nextLink":"id(\"pageNaviBottom\")/a[@title=\"next page\"]"
},
{
"pageElement":"//div[@align=\"center\"]/table[@width=\"85%\"]",
"url":"^http://www\\.getchu\\.com/php/calendar\\.phtml",
"nextLink":"//center/a[last()]"
},
{
"pageElement":"//div[@class=\"bloc01\"]/div",
"url":"^http://(?:www\\.)?k-seven\\.co\\.jp/blog_mori/",
"nextLink":"//td[@class=\"nb_right\"]/a[child::img[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]]"
},
{
"pageElement":"//div[@class=\"mainArticle\"]",
"url":"^http://president\\.jp\\.reuters\\.com/article/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://(?:www\\.)?fakku\\.net/viewonline\\.php",
"nextLink":"id(\"content\")/a"
},
{
"pageElement":"//*[contains(concat(\" \", @class, \" \"), \" category_itemnamelink \")]/../../../..",
"url":"^http://item\\.rakuten\\.co\\.jp/(?:[^/]+/)+?c/",
"nextLink":"//*[contains(concat(\" \", @class, \" \"), \" selectb \")]/a[contains(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"search_contents\")",
"url":"^http://(?!www)(?:[^.]+\\.)?fooooo\\.com/search",
"nextLink":"id(\"pg_area\")/span/following-sibling::a"
},
{
"pageElement":"//ul[contains(@class,\"vList_hDetails\")]",
"url":"^http://www\\.veoh\\.com/userVideos\\.html\\?.",
"nextLink":"//li[@class=\"page_current\"]/following-sibling::li/a"
},
{
"pageElement":"//div[@class=\"entryBody\"]",
"url":"^http://news\\.nifty\\.com/cs/magazine/detail/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"insertBefore":"id(\"trackback\")/following-sibling::node()rn",
"pageElement":"id(\"content\")/div[@class=\"blog\"]",
"url":"^http://nekoyanagi\\.net/article/\\d+\\.htmlrn",
"nextLink":"id(\"content\")/div[@class=\"navi\"]/a[contains(text(), \"<<\")]"
},
{
"pageElement":"//table//tr[//div]",
"url":"^http://followfinder\\.googlelabs\\.com/search",
"nextLink":"//td[@class=\"more\"]//a[last()]"
},
{
"insertBefore":"id(\"national-giographic\")/p[contains(@class,\"more\")]",
"pageElement":"id(\"national-giographic\")/div[contains(@class,\"entryBody\")]",
"url":"^http://news\\.nifty\\.com/cs/magazine/detail/",
"nextLink":"id(\"national-giographic\")/p[contains(@class,\"more\")]/a"
},
{
"pageElement":"id(\"iza_SSMainBody\")//img[@class=\"content_img\"]",
"url":"^http://www\\.iza\\.ne\\.jp/news/.+/slideshow/",
"nextLink":"id(\"iza_SSMainBody\")//a"
},
{
"insertBefore":"//div[@align=\"center\"]/preceding-sibling::hr[1]",
"pageElement":"//div[@align=\"left\"]/node()[self::text() or self::br]",
"url":"^http://(?:www\\.)?nkst\\.jp/[^/]+/novel\\.php",
"nextLink":"//a[@title=\"next\"]"
},
{
"pageElement":"//tr",
"url":"^http://ichi5c2\\.mint\\.aisnet\\.jp/ponihuri/",
"nextLink":"//a[contains(text(),\"NEXT\")]"
},
{
"pageElement":"//div[@class=\"results_container\"]/div",
"url":"^http://search\\.secondlife\\.com/search\\.php",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" navigation \")]/a[last() and contains(text(),\"Next\")]"
},
{
"pageElement":"//p[.//img]",
"url":"^http://mizzo\\.web\\.fc2\\.com/page\\d+\\.htm",
"nextLink":"//p//a[.//img]"
},
{
"pageElement":"id(\"LEFTSIDE_S\")",
"url":"^http://www\\.france\\.jp/servlet/Satellite\\?",
"nextLink":"id(\"LEFTSIDE_S\")/div[@class=\"pagenate\"]/a[@class=\"nextpage\"]"
},
{
"pageElement":"//div[@class=\"ImgCenter\"]",
"url":"^http://www\\.asahi\\.com/travel/rail/gallery/",
"nextLink":"//p[@class=\"Next\"]/a"
},
{
"pageElement":"//ul[@class=\"list\"]",
"url":"^http://pupe\\.ameba\\.jp/cute/community/goods",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"ok_main\")/div[@class=\"ok_search_wrapper\"][last()]",
"pageElement":"id(\"ok_main\")/table[@class=\"ok_seach_list\"]",
"url":"^http://(?:[^.]+\\.)?okwave\\.jp/search\\.php3",
"nextLink":"id(\"ok_main\")/div[@class=\"ok_paging\"]//a[contains(., \">\")]"
},
{
"pageElement":"id(\"productsContainer\")/*",
"url":"^http://www\\.ikea\\.com/(?:\\w\\w/){2}search/",
"nextLink":"id(\"main\")/div/div[contains(@class,\"paginationMenu\")]//span[@class=\"paginationButtonTextPaddingNext\"]/a"
},
{
"pageElement":"//div[@class=\"SearchBody\"]",
"url":"^http://www\\.shufuni\\.com/SearchResult\\.asp",
"nextLink":"id(\"ctl00_cphBody_divPaging1\")/a[last()]"
},
{
"pageElement":"//table[preceding-sibling::center[div[normalize-space(@class)=\"fnt\"]]]",
"url":"^http://(?:www\\.)?yourfilehostdatabase\\.com/",
"nextLink":"descendant::div[normalize-space(@class) = \"fnt\"][2]/text()[not(normalize-space(self::text()) = \"Page:\") and (number(normalize-space(self::text())) > 0 or normalize-space(self::text()) = \"Page:0\") ]/following-sibling::a[1]"
},
{
"pageElement":"//b[contains(text(), \"Filename\")]/ancestor::table[1]",
"url":"^http://lite\\.modarchive\\.org/index\\.php\\?",
"nextLink":"//form//a[contains(text(), \">\")]"
},
{
"pageElement":"id(\"listPhoto\")/*[not(@class=\"container-pagelinks\") and not(@title)]",
"url":"^http://www\\.ashinari\\.com/category\\.php\\?",
"nextLink":"//a[text()=\">\"]"
},
{
"pageElement":"id(\"articlebody\")/*[not(@class=\"magGuidance\") and not(@class=\"nextPagePreview\") and following::div[@id=\"naviBottom\"] and not(descendant::*[contains(text(), \"\u65e5\u7d4c\u30d3\u30b8\u30cd\u30b9\u7279\u5225\u8cfc\u8aad\u306f\u3053\u3061\u3089\u304b\u3089\") or contains(text(), \"\u6b21\u30da\u30fc\u30b8\u4ee5\u964d\u306f\u300cNBonline\u4f1a\u54e1\u300d\")])] | id('leaf-main')//div[@class=\"story\"]",
"url":"^http://business\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"id(\"naviBottom\")//a[text()=\">>\"] | id('leaf-main')//div[@class=\"next_p\"]/a"
},
{
"pageElement":"//tr[contains(@class,\"resultGroup\")]",
"url":"^http://www\\.altavista\\.com/video/results\\?",
"nextLink":"//b[contains(concat(\" \",@class,\" \"),\" m \")][last()]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"wrapper\")",
"url":"^http://(?:www\\.)?glendenny\\.com/Portfolios/",
"nextLink":"id(\"arrows\")//a[contains(text(), \">\")] "
},
{
"pageElement":"//td[@class=\"middle\"]/div[@class=\"padding\"]/node()[@class=\"contentpaneopen\" or position()=last()]",
"url":"^http://www\\.mf-davinci\\.com/yoo/index\\.php",
"nextLink":"//th[@class=\"pagenav_next\"]/a"
},
{
"pageElement":"//div[@class=\"thumb_list\"]",
"url":"^http://www\\.imdb\\.com/name/[^/]+/mediaindex",
"nextLink":"//div[@class=\"leftright\" and position()=1]//a[position()=last() and starts-with(normalize-space(text()), \"Next \")]"
},
{
"pageElement":"//div[@class=\"Wireless_AreaSearchDetail\"]/table/tbody/tr[position()>2]",
"url":"^http://wireless\\.yahoo\\.co\\.jp/bin/list\\?",
"nextLink":"//span[@class=\"Pager\"]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"//table[2]/tbody/tr/td[1]/table[1]",
"url":"^http://www\\.altavista\\.com/audio/results\\?",
"nextLink":"//b[contains(concat(\" \",@class,\" \"),\" m \")][last()]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://(?:www\\.)?moura\\.jp/ecologue/ecoist/",
"nextLink":"//div[@class=\"f_navi\"]/span[1]/following-sibling::a[1]"
},
{
"pageElement":"//tr[contains(@class, \"resultGroup\")]",
"url":"^http://www\\.altavista\\.com/image/results\\?",
"nextLink":"//b[contains(concat(\" \", @class, \" \"), \" m \")][last()]/a[contains(text(), \"Next\")]"
},
{
"pageElement":"//td[@class=\"contents\"]/table[2]",
"url":"^http://www\\.bh-recipe\\.jp/recipe/list\\.php",
"nextLink":"//td[@class=\"contents\"]/table[last()]//a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"id('page-body')/div[@id!='headerspace'] | //div[@class='forabg']",
"url":"^http://bbs\\.operachina\\.com/viewtopic\\.php",
"nextLink":"id('paginationbottom')/a[last()]"
},
{
"pageElement":"//comment()[contains(., \"\u5546\u54c1\u4e00\u89a7\u30c6\u30fc\u30d6\u30eb START\")]/following-sibling::table[1]/tbody/tr[not(descendant::td[@class=\"table_title\"])]",
"url":"^http://www\\.bestgate\\.net/search\\.phtml\\?",
"nextLink":"//div[@class=\"page\"]/a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"//div[(@class=\"forabg\" and div/table/@class=\"ttopiclist\") or @class=\"pagination\"] | id(\"page-body\")/div[@class=\"buttons\"]",
"url":"^http://bbs\\.operachina\\.com/viewforum\\.php",
"nextLink":"//div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"id(\"content\")/div[@class=\"blog\" or @id=\"comments\"]",
"url":"^http://[^.]+\\.sblo\\.jp/article/[^.]+\\.html",
"nextLink":"id(\"content\")/div[@class=\"navi\"]/a"
},
{
"pageElement":"id(\"pixiv\")/div[2]/div[3]",
"url":"^http://www\\.pixiv\\.net/event_member\\.php.+",
"nextLink":"//a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"in-center\")/div[@class=\"content-2c\"]/div[@class=\"content-body\"]/div[@class=\"mod-entry-set\"]/div[@class=\"entry\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/thetrailstore/e/",
"nextLink":"id(\"in-center\")/div[@class=\"content-2c\"]/div[@class=\"content-body\"]/div[@class=\"mod-entry-set\"]/div[@class=\"entry\"]/div[@class=\"entry-body\"]/div[@class=\"entry-body-text\"]/a"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"id(\"content\")",
"url":"^http://[^.]+\\.vox\\.com/library/posts/tags/",
"nextLink":"//ul[@class=\"pager-list\"]/li[@class=\"item next\"]/a"
},
{
"pageElement":"id(\"index\")/div[position()!=1 and position()!=last()]",
"url":"^http://wiredvision\\.jp/(?:news|blog)/[^/]+/",
"nextLink":"id(\"index\")/div[1]/p[@class=\"forward\"]/a"
},
{
"pageElement":"id(\"friendList\")",
"url":"^http://profile\\.livedoor\\.com/[^/]+/friend",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//tr[td[1][@valign=\"middle\"]][td[2][@class=\"standard\"]]",
"url":"^http://(?:[^.]+\\.)?imdb\\.com/mymovies/list",
"nextLink":"//td[@class=\"standard\"][@align=\"right\"]/a[text()=\"Next\"]"
},
{
"pageElement":"id(\"diary\")/div[@class=\"diary\"]",
"url":"^http://www\\.ag-pro\\.net/cgi_bin/kuramania/",
"nextLink":"id(\"navi\")/ul/li[last()]/a"
},
{
"pageElement":"id(\"blog_list_block\")",
"url":"^http://[^.]+\\.areablog\\.jp/more_post\\.asp",
"nextLink":"id(\"blog_list_block\")/following-sibling::table//a[preceding-sibling::font[@color=\"red\"] or text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@class=\"navboxauto_InfoSpace\"]/table[last()]/preceding-sibling::*",
"url":"^http://www\\.iajapan\\.org/anti_spam/portal/",
"nextLink":"//div[@class=\"navboxauto_InfoSpace\"]/table[last()]//a[contains(., \"NEXT\")]"
},
{
"pageElement":"id(\"main_block\")",
"url":"^http://vipvipblogblog\\.blog119\\.fc2\\.com/",
"nextLink":"//div[@class=\"pnavi\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"subcontent\"]",
"url":"^http://(?:www\\.)?anandtech\\.com/show/\\d+/",
"nextLink":"//div[@class=\"article_links\"]/a[@class=\"right\"]"
},
{
"insertBefore":"//div[@class=\"listboxfoot\"]",
"pageElement":"//div[@class=\"listbox\"]/div[@class=\"listboxin\"]",
"url":"^http://knowledge\\.livedoor\\.com/[^/]+/\\d+",
"nextLink":"//a[@accesskey=\"n\"]"
},
{
"pageElement":"id(\"punwrap\")",
"url":"^http://bbs\\.archlinux\\.org/search\\.php\\?",
"nextLink":"id(\"punsearch\")/div[@class='linkst']/div[@class='inbox']/p[@class='pagelink']/strong/following-sibling::a[1]"
},
{
"insertBefore":"//table[@class=\"userdelete\"]",
"pageElement":"//form[@id=\"delform\"]/*/preceding-sibling::node()[not(table[@class=\"delform\"])]",
"url":"^http://img\\.gurochan\\.net/[^/]+/.+\\.html$",
"nextLink":"//form[child::input[@value=\"Next\"]]"
},
{
"pageElement":"//table[3]/tbody/tr/td/div/table[2]/tbody/tr/td/table",
"url":"^http://www\\.altavista\\.com/news/results\\?",
"nextLink":"//b[contains(concat(\" \",@class,\" \"),\" m \")][last()]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//div[@class=\"pagenavcounter\"]/parent::td/parent::tr",
"url":"^http://www\\.clustermonkey\\.net/.*/content/",
"nextLink":"//div[@class=\"pagenavbar\"]//a[text()=\"Next Page >>\"]"
},
{
"pageElement":"id(\"programBox\")/following-sibling::node()",
"url":"^http://www\\.allnightnippon\\.com/gold/\\w+/",
"nextLink":"id(\"prevLink\")/a"
},
{
"pageElement":"//table[@class=\"borderinterior\"]",
"url":"^http://brokenstones\\.(?:me|cn)/browse\\.php",
"nextLink":"//table[@class=\"borderinterior\"]/following-sibling::p/a/b[contains(text(),\"Next\")]/parent::a"
},
{
"pageElement":"//div/center/table/tbody/tr/td[@class=\"ItemCell\"]/div/center",
"url":"^http://impre\\.net/php/impre/impreshow\\.php",
"nextLink":"//a[text()=\"NEXT>>\"]"
},
{
"pageElement":"//div[@class=\"listList\"]",
"url":"^https?://employment\\.en-japan\\.com/search/",
"nextLink":"//a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"left\"]/*[self::h3 or self::div[@class=\"body\"]]",
"url":"^http://imihu\\.blog30\\.fc2\\.com/(?:$|page)",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//center/a",
"url":"^http://mure\\.hp\\.infoseek\\.co\\.jp/comic/",
"nextLink":"//center/a"
},
{
"pageElement":"id(\"event_list\")",
"url":"^http://www\\.osaka-info\\.jp/jp/search/list/",
"nextLink":"//a[contains(text(),\"NEXT\u203a\u203a\")]"
},
{
"insertBefore":"id(\"story\")/following-sibling::node()[1]",
"pageElement":"id(\"story\")",
"url":"^http://www\\.excite\\.co\\.jp/webad/special/",
"nextLink":"//span[@class=\"nextnx\"]/a"
},
{
"pageElement":"id(\"contentsColumn\")/div[contains(@class,\"entryImgBox\")]",
"url":"^http://(?:www\\.)?cinra\\.net/(?!interview/)",
"nextLink":"id(\"contentsColumn\")/div[contains(@class,\"pageNum\")]/p[@class=\"txtNext\"]/a"
},
{
"insertBefore":"//h2[@class=\"next\"]",
"pageElement":"//h2[@class=\"next\"]/preceding-sibling::* | //div[@class=\"pages\"][last()]/preceding-sibling::*",
"url":"^http://www\\.nikkeibp\\.co\\.jp/netmarketing",
"nextLink":"//img[contains(@src, \"p_next.gif\")]/parent::a"
},
{
"insertBefore":"//div[@class=\"pagingContainer\"]",
"pageElement":"//div[@class=\"latestVideos\"]/div[@class=\"mediaDisplay\"]",
"url":"^http://(?:[^.]+\\.)?pornotube\\.com/.+\\.php",
"nextLink":"//ul[@class=\"paging\"]/li[last()]/a"
},
{
"pageElement":"//div[@class=\"article\"]",
"url":"^http://developer\\.mozilla\\.org/[^/]+/docs/",
"nextLink":"//div[@class=\"prevnext\"]/p//span[last()]/a"
},
{
"pageElement":"id(\"mod-prev-next\")/preceding-sibling::*",
"url":"^http://blog\\.goo\\.ne\\.jp/coordinator_2005",
"nextLink":"id(\"mod-prev-next\")//li[@class=\"mod-pre-nex-prev\"]/a"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://newser\\.s312\\.xrea\\.com/(?:$|page)",
"nextLink":"id(\"main\")/div[last()]/a[last()]"
},
{
"pageElement":"id(\"content\")/div[starts-with(@id, \"post-\")]",
"url":"^http://www\\.pi-kun\\.com/(?!archives/\\d+$)",
"nextLink":"id(\"nav-above\")/div[@class=\"nav-previous\"]/a"
},
{
"pageElement":"id(\"current-content\")/div[contains(@class,\"hentry\")]",
"url":"^http://selebriti\\.mentalmasturbasyon\\.com/",
"nextLink":"id(\"nav-below\")/div[@class=\"nav-previous\"]/a"
},
{
"pageElement":"id(\"centerc1\")/div[@class=\"BlockContent\"]/table[@id=\"timeline\"]",
"url":"^http://(?:www\\.)?meyou\\.jp/modules/search/",
"nextLink":"id(\"centerc1\")/div[@class=\"BlockContent\"]/div[last()]/a[contains(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"days\")/div",
"url":"^https?://(?:d|[^.]+\\.g)\\.hatena\\.ne\\.jp/",
"nextLink":"//a[@rel=\"prev\"]"
},
{
"pageElement":"//div/div/table/tbody/tr/td/table",
"url":"^http://www\\.getchu\\.com/php/search\\.phtml",
"nextLink":"//a[@title=\"next page\"]"
},
{
"pageElement":"//div[@class=\"yui-u first photolist section\"]/table",
"url":"^http://(?:www\\.)?bcphotoshare\\.com/photos/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"//table[@class=\"list3\"]",
"url":"^http://www\\.a-cute\\.jp/top\\.php\\?pg=\\d+",
"nextLink":"//table[@class=\"list6\"]/tbody/tr/td[last()]/a[text()=\"\u6b21\u306e10\u4ef6\"]"
},
{
"pageElement":"//div[@class=\"article\"]",
"url":"^http://news\\.livedoor\\.com/article/detail/",
"nextLink":"//div[@class=\"article-page\"]//td[@class=\"link-next\"]/a"
},
{
"pageElement":"id(\"mainBlock\")",
"url":"^http://(?:www\\.)?twimono\\.com/[^/]+/ASIN=.",
"nextLink":"id(\"mainBlock\")//a[contains(concat(\" \", @class, \" \"), \" page_next \")]"
},
{
"pageElement":"//tr[@class=\"itemviewColor02\"]/following-sibling::tr",
"url":"^http://kakaku\\.com/item/[^/]+/pricehistory/",
"nextLink":"//a[@class=\"arrowNext01\"]"
},
{
"pageElement":"//dl[contains(@class, \"section\")]",
"url":"^http://giraffe\\.iseteki\\.net/applis/search",
"nextLink":"//div[@class=\"pageBrowser\"]/p[1]/a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\uff1e\")]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://(?:www\\.)?p-tina\\.net/interview/\\d",
"nextLink":"id(\"next\")/parent::a"
},
{
"pageElement":"id(\"page-body\")",
"url":"^http://asterisk\\.mydns\\.jp/search\\.php\\?",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[form]",
"url":"^http://music\\.j-total\\.net/db/search\\.cgi",
"nextLink":"//center/a[text()=\"\u6b21\u30da\u30fc\u30b8\u2192\"]"
},
{
"insertBefore":"//div[@class=\"pager\"][last()]",
"pageElement":"id(\"log_table\")",
"url":"^http://counter\\.hatena\\.ne\\.jp/.+?/log\\?",
"nextLink":"//div[@class=\"pager\"][last()]/a[last()]"
},
{
"pageElement":"//hr[1]/following-sibling::*[following::hr[2]]",
"url":"^http://hp\\d+\\.0zero\\.jp/novel/page\\.php",
"nextLink":"//a[@accesskey=\"3\"]"
},
{
"pageElement":"id(\"blog\")",
"url":"^http://www\\.sweetnote\\.com/board/takeshi/",
"nextLink":"//div[@class=\"pages\"]//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//td[@width=\"95%\"]/font",
"url":"^http://www\\.tsutaya\\.co\\.jp/item/artist/",
"nextLink":"(//td[@align=\"right\"]/font/a)[last()]"
},
{
"insertBefore":"id(\"maincontent\")/form/div[@class=\"pgbox\" and position()=2]",
"pageElement":"id(\"maincontent\")/form/div[@class=\"pgbox\" and position()=1]",
"url":"^http://aur\\.archlinux\\.org/packages\\.php",
"nextLink":"id(\"pages\")/a[@class=\"page_num\" and text()=\"Next\"]"
},
{
"pageElement":"id(\"texts-list\")",
"url":"^http://(?:www\\.)?textsfromlastnight\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"insertBefore":"//form[1]/hr[last()]",
"pageElement":"//form[1][@action=\"magical.php\"][contains(text(),\"\uff1a\")]/*[not(self::table[contains(@align,\"right\")])]",
"url":"^http://www\\.nijibox3\\.com/magical/futaba/",
"nextLink":"//form[contains(@action,\".htm\")][last()]"
},
{
"pageElement":"//div[@class=\"resultBox\"]/div[contains(@class,\"resultInfo\")]",
"url":"^http://www\\.pixiv\\.net/event_circle\\.php",
"nextLink":"id(\"pager\")/a[last()]"
},
{
"insertBefore":"//div[@class=\"content_pane\"]/p[last()]",
"pageElement":"//div[@class=\"content_pane\"]/dl",
"url":"^http://find\\.2ch\\.net/(?:index\\.php)?\\?",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@class=\"storycontent\"]",
"url":"^http://www\\.octech\\.jp/modules/wordpress/",
"nextLink":"//div[@class=\"feedback\"]/span/a[text()=string(number(//div[@class=\"feedback\"]/span/text()[string-length(normalize-space(self::text()))!=0]+1))]"
},
{
"pageElement":"id(\"main-contents\")/*[following::*[contains(@class, \"mp-ie\")]]",
"url":"^https?://(?:www\\.)?zai\\.ne\\.jp/articles/",
"nextLink":"id(\"multipage\")/*[contains(@class, \"next-p\")]/a"
},
{
"pageElement":"id(\"feedcontent\")/following-sibling::*[./following-sibling::div[@class=\"readmore\"]]",
"url":"^http://(?:www\\.)?ebooksbay\\.org/.+/\\d+/$",
"nextLink":"id(\"items\")//a[@class=\"fl\"]"
},
{
"insertBefore":"//p[@class=\"menu_bottom\"]",
"pageElement":"//div[@class=\"main\"]",
"url":"^http://www5e\\.biglobe\\.ne\\.jp/~aji/3min/",
"nextLink":"//p[@class=\"menu_bottom\"]/span[3]/a"
},
{
"insertBefore":"id(\"result-main-l-in\")/ol[last()]/following-sibling::node()",
"pageElement":"id(\"result-main-l-in\")/ol",
"url":"^http://blog-search\\.yahoo\\.co\\.jp/search",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"//table//table[2]/tbody/tr[position()!=last()]",
"url":"^http://(?:www\\.)?spirituosen-volland\\.de/",
"nextLink":"//a[.=\">>\"]"
},
{
"insertBefore":"//body/center/a[@href=\"confirm.htm\"]/preceding-sibling::br[1]",
"pageElement":"//table[@class=\"torrents\"]//th[text()=\"Active torrents\"]/ancestor::table[@class=\"torrents\"]",
"url":"^http://mullemeck\\.serveftp\\.org/jps_beta/",
"nextLink":"//table[@class=\"torrents\"]//th[text()=\"Active torrents\"]/ancestor::table[@class=\"torrents\"]//td[@class=\"torrentsFoot\"]/a[text()=\"Next\"]"
},
{
"pageElement":"id(\"search_contents\")/div[contains(@class,\"search_results\")]",
"url":"^http://www\\.muji\\.net/store/cmdty/search2",
"nextLink":"id(\"i-search\")//div[contains(@class,\"paging_area_top\")]/a[.=\">>\"]"
},
{
"pageElement":"//div[@class=\"entry-asset asset\"]",
"url":"^http://blog\\.parco-city\\.com/blog-across/",
"nextLink":"//link[@rel=\"prev\"]"
},
{
"pageElement":"id(\"pagehistory\")/li",
"url":"/index\\.php\\?(?:.+&)?action=history(?:&|$)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://coderepos\\.org/share/changeset/\\d*",
"nextLink":"//link[@rel=\"prev\"]"
},
{
"pageElement":"id(\"main\")/ul[contains(@class,\"pList\")]",
"url":"^http://(?:www\\.)?photolibrary\\.jp/search/",
"nextLink":"id(\"main\")/div[@class=\"paging\" and last()]/span[@class=\"next\" and last()]/a"
},
{
"pageElement":"id(\"ipbwrapper\")/div[@class=\"tableborder\"]/*[self::table or self::div[@class=\"darkrow1\"]] | id(\"ipbwrapper\")/form/div[@class=\"tableborder\"]/table/tbody/tr",
"url":"^http://forum\\.aniguide\\.ru/index\\.php\\?",
"nextLink":"id(\"ipbwrapper\")/table/tbody/tr/td/a[1][text()=\"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u044b:\"]/following-sibling::b[1]/following-sibling::a[1][not(contains(@href, \"getnewpost\"))]"
},
{
"pageElement":"id(\"forums_forum\")//ul[@class=\"topics\"]",
"url":"^http://bandaancha\\.eu/foro/cable/r-galicia",
"nextLink":"id(\"forums_forum\")//div[@class=\"pages\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"fontzoom\")/p",
"url":"^http://www\\.ftchinese\\.com/story\\.php\\?",
"nextLink":"//div[@class=\"pagination\"]/a[text()=\"\u4e0b\u4e00\u9875\"]"
},
{
"insertBefore":"id(\"pager\")",
"pageElement":"id(\"mainColumn\")",
"url":"^http://keiba\\.radionikkei\\.jp/keiba/news/",
"nextLink":"id(\"pager\")/ul[@class=\"pager\"]/li[last()]/a"
},
{
"pageElement":"id(\"latest\")/tbody/tr",
"url":"^http://labs\\.trolltech\\.com/forums/forum/",
"nextLink":"//a[contains(@class, \"next\")]"
},
{
"pageElement":"//tr[preceding-sibling::tr[descendant::b]][following-sibling::tr[descendant::b]]",
"url":"^http://coupons\\.yahoo\\.co\\.jp/bin/search",
"nextLink":"//small[contains(text(),\"[\")]/a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"//ul[@class=\"articleList\"]/div",
"url":"^http://plaza\\.rakuten\\.co\\.jp/gnr(?:/g)?",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" pageNavi \")]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"main\")/table[contains(@class, \"entry_table\")]",
"url":"^http://nihonnagonago\\.blog115\\.fc2\\.com/",
"nextLink":"//div[@class=\"entry_navi\"]/a[last()]"
},
{
"insertBefore":"id(\"pages\")",
"pageElement":"id(\"main\")//div[@class=\"articlebody\"]",
"url":"^http://trendy\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"id(\"pages\")/a[@class=\"next\"]"
},
{
"pageElement":"id(\"paperI\")/div[@class=\"content rs\"]/div[@class=\"cc\"]",
"url":"^http://bandaancha\\.eu/foro/cable/r-galicia",
"nextLink":"id(\"forums_forum\")/div/div/strong[1]/following-sibling::a[1]"
},
{
"pageElement":"//node()[preceding-sibling::p and (following-sibling::a/@accesskey or following-sibling::input) or preceding-sibling::node()[1]//@name=\"form1\"]",
"url":"^http://(?:www\\.)?accessup\\.org/\\w+/\\w+/",
"nextLink":"//a[@accesskey]"
},
{
"insertBefore":"(//a[text()=\"NEXT>\" or text()=\">>\"])[2]/ancestor::table[1]",
"pageElement":"id(\"_ctl1_DataList1\")",
"url":"^http://www\\.altphotos\\.com/Gallery\\.aspx",
"nextLink":"//a[text()=\"NEXT>\" or text()=\">>\"]"
},
{
"pageElement":"//div/div[4]/table[1]/tbody/tr/td/div[1]/form",
"url":"^http://www\\.webcg\\.net/WEBCG/impressions/",
"nextLink":"//a[contains(img/@src,\"/image/btn_contents_next.gif\")]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" body \") or contains(concat(\" \", @class, \" \"), \" search-result \")]",
"url":"^http://wiki\\.livedoor\\.jp/[^/]+/search\\?",
"nextLink":"//a[starts-with(@href,\"search?keywords\") and preceding-sibling::*[position()=1 and self::strong]]"
},
{
"pageElement":"id(\"FolderView\")//input/ancestor::div[1]|id(\"FolderView\")//input/ancestor::div[1]/following-sibling::b[1]",
"url":"^http://mobile\\.live\\.com/hm/folder\\.aspx",
"nextLink":"//a[@accesskey=\"3\"]"
},
{
"pageElement":"id(\"con-list\")",
"url":"^http://www\\.its-mo\\.com/contents/tourism/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"insertBefore":"id(\"ctl00_ctl00__MainContent__MainContent__ListView2\")",
"pageElement":"id(\"ctl00_ctl00__MainContent__MainContent__ListView\")",
"url":"^http://www\\.fezero\\.jp/com_imglist\\.aspx",
"nextLink":"id(\"ctl00_ctl00__MainContent__MainContent__NextPage\")"
},
{
"pageElement":"id(\"entries\")",
"url":"^http://(?:www\\.)?whitepages\\.com\\.au/wp/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"id(\"kiji\")",
"url":"^http://techon\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"id(\"pageNumber\")/div[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"ybks-md17\" or @class=\"ybks-md117\"]",
"url":"^http://books\\.yahoo\\.co\\.jp/new_release/",
"nextLink":"//a[text()=\"\u6b21\u306e20\u4ef6\"]"
},
{
"pageElement":"id(\"block_story\")/div[@class=\"story_photoreport\"]/div[@class=\"photoviewer\" or @class=\"phototext\"]",
"url":"^http://japan\\.cnet\\.com/(?:[^/]+/)+story/",
"nextLink":"id(\"block_story\")//a[contains(concat(\" \", @class, \" \"), \" next \")]"
},
{
"insertBefore":"//div[@class=\"div_l_main_left01\"]/ul[@class=\"ul02\"]",
"pageElement":"//div[@class=\"div_l_main_left01_left01\"]",
"url":"^http://www\\.weddingpark\\.net/(?!search/).",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"content_in\")",
"url":"^http://(?:ecopedia|vegegohan)\\.moura\\.jp/",
"nextLink":"//div[@class=\"navigation\"]/span[@class=\"alignleft\"]/a"
},
{
"pageElement":"id(\"contents\")/div",
"url":"^http://blog\\.wakakitamiki\\.coolblog\\.jp/",
"nextLink":"id(\"contents\")/ul[@class=\"navi\"]//a[text()=\">>\"]"
},
{
"pageElement":"id(\"primary\")//div[contains(@class, \"primary_leaf_body\")]",
"url":"^http://www\\.nikkeibp\\.co\\.jp/article/sj/",
"nextLink":"id('primary')//a[descendant::*[text()=\"\u6b21\u3078\"]]"
},
{
"pageElement":"//div[@class=\"list\"]",
"url":"^http://r\\.tabelog\\.com/.+/(rvwr_|user)lst",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"(//a[text()=\"\u300e\u623b\u308b\u300f\"]/preceding-sibling::*[preceding::form])[position() > 1 and position() < last()-1]",
"url":"^http://hide\\.maruo\\.co\\.jp/lib/hilight/",
"nextLink":"//a[text()=\"\u300e\u623b\u308b\u300f\"]/preceding-sibling::table[position()=1]//td[child::b]/following-sibling::td[position()=1]/a"
},
{
"insertBefore":"id(\"content\")/following-sibling::node()",
"pageElement":"id(\"content\")",
"url":"^http://www\\.unmatchedstyle\\.com/gallery/",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a[contains(text(), \"Previous\")]"
},
{
"pageElement":"id(\"maincontents\")",
"url":"^http://www\\.rurubu\\.com/event/list\\.asp",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8>>\"]"
},
{
"pageElement":"id(\"main_content\")/div[descendant::div[contains(@id, \"spot\")]]",
"url":"^http://www\\.instructables\\.com/id/[^/]+/",
"nextLink":"id(\"nextstepbutton\")"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" content \")]",
"url":"^http://(?:www\\.)?xbitlabs\\.com/articles/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" next-page \")]"
},
{
"pageElement":"//ul[@class=\"videolist\"][1]",
"url":"^http://b\\.hatena\\.ne\\.jp/video(?:$|\\?)",
"nextLink":"//a[@class=\"pager-next\"][1]"
},
{
"pageElement":"id(\"main\")/div[@class=\"section\"]",
"url":"^http://diamond\\.jp/series/[^/]+/bn\\.html",
"nextLink":"id(\"main\")/div[@class=\"section pagination\"]/ul/li/a[@class=\"next\"]"
},
{
"pageElement":"id(\"photoswftd\")/*",
"url":"^http://www\\.flickr\\.com/photos/[^/]+/\\d",
"nextLink":"//a[@class=\"contextThumbLink\"][./img[@class=\"nextprev_thumb\"]][1]"
},
{
"pageElement":"id(\"SnapArchiveContainer\")",
"url":"^http://www\\.fashionsnap\\.com/streetsnap/",
"nextLink":"//p[@class=\"look-more\"]/a  |//a[@class=\"next-page\"]"
},
{
"pageElement":"/descendant::table[@class=\"small-text\"][1]/ancestor::tr[1]/following-sibling::tr[@valign]",
"url":"^http://portal\\.acm\\.org/results\\.cfm\\?",
"nextLink":"/descendant::table[@class=\"small-text\"][last()]//a[contains(., \"next\")]"
},
{
"pageElement":"//table[@width=\"300px\"]",
"url":"^http://www\\.shareapic\\.net/content\\.php",
"nextLink":"//td[last()]/div[contains(concat(\" \",@class,\" \"),\" prevNextThumbsHolder \")]/div[last()]/a"
},
{
"pageElement":"id(\"list\")",
"url":"^https://www\\.google\\.com/a/cpanel/[^/]+/",
"nextLink":"//tr//ul[@class=\"inlinelist\"]//a[contains(text(),\"\u203a\")]"
},
{
"insertBefore":"//table[@id=\"mobile_window\"]/tbody/tr/td/hr[1]",
"pageElement":"//div[@id=\"pcfrm_mobile\"]",
"url":"^http://www\\.mbga\\.jp/\\.pc/_novel_page.+",
"nextLink":"//table[@id=\"mobile_window\"]/tbody/tr/td/center/a[contains(text(), \"\u6b21\u3078#\u2192\")]"
},
{
"insertBefore":"//div[@class=\"linksb\"]",
"pageElement":"//tbody[tr/td[@class=\"tcl\" and div[@class=\"intd\"]]]",
"url":"^https?://[^?]+?/viewforum\\.php\\?id=[1-9]",
"nextLink":"//p[@class=\"pagelink conl\"]/strong/following-sibling::*[1][self::a]"
},
{
"pageElement":"//div[@class=\"h\"]",
"url":"^http://(?:[^.]+\\.)?m\\.yahoo\\.com/p/mail",
"nextLink":"//div[@class=\"l\"]/text()/following-sibling::a[1]"
},
{
"pageElement":"id(\"posts\")/*",
"url":"^http://www\\.tumblr\\.com/dashboard/\\d+/-",
"nextLink":"id(\"previous_page_link\")"
},
{
"pageElement":"//tr[1]/td[@class=\"text_white\"]/table",
"url":"^http://(?:www\\.)?uniforme\\.jp/shopbrand/",
"nextLink":"//td[@class=\"pagesita\"]//a[contains(text(),\"[\u6b21]\")]"
},
{
"pageElement":"//hr[last()]/preceding-sibling::ul[1]/li",
"url":"^http://search\\.vector\\.co\\.jp/search\\?",
"nextLink":"//hr[last()]/preceding-sibling::div[1]/a"
},
{
"pageElement":"id(\"ok_main\")/table[@class=\"ok_list\"]",
"url":"^http://[^.]+\\.goo\\.ne\\.jp/c[^.]+\\.html",
"nextLink":"id(\"ok_main\")/div[@class=\"ok_paging\"]/div[@class=\"ok_right\"]/a[text()=\"\u6b21\u3078 >\"]"
},
{
"pageElement":"//table//table[@width = \"100%\"]",
"url":"^http://www\\.sicovideo\\.com/(?:new/\\d+)?",
"nextLink":"//div[@class = \"title\"][select]/a[contains(text(), \"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"article\"]",
"url":"^http://d\\.moccori\\.com/(?:$|index\\.php)",
"nextLink":"//a[@title=\"next page\"]"
},
{
"pageElement":"//p",
"url":"^http://yamagata\\.int21h\\.jp/tool/Markov/",
"nextLink":"//a[@accesskey=\"#\"]"
},
{
"pageElement":"id(\"archives_gallery\")//li[contains(concat(\" \", @class, \" \"), \" secondary \")]",
"url":"^http://www\\.unmatchedstyle\\.com/gallery/",
"nextLink":"id(\"archives_gallery\")//a[contains(text(), \"\u00bb\")]"
},
{
"insertBefore":"//table[5]",
"pageElement":"//table[4]",
"url":"http://bt\\.aisex\\.com/bt/thread\\.php\\?.",
"nextLink":"//table[last()]/tbody/tr/td/b/following-sibling::a"
},
{
"pageElement":"id(\"memo-navigation-top\")//div[@class=\"box-body\"]/*[preceding-sibling::*[contains(@class,\"chapter\")]][following-sibling::div[@class=\"channel-navigation\"]]",
"url":"^http://ugomemo\\.hatena\\.ne\\.jp/opening_",
"nextLink":"id(\"memo-navigation-top\")//div[@class=\"channel-navigation\"]//img[@alt=\"NEXT\"]/parent::a"
},
{
"pageElement":"//table[@class=\"table1\"]",
"url":"^http://(?:www\\.)?suruga-ya\\.jp/database/",
"nextLink":"//a[contains(text(), \">>\")]"
},
{
"pageElement":"id(\"alphaContent\")/div/div[2]",
"url":"^http://[^.]+\\.date-navi\\.jp/spot/result/",
"nextLink":"//a[text()=\"\u6b21\u3078\u226b\"]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" cate \")]/following-sibling::node()[following::div[contains(concat(\" \", @class, \" \"), \" cate \")]]",
"url":"^http://esupa\\.xrea\\.jp/nicky/nicky\\.cgi",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pastlink \")]/a[text() = \">>\"]"
},
{
"pageElement":"id(\"contentsarea2_2\")/form/table",
"url":"^http://house\\.goo\\.ne\\.jp/(?:buy|rent)/",
"nextLink":"//a[text()=\"\u6b21\u3078\u2192\"]"
},
{
"pageElement":"//div[@class=\"list_mdb\"]/div[contains(concat(\" \", @class, \" \"), \" list_detail \")]",
"url":"^http://phonebook\\.yahoo\\.co\\.jp/search/",
"nextLink":"//span[@class=\"listNext\"]/a"
},
{
"pageElement":"id(\"pixiv\")",
"url":"^http://www\\.pixiv\\.net/search_user\\.php",
"nextLink":"id(\"wrapper\")/div[@style]/div[@class=\"f14b\"]/following-sibling::div[1]/a[contains(text(), \">>\")]"
},
{
"pageElement":"id(\"leftCol\")/div[@class=\"mainPhoto\" or @class=\"photoDesc\"]",
"url":"^http://content\\.techrepublic\\.com\\.com/",
"nextLink":"id(\"leftCol\")/div[@class=\"imgNav\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"ys\"]",
"url":"^http://www\\.amazon\\.co\\.jp/gp/yourstore",
"nextLink":"id(\"ysMoreResults\")/parent::a"
},
{
"pageElement":"id(\"td_body\")/div/table",
"url":"^http://(?:www\\.)?tinami\\.com/search/list",
"nextLink":"id(\"next-page\")/a"
},
{
"insertBefore":"id(\"footer_with_ads_block\")",
"pageElement":"id(\"content\")",
"url":"^http://(?:www\\.)?wherewedowhatwedo\\.com/",
"nextLink":"//li[contains(@class, \"pagination_link\")]/a[contains(text(),\"Next Page\")]"
},
{
"pageElement":"//form[@name=\"cart_whole\"]/table[1]",
"url":"^http://www\\.7andy\\.jp/\\w+/search_result",
"nextLink":"//small/b/a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"iza_SSMainBody\")//img[@class=\"content_img\"]",
"url":"^http://www\\.iza\\.ne\\.jp/news/newsphoto/",
"nextLink":"id(\"iza_SSMainChgLinks\")//a[img[@src=\"http://prt.iza.ne.jp/images/photo/photo_botan_02.gif\"]]"
},
{
"pageElement":"//div[contains(@class,\"FeatureBody\")]",
"url":"^http://(?:www\\.)?dommune\\.com/ele-king/.",
"nextLink":"//span[@class=\"EntryNaviOn\"][count(a)=0]/following-sibling::node()/a"
},
{
"pageElement":"id(\"main_middle\")/div[1]/div[2]/*",
"url":"^http://any6\\.jp/(?:search\\.php|watch_b/)",
"nextLink":"id(\"main_middle\")/div[1]/div[2]/a[last()][img]"
},
{
"pageElement":"id(\"mainContents\")//div[@class=\"node node-body\"]/div[@class=\"content\"]",
"url":"^http://web-tan\\.forum\\.impressrd\\.jp/e/",
"nextLink":"id(\"mainContents\")//*[@class=\"pager-current\"]/following-sibling::a[position()=1]"
},
{
"pageElement":"//table[@class=\"medium tb_bd\"]/tbody/tr[@bgcolor=\"#ffffff\"]",
"url":"^http://www\\.auhikari\\.jp/tv/vod/sakuhin/",
"nextLink":"//a[.=\"\u6b21\u306e\u7d50\u679c\"]"
},
{
"pageElement":"//div[@id=\"izaListWithPaging\"]",
"url":"^http://www\\.iza\\.ne\\.jp/news/newsphoto/",
"nextLink":"//li[@class=\"skips\"][last() - 1]/a"
},
{
"pageElement":"//table[@width=\"99%\"] | //tr[@height=\"26\"]",
"url":"^http://(?:www\\.)?w-canvas\\.com/shopping/",
"nextLink":"//a[text()=\"\uff1e\"]"
},
{
"pageElement":"id(\"mainbox\")/*",
"url":"^http://diary\\.jp\\.aol\\.com/juicyfruits/",
"nextLink":"id(\"mainbox\")/p[last()]//a[last()]"
},
{
"pageElement":"id(\"pagecontainer\")",
"url":"^http://www\\.photogen\\.com/free\\-photos/",
"nextLink":"//b[@class=\"pagingon\"]/following-sibling::a"
},
{
"pageElement":"//table[@class=\"list\"]",
"url":"^http://www\\.aozora\\.gr\\.jp/index_pages/",
"nextLink":"//a[contains(text(),\"\u6b21\u306e50\u4ef6\")]"
},
{
"insertBefore":"(id(\"mgb_blog\")/div[@class=\"mgc_box_md\"]/div[@class=\"mgc_pic_m_set\"])[last()]/following-sibling::node()[1]",
"pageElement":"id(\"mgb_blog\")/div[@class=\"mgc_box_md\"]/div[@class=\"mgc_pic_m_set\"]",
"url":"^http://blog\\.days\\.yahoo\\.co\\.jp/blog/",
"nextLink":"id(\"mgb_blog\")/div[@class=\"mgc_box_md\"]/div[@class=\"mgc_pagenation\"]/a[last()]"
},
{
"pageElement":"id(\\\"mypageWrapper\\\")",
"url":"^http://www\\.bookoffonline\\.co\\.jp/disp/",
"nextLink":"//div[@class=\\\"numNavi\\\"]//a[contains(text(),\\\">>\\\")]"
},
{
"pageElement":"id(\"ctl00_CPH1_MediaViewList1_ListView1_groupPlaceholderContainer\")",
"url":"^http://(?:www\\.)?parasitestage\\.net/Page",
"nextLink":"id(\"ctl00_CPH1_QueryPager2_NextLink\")"
},
{
"pageElement":"id(\"watchers\")",
"url":"^https?://github\\.com/[^/]+/[^/]+/watchers",
"nextLink":"//div[@class=\"pagination\"]/span[@class=\"current\"]/following-sibling::a"
},
{
"insertBefore":"//div[@class=\"Pages\"]/following-sibling::node()[1]",
"pageElement":"id(\"GoodStuff\")/div",
"url":"^http://www\\.flickr\\.com/photos/tags/[^/]",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"//div[contains(@class, \"contents\")]/table",
"url":"^http://latlonglab\\.yahoo\\.co\\.jp/race/",
"nextLink":"//div[contains(@class, \"contents\")]/table/tbody/tr[1]/td/a[contains(text(), \"\u6b21\")]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"), \" keyword-list-blog \")]",
"url":"^http://k\\.hatena\\.ne\\.jp/[^/]+/visited",
"nextLink":"//div[contains(concat(\" \",@class,\" \"), \" pager \")]/a[last()]"
},
{
"pageElement":"id(\"NewsDetail\")",
"url":"^http://(?:www\\.)?zakzak\\.co\\.jp/[^/?#]",
"nextLink":"//a[@class=\"continue\"]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://(?:www\\.)?playlog\\.jp/[^/]+/blog",
"nextLink":"id(\"main\")/div[@class=\"archive-title\"]/span/a[@class=\"previousLink\"]"
},
{
"insertBefore":"//*[contains(concat(\" \",normalize-space(@class),\" \"), \" autopagerize_insert_before \")]",
"pageElement":"//*[contains(concat(\" \",normalize-space(@class),\" \"), \" autopagerize_page_element \")]",
"url":"^http://www\\.toranoana\\.jp/shop/arrival/",
"nextLink":"id(\"content\")/div[@class=\"pagenavi\"]//li[last()]/a"
},
{
"pageElement":"//form[@name=\"KentoForm\"]",
"url":"^http://www\\.baitoru\\.com/jobSearch\\.do",
"nextLink":"//td[@id=\"pager\"]/span/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"content\")/table[.//img]",
"url":"^http://www\\.adiumxtras\\.com/index\\.php",
"nextLink":"id(\"content\")/table[last()]//a[contains(text(),\"Next Page\")]"
},
{
"pageElement":"id(\"center\")",
"url":"^http://www\\.below\\.mydns\\.jp/item/list",
"nextLink":"id(\"pagenate\")/a[last()]rn"
},
{
"pageElement":"id(\"mainContentsBody\")/div[contains(concat(\" \", @class, \" \"), \" albumDetail \")]",
"url":"^http://pcpp\\.jp/[^/]+/[^/]+/album/photo/",
"nextLink":"//a[@class=\"png_bg next-navi\"]"
},
{
"pageElement":"//body/table/tbody/tr/td/table[3]",
"url":"^http://opera-info\\.de/forum/thread\\.php",
"nextLink":"//link[@rel=\"next\"]"
},
{
"pageElement":"id(\"resList\")/form/div[contains(@class,\"list_group\")]",
"url":"^http://www\\.bookoffonline\\.co\\.jp/disp",
"nextLink":"//a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"//td[@class=\"left_outline\"]/../td[2]/*[position() < 3]",
"url":"^http://netamichelin\\.blog68\\.fc2\\.com/",
"nextLink":"//center/a[@title=\"\u306d\u305f\u30df\u30b7\u30e5\u30e9\u30f3\"]/following-sibling::a[1]"
},
{
"pageElement":"//table[contains(@summary,\"\u5199\")]",
"url":"^http://www\\.ryukyujima\\.net/photo\\.php",
"nextLink":"//a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"beta-inner\")",
"url":"^http://my_sarisari_store\\.typepad\\.com/",
"nextLink":"//span[@class=\"chevron\" and contains(text(),\"\u00bb\")]"
},
{
"pageElement":"//div[@class=\"Nav\" or @class=\"Post\"]",
"url":"^http://buddyhentai\\.net/(?:page/\\d+/)?$",
"nextLink":"//div[@class=\"Nav\"]/strong[@class=\"on\"]/following-sibling::a[1]"
},
{
"pageElement":"//ul[@class=\"book_thumbs\"]",
"url":"^http://(?:www\\.)?bookcoverarchive\\.com/",
"nextLink":"id(\"nav_btm\")/ul/li/a[1]"
},
{
"pageElement":"//div[@class=\"yaut-md166\"]",
"url":"^http://drive\\.yahoo\\.co\\.jp/map/search",
"nextLink":"//div[@class=\"st03\"]/dl/dd/a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"//div[@class=\"products_body\"]",
"url":"^http://www\\.yodobashi\\.com/ec/category/",
"nextLink":"//div[@class=\"paging02\"]//li[preceding-sibling::li[span[@class=\"prepage_bg\"]]][1]/a"
},
{
"pageElement":"//div[@class=\"floatholder\"]/div[@class=\"icon\" or @class=\"c\"]",
"url":"^http://(?:www\\.)?iconlet\\.com/search\\?",
"nextLink":"//div[@class=\"navigation\"]/*[last()][self::a]"
},
{
"pageElement":"//img[contains(@src,\"bar_top.gif\") or contains(@src,\"bar_l.gif\")]/ancestor::table[2]",
"url":"^http://widgets\\.yahoo\\.co\\.jp/gallery/",
"nextLink":"//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"insertBefore":"id(\"_threads_link_\")[2]",
"pageElement":"//div[@align=\"center\"]/table[@width=\"95%\"]",
"url":"^http://(?:xera|moepic.?)\\.moe-ren\\.net/",
"nextLink":"id(\"_threads_link_\")/table/tbody/tr/td/strong/following-sibling::a"
},
{
"pageElement":"//table[@class=\"tablebg\"]",
"url":"^http://www\\.macserialjunkie\\.com/forum/",
"nextLink":"//*[@class=\"gensmall\" or @class=\"nav\" or @class=\"pagination\"]/b/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//table[@class=\"results_table\"]",
"url":"^http://www\\.hubmed\\.org/search\\.cgi\\?",
"nextLink":"//span[@class=\"prev_next\" and last()]/a[@accesskey=\"n\"]"
},
{
"pageElement":"//div[@class=\"info_list_box\"]",
"url":"^http://togetter\\.com/(?!li/\\d|tagcloud)",
"nextLink":"//div[@class=\"pagenation\"]/a[@rel=\"next\"]"
},
{
"insertBefore":"//div[@class=\"splitnavR\"]",
"pageElement":"//div[@class=\"story\"]",
"url":"^http://[a-z]+\\.nationalgeographic\\.com/",
"nextLink":"//a[text()=\"Next Page >>\"]"
},
{
"insertBefore":"//table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td[@class=\"etNextPrev\"]",
"pageElement":"//table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/div/div[@class=\"etBodyBg\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/moonglass_net",
"nextLink":"//table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td[@class=\"etNextPrev\"]/a"
},
{
"pageElement":"id(\"_bandaiall\")/*",
"url":"^http://www\\.dmm\\.co(?:m|\\.jp)/digital/",
"nextLink":"id(\"_bandaiall\")/following-sibling::div[contains(concat(\" \", @class, \" \"), \" area-bottom \")]//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"insertBefore":"//table[2]",
"pageElement":"//p",
"url":"^http://opiumhero\\.web\\.fc2.com/pict_com",
"nextLink":"//a[starts-with(@href,\"pict_com\")]"
},
{
"pageElement":"id(\"container\")//div[@class=\"entry\"]",
"url":"^http://blog\\.canpan\\.info/[^/]+/archive",
"nextLink":"id(\"container\")/div[@class=\"page\"]/a"
},
{
"pageElement":"id(\"Contents\")/div[@class=\"Entry\" or @id=\"Comment-View\" or @id=\"Comment-Form\" or @id=\"Trackback-View\"]",
"url":"^http://specialnotes\\.blog77\\.fc2\\.com/",
"nextLink":"//a[@title=\"\u524d\u306e\u8a18\u4e8b\" or @title=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"content\")/div[starts-with(@class,\"post\")]",
"url":"^http://download\\.onlinemovies\\.ws/\\w+/",
"nextLink":"id(\"content\")/div[contains(@class,\"page-nav\")]//span[contains(@class,\"current\")]/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/div[preceding::div[@class=\"s_navi1\"]]",
"url":"^http://www\\.cyzo\\.com/(?:\\d+\\.html)?$",
"nextLink":"id(\"content\")/div[@class=\"s_navi\"]/a[last()]"
},
{
"pageElement":"id(\"articlebody\")/table//tr/td/div[2]",
"url":"^http://(?:www\\.)?technologyreview\\.com/",
"nextLink":"//a[text()=\"Next \u00bb\"]"
},
{
"pageElement":"id(\"contents\")/div[@class=\"textInfo\"]",
"url":"^http://sp\\.gnavi\\.co\\.jp/search/theme/",
"nextLink":"id(\"contents\")/div[@class=\"nav\"]/p[not(@class)]/strong/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"blog\"]",
"url":"^http://(?:bl\\.|jp\\.)?ranobe-mori\\.net/",
"nextLink":"//div[@class=\"content-nav\"]/text()[string-length(normalize-space()) > 1]/following-sibling::a[1]"
},
{
"pageElement":"id(\"styleboxarea\")",
"url":"^http://(?:www\\.)?rasysa\\.com/pkg/style/",
"nextLink":"//img[@src=\"/pkg/style/image/style1/icn_next1.gif\"]/parent::a"
},
{
"pageElement":"id(\"wrapper\")/div[@class=\"clip-global\"]",
"url":"^http://clip\\.livedoor\\.com/(?:site|tag)",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id('main')/div",
"url":"^http://4b\\.yahoo\\.co\\.jp/contents/\\w+",
"nextLink":"//span[@class=\"pageRight\"]/a"
},
{
"pageElement":"id(\"graphlist\")",
"url":"^http://graph\\.hatena\\.ne\\.jp/graphlist",
"nextLink":"id(\"body\")//div[@class=\"pager\"]/a[contains(text(), \">\")]"
},
{
"pageElement":"//center/table",
"url":"^http://cragra\\.h\\.fc2\\.com/bg[0-9]{2}/",
"nextLink":"//a[contains(text(),\"\u9032\u3080\")]"
},
{
"pageElement":"//img",
"url":"^http://www5a\\.biglobe\\.ne\\.jp/~yo-he-/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":".//div[@class=\"post-header\" or @class=\"photo\"]",
"url":"^http://hotchickswithdogswithboners\\.com/",
"nextLink":".//div[@class=\"navigation\"]//a[contains(text(),\"older\")]"
},
{
"pageElement":"//div[@class=\"ItemDesc\"]/div[1]/following-sibling::node()[following::div[@class=\"pagenavi\"]]",
"url":"^http://www\\.barks\\.jp/(?:feature|news)/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/h4/following-sibling::node()[following-sibling::form[@id=\"search\"]]",
"url":"^http://xoops\\.ec-cube\\.net/search\\.php",
"nextLink":"id(\"content\")//td[@align=\"right\"]/a[contains(text(),\">>\")]"
},
{
"pageElement":"id(\"main2\")/table[1]",
"url":"^http://offy\\.jp/communities/\\d+/members",
"nextLink":"//div[@class=\"next\"]/a"
},
{
"pageElement":"id(\"thread tree table\")",
"url":"^http://(?:www\\.)?dtptemple\\.org/imgbbs/",
"nextLink":"id(\"pager\")/ol/li[last()]/a"
},
{
"insertBefore":"//div[@class=\"inspecial_nx_bf\"]",
"pageElement":"//div[@class=\"inspecial_text\"]|//h3[preceding-sibling::div[@class=\"inspecial_read\"]][1]",
"url":"^http://finance\\.toremaga\\.com/.+\\.html",
"nextLink":"//div[@class=\"inspecial_nx_bf\"]//li[last()]/a|//li[@class=\"previous_entry\"]/a"
},
{
"pageElement":"id(\"boxes\")//table[following::p[@class=\"pager\"] and preceding::p[@class=\"pager\"]]",
"url":"^http://(?:cyrill|thimgup)\\.lilect\\.net/",
"nextLink":"id(\"boxes\")/p[@class=\"pager\"]/a[@title=\"next page\"]"
},
{
"pageElement":"//td[@class=\"dictionary_contents_left\"]/blockquote/*[self::ol or (self::p and not(@align)) or self::table]",
"url":"^http://www\\.excite\\.co\\.jp/dictionary/",
"nextLink":"//td[@class=\"dictionary_contents_left\"]/blockquote/p[last()]/a[contains(text(), \"\u6b21\")]|//td[@class=\"dictionary_contents_left\"]/blockquote/ol[@start=\"1\"]/*[last()=1 and self::li]/a"
},
{
"insertBefore":"id(\"mainBox\")/p[@class=\"toolBarUpWard\"]",
"pageElement":"id(\"mainBox\")",
"url":"^http://www\\.alibaba\\.co\\.jp/products/.",
"nextLink":"id(\"mainBox\")/div[@class=\"pagerBar clearFloat\"]/ol/li[@class=\"forward\"]/a"
},
{
"pageElement":"id(\"posts\")",
"url":"^http://(?:[^./]+\\.)*?elitistjerks\\.com/",
"nextLink":"//div[@class=\"pagenav\"]/table[@class=\"tborder\"]/tbody/tr/td/a[contains(text(),\">\")]"
},
{
"pageElement":"//div[@class=\"diarybbs\"]",
"url":"^http://(?:www\\.)?bf-web\\.net/~goldfish/",
"nextLink":"//a[@class=\"page_link_now\"]/following-sibling::a"
},
{
"pageElement":"//img[contains(@src, \"main_img02.jpg\")]/../../../../../../following-sibling::tr[following::img[contains(@src, \"try_next.gif\") or contains(@src, \"try_back.gif\")]]",
"url":"^http://www\\.dosv\\.jp/back_number/[^/]+/",
"nextLink":"//img[contains(@src, \"try_next.gif\")]/../preceding-sibling::td/a[last()]"
},
{
"pageElement":"id(\"srchContent\")/ol[@class=\"srchSearchResult\"]",
"url":"^http://query\\.nytimes\\.com/search/query",
"nextLink":"id(\"srchContent\")/div[@class=\"searchWebResults\"]/a[text()=\"Next \u00bb\"]"
},
{
"pageElement":"id(\"contentbox\")/div[contains(@class,\"news-summary\")]",
"url":"^http://(?:www\\.)?applenewscentral\\.com/",
"nextLink":"//div[@class=\"pagination\"]/p/a[last()]"
},
{
"pageElement":"//div[@class=\"txt01\"]",
"url":"^http://www\\.richcontent\\.jp/relayessay/",
"nextLink":"//div[@class=\"page_link\"]//a[text()=\">>\"]"
},
{
"pageElement":"//ul[@class=\"list-plain\"]",
"url":"^http://d\\d?\\.hatena\\.ne\\.jp/diarylist",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"contents\")",
"url":"^http://(?:www\\.)?watts-jp\\.com/cathand/",
"nextLink":"id(\"cathandList\")/div[@class=\"menu\"]/*[last()][self::a]"
},
{
"pageElement":"id(\"contents\")//div[@class=\"main-pager\"]/..",
"url":"^http://blog\\.oricon\\.co\\.jp/_contents/",
"nextLink":"id(\"contents\")//div[@class=\"main-pager\"]/a[last()]"
},
{
"pageElement":"//div[contains(@class, \"content\")]/child::*[self::ul[contains(@class, \"threada\")] or self::table[contains(@class, \"thread\")]]",
"url":"^http://bbs\\.avi\\.jp/(?:bbs\\.php|\\d+/)",
"nextLink":"//div[@class=\"pagemove\"]/span/following-sibling::a"
},
{
"pageElement":"//ul[contains(@class, \"items\")]",
"url":"^http://wedata\\.net/databases/[^/]+/items",
"nextLink":"//div[@class=\"pagination\"]/a[@rel=\"next\"]"
},
{
"pageElement":"id(\"article_body\")/node()[not(@id or self::iframe)]",
"url":"^http://(?:articles|www)\\.latimes\\.com/",
"nextLink":"//span[@class=\"next_url\"]/a|//li[@class=\"next\"]/a"
},
{
"insertBefore":"/html/body/hr[last()]",
"pageElement":"//a[starts-with(text(),\"\u6b21\") or contains(text(),\"\u9032\u3080\")]/preceding-sibling::*[self::img or self::br or self::hr]",
"url":"^http://ueharasan\\.y\\.ribbon\\.to/html/",
"nextLink":"//a[starts-with(text(),\"\u6b21\") or contains(text(),\"\u9032\u3080\")][1]"
},
{
"pageElement":"//div[contains(@class, \"entry_unit\")]",
"url":"^http://kaisun1192\\.blog121\\.fc2\\.com/",
"nextLink":"id(\"navi\")/a[1]"
},
{
"pageElement":"id(\"contents\")/div[@class=\"event-list\" and last()]/div",
"url":"^http://clip\\.eventcast\\.jp/(?:recent)?",
"nextLink":"//p[@class=\"more\"]/a[last() and contains(text(),\"\u65b0\u7740\")] | //div[contains(concat(\" \",@class,\" \"),\" pager \")]/a[last() and contains(concat(\" \",@class,\" \"),\" next \")]"
},
{
"pageElement":"id(\"Imagesmain\")/*",
"url":"^http://(?:www\\.)?thedoi\\.net/post/list",
"nextLink":"id(\"main\")/p[@class=\"paginator\"]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"results\")",
"url":"^http://www\\.altavista\\.com/web/results",
"nextLink":"//b[contains(concat(\" \", @class, \" \"), \" m \")][last()]/a[text()=\"Next >>\"]"
},
{
"pageElement":"id(\"content change_log\")/div[@class=\"topic_browser\" or @class=\"change_set\"] | id(\"blips\")",
"url":"^http://(?:www\\.)?getsatisfaction\\.com/",
"nextLink":"//span[@class=\"next_link\"]/a"
},
{
"pageElement":"id(\"overmenu\")/following-sibling::*[1] | //table[@class=\"text\" and @cellspacing=\"1\" and @cellpadding=\"2\"]",
"url":"^http://www\\.dmm\\.co(?:m|\\.jp)/.+=text",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//a[text()=\"\u300e\u623b\u308b\u300f\"]/preceding-sibling::node()[(position() > 3) and (position() < last() - 9)]",
"url":"^http://hide\\.maruo\\.co\\.jp/lib/macro/",
"nextLink":"//a[text()=\"\u300e\u623b\u308b\u300f\"]/preceding-sibling::table[position()=1]//td[child::b]/following-sibling::td[position()=1]/a"
},
{
"pageElement":"id(\"kiji\")/*",
"url":"^http://eco\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"id(\"pageNumber\")/div[@class=\"next\"]/a"
},
{
"pageElement":"id(\"form1\")/../table[@class=\"cleantable\"]//tr[td/@class=\"alphabet\"]/following-sibling::tr|//a[@class=\"imagelink\"]",
"url":"^http://(?:www\\.)?manga\\.animea\\.net/.",
"nextLink":"id(\"form1\")/../ul[@class=\"paging\"]/li/a[.=\"Next\"]|//a[@class=\"imagelink\"]"
},
{
"pageElement":"id(\"tcmainlay\")/div[@class=\"postdate\"]",
"url":"^http://[^.]+\\.ap\\.teacup\\.com/[^/]+/$",
"nextLink":"//div[@class=\"nextpage\"]/a[last()]"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"content\")]",
"url":"^http://karafuto50\\.blog117\\.fc2\\.com/",
"nextLink":"//p[@class=\"nav\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"flow_container\"]",
"url":"^http://(?:www\\.)?daitrombe\\.net/image/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"//table[@class=\"lctCSS\"]",
"url":"^http://www\\.google\\.com/support/forum/",
"nextLink":"//div[@class=\"wppkrootCSS\"]/a[contains(text(), \">\")]"
},
{
"pageElement":"id(\"body\")/table[1]",
"url":"^http://wiki\\.optus\\.nu/igo/index\\.php",
"nextLink":"//form/following-sibling::a[last()]"
},
{
"pageElement":"id(\"tl_result\")/*",
"url":"^https://search-voi\\.0101\\.co\\.jp/voi/",
"nextLink":"id(\"pageing_h\")/a[img[@src=\"/images/btn_next.gif\"]]"
},
{
"pageElement":"id(\"newarrival\")/div[not(contains(@class,\"mb16\"))]",
"url":"^http://uad\\.nicovideo\\.jp/main/latest/",
"nextLink":"id(\"newarrival\")//a[contains(@class,\"next\")]"
},
{
"pageElement":"id(\"content\")//div[contains(@class, \"videoTagBox\")]|id(\"tagCloud\")",
"url":"^http://www\\.nicotag\\.jp/(?:tag|search)",
"nextLink":"id(\"content\")//div[contains(@class, \"pager\")][1]//a[starts-with(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"centercol\")/div[@class=\"articleBox\"]/*[following-sibling::table/tbody/tr/td//img[(contains(@src, \"next\") or contains(@src, \"prev\")) and contains(@src, \".gif\")]]",
"url":"^http://www\\.atmarkit\\.co\\.jp/fcoding/",
"nextLink":"//img[contains(@src, \"next\") and contains(@src, \".gif\")]/parent::a"
},
{
"pageElement":"//div[@class=\"vFullBox\"]",
"url":"^http://streetviewgallery\\.corank\\.com/",
"nextLink":"//a[text()=\"\u00bb next\"]"
},
{
"pageElement":"id(\"entry\")",
"url":"^http://kenz0\\.s201\\.xrea\\.com/weblog/",
"nextLink":"//div[@class=\"prev\"]/a"
},
{
"pageElement":"id(\"arc_contents_area\")/a[@name=\"list_bottom\"]/preceding-sibling::*",
"url":"^http://www\\.japan-manganews\\.jp/\\?cat",
"nextLink":"//span[@class=\"current\"]/following-sibling::a"
},
{
"pageElement":"//div[@class=\"publicRatingAll\"]//div[@class=\"commentContainer\"]",
"url":"^http://tv\\.yahoo\\.co\\.jp/review/\\d+/",
"nextLink":"//span[@class=\"paging\"]/a[last()]"
},
{
"pageElement":"id(\"contentsColumn\")/div[@class=\"entryWrapp\"]/*[not(@class=\"entryLImgBox\")]",
"url":"^http://(?:www\\.)?cinra\\.net/interview/",
"nextLink":"//span[@class=\"txtNext\"]/a"
},
{
"pageElement":"id(\"articleBody\")",
"url":"^http://wol\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"contents\")/div[contains(concat(\" \", @class, \" \"), \" message \")]",
"url":"^http://(?:www\\.)?meister\\.ne\\.jp/bbs/",
"nextLink":"id(\"contents\")/p/a[starts-with(text(), \"NEXT>>\")]"
},
{
"pageElement":"id(\"samlist\")",
"url":"^http://(?:hirame|sukima)\\.vip2ch\\.com/",
"nextLink":"id(\"pagenavi1\")/span[2]/a"
},
{
"pageElement":"//div[@class=\"lineListings\"]",
"url":"^http://(?:www\\.)?ebuyer\\.com/search\\?",
"nextLink":"//li[@class=\"currentPage\"]/following-sibling::li[1]/a"
},
{
"insertBefore":"(//div[@class=\"containerPagination\"])[last()]",
"pageElement":"id(\"containerThumbnails\")",
"url":"^http://[^.]+\\.photobucket\\.com/albums/",
"nextLink":"//a[text()=\"next\"]"
},
{
"pageElement":"//table[@class=\"list\"]//tr | //div[@class=\"com_diary_push\"]//tr[not(@class)]",
"url":"^http://labola.jp/(?:community|recruits)/",
"nextLink":"//a[contains(text(), \"\u6b21\u3092\u8868\u793a\u226b\")]"
},
{
"insertBefore":"id(\"blog\")/div[contains(@class, \"autopagerize_insert_before\")]",
"pageElement":"id(\"blog\")/div[contains(@class, \"autopagerize_page_element\")]",
"url":"^http://veadardiary\\.blog29\\.fc2\\.com/",
"nextLink":"id(\"blog\")//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"post-cat1\"]",
"url":"^http://(?:www\\.)?supercentral\\.org/lk/",
"nextLink":"id(\"middle\")/div[@class=\"nav\"]/div[@class=\"navold\"]/a[text()]"
},
{
"pageElement":"id(\"main\")//div[@class=\"day\" and not(h2[text()=\"\u306f\u3066\u306a\u30c0\u30a4\u30a2\u30ea\u30fc\u4ee5\u5916\u306e\u30d6\u30ed\u30b0\u304b\u3089\"])]",
"url":"^http://k\\.hatena\\.ne\\.jp/keywordblog/",
"nextLink":"//a[contains(text(),\"\u904e\u53bb\u306e20\u4ef6\")]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://www\\.digicafe\\.jp/php/bbs\\.php",
"nextLink":"//div[@class=\"pager\"]/a[@title=\"next page\"]"
},
{
"pageElement":"//div[@class=\"ently_outline\" or @class=\"comment_outline\" or @class=\"trackback_outline\"]",
"url":"^http://yaruomatome\\.blog10\\.fc2\\.com/",
"nextLink":"//p[@class=\"page_navi\"]/a[contains(@title,\"\u6b21\u30da\u30fc\u30b8\")]"
},
{
"insertBefore":"//div[@class=\"pagination clear\"]",
"pageElement":"//ul[@class=\"results\"]",
"url":"^http://(?:www\\.)?apple\\.com/downloads/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//ul[@class=\"searchResultItem\"]",
"url":"^http://www\\.nioibu\\.com/smell/category",
"nextLink":"id(\"searchSmell\")/div[@class=\"unitPager\"]//li[@class=\"next\"]//a"
},
{
"pageElement":"//div[@class=\"container\"]/div[5]",
"url":"^http://www\\.dafont\\.com/theme\\.php\\?",
"nextLink":"//div[@class=\"titlebar\"]/div[@class=\"noindex\"]/a[last()]"
},
{
"pageElement":"id(\"mu\")/table[.//td/@background]",
"url":"^http://www\\.dmm\\.co(?:m|\\.jp)/rental/",
"nextLink":"id(\"mu\")/table[.//@class=\"mg-b6\"]//a[.=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"results\")/*",
"url":"^https?://www\\.visualzoo\\.com/search\\?",
"nextLink":"id(\"main\")/div[@class=\"paginate\"]//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"kiji-main\")/div[2]/p|id(\"kiji-main\")/div[2]/div",
"url":"^http://premium\\.nikkeibp\\.co\\.jp/itm/",
"nextLink":"//a[descendant::img[@id=\"NEXT\"]]|//a[descendant::img[@id=\"next\"]]"
},
{
"insertBefore":"//div[@id=\"content\"]/div[@class=\"navigation\"]",
"pageElement":"//div[@id=\"content\"]",
"url":"^http://www\\.css(?:heroes|reboot)\\.com/",
"nextLink":"//div[@id=\"content\"]/div[@class=\"navigation\"]/div[@class=\"wp-pagenavi\"]/a[contains(text(), \"\u00bb\")]"
},
{
"pageElement":"//table[@class=\"animelist\"]//tr",
"url":"^http://anidb\\.net/perl-bin/animedb\\.pl",
"nextLink":"//li[@class=\"next\"][1]/a"
},
{
"pageElement":"id(\"changes\")//tr",
"url":"^http://[^.]+\\.jottit\\.com/site/changes",
"nextLink":"id(\"pagination\")/strong/a[text()=\"Next\"]"
},
{
"pageElement":"id(\"article_title\")/following-sibling::*[./following-sibling::dl[contains(concat(\" \", @class, \" \"), \" menu \")]]",
"url":"^http://www\\.adobe\\.com/(?:jp/)?devnet/",
"nextLink":"//dd[@class=\"next\"]/a[last()]"
},
{
"pageElement":"id(\"maincol\")/div",
"url":"^http://japan\\.internet\\.com/blog/[^/]+",
"nextLink":"//div[@class=\"content-nav\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"thumb_frm\"]/parent::div",
"url":"^http://www\\.nicovideo\\.jp/ranking/fav/",
"nextLink":"//a[starts-with(@href, \"http://www.nicovideo.jp/ranking/\") and contains(text(), \">>\")]"
},
{
"insertBefore":"//hr/following-sibling::table[@align=\"right\"]",
"pageElement":"//hr/following-sibling::table[@align=\"right\"]/preceding-sibling::node()[not(self::center or self::p or self::hr and @width)]",
"url":"^http://alfh\\.sakura\\.ne\\.jp/.+\\.htm$",
"nextLink":"//form[substring(@action, string-length(@action) - string-length(\".htm\") + 1) = \".htm\"][last()]"
},
{
"pageElement":"id(\"entry\")//div[@class=\"txt\"]",
"url":"^http://www\\.trend-news\\.jp/.+/summary-",
"nextLink":"id(\"entry\")//div[@class=\"txt\"]/div[@class=\"summary\"]//a[contains(text(),\"\u8a18\u4e8b\u5168\u6587>>\")]"
},
{
"pageElement":"//div[@class=\"image-pagenation\"][1]/following-sibling::*[1]",
"url":"^http://journal\\.mycom\\.co\\.jp/photo/",
"nextLink":"//img[@src=\"/images/btn_next02.gif\"][1]/parent::a"
},
{
"pageElement":"id(\"main\")//table[@class=\"tab_results\"]",
"url":"^http://btjunkie\\.org/(?:browse|search)",
"nextLink":"id(\"main\")//tr[@class=\"row_header\"]//a[.=\"Next >>\" or .=\" >>\"]"
},
{
"pageElement":"//tr",
"url":"^http://iphone-rejectdb\\.appspot\\.com/",
"nextLink":"id(\"main\")/div[@class=\"index\"]/node()[not(self::a) and (number(self::text())>0)]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"PostActions\")/table[@class=\"dataTabular\"]/following-sibling::node()[1]",
"pageElement":"id(\"PostActions\")/table[@class=\"dataTabular\"]",
"url":"^http://v3\\.newzbin\\.com/search/query/",
"nextLink":"(id(\"PostActions\")/div[@class=\"selection\"]/ul[@class=\"inline paging\"]//a)[last()-1]"
},
{
"pageElement":"id(\"content\")/descendant::*[./following-sibling::*/descendant-or-self::p[@class=\"hrz\"]]",
"url":"^http://news\\.www\\.infoseek\\.co\\.jp/",
"nextLink":"id(\"content\")//p[@class=\"hrz\"]/b[2]/a"
},
{
"pageElement":"//td[@height=\"38\"]/descendant::div[contains(concat(\" \", @class, \" \"), \" head \") or contains(concat(\" \", @class, \" \"), \" indent \")][not(child::a[starts-with(@href,\"http://quiz.wordinfo.info/\")] or child::center)]",
"url":"^http://(?:www\\.)?wordinfo\\.info/words",
"nextLink":"//a[child::img[contains(@alt, \"Next\")]]"
},
{
"pageElement":"id(\"content\")/div[@class=\"black\"]/node()[@class=\"picdetail\" or position()=last()]",
"url":"^http://movapic\\.com/(?:[^/]+/)?pic/\\d",
"nextLink":"id(\"imageNavi\")//td[@class=\"preNavi\"]/a"
},
{
"pageElement":"//table[@class=\"ThreadsTableOut\"]",
"url":"^http://support\\.wondercatstudio\\.com/",
"nextLink":"id(\"PageTextLinkBack\")/a"
},
{
"pageElement":"id(\"list\")//div[@class=\"otherbloc\"]",
"url":"^http://www\\.elle\\.co\\.jp/love/ikemen",
"nextLink":"id(\"list\")//div[@class=\"pagenation\"]//a[span=\">>\"]"
},
{
"insertBefore":"id(\"mainpage\")/div[last()]",
"pageElement":"id(\"mainpage\")/table",
"url":"^http://(?:www\\.)?megaporn\\.com/video/",
"nextLink":"id(\"mainpage\")/table/tbody/tr/td[last()]/div/div[last()]/div/table/tbody/tr/td[last()]/a"
},
{
"insertBefore":"id(\"menu\")",
"pageElement":"id(\"content\")",
"url":"^http://(?:www\\.)?kenshukan\\.net/john/",
"nextLink":"id(\"content\")/a[last()]"
},
{
"insertBefore":"//div[@class=\"paging\"]",
"pageElement":"//dl[@class=\"doc\"]",
"url":"^https?://[^:/]+:1978/node/.+?/search_ui",
"nextLink":"//a[@title=\"Go forward one page\"]"
},
{
"pageElement":"id(\"album_container megaboxx search_results\")",
"url":"^http://www\\.(?:new\\.)?facebook\\.com/",
"nextLink":"//ul[@class=\"pagerpro\"]/li[@class=\"current\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//table[@summary=\"\u8a18\u4e8b\u4e00\u89a7\"]/tbody/tr[position()>2]",
"url":"^http://(?:aurasoul\\.)?mb2\\.jp/_[^/]+/",
"nextLink":"id(\"M\")/a[text()=position()+1]"
},
{
"pageElement":"//div[@class=\"model_view\" or @class=\"model_relationships\"]",
"url":"^http://www\\.modulobe\\.com/models/list",
"nextLink":"//div[@class=\"pagination\"]/span[@class=\"current\"]/following-sibling::a"
},
{
"pageElement":"id(\"article_headline_photo_box\")",
"url":"^http://news\\.walkerplus\\.com/.+/photo",
"nextLink":"id(\"article_headline_photo\")/div[@class=\"photo_next\"]/a"
},
{
"insertBefore":"//table[@class=\"main_naka\"]/ybody/tr/td[last()]",
"pageElement":"id(\"delform\")/table/tbody/tr",
"url":"^http://[^.]+\\.blog\\.shinobi\\.jp/hoge",
"nextLink":"//td[@class=\"changebg\"]/a[text()=\"\u6b21\"]"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://portal\\.nifty\\.com/cs/catalog/",
"nextLink":"id(\"main\")/ul[@class=\"pnlink\"]/li[@class=\"nex\"]/a"
},
{
"insertBefore":"//table[@class=\"main_naka\"]/tbody/tr/td/table/tbody/tr/td/form/table/tbody/tr[last()]",
"pageElement":"//table[@class=\"main_naka\"]/tbody/tr/td/table/tbody/tr/td/form/table/tbody/tr",
"url":"^http://[^.]+\\.blog\\.shinobi\\.jp/hoge",
"nextLink":"//td[@class=\"changebg2\"]/div/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"productReviews\")//div[@class=\"CustomerPopover_load\"]/preceding-sibling::*",
"url":"^https?://www\\.amazon\\.co\\.jp/review/",
"nextLink":"//span[@class=\"paging\"]/span[@class=\"on\"]/following-sibling::*[1][self::a]"
},
{
"pageElement":"//img[contains(@src,\"h_no.gif\") or contains(@src,\"h_subject.gif\")]/ancestor::table[1]",
"url":"^http://gall\\.dcinside\\.com/list\\.php",
"nextLink":"//div[@class=\"gall_page\"]/strong/following-sibling::a[1]"
},
{
"insertBefore":"//div[@class=\"exsearch\"]",
"pageElement":"id(\"ctl00_CPH1_UCAssetList1_pnlFilter\")",
"url":"^http://[^./]+\\.androlib\\.com/r\\.aspx",
"nextLink":"id(\"ctl00_CPH1_UCAssetList1_Pg\")/div[@class=\"Pager\"]/div[@class=\"pg_lst\"]/b/following-sibling::a"
},
{
"pageElement":"//html",
"url":"^http://www\\.lahiguera\\.net/musicalia/",
"nextLink":"//body/center/table/tbody/tr/td/table/tbody/tr/td/div/center/table/tbody/tr/td/b[1]/following-sibling::a[1]"
},
{
"insertBefore":"//form/hr",
"pageElement":"//form/center[1]",
"url":"^http://www1\\.ezbbs\\.net/19/dslender2/",
"nextLink":"//form/b/following-sibling::a"
},
{
"pageElement":"id(\"co_explain\")/*[not(@id=\"co_explainLink\") and not(descendant::img[contains(@src, \"btn_print.gif\")])]",
"url":"^http://pc\\.nikkeibp\\.co\\.jp/article/",
"nextLink":"id(\"co_pagenumLink\")/p[@class=\"arrowR\"]/a"
},
{
"pageElement":"id(\"pageNavi\")/preceding-sibling::div[contains(concat(\" \", @class, \" \"), \" box05 \") or ./div[contains(concat(\" \", @class, \" \"), \" box05 \")]]",
"url":"^http://(bbs|review)\\.kakaku\\.com/\\1/",
"nextLink":"//a[@class=\"arrowNext01\"]"
},
{
"pageElement":"//div[@class=\"inarticleBox\"]",
"url":"^http://waga\\.nikkei\\.co\\.jp/comfort/",
"nextLink":"//li[@class=\"onLink\"]/a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"div_kichikomi\")/*",
"url":"^http://www\\.weddingpark\\.net/search/.",
"nextLink":"id(\"wtOsusumeMainPageNavi\")/b[last()]/a"
},
{
"pageElement":"id(\"blog_article\")",
"url":"^http://hadakadenkyu\\.flnet\\.org/blog/",
"nextLink":"id(\"title_area\")/a[1]"
},
{
"pageElement":"id(\"lastpost\")/preceding-sibling::*",
"url":"^http://(?:www\\.)?sherdog\\.net/forums/",
"nextLink":"//div[@class=\"pagenav\"]//a[text()=\">\"]"
},
{
"pageElement":"//div[@class=\"serpBody\"]",
"url":"^http://(?:www\\.)?figator\\.com/search/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"id(\"list_photo_box\")/*",
"url":"^http://(?:www\\.)?ar-plus\\.jp/fashion/",
"nextLink":"//div[@class=\"page_navi\"]/a[last()][text()]"
},
{
"pageElement":"//tr[starts-with(@class, \"contents_\")]",
"url":"^http://www\\.lddb\\.com/search\\.php\\?",
"nextLink":"/descendant::td[starts-with(normalize-space(text()), \"Browse:\")][1]/b/following-sibling::a[1]"
},
{
"insertBefore":"id(\"pagenum\")",
"pageElement":"id(\"a-e_col1\")/div",
"url":"^http://www\\.javaworld\\.com/javaworld/",
"nextLink":"id(\"next\")/a[@class=\"noline\"]"
},
{
"pageElement":"//table[@summary=\"upinfo\"]",
"url":"^http://(?:up[0-9]+\\.)?viploader\\.net/",
"nextLink":"//small/small/text()[string-length(normalize-space()) > 1]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"pageLink\")/p",
"pageElement":"id(\"contents\")",
"url":"^http://nanigashi3\\.blog40\\.fc2\\.com/",
"nextLink":"id(\"pageLink\")/p/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8 \u226b\"]"
},
{
"insertBefore":"//div[@class=\"detail\"]/p[position()=last()-1]",
"pageElement":"//div[@class=\"detail\"]",
"url":"^http://[a-z.]+moneycentral\\.msn\\.com/",
"nextLink":"//a[text()=\"next >\"]"
},
{
"pageElement":"//table[@width=\"100%\"]/tbody/tr[./td[@class=\"line\"]]",
"url":"^http://(?:www\\.)?freem\\.ne\\.jp/game/",
"nextLink":"//font/a[.=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"id(\"in-center\")/div[@class=\"content-2c\"]/div[@class=\"content-body\"]/div[@class=\"mod-entry-set\"]/div[@class=\"entry\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/sppw6739/e/",
"nextLink":"id(\"in-center\")/div[@class=\"content-2c\"]/div[@class=\"content-body\"]/div[@class=\"mod-entry-set\"]/div[@class=\"entry\"]/div[@class=\"entry-body\"]/div[@class=\"entry-body-text\"]/a"
},
{
"pageElement":"//form[@name=\"f\"]",
"url":"^https?://mail\\.google\\.com/mail/[hx]/",
"nextLink":"id(\"tho\")|//form[@name=\"f\"]/table[1]//td[@align=\"right\"]/b/following-sibling::a[1]"
},
{
"pageElement":"id(\"photogallery\")",
"url":"http://www.friendster.com/viewphotos.php",
"nextLink":"//div[@class=\"paginglinksmodule\"]/a[last()]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" vranking \")]",
"url":"^http://www\\.nicotag\\.jp/videoranking/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" bottomnavi \")]/a[contains(text(), \"\u226b\")]"
},
{
"insertBefore":"id(\"nextpage\")",
"pageElement":"id(\"body\")",
"url":"^http://www\\.channelregister\\.co\\.uk/",
"nextLink":"//a[starts-with(text(), \"Next\")]"
},
{
"insertBefore":"//div[@class=\"article_navi\"]",
"pageElement":"//div[@class=\"heading_area\"] | //div[@class=\"contents_area\"]",
"url":"^http://premium\\.nikkeibp\\.co\\.jp/em/",
"nextLink":"//div[@class=\"article_navi_right_on\"]/a"
},
{
"pageElement":"//div[contains(@class, \"archives\")]/div[@class=\"archive\"]",
"url":"^http://tanizawatomofumi\\.com/archives/",
"nextLink":"//div[contains(@class, \"pager\")]/span[@class=\"prev\"]/a"
},
{
"pageElement":"id(\"search_results\")",
"url":"^http://video\\.excite\\.co\\.jp/search/",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\u7d50\u679c>>\")]"
},
{
"pageElement":"//div[(@class=\"items tempA\" or @class=\"items tempB\" or @class=\"items tempC\")]",
"url":"^http://search\\.ruten\\.com\\.tw/search",
"nextLink":"//span[@class=\"next \"]/a"
},
{
"pageElement":"//table[@class=\"tbl\"]",
"url":"^https://www\\.bk1\\.jp/myaccount/order/",
"nextLink":"//a[text()=\"\u6b21\u3078\u2192\"]"
},
{
"pageElement":"id(\"centerarea\")/div[1]/*[self::p or self::div[@class=\"image\"]]",
"url":"^http://(?:www\\.)?eetimes\\.jp/article/",
"nextLink":"id(\"centerarea\")//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"MAIN\")",
"url":"^http://urakaryu08\\.blog51\\.fc2\\.com/",
"nextLink":"id(\"NAVI\")//a[text()=\"NEXT\"]"
},
{
"pageElement":"id(\"main\")/div[starts-with(@class,\"articles\")]",
"url":"^http://[^.]+\\.blog\\.so-net\\.ne\\.jp/",
"nextLink":"//span[@class=\"previousLink\"]/a"
},
{
"pageElement":"id(\"content\")/div",
"url":"^http://www\\.massively\\.com/category/.",
"nextLink":"id(\"content\")/p/a[last() and text()=\"Next Page \u00bb\"]"
},
{
"pageElement":"id(\"wrapper\")/dl",
"url":"^http://clip\\.livedoor\\.com/watchlist/",
"nextLink":"//a[@accesskey=\"n\"]"
},
{
"pageElement":"id(\"main_block\")/div[contains(@class,\"entry_block\")]",
"url":"^http://news23vip\\.blog109\\.fc2\\.com/",
"nextLink":"//div[@class=\"pnavi\"]/a[last()]"
},
{
"pageElement":"id(\"rank\")/div[@class=\"rk\"]/table",
"url":"^http://ranking\\.goo\\.ne\\.jp/ranking/",
"nextLink":"id(\"rank\")/div[@class=\"rk\"]/div[@class=\"paging fs12\"]/a[preceding-sibling::span]"
},
{
"pageElement":"id(\"innerbox\")",
"url":"^http://www\\.diamondblog\\.jp/yurika_n/",
"nextLink":"//p[@class=\"navigation\"]/a[last()]"
},
{
"pageElement":"id(\"tl_result\")/table",
"url":"^http://search-voi\\.0101\\.co\\.jp/voi/",
"nextLink":"id(\"pageing_f\")/a[img[@alt=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]]"
},
{
"pageElement":"//div[@class=\"content-body\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/yukoyajima/",
"nextLink":"//li[@class=\"mod-pre-nex-prev\"]/a"
},
{
"pageElement":"id(\"mnc\")/div[@class=\"wr mg10t\"]/div[1]",
"url":"^http://xbrand\\.yahoo\\.co\\.jp/.+html$",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"global_area_tabs_ctn\")/div",
"url":"^http://(?:[^.]+\\.)?steampowered\\.com/",
"nextLink":"id(\"global_area_tabs_search\")/descendant::div[@class=\"search_pagination_right\"]/a[last()]"
},
{
"pageElement":"//div[contains(@class,\"book\")]",
"url":"^http://book\\.akahoshitakuya\\.com/[us]",
"nextLink":"//div[@class=\"inner\"]/center/a[contains(text(),\"next\")]"
},
{
"pageElement":"id(\"main\")/div[@class=\"entry\"]",
"url":"^http://ironman\\.enlightenedperl\\.org/",
"nextLink":"id(\"main\")/div[@class=\"header\"]/span[@class=\"nav\"]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//*[@class=\"post\"]",
"url":"^http://(.*)\\.bookoff-online\\.jp/blog/",
"nextLink":"id(\"container\")/div[@class=\"navigation\"]/a"
},
{
"pageElement":"//td[contains(@class, \"articl_color\")]/../../..",
"url":"^http://(?:www\\.)?hotexpress\\.co\\.jp/",
"nextLink":"//img[contains(@src, \"next_before\")]/.."
},
{
"pageElement":"//center/p[last()]/preceding-sibling::node()",
"url":"^http://www\\.dojinoh\\.com/\\d+\\.html",
"nextLink":"//p[last()]/a[last()]"
},
{
"pageElement":"//ul[@class=\"view-photo\"]",
"url":"^http://gree\\.jp/\\?mode=dir&act=album",
"nextLink":"//div[@class=\"paging\"]/a[last()]"
},
{
"pageElement":"id(\"collectionitems\")/tbody/tr[@id=\"row_\"]|//table[@class=\"forum_table\"]/tbody/tr[position()>1]",
"url":"^http://(?:www\\.)?boardgamegeek\\.com/",
"nextLink":"//b[contains(., \"Next\")]/parent::a"
},
{
"pageElement":"//span[@class=\"nonprint\"]",
"url":"^http://(?:www\\.)?wtop(?:news)?\\.com/",
"nextLink":"//a[text()=\"Next page\"]"
},
{
"insertBefore":"//div[@class=\"pager\"]",
"pageElement":"//div[@class=\"page\"]/div[@class=\"content\"]/*[preceding-sibling::div[@class=\"submitted\"]][not(@class=\"pager\")]",
"url":"^http://www\\.popsci\\.com(?:/[^/]+){4}",
"nextLink":"//span[@class=\"pagination\"]/a[contains(text(),\"next\")]"
},
{
"pageElement":"//div[@class=\"ys\"]/table[2]/tbody/tr[position()>2]",
"url":"^http://www\\.amazon\\.de/gp/yourstore/",
"nextLink":"//a[child::img[contains(@src, \"more-results\")]]"
},
{
"pageElement":"id(\"ev-view\")",
"url":"^http://(?:www\\.)?cotosaga\\.com/list/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"result_images\")",
"url":"^http://(?:www\\.)?tineye\\.com/search/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"(//table[@class=(\"table_simple_outerflame\" or \"table_common_main_innerflame\" or \"table_common_main_innerflame_blue\") and @summary=\"data\"])",
"url":"^http://www\\.toranoana\\.jp/mailorder/",
"nextLink":"//a[text()=\">\"]"
},
{
"insertBefore":"(//div[@class=\"page_links\"])[3]",
"pageElement":"//p[@class=\"storybody\"]",
"url":"^http://www\\.computerworld\\.com\\.au/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"content-body\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/herbsaison",
"nextLink":"//a[child::span[text()=\"\u524d\u30da\u30fc\u30b8\"]]"
},
{
"pageElement":"//div[@class='spotHyoujiContents']/div[3]",
"url":"^http://www\\.mapple\\.net/bythemearea/",
"nextLink":"//a[contains(text(),'\u6b21\u306e')]"
},
{
"pageElement":"id('spFotostreckeLeft spFotostreckeRight')",
"url":"^http://www\\.spiegel\\.de/fotostrecke/",
"nextLink":"id('spFotostreckeControlForw')"
},
{
"pageElement":"//div/img",
"url":"^http://hirotaku\\.fc2web\\.com/mannga/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@class=\"blog\"]",
"url":"^http://footballnet\\.sakura\\.ne\\.jp/",
"nextLink":"//a[@class=\"link_next\"]"
},
{
"pageElement":"id(\"unitBlockLeft v15unitBlockLeft\")/*[not(self::div[@id=\"locationTop\" or @class=\"pageNavi\"])]",
"url":"^http://(?:www\\.)?globe\\.asahi\\.com/",
"nextLink":"//p[@class=\"next\" or @class=\"pagingNext\"]/a"
},
{
"pageElement":"//div[@class=\"top_overview\"]",
"url":"^http://www\\.pornhost\\.com/top\\.html",
"nextLink":"//div[@class=\"top_overview\"]/p/a[@class=\"active\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"left\")/child::node()",
"url":"^http://vocaloid\\.blog120\\.fc2\\.com/",
"nextLink":"id(\"left\")/a[last()]"
},
{
"pageElement":"id(\"entradas\")/div",
"url":"^http://(?:[^./]+\\.)+anaitgames\\.com/",
"nextLink":"//div[@class=\"pag-anterior\"]/a"
},
{
"pageElement":"//table[contains(concat(\" \",@class,\" \"),\" project-list-table \")]/tbody/tr",
"url":"^http://(?:www\\.)?shomei\\.tv/project/",
"nextLink":"//div[@class=\"align_right\"]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"container\")/a",
"url":"^http://omg\\.topherchris\\.com/photos/",
"nextLink":"id(\"footer\")/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://medt00lz\\.s59\\.xrea\\.com/wp/",
"nextLink":"//a[text()=\"Next \u00bb\"]"
},
{
"pageElement":"//body/div[@class=\"container\"]/div[@class=\"span-18 commuStyle\"]",
"url":"^http://hinamiki\\.com/explore/timeline",
"nextLink":"//a[text()=\"Older \u00bb\"]"
},
{
"pageElement":"id(\"main\")/div[@class=\"left-box\"][./div[@class=\"article\"]][1]/following-sibling::*[1][self::img]/following-sibling::*[./following-sibling::img/following-sibling::*[1][self:: div and @class=\"left-box\"][./div[@class=\"article\"]]]",
"url":"^http://dic\\.nicovideo\\.jp/m/[nu]/res",
"nextLink":"id(\"main\")//div[@class=\"article\"]/div[@class=\"pager\"]/*[last()][self::a and @class=\"navi\"]"
},
{
"pageElement":"id(\"main\")/*[not(self::div and @class=\"page_navi\")]",
"url":"^http://irohairo\\.blog108\\.fc2\\.com/",
"nextLink":"id(\"main\")/div[@class=\"page_navi\"]/a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://blog\\.nicovideo\\.jp/.+\\.php$",
"nextLink":"id(\"navibar\")/a[1]"
},
{
"pageElement":"id(\"left_area\")//div[@class=\"left_page\"][1]/following-sibling::*[following::*[@class=\"left_page\"]]",
"url":"^http://isec-rss\\.ipa\\.go\\.jp/search",
"nextLink":"id(\"left_area\")//div[@class=\"left_page\"]//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"content\")/div[contains(@class, \"post\")]",
"url":"^http://garakuta\\.oops\\.jp/wordpress/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" browse \")]/a[last()]"
},
{
"pageElement":"id(\"body\")//div[@class=\"published\"]",
"url":"^http://bakery\\.cakephp\\.org/articles",
"nextLink":"id(\"body\")//div[@class=\"paging\"]//a[contains(text(), \"next\")]"
},
{
"pageElement":"//div[@class=\"searchresult\"]/dl",
"url":"^http://search\\.livedoor\\.com/search/",
"nextLink":"//a[descendant::img[@src=\"/img/cmn/pager_arrow_after.gif\"]]"
},
{
"pageElement":"//div[@class=\"review-wrap\"]",
"url":"^http://u\\.tabelog\\.com/\\d+/r/rvwlst",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"//center[count(//center)-1]",
"pageElement":"//center[1]/following-sibling::node()[following::center[count(following::center)]]",
"url":"^http://www\\.mbga\\.jp/\\.pc/_msg_list",
"nextLink":"//a[@accesskey=\"#\"]"
},
{
"pageElement":"//div[@class=\"section graphs\"]",
"url":"^http://xpath\\.kayac\\.com/search\\?q=",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"content-main1\")/form/table[@class=\"search-results\" and position()=3]/tbody/tr",
"url":"^http://w3\\.ibm\\.com/search/do/search",
"nextLink":"//th[contains(concat(\" \",@class,\" \"),\" results-sequence \")]/a[text()=\"Next\"]"
},
{
"pageElement":"//table[@cellpadding=\"4\" and @align=\"center\"]/following-sibling::table[@cellpadding=\"2\"]",
"url":"^http://cure\\.livedoor\\.com/category/",
"nextLink":"//table[@cellpadding=\"4\" and @align=\"center\"]//td[@align=\"right\"]/a[text()=\"\u6b21\u3078>>\" or text()=\"\u6b21\u306e\u30da\u30fc\u30b8>>\"]"
},
{
"insertBefore":"//center[2]",
"pageElement":"//a[@accesskey=\"5\"]/following-sibling::node()[following::center[2]]",
"url":"^http://www\\.mbga\\.jp/\\.pc/_tpc_list",
"nextLink":"//a[@accesskey=\"#\"]"
},
{
"pageElement":"//div[@class=\"DIV\"]",
"url":"^http://plaza\\.rakuten\\.co\\.jp/\\w+/",
"nextLink":"//div[@class=\"DIV\"]/following-sibling::h3[1]/a[contains(text(),\"\u524d\")]"
},
{
"pageElement":"//div[@id=\"main\" and @class=\"main\"]/div[@class=\"wrapper\"]",
"url":"^http://www\\.animepaper\\.net/gallery/",
"nextLink":"//a[contains(text(),\"\u00bb\")]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"),\" NewsBody \")]",
"url":"^http://mainichi\\.jp/enta/mantan/news/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"board\")",
"url":"^http://shuugi\\.in/(?:[^/]+/)+?comment",
"nextLink":"//ul[@class=\"next\"]/li[last()]/a"
},
{
"pageElement":"id(\"WS2m\")/ul",
"url":"^http://search\\.yahoo\\.co\\.jp/search",
"nextLink":"id(\"Sp1\")//span[.=\">\"]/parent::a"
},
{
"pageElement":"id(\"content\")/div[@class=\"photo_box_main\"]/div[@class=\"photo_main_left\"]/a",
"url":"^http://(?:www\\.)?ota-suke\\.jp/photo/",
"nextLink":"id(\"content\")/div[@class=\"photo_box_main\"]/div[@class=\"photo_main_left\"]/a"
},
{
"pageElement":"//div[@class=\"result\"]/div[contains(@class, \"thumb\")]",
"url":"^http://(?:www\\.)?logosauce\\.com/\\w+",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"//div[@class=\"blog\"]/div[@class=\"blogbody\"]",
"url":"^http://twwatcher\\.blog20\\.fc2\\.com/",
"nextLink":"//div[@class=\"pagenavi\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"oneEntry\" or @id=\"comment-trackback\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/ikedanobuo",
"nextLink":"//a[child::span[@class=\"etNextPrev\"]]"
},
{
"pageElement":"id(\"columnD DetailBrowse\")",
"url":"^http://www\\.search\\.as-1\\.co\\.jp/.",
"nextLink":"id(\"pagination-digg\")/li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"article\")/span[@class=\"body\"]/prn",
"url":"^http://www\\.securityfocus\\.com/news/",
"nextLink":"//span[@class=\"pages\"]/a[text()=\"next\"]"
},
{
"pageElement":"id(\"main\")/div[@class=\"content\"]/div[@class=\"rank\" or @class=\"rank_even\"]",
"url":"^http://blog\\.fc2\\.com/(?:sub)?genre/",
"nextLink":"id(\"main\")/div[@class=\"content\"]/div[@class=\"pagination\"]/a[@class=\"next_page\"]"
},
{
"insertBefore":"//span[@class=\"pagination\"]",
"pageElement":"id(\"article\")",
"url":"^http://www\\.scientificamerican\\.com/",
"nextLink":"//a[text()=\"Next\u00bb\"]"
},
{
"pageElement":"id(\"posts threadslist\") | //td[@class=\"padright\"]/div[starts-with(@class,\"deal\")]",
"url":"^http://(?:[^.]+\\.)*?slickdeals\\.net/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"//td[contains(.,\" views\")]/..|//*[contains(text(), \"Goto page\")]/../following-sibling::tr",
"url":"^http://(?:[^.]+\\.)?lazygirls\\.info/.",
"nextLink":"//*[contains(text(), \"Goto page\")]/a[last()]/img/parent::*"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://netreview3\\.blog7\\.fc2\\.com/",
"nextLink":"//li[@class=\"older\"]/a"
},
{
"pageElement":"//center",
"url":"^http://www\\.cepolina\\.com/freephoto/",
"nextLink":"//center/table/tbody/tr/td/a[last()]"
},
{
"pageElement":"id(\"ps_top\")/following-sibling::*[not(position()=last())]",
"url":"^http://(?:www\\.)?chinkoup\\.net:8084/",
"nextLink":"id(\"ps_top\")/p/*[last()][self::a]"
},
{
"insertBefore":"//*[@class=\"content-nav_head\"]",
"pageElement":"//*[@class=\"entry-asset asset\"]",
"url":"^http://gs\\.dengeki\\.com/suteki/blog/",
"nextLink":"//*[@class=\"content-nav_foot\"]/a[1]"
},
{
"pageElement":"id(\"article\")",
"url":"^http://www\\.macdevcenter\\.com/pub/a/",
"nextLink":"id(\"page-break\")//td[last()]//a"
},
{
"insertBefore":"//div[contains(@class,\"bgfooter\")]",
"pageElement":"//div[@class=\"bgsearch\"]",
"url":"^http://modarchive\\.org/index\\.php\\?",
"nextLink":"//a[@class=\"navlink\"][contains(text(), \">\")]"
},
{
"pageElement":"id(\"gsContent\")/node()[@class=\"gbBlock\" or position()=last()]",
"url":"^http://(?:pix\\.)?4gifs\\.com/gallery/",
"nextLink":"id(\"gsContent\")/div[contains(@class,\"gbNavigator\")]//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"phxcms_normal_format\"]",
"url":"^http://www\\.phoronix\\.com/scan\\.php",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" phxcms_navigation_format \")][last() - 1]/div[contains(concat(\" \", @class, \" \"), \" phxcms_navigation_hover_box \")][last()]/a"
},
{
"pageElement":"(//div[contains(@id, \"product_\")]/ancestor::table)[last()]",
"url":"^http://(?:www\\.)?threadless\\.com/\\w",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" selected \")]/following-sibling::a[1]"
},
{
"pageElement":"id(\"mb_articlebody\")",
"url":"^http://trendy\\.nikkeibp\\.co\\.jp/lc/",
"nextLink":"id(\"pages\")/a[@class=\"b\"][last()] | //a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"photo-list\")",
"url":"^http://r\\.tabelog\\.com/.+/photo_?lst",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"fullpagecontent\")/div[@class=\"normal\"] | id(\"articleend\")",
"url":"^http://techreport\\.com/articles\\.x/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id('newsnachricht')",
"url":"^http://www\\.serienjunkies\\.de/news/",
"nextLink":"//img[@alt=\"weiter\"]/parent::a"
},
{
"pageElement":"id(\"mainContArea\")/div[@class=\"contents\"][last()]",
"url":"^http://robot\\.tsukumo\\.co\\.jp/dir/",
"nextLink":"id(\"mainContArea\")/div[@class=\"contents\"]/table[@class=\"pageNavi\"][last()]/tbody/tr/td[@class=\"next\"]/a"
},
{
"pageElement":"id(\"main-column\")/div[contains(@class,\"EntryBlock\")]",
"url":"^http://urasoku\\.blog106\\.fc2\\.com/",
"nextLink":"//div[@class=\"pageLink\"]/a[last()]"
},
{
"pageElement":"(//td[@class=\"fsM\"]/a[font[@color=\"blue\"]]/ancestor::table[2])[1]/following-sibling::table[1]",
"url":"^https?://joshinweb\\.jp/srh\\.html\\?",
"nextLink":"//td[@class=\"fsM\"]/a[font[@color=\"blue\"]]/following-sibling::a[1]"
},
{
"pageElement":"id(\"icons\")|id(\"icons\")/following-sibling::*[1][self::div and @class=\"clearboth\"]",
"url":"^http://www\\.iconfinder\\.com/search/",
"nextLink":"id(\"searchresults\")//a[@class=\"next\"]"
},
{
"pageElement":"id(\"es\")/div[2]/following-sibling::node()[following-sibling::div]",
"url":"^http://www\\.nikki\\.ne\\.jp/es/\\d+/",
"nextLink":"id(\"es\")/div/b/font[contains(@color, \"cc6600\")]/following::a"
},
{
"pageElement":"//td[@class=\"node-container\"]/table|//td[@class=\"node-container\"]/br",
"url":"^http://bugguide\\.net/node/view/\\d+/",
"nextLink":"//a[./img[@alt=\"next page\"]]"
},
{
"insertBefore":"id(\"mod-prev-next\")",
"pageElement":"id(\"in-center\")//div[@class=\"mod-entry-set\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/kinokoweb",
"nextLink":"id(\"mod-prev-next\")//span[@class=\"etNextPrev\"]/parent::a"
},
{
"pageElement":"id(\"news_content\")/*[not(@id=\"LoginWindow\")]",
"url":"^http://www\\.chosunonline\\.com/news/",
"nextLink":"id(\"post\")/div[@class=\"relpost\"]/ul[1]//a[contains(text(), substring-before(//title/text(), \"\uff08\")) and ((contains(//title/text(), \"\uff08\u4e0a\uff09\") and (contains(text(), \"\uff08\u4e2d\uff09\") or contains(text(), \"\uff08\u4e0b\uff09\"))) or (contains(//title/text(), \"\uff08\u4e2d\uff09\") and contains(text(), \"\uff08\u4e0b\uff09\")))]"
},
{
"insertBefore":"id(\"main\")/ul[@class=\"topics_ul\"]/following-sibling::*[1]",
"pageElement":"id(\"main\")/ul[@class=\"topics_ul\"]",
"url":"^http://jp\\.meritdemerit\\.com/topics",
"nextLink":"id(\"main\")/a[contains(text(), \"Next\")]"
},
{
"insertBefore":"//div[@class=\"story-pager\"]",
"pageElement":"id(\"storyText\")",
"url":"^http://(?:www\\.)?abcnews\\.go\\.com/",
"nextLink":"//a[@class=\"paginationN\"]"
},
{
"pageElement":"id(\"alpha-inner\")/*[(self::h2 and @class=\"date-header\") or (self::a and @id) or (self::div and @class=\"entry\")]",
"url":"^http://(?:www\\.)?gamesetwatch\\.com/",
"nextLink":"id(\"alpha-inner\")/div[@class=\"pagination_nav\"]//a[contains(text(), \">>\")]"
},
{
"pageElement":".//div[@class=\"data\"]//li",
"url":"^http://(?:search|www)\\.pandora\\.tv/",
"nextLink":".//div[@class=\"paging\"]/a[@class=\"on\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"camp\"]",
"url":"^https://oubo\\.rakuten\\.co\\.jp/list",
"nextLink":"//div[@class=\"pagination\"][1]/a[starts-with(@href,\"/list?\")][.=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"mainContents\")//div[@class=\"paragraph\"]",
"url":"^http://www\\.insightnow\\.jp/article/",
"nextLink":"id(\"mainContents\")//div[@class=\"articlePagenate\"]/span[last()]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"cent\"]/div[@class=\"entry\"]",
"url":"^http://kanasoku\\.blog82\\.fc2\\.com/",
"nextLink":"//div[@class=\"pagenavi_text\"]/a[contains(., \"\u6b21\u306e\")]"
},
{
"pageElement":"//table[descendant::tr[1]/td/a/font[normalize-space(text())=\"\u25b2\"]]",
"url":"^http://tv\\.www\\.infoseek\\.co\\.jp/",
"nextLink":"//td[img[contains(@src,\"/content/tv/bt_\")]]/following-sibling::td[1]/a"
},
{
"pageElement":".//div[@class=\"middle\"]",
"url":"^http://(?:www\\.)?stuffonmycat\\.com/",
"nextLink":".//a[@class=\"pagenav\" and @title=\"Next\"]"
},
{
"pageElement":"//div[contains(concat(' ',@class,' '),' entry-asset ')]",
"url":"^http://kossie\\.net/blog/[^/]+/[^/]+/",
"nextLink":"//div[@class=\"content-nav\"]/a[starts-with(text(),\"\u00ab\")]"
},
{
"pageElement":"id(\"secontent\")/form/following-sibling::node()[following::div[@id=\"pageno\"]]",
"url":"^http://www\\.tsukaerusite\\.com/se/se",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"bbs\")/dl",
"url":"^http://dic\\.nicovideo\\.jp/b/[aiuv]/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pager \")]/a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"//table[@class=\"topics\"]",
"url":"^http://kanpoo\\.jp/(?:$|#|topic\\.p/)",
"nextLink":"//a[contains(text(),\"\uff1c\")][@href]"
},
{
"pageElement":"id(\"inner\")",
"url":"^http://people\\.zozo\\.jp/[^/]+/diary",
"nextLink":"//a[contains(text(), \"\u6b21\u306e5\u4ef6\")]"
},
{
"pageElement":"id(\"content_article\")",
"url":"^http://www\\.associatedcontent\\.com/",
"nextLink":"//div[@class=\"article_pagination\"]/a[starts-with(text(), \"Next\")]"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"entry\")]",
"url":"^http://newsteam\\.blog95\\.fc2\\.com/",
"nextLink":"//li[contains(concat(\" \",@class,\" \"),\" older \")]/a"
},
{
"pageElement":"id(\"main\")/div[@class=\"entry\"]/div[@class=\"body\" or @class=\"pager\"]",
"url":"^http://www\\.kumikomi\\.net/archives/",
"nextLink":"id(\"main\")/div[@class=\"entry\"]/div[@class=\"pager\"]/a[position()=last() and @class=\"arrow\"]"
},
{
"pageElement":"id(\"centerside\")//div[contains(concat(\" \", @class, \" \"), \" news_con \")]/node()[following::div[@class=\"bm_page3\"]]",
"url":"^https?://(?:www\\.)?toyokeizai\\.net/",
"nextLink":"id(\"centerside\")//a[@class=\"next\"]"
},
{
"pageElement":"id(\"multipage\")/preceding-sibling::*[preceding-sibling::p/@class=\"leafDate\" and not(@class=\"keyword\")]|//ul[@class=\"listSet\"]",
"url":"^http://kenplatz\\.nikkeibp\\.co\\.jp/",
"nextLink":"id(\"multipage\")/a[contains(text(),\">\")]"
},
{
"insertBefore":"id(\"main\")/div[@class=\"pager\"]",
"pageElement":"id(\"main\")/div[@class=\"list\"]",
"url":"^http://s\\.hatena\\.ne\\.jp/.+?/stars",
"nextLink":"id(\"main\")/div[@class=\"pager\"]/a[last()]"
},
{
"pageElement":"//table[contains(@class, \"detTable\")]//tr",
"url":"^https?://www\\.netsecurity\\.ne\\.jp/",
"nextLink":"//table[contains(@class, \"detTable\")]/following-sibling::div[1]/a[contains(text(), \">>\")]"
},
{
"pageElement":"id(\"ad\")/div | id(\"a5\")",
"url":"^http://s\\.luna\\.tv/search\\.aspx\\?",
"nextLink":"id(\"results_nav_next\")/a"
},
{
"pageElement":"id(\"pageElement\")",
"url":"^http://(?:www\\.)?nanos\\.jp/motsuko/",
"nextLink":"//a[@accesskey=\"#\"]"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://pastie\\.org/(?:pastes|search)",
"nextLink":"//p/a[text()=\"Next page\"]"
},
{
"pageElement":"//div[@class=\"primary-column\"]/div[contains(@class, \"section\")]",
"url":"^http://omoroid\\.blog103\\.fc2\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"contentsMain\")/div",
"url":"^http://search\\.mext\\.go\\.jp/search",
"nextLink":"//a[text()=\"\u6b21\u3078>\"]"
},
{
"pageElement":"//div[@class=\"archive_detail_inner\" or @class=\"archive_index_inner\"]|//div[@class=\"webspecial_contents\"]|//div[@class=\"webserialization_contents\"]",
"url":"^http://(?:www\\.)?voiceplus-php\\.jp/",
"nextLink":"//*[@class=\"archive_detail_page\" or @class=\"backnumber_links\"]//a[text()=\"\u6b21\"]|//div[contains(concat(\" \", @class, \" \"), \" tac \")]/p[1]/a[1]"
},
{
"pageElement":"id(\"Search\")/div[not(@class=\"pagination\")]",
"url":"^http://crossreview\\.jp/search/result",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"//center/table/tbody/tr/td[2]/child::node()",
"url":"^http://w6\\.oroti\\.com/~amaran/rank/",
"nextLink":"//a[@class=\"selected\"]/parent::td/following-sibling::td[1]/a[@class=\"noselected\"]"
},
{
"pageElement":"id(\"main\")/table[@class=\"normal\"]|id(\"main\")//table[@class=\"small_review\"]",
"url":"http://www\\.animesachi\\.com/visitor/",
"nextLink":"id(\"main\")//a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]|(id(\"main\")//a[starts-with(., \"\u6b21\u3078\")])[last()]"
},
{
"pageElement":"id(\"searchResult\")",
"url":"^http://(?:www\\.)?thepiratebay\\.org/",
"nextLink":"//img[@src=\"http://static.thepiratebay.org/img/next.gif\"]/parent::a"
},
{
"pageElement":"//div[@class='borderShelf']",
"url":"^http://www\\.date2\\.jp/package_list/",
"nextLink":"//a[contains(text(),'>')]"
},
{
"pageElement":"id(\"article_box\")/p",
"url":"^http://(?:www\\.)?iht\\.com/articles/",
"nextLink":"id(\"pagination\")/a[text()=\"Next Page\"]"
},
{
"pageElement":"//div[@class=\"stencil\"]",
"url":"^http://(?:www\\.)?graffletopia\\.com/",
"nextLink":"//div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"id(\"content\")//div[starts-with(@id,\"article\")]",
"url":"^http://www\\.instapaper\\.com/archive",
"nextLink":"//a[span[contains(text(), \"Older items\")]]"
},
{
"insertBefore":"id(\"main\")/div[@class=\"home_table\"]",
"pageElement":"id(\"main\")/div[@class=\"entry_table\"]",
"url":"^http://eq2bell\\.blog113\\.fc2\\.com/",
"nextLink":"id(\"main\")/div[@class=\"home_table\"]/ul[@class=\"entry_navi\"]/li[last()]/a"
},
{
"pageElement":"//div[@class=\"entryDetailBodyCopy\"]",
"url":"^http://(?:www\\.)?newsweekjapan\\.jp/",
"nextLink":"//a[contains(text(),\"Next>>\")]"
},
{
"pageElement":"id(\"pagebody\")//div[@class=\"plugin-block\"]",
"url":"^http://wordpress\\.org/extend/themes/",
"nextLink":"id(\"pagebody\")//a[contains(concat(\" \", @class, \" \"), \" next \")]"
},
{
"pageElement":"//tr[child::td[@class=\"f10pt130\"]][descendant::h2]",
"url":"^http://www\\.stackasterisk\\.jp/tech/",
"nextLink":"//span[@class=\"prevNext\"][contains(text(),\">>\")]/parent::a"
},
{
"insertBefore":"id(\"main\")/div[@class=\"column-inner\"]/div[@class=\"column-inner-2\"]/div[@class=\"article-outer hentry\"]/following-sibling::node()",
"pageElement":"//div[@class=\"article-outer hentry\"]",
"url":"^http://blog\\.esuteru\\.com/archives/",
"nextLink":"id(\"main\")/div[@class=\"column-inner\"]/div[@class=\"column-inner-2\"]/div[@class=\"pager article-pager-type2\"]/div[@class=\"pager-inner\"]/div[@class=\"article-pager-outer\"]/ul[@class=\"article-pager\"]/li[@class=\"prev\"]/a[1]"
},
{
"pageElement":"id(\"main_block\")/div[@class=\"entry_block\"]",
"url":"^http://chiquita\\.blog17\\.fc2\\.com/",
"nextLink":"//div[@class=\"pnavi\"]/a[text()=\"NEXT\"]"
},
{
"pageElement":"id(\"entries\")/div[contains(@class, \"entry\")]",
"url":"^http://(?:[^.]{6}\\.)?sa\\.yona\\.la/",
"nextLink":"id(\"entries\")/div[@class=\"pagination\" and position()=1]/a[@class=\"next_page\" and last()]"
},
{
"pageElement":"id(\"main\")/div[starts-with(@id,\"entry\")]",
"url":"^http://appteam\\.blog114\\.fc2\\.com/",
"nextLink":"//li[@class=\"prev\"]/a"
},
{
"pageElement":"id(\"main main-column center main_block Main primary-column blog content\")[1]/div | id(\"contents Contents\")[1]/div[not(@id)] | id(\"main\")/table[starts-with(@class, \"entry\")] | id(\"blog_content\")/div[@class] | id(\"right\")/div[@class=\"contents\"] | id(\"primary\")/div[@class=\"entry\"] | id(\"mainBlock\")/div[div] | id(\"entry\") | id(\"box_main\")/table | id(\"left\")/div[@class=\"body\"] | //div[@align=\"center\"]/table[@width=\"740\"]/tbody/tr/td/table[@width=\"660\"]",
"url":"^http://[^.]+\\.blog[^.]+\\.fc2\\.com/",
"nextLink":"descendant::a[contains(@href,\"fc2.com/page-\")][last()] | /descendant::a[contains(translate(text(), \"ENTX\", \"entx\"), \"next\")][last()]"
},
{
"pageElement":"//center/table[last()]/tbody/tr/td/table[@bgcolor=\"#d6ccbb\"]",
"url":"^http://messages\\.yahoo\\.co\\.jp/bbs",
"nextLink":"//center/table/tbody/tr/td//form/small/a"
},
{
"pageElement":"//table[@class=\"main\"]/tbody/tr/td[2]/table[2]/tbodyrn",
"url":"^http://www\\.bitme\\.org/browse\\.php",
"nextLink":"//a[descendant::*[contains(text(),\"Next\")]]"
},
{
"pageElement":"id(\"AutoNumber5\")",
"url":"^http://www\\.iconspedia\\.com/search/",
"nextLink":".//div[@align=\"center\"]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"content\")/div[contains(@class,\"post\")]",
"url":"^http://status\\.secondlifegrid\\.net/",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" alignleft \")]/a[starts-with(text(),\"\u00ab\")]"
},
{
"pageElement":"//div[@class=\"navheader\"]/../div",
"url":"^http://(?:www\\.)?producingoss\\.com/",
"nextLink":"//div[@class=\"navheader\"]//a[@accesskey=\"n\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://drawr\\.net/fav(ing|ter)\\.php",
"nextLink":"//div[@class=\"floright\"]/a[starts-with(text(), \"Next\")]"
},
{
"pageElement":"//div[@class=\"content_text\"]/p/img",
"url":"^http://www\\.japan-manganews\\.jp/it/",
"nextLink":"//div[@class=\"page_link_area\"]/p/a"
},
{
"pageElement":"id(\"style-list\")",
"url":"^http://userstyles\\.org/styles/browse",
"nextLink":"//div[@class=\"pagination\"]/a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"block_story block_listing\")/*",
"url":"^http://builder\\.japan\\.zdnet\\.com/",
"nextLink":"//span[@class=\"this-page\"]/following-sibling::a"
},
{
"insertBefore":"//div[@class=\"fL pS\"]/../..",
"pageElement":"(//div[@class=\"mR165\"]/*)[descendant::*[@class=\"fL pS\"]]/preceding-sibling::*",
"url":"^http://www\\.msnbc\\.msn\\.com/id/\\d",
"nextLink":"//div[@class=\"fL pS\"]/a[contains(text(), \"Next\")]"
},
{
"pageElement":"//div[@class=\"mgnTop10\"]",
"url":"^http://drawr\\.net/(new|thread)\\.php",
"nextLink":"(//p[@class=\"left-food-link\"])[last()]/a"
},
{
"pageElement":"id(\"content\")//div[starts-with(@id, \"post-\")]",
"url":"^http://www\\.digitaldj\\.jp/[0-9]{4}/",
"nextLink":"id(\"content\")//div[@class=\"navigation-r\"]/a"
},
{
"pageElement":"//tr[starts-with(@id,\"res\")]",
"url":"^http://www\\.google\\.com/products\\?",
"nextLink":"id(\"nn\")/parent::a"
},
{
"pageElement":"//table[@class=\"contentpaneopen\"]/tbody/tr[descendant::table[@class=\"contenttoc\"]]",
"url":"^http://www\\.photozone\\.de/[^/]+/\\d",
"nextLink":"//div[@class=\"pagenavbar\"]//a[last()]"
},
{
"pageElement":"id('content')",
"url":"^http://forums\\.somethingawful\\.com/",
"nextLink":"//a[@class='pagenumber' and @title='next page \u00bb']"
},
{
"pageElement":"id(\"main\")/*",
"url":"^http://ttyshare\\.com/(?:recent|tag)/",
"nextLink":"id(\"pager\")//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"authors\"]/ancestor::tr[2]",
"url":"^http://portal\\.acm\\.org/\\w+\\.cfm",
"nextLink":"//a[contains(text(),\"next\")]"
},
{
"pageElement":"id(\"main\")/div[contains(@class, \"content\")]",
"url":"^http://turenet\\.blog91\\.fc2\\.com/",
"nextLink":"//a[last()][descendant::img[@src=\"http://blog17.fc2.com/u/usedpc/file/to_nextentry.gif\"]]"
},
{
"pageElement":"//div[@class=\"oneEntry\" or @id=\"comment-trackback\"]",
"url":"^http://blog\\.goo\\.ne\\.jp/warp50cd",
"nextLink":"//a[child::span[@class=\"etNextPrev\"]]"
},
{
"pageElement":"//div[@class=\"log2\"]",
"url":"^http://bbs\\d+\\.apricot-fizz\\.net/",
"nextLink":"//span[@class=\"seeker\"]/a[contains(text(),\"[\u6b21\u306e\")]"
},
{
"pageElement":"id(\"contents\")/div",
"url":"^http://(?:www\\.)?salchu\\.net/blog/",
"nextLink":"//p[contains(concat(\" \", @class, \" \"), \" pagenavi \")][last()]/a[last()]"
},
{
"pageElement":"(//td[@class=\"padder\"]/table)[last()]",
"url":"^http://(?:www\\.)?youmama\\.ru/foto/",
"nextLink":"id(\"Navigator\")/span[@class=\"Page\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://[^./]+\\.[^-./]+-nifty\\.com/",
"nextLink":"//link[@rel=\"prev\"] | //div[@class=\"entry-nav\"]/p/a"
},
{
"pageElement":"id(\"activity-list\")/div[contains(@class,\"activity-item\")]",
"url":"^http://www\\.typepad\\.com/dashboard",
"nextLink":"id(\"content-inner\")/div[@class=\"content-dashboard pkg\"]/div[@class=\"content-main col\"]/div[@class=\"pagination-bar\"]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//ol[@class=\"literature\"]",
"url":"^http://100\\.yahoo\\.co\\.jp/detail/",
"nextLink":"//p[@class=\"more\"]/a"
},
{
"pageElement":"id(\"visiblebms\")/div[contains(@class, \"saveitem\")]",
"url":"^http://bookmarks\\.yahoo\\.co\\.jp/.",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" next \")]"
},
{
"pageElement":"id(\"recent\")/div[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://www\\.smashingmagazine\\.com/",
"nextLink":"//div[@class=\"next\"]/a"
},
{
"pageElement":"//ol[@class=\"roster\"]",
"url":"^http://www\\.tumblr\\.com/directory/",
"nextLink":"id(\"pagination\")/a[last()]"
},
{
"pageElement":"//div[@class=\"app\"]",
"url":"^http://[a-z]{2,3}\\.feedmyapp\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//*[not(self::div) and preceding-sibling::div[@class=\"text\"]]",
"url":"^http://c\\.wjob\\.jp/srch\\.php\\?.+",
"nextLink":"//div[@class=\"text\" and position()=last()]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://www\\.webhistory\\.jpn\\.org/",
"nextLink":"//li[@class=\"older\"]/a"
},
{
"pageElement":"id(\"left\")/div[contains(@class,\"content\")]",
"url":"^http://ikapani\\.blog55\\.fc2\\.com/",
"nextLink":"id(\"left\")/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"mainContents\")/div[contains(concat(\" \", @class, \" \"), \" section \")]",
"url":"^http://www\\.sixapart\\.jp/business/",
"nextLink":"//ul[contains(concat(\" \", @class, \" \"), \" entryNavi \")]/li[contains(concat(\" \", @class, \" \"), \" next \")]/a"
},
{
"pageElement":"id(\"primarycontent\")/div[contains(@class,\"hentrytop\")]",
"url":"^http://(?:www\\.)?ae-users\\.com/jp/",
"nextLink":"id(\"primarycontent\")/div[@class=\"navigation\"]/div[@class=\"left\"]/a"
},
{
"pageElement":"id(\"container\")/div[@class=\"topics\"]",
"url":"^http://torrent-db\\.net/topic/search",
"nextLink":"id(\"container\")/div[@class=\"pagination\"]/a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"results\")",
"url":"^http://www\\.uniprot\\.org/uniprot/.",
"nextLink":"//p[contains(concat(\" \", @class, \" \"), \" next \")]/a[@accesskey=\"n\"]"
},
{
"pageElement":"id(\"article\")/div[@class=\"article_text\"]",
"url":"^http://www\\.betanews\\.com/article/",
"nextLink":"id(\"article\")//div[@class=\"article_paging\"]/a[strong=\"Next Page \u2192\"]"
},
{
"insertBefore":"//div[@class=\"pager\"]",
"pageElement":"//div[@class=\"content\"]",
"url":"^http://(?:www\\.)?thestandard\\.com/",
"nextLink":"//a[text()=\"next \u203a\"]"
},
{
"pageElement":"id(\"mainSearch\")",
"url":"^http://(?:www\\.)?istockphoto\\.com/",
"nextLink":"//div[@class=\"navBar\"]//a[@accesskey=\"n\"]"
},
{
"pageElement":"id(\"mainColumn\")//div[@class=\"title-line\" or @class=\"articledetailBox\"]",
"url":"^http://news\\.livedoor\\.com/topics/",
"nextLink":"id(\"mainColumn\")//div[@class=\"article\"]/p[@class=\"link\"]/a"
},
{
"pageElement":"//ol",
"url":"^http://www\\.rsvp\\.com\\.au/search/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"content\")/div[contains(concat(\" \",@class,\" \"),\" post \")]",
"url":"^http://www\\.asaeda\\.com/wordpress/",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" alignleft \")]/a[starts-with(text(),\"\u00ab\")]"
},
{
"pageElement":"id(\"content\")//div[@class=\"sitebox\" or @class=\"div-x\" or @class=\"div-y\"]",
"url":"^http://(?:www\\.)?matome-plus\\.com/",
"nextLink":"id(\"content\")//div[@class=\"pagination\"]/ul/li[last()]/a[not(@class=\"currentpage\")]"
},
{
"pageElement":"//div[@class=\"KonaBody\"]/node()",
"url":"^http://(?:www\\.)?brainyquote\\.com/",
"nextLink":"//span[@class=\"bigbold\"][1]/text()[string-length(normalize-space()) > 2]/following-sibling::a[1]"
},
{
"pageElement":"id(\"results\")/ul",
"url":"^http://search\\.twitter\\.com/search",
"nextLink":"id(\"pager-bottom\")/a[@class=\"next\"]"
},
{
"pageElement":"id(\"main-contents\")/*[following-sibling::*[@class=\"nextprev\"]]",
"url":"^http://monoist\\.atmarkit\\.co\\.jp/",
"nextLink":"//div[@class=\"nextprev\"]//li[last()][starts-with(@id, \"next\")]/a"
},
{
"pageElement":"//div[@class='navheader']/following-sibling::div[1]",
"url":"^http://www\\.drbd\\.jp/users-guide/.",
"nextLink":"//a[@accesskey='n']"
},
{
"pageElement":"//div[span/@class=\"pagelink\"] | //table[@class=\"ttable\"] | id(\"posts\")",
"url":"^https?://[^?#]+?/showthread\\.php\\?",
"nextLink":"//div[@class=\"pagenav\"]//a[contains(text(), \">\")]"
},
{
"insertBefore":"id(\"body\")/div[@class=\"pager-index\"]",
"pageElement":"//table[@class=\"list\"]",
"url":"^http://m\\.hatena\\.(?:ne\\.jp|com)/",
"nextLink":"id(\"body\")/div[@class=\"pager-index\"]/a[contains(text(), \">\")]"
},
{
"pageElement":"//ul[@class=\"user_list\"]",
"url":"^http://wassr\\.(?:jp|com)/my/friend/",
"nextLink":"id(\"PagerNextLink\")"
},
{
"pageElement":"//div[@class='header-navigation-container']/following-sibling::table[1]",
"url":"^http://www\\.evilmadscientist\\.com/",
"nextLink":"//div[@class='pagenav']/a[text()='Next']"
},
{
"insertBefore":"//p[table/tbody/tr/td/font/b[starts-with(text(), \"Go to page:\")]]",
"pageElement":"//td[p/table/tbody/tr/td/font/b[normalize-space(text())=\"Go to page:\"]]/p[3]/following::node()[following::node()/table/tbody/tr/td/font/b[normalize-space(text())=\"Go to page:\"]]",
"url":"^http://(?:www\\.)?wi-fiplanet\\.com/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"),\" centerbox \")]/div[contains(concat(\" \",@class,\" \"),\" post \")]",
"url":"^http://www\\.sl-educationblog\\.org/",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" alignleft \")]/a[contains(text(),\"Previous\")]"
},
{
"pageElement":"//div[@class=\"linkarea\"][1]/preceding-sibling::*[preceding-sibling::div[@class=\"tit_bor\"]]|//ul[@class=\"collist00\"]",
"url":"^http://sportsnavi\\.yahoo\\.co\\.jp/",
"nextLink":"//div[@class=\"linkarea\"]//b[text()=\"\u25c6\u524d\u5f8c\u306e\u30da\u30fc\u30b8\"]/following-sibling::b/following-sibling::a|//small/center/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" elementBox \")]",
"url":"^http://kakaku\\.com/.+/ranking_\\d+/",
"nextLink":"//p[contains(concat(\" \", @class, \" \"), \" paging \")]/a[last()]"
},
{
"pageElement":"id(\"main-content\")/table[@class=\"group-detail\"] | id(\"main-content\")/table[@class=\"group-detail\"]/preceding-sibling::hr[position()=1]",
"url":"^http://sourceforge\\.jp/softwaremap/",
"nextLink":"id(\"main-content\")//a[normalize-space(text())=\"Next >>\"]"
},
{
"pageElement":"//div[@id=\"posts\"]/div/div[@class=\"page\"]/div",
"url":"^http://www\\.eq2flames\\.com/[^/]+/.",
"nextLink":"//div[@class=\"pagenav\"]/table[@class=\"tborder\"]/tbody/tr/td[@class=\"alt1\"][not(@nowrap=\"nowrap\")][last()]/a[@class=\"smallfont\"]"
},
{
"pageElement":"id(\"data\")/div[starts-with(@class, \"search_result\")]",
"url":"^http://www\\.discogs\\.com/search\\?",
"nextLink":"id(\"data\")/div[@align=\"center\"]/a[@class=\"pagelinknorm\"][starts-with(text(), \"Next\")]"
},
{
"insertBefore":"//div[@class=\"storyCopy\"]//table[//h3]",
"pageElement":"//div[@class=\"storyCopy\"]",
"url":"^http://www\\.popularmechanics\\.com/",
"nextLink":"//a[text()=\"Next \u00bb\"]"
},
{
"pageElement":"id(\"wrapper\")/div[@class=\"clip-global\"]",
"url":"^http://clip\\.livedoor\\.com/recent/",
"nextLink":"//a[contains(@class,\"pager-next\")]"
},
{
"insertBefore":"//div/div[@class=\"page\"]/div/div/table/tbody/tr/td/table/tbody/tr/td/div[@class=\"smallfont\"]",
"pageElement":"//table[@id=\"threadslist\"]",
"url":"^http://www\\.eq2flames\\.com/[^/]+/$",
"nextLink":"//form[@id=\"inlinemodform\"]/table/tbody/tr/td/div[@class=\"pagenav\"]/table[@class=\"tborder\"]/tbody/tr/td[@class=\"alt1\"][last()-1]/a[@class=\"smallfont\"]"
},
{
"pageElement":"//div[@class='entryBody']",
"url":"^http://www\\.zackzack\\.jp/z-farmer/",
"nextLink":"//li[@class='pagerNext']/a"
},
{
"insertBefore":"//hr[2]",
"pageElement":"id(\"sample\")/div[2]/node()[self::div[not(descendant::img)] or self::hr[not(preceding-sibling::hr)] or self::br or self::text()][following::form]",
"url":"^http://blegi\\.jp/novel/[0-9]+/view/",
"nextLink":"//a[text()=\"\u6b21\u3078\u226b\"]"
},
{
"insertBefore":"//div[@class=\"pager\"]",
"pageElement":"//div[@class=\"page\"]",
"url":"^http://(?:www\\.)?popsci\\.com\\.au/",
"nextLink":"//a[text()=\"next \u203a\"]"
},
{
"insertBefore":"id(\"comments\")/following-sibling::node()",
"pageElement":"id(\"date\")/preceding-sibling::*",
"url":"^http://www\\.urbanhonking\\.com/owl/",
"nextLink":"id(\"date\")/a[contains(., \"<<\")]"
},
{
"pageElement":"//div[@class='wr mg10t' and div/@class='ybx-md36']",
"url":"^http://xbrand\\.yahoo\\.co\\.jp/.+/$",
"nextLink":"//a[contains(text(),'\u6b21\u306e\u30da\u30fc\u30b8')]"
},
{
"pageElement":"//table[contains(@class, \"blue_to_noline\")]",
"url":"^http://4travel\\.jp/dynamic/camera/.",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\u3078\")]"
},
{
"pageElement":"id(\"content\")/div[@class=\"blog\"]/*[@class=\"date\" or @class=\"blogbody\"]",
"url":"^http://(?:[^.]+\\.)+osakazine\\.net/",
"nextLink":"id(\"content\")//div[@class=\"menu\"]/a[contains(.,\"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"entry\"][position() > 1]",
"url":"^http://h\\.hatena\\.(?:ne\\.jp|com)/",
"nextLink":"//a[contains(concat(\" \", normalize-space(@rel), \" \"), \" next \")]"
},
{
"pageElement":"id(\"photoImage\")",
"url":"^http://www\\.inside-games\\.jp/imgs/",
"nextLink":"id(\"photo\")//div[@class=\"photoPagingNext\"]//a"
},
{
"pageElement":"//body/div[@id='banner']/following-sibling::table[1]",
"url":"^http://www\\.512x\\.net/seller/\\w+/",
"nextLink":"//body/table/tbody/tr/td/div[@class='nav']/a[@title='next page']"
},
{
"pageElement":"//td[@class=\"ProductsDisplay\"]//div[contains(@style,\"border-top: 1px dashed rgb(224, 224, 224);\")]",
"url":"^http://(?:www\\.)?dealextreme\\.com/",
"nextLink":"//div[@class=\"ProductPager\"]//a[text()=\"Next Page\"]"
},
{
"pageElement":"id(\"content\")/div[position()>1]",
"url":"^http://www\\.sweetnote\\.com/board/.",
"nextLink":"id(\"content\")/div[@class=\"pages\"]//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"//div[@class=\"page_container\"]",
"url":"^http://dev\\.mysql\\.com/doc/refman/",
"nextLink":"//link[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"Story\"]",
"url":"^http://www\\.browardpalmbeach\\.com/",
"nextLink":"//span[@class=\"Pagination\"]/a[starts-with(text(),\"Next\")]"
},
{
"pageElement":"id(\"contents\")",
"url":"^http://karada\\.goo\\.ne\\.jp/diary/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\u2192\")]"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://home\\.officesnapshots\\.com/",
"nextLink":"//a[contains(text(), \"Previous Entries\")]"
},
{
"pageElement":"id(\"photo-list-inner\")/*",
"url":"^http://idolpics\\.jp/Pics/searchPic/",
"nextLink":"id(\"content\")/div[@class=\"pagination\"]/span[@class=\"current\"]/following-sibling::span[1]/a"
},
{
"pageElement":"id(\"main\")/div[@class=\"resultList\"]",
"url":"^http://www\\.appbrain\\.com/browse/.",
"nextLink":"//div[@id=\"contents\"]/div/div[@class=\"paging\"]/a[last()]"
},
{
"pageElement":"//table[@class=\"barter_list\"]",
"url":"^http://mediamarker\\.net/barter/list",
"nextLink":"//div[@class=\"adbook_pagenavi\"]/a[last()]"
},
{
"pageElement":"id(\"main-column\")/div[contains(@class,\"EntryBlock\")]",
"url":"^http://ksklog\\.blog108\\.fc2\\.com/",
"nextLink":"//div[@class=\"pageLink\"]/a[last()]"
},
{
"pageElement":"id(\"columnA_2columns\")//div[@class=\"thumbnail\"]",
"url":"^http://www\\.freecsstemplates\\.org/",
"nextLink":"id(\"columnA_2columns\")//div[@class=\"bottomPager\"]//a[contains(@class,\"next\")]"
},
{
"pageElement":"//div[@class=\"contentsbox\"]//div[@class=\"text\"][2]",
"url":"^http://(?:www\\.)?webdedb\\.com/cat/",
"nextLink":"id(\"p_navi\")//a[starts-with(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://www\\.kirainet\\.com/english/",
"nextLink":".//div[@class=\"navigation\"]/div[@class=\"left\"]/a[contains(text(),\"Previous\")]"
},
{
"pageElement":"//table//table//tr/td",
"url":"^http://campus\\.nikki\\.ne\\.jp/\\?.",
"nextLink":"//table//table//tr/td/font/div/a"
},
{
"pageElement":"//*[@class=\"entry\"]",
"url":"^http://yaplog\\.jp/[^/]+/(?!archive)",
"nextLink":"//*[@class=\"page\" or @class=\"page s\" or @class=\"posted\" or @class=\"pagenavi01\"]//a[contains(text(),\"\u524d\u3078\") or contains(text(),\"BACK\")]"
},
{
"pageElement":"//p[@class=\"searchList\"]",
"url":"^http://hashdb\\.com/search\\.php\\?",
"nextLink":"//a[starts-with(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"main0727\")/table",
"url":"^http://com\\.nicovideo\\.jp/member/",
"nextLink":"id(\"main0727\")/div[@class=\"pagenavi\"]/div[@class=\"pagelink\"]/a[@class=\"next\"]"
},
{
"pageElement":"id(\"intelliTxt\")//table[@class=\"listheadings\"]",
"url":"^http://(?:\\w+\\.)?softpedia\\.com/",
"nextLink":"id(\"intelliTxt\")//td[@class=\"contentheadings\"]/strong/following-sibling::*[1][self::a]"
},
{
"pageElement":"//center/table[3]/tbody/tr/td/table[2]",
"url":"^http://www\\.zorg\\.com/pub/photol.",
"nextLink":"//center/table[3]/tbody/tr/td/table[last()]/tbody/tr[last()]/td/table/tbody/tr/td[last()]/a"
},
{
"pageElement":"id(\"left_box\")/div[(position()>1) and (position()<last())]",
"url":"^http://www\\.namaan\\.net/result\\?",
"nextLink":"//a[descendant::img[@src=\"http://www.namaan.net/img/foot-an.gif\"]]"
},
{
"pageElement":"id(\"list01\")/table",
"url":"^http://koukan\\.yahoo\\.co\\.jp/jp/",
"nextLink":"id(\"page-nav\")/div[@class=\"next\"]/a[last()]"
},
{
"pageElement":".//div[@class=\"post\"]",
"url":"^http://wuhuiyu1983\\.blogbus\\.com/",
"nextLink":".//div[@class=\"pagenavi\"]/span/following-sibling::a[1]"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"entry\")]",
"url":"^http://cento\\.sakura\\.ne\\.jp/sb/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[contains(@class, \"box\")]",
"url":"^http://(?:www\\.)?planet-php\\.org/",
"nextLink":"//span[1]/a"
},
{
"pageElement":"(//table[@class=\"topicslist\"] | id(\"reslist\"))",
"url":"^http://komachi\\.yomiuri\\.co\\.jp/",
"nextLink":"//a[@class=\"nxt\"]"
},
{
"insertBefore":"//span[@class=\"Pagination\"]",
"pageElement":"//div[@class=\"Story\"]",
"url":"^http://www\\.phoenixnewtimes\\.com/",
"nextLink":"//span[@class=\"Pagination\"]/a[starts-with(text(), \"Next\")]"
},
{
"pageElement":"//ul[@class=\"pictures\"]",
"url":"^http://www\\.vecteezy\\.com/gallery",
"nextLink":"//div[@class=\"pager\"]/ul/li[@class=\"nextpage\"]/a"
},
{
"pageElement":"id(\"right\")/div[contains(@class, \"items\")]",
"url":"^http://www\\.sunrain-records\\.com/",
"nextLink":"//a[descendant::img[@src=\"../img/navi3_1.gif\"]]"
},
{
"insertBefore":"/html/body/div[@class=\"spacer\"][last()]",
"pageElement":"//table[@width=\"98%\"]",
"url":"^http://\\d+\\.teacup\\.com/\\w+/bbs",
"nextLink":"//a[@class=\"PL_JUMP\"][last()]"
},
{
"insertBefore":"//div[@class=\"resultNum3\"]",
"pageElement":"//div[@class=\"epfbMain\"]",
"url":"^http://(?:www\\.)?bellemaison\\.jp/",
"nextLink":"//div[@class=\"resultNum3\"]/a[last()]"
},
{
"pageElement":"id(\"brd-main\")",
"url":"^http://crunchbanglinux\\.org/forums",
"nextLink":"//a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"pages\")/preceding-sibling::node()",
"url":"^http://(?:[^./]+\\.)?youporn\\.com/",
"nextLink":"id(\"pages\")/a[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"results\")",
"url":"^http://coderepos\\.org/share/search",
"nextLink":"//span[contains(concat(\" \",@class,\" \"),\" next \") and last()]/a"
},
{
"insertBefore":"//div[contains(concat(\" \", @class, \" \"), \" pager-bottom \")][last()]",
"pageElement":"//ol[@class=\"clips\"]",
"url":"^http://clip\\.livedoor\\.com/clips/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"comments\"]",
"url":"^http://my\\.opera\\.com/[^/]+/blog/",
"nextLink":"//a[@class=\"nxt\"]"
},
{
"pageElement":"//li[table/@class='item']",
"url":"^http://search2\\.naturum\\.co\\.jp/",
"nextLink":"id('result_bottom')/p[@class='page_bar']/a[contains(text(),'\u6b21\u306e\u30da\u30fc\u30b8>>')]"
},
{
"pageElement":"//div[@class=\"testoContainer\"]/node()",
"url":"^http://punto-informatico\\.it/\\d+/",
"nextLink":"id(\"pageNavigator\")/a[contains(text(),\"continua\")]"
},
{
"insertBefore":"id(\"maincontent\")/div[@class=\"pagerize\"]/ul",
"pageElement":"id(\"maincontent\")/div[@class=\"recentList\"]",
"url":"^http://ki(?:chiku|kuchi)\\.oq\\.la/",
"nextLink":"id(\"maincontent\")/div[@class=\"pagerize\"]/ul/li[@class=\"pagelink\"]/a[text()=\">\"]"
},
{
"pageElement":"//span[@class=\"style1\"]/ancestor::table[2]",
"url":"^http://(?:www\\.)?tanaka-rie\\.com/",
"nextLink":"//a[contains(., \"\u524d\u306e\u65e5\u8a18>>\")]"
},
{
"pageElement":"//ul[@class=\"applistverticalwide\"]/li",
"url":"http://iphone\\.orelabo\\.jp/search/",
"nextLink":"//div[@class=\"yui-g\"]/div[@class=\"page\"]/a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"//center[a[@href=\"?fc=help\"]]",
"url":"^http://(?:[^.]+\\.)?oekakist\\.com/",
"nextLink":"//a[b[contains(text(), \"BACK\")]]"
},
{
"pageElement":"id(\"contents\")/*",
"url":"^http://www\\.muji\\.net/lab/report/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"section\"]",
"url":"^http://(?:www\\.)?cakephp\\.jp/doc/",
"nextLink":"//a[@accesskey=\"n\"]"
},
{
"pageElement":"//div[@class=\"userStyled\"]/table",
"url":"^http://www\\.cracked\\.com/article_",
"nextLink":"//a[@class=\"next_arrow_active\"]"
},
{
"pageElement":"id(\"content\")/table",
"url":"^http://blog\\.trendmicro\\.co\\.jp/",
"nextLink":"id(\"content\")//a[descendant::*[text()=\"\u524d\u306e\u8a18\u4e8b\"]]"
},
{
"insertBefore":"//div[@class=\"content\"]/div[@class=\"pagination\"]",
"pageElement":"//div[@class=\"articleBody\"]",
"url":"^http://[^.]+\\.howstuffworks\\.com/",
"nextLink":"//a[text()=\"Next Page\"]"
},
{
"pageElement":"//div[@class=\"wrap\"]/div[@class=\"left\"]/div[@class=\"border channel\"]",
"url":"^http://up\\.b9dm\\.com/search\\.php",
"nextLink":"id(\"multi_page\")/a[@class=\"nextpage\"]"
},
{
"pageElement":"id(\"slidecontent\")",
"url":"^http://www\\.r6rs\\.org/final/html/",
"nextLink":"//div[@class=\"navigation\"]//a[text()=\"next\"]"
},
{
"pageElement":"id(\"subbody\")/ul[contains(concat(\" \",@class,\" \"),\" file_list \")]/li",
"url":"^http://www\\.vector\\.co.jp/vpack/.",
"nextLink":"id(\"subbody\")/div[contains(concat(\" \",@class,\" \"),\" pagenav \") and last()]/node()[not(self::a) and (number(translate(self::text(),\"|\",\"\")) > 0)]/following-sibling::a[1]"
},
{
"pageElement":"id(\"left\")/div[contains(@class, \"post\")]",
"url":"^http://visublog\\.mechafetus\\.com/",
"nextLink":"id(\"footer\")/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//div[@class=\"daily\"] | id(\"entries\")",
"url":"^http://www\\.urbandictionary\\.com/",
"nextLink":"id(\"paginate_next\") | //a[@rel=\"next\"]"
},
{
"pageElement":"id(\"List1_p\")",
"url":"^http://kakaku\\.com/search_results/",
"nextLink":"id(\"PNavi_PNavi\")//a[@class=\"next\"]"
},
{
"insertBefore":"id('mtFooter')",
"pageElement":"//div[@class='mtDaily']",
"url":"^http://idm\\.s9\\.xrea\\.com/ratio/",
"nextLink":"//div[@class='hornavi']/a"
},
{
"insertBefore":"//div[@id=\"pages_btns\"]",
"pageElement":"//div[@class=\"wrap\"]/form",
"url":"^http://jpmp3\\.com/viewthread\\.php",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"),\" post \")]",
"url":"^http://alpha\\.mixi\\.co\\.jp/blog/",
"nextLink":"//a[contains(text(),\"\u6b21\u30da\u30fc\u30b8\u3078\")]"
},
{
"pageElement":"id(\"bodySection-col1\")",
"url":"^https?://[^.]+\\.backlog\\.jp/rev/.",
"nextLink":"id(\"revisionPagerSection\")/a[contains(text(), \"\u524d\u306e\u30ea\u30d3\u30b8\u30e7\u30f3\")]"
},
{
"insertBefore":"id(\"content\")//div[@class=\"YCB10701\"]",
"pageElement":"id(\"content\")//div[@class=\"YCB10202\"]",
"url":"^https://yorimo\\.yomiuri\\.co\\.jp/",
"nextLink":"id(\"content\")//div[@class=\"YCB10601-info\"]//a|id(\"content\")//li[@class=\"YCB10801-prev\"]/a"
},
{
"pageElement":"id(\"content\")/div[starts-with(@id, \"entry-\")]",
"url":"^http://(?:www\\.)?boingboing\\.net/",
"nextLink":"id(\"continue-reading\")/a | id(\"archive-nav-bottom\")/div[@class=\"older\"]/a"
},
{
"pageElement":"id(\"itemlist\")/li",
"url":"^http://www\\.graniph\\.com/product/",
"nextLink":"//img[@name=\"arrownext\"]/parent::a"
},
{
"pageElement":"id(\"leaf_body\") | id(\"center\")/div[@class=\"text\"]",
"url":"^http://www\\.nikkeibp\\.co\\.jp/sj/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"] | id(\"next\")//a[last()]"
},
{
"pageElement":"id(\"contents\")/div/div/form/table",
"url":"^http://tv\\.yahoo\\.co\\.jp/search/",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\")]"
},
{
"insertBefore":"//div[@class=\"resultslinkbar\"]",
"pageElement":"id(\"listing\")",
"url":"^http://iconfactory\\.com/freeware/.",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"entry\")/div[@class=\"entry_body\"]",
"url":"^https?://agri-biz\\.jp/item/detail/",
"nextLink":"id(\"main\")//ul[contains(@class, \"page_menu\")]/li[@class=\"pag_m3\"]/a"
},
{
"pageElement":"//div[@class=\"list\"]",
"url":"^http://[^.]+\\.fotolia\\.com/search",
"nextLink":"//a[@class=\"next\"][1]"
},
{
"pageElement":"//div[@class=\"entry-body\"]",
"url":"^http://gura5\\.blog120\\.fc2\\.com/",
"nextLink":"//p[@class=\"prev-next-navi\"]/a[contains(@title,\"\u6b21\u9801\")]"
},
{
"pageElement":"id(\"contents-inner\")/div[@class=\"main-entry\"]",
"url":"^http://alsoku\\.blog47\\.fc2\\.com/",
"nextLink":"id(\"contents-inner\")/ul[@class=\"entry-navi\"]//a[@title=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"id(\"main\")/div",
"url":"^http://doupon\\.blog36\\.fc2\\.com/",
"nextLink":"//div[@class=\"page_navi2\"]/a[last()]"
},
{
"pageElement":"id(\"hWrapper\")",
"url":"^http://karada\\.goo\\.ne\\.jp/user/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30c0\u30a4\u30a2\u30ea\u30fc\")] "
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"entry\")]",
"url":"^http://liosk\\.blog103\\.fc2\\.com/",
"nextLink":"id(\"main\")/div[@class=\"navi\" and last()]/a[last()]"
},
{
"pageElement":".//div[@class=\"tpwhite\"]",
"url":"^http://(?:www\\.)?freedocast\\.com/",
"nextLink":".//div[@class=\"pagingbg_div\"]//span[@class=\"pagingbg_div_active\"]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"maincol\")/div[last()]",
"pageElement":"id(\"serp\") | //div[@class=\"project\"]",
"url":"^http://code\\.google\\.com/hosting/",
"nextLink":"id(\"maincol\")/div[last()]/a[last()]"
},
{
"pageElement":"//div[contains(concat(\" \",normalize-space(@class),\" \"),\" walls-listing \")]",
"url":"^http://www\\.wallpapers-room\\.com/",
"nextLink":"//div[contains(concat(\" \",normalize-space(@class),\" \"),\" next-page-button \")]/a"
},
{
"pageElement":"id(\"main\")",
"url":"^http://www\\.mooter\\.co\\.jp/moot/",
"nextLink":"id(\"paging\")//img[contains(@src, \"/pagebtn_next.\")]/following-sibling::a"
},
{
"pageElement":"//div[@class=\"entrybody\"]",
"url":"^http://blogmag\\.ascii\\.jp/kodera/",
"nextLink":"//div[@class=\"entryback-next\"]/dl/dd[1]/p/a"
},
{
"pageElement":"//div[@class=\"lifelog-list\" or @class=\"ptn-contents\"]",
"url":"^http://[^.]+\\.lifespacetime\\.com/",
"nextLink":"//div[@class=\"list-repage\"]/a[last() and text()=\">>\"]"
},
{
"pageElement":"descendant::table[preceding-sibling::div/a[contains(text(),\"\u6b21\u3078\")]][1]",
"url":"^http://mkpl\\.jp/(?:item|sellers?)/",
"nextLink":"descendant::div/a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"//div[@class=\"page\"]/img[1]|//div[@class=\"interview_text\"]",
"url":"^http://touch-ds\\.jp/dsi/interview/",
"nextLink":"//img[starts-with(@name,\"menu\") and parent::td]/ancestor::tr/following-sibling::tr//a"
},
{
"pageElement":"//table[@class=\"keijibanwaku\"]",
"url":"^http://(?:www\\.)?info-fresh\\.com/",
"nextLink":"//td[@class=\"default\"]/a[text()=\">>\"]"
},
{
"pageElement":"id(\"spam-report\")/tbody/tr",
"url":"^http://tweetblocker\\.com/dashboard",
"nextLink":"//a[@rel=\"next\"][last()]"
},
{
"pageElement":"id(\"searchresults\")",
"url":"^http://(?:www\\.)?iconfinder\\.net/",
"nextLink":".//div[@class=\"pageslist\"]/a[@class=\"next\"]"
},
{
"pageElement":"id(\"b\")/a[@id=\"nextlink\" or @id=\"previouslink\"]/preceding-sibling::*",
"url":"^http://(?:www\\.)?mayoclinic\\.com/",
"nextLink":"id(\"nextlink\")"
},
{
"pageElement":"id(\"content_mainWrapper\")",
"url":"^http://www\\.pdb\\.org/pdb/results/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" toolbar \")]/table/tbody/tr/td[not(child::a) and last()]/following-sibling::td[position()=1]/a"
},
{
"pageElement":"//div[@class=\"commit\"]",
"url":"^http://newspeak\\.8-p\\.info/search",
"nextLink":"//div[@class=\"paginate\"]//strong/following-sibling::span/a"
},
{
"pageElement":"id(\"centercol\")/p[@class=\"nextprev\" or span[@class=\"nextprev\"]]/following-sibling::node()[following-sibling::p[@class=\"nextprev\"] or following-sibling::p/span[@class=\"nextprev\"]]",
"url":"^http://www\\.atmarkit\\.co\\.jp/im/",
"nextLink":"id(\"centercol\")//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\" or strong[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]]"
},
{
"insertBefore":"//table[@class=\"result-navi\"]",
"pageElement":"//table[@class=\"search-result\"]",
"url":"^http://search\\.smatch\\.jp/smatch/",
"nextLink":"//table[@class=\"result-navi\"]//td[@class=\"page-navi\"]/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"id(\"content-main\")/div[@class=\"report\"]/*[following-sibling::ul]",
"url":"^http://(?:[^.]+\\.)?autoc-one\\.jp/",
"nextLink":"id(\"content-main\")//li[@class=\"next\"]/a"
},
{
"insertBefore":"(//div[@class=\"pageNavigationArea\"])[last()]",
"pageElement":"//ul[@class=\"memo\"]",
"url":"^http://1470\\.net/list/memo/recent",
"nextLink":"(//div[@class=\"pageNavigationArea\"]//a)[last()]"
},
{
"pageElement":"//td[contains(@class, \"main-td\")]/table/tbody/tr/td[2]/table",
"url":"^http://doujinshi\\.mugimugi\\.org/",
"nextLink":"//a[normalize-space()=\"NEXT\"]"
},
{
"pageElement":"//table[@class=\"forumline forum\"]|id(\"topic_main\")",
"url":"^http://(?:www\\.)?rutracker\\.org/",
"nextLink":"//a[text()=\"\u0421\u043b\u0435\u0434.\"]"
},
{
"pageElement":"id(\"threadslist\")",
"url":"^https?://.+?/forumdisplay\\.php\\?",
"nextLink":"//table/tbody/tr/td[@class='alt2' and span]/following-sibling::td[@class='alt1'][1]/a[string-length(text())>0 and translate(text(),'0123456789','')=''] "
},
{
"pageElement":"//div[@class=\"gallery-image\"]/child::*[following-sibling::ul[@id=\"gallery-nav\"]]",
"url":"^http://gizmodo\\.com/photogallery/",
"nextLink":"id(\"gallery-next\")/a"
},
{
"pageElement":"//div[@class=\"contents\"]/div/*[following-sibling::div[descendant::img[contains(@src, \"back.gif\") or contains(@src, \"next.gif\")]]] | //div[@class=\"contents\"]/*[following-sibling::div[descendant::img[contains(@src, \"back.gif\") or contains(@src, \"next.gif\")]]]",
"url":"^http://www\\.techscore\\.com/tech/",
"nextLink":"//a[img[@src=\"/image/next.gif\"]]"
},
{
"pageElement":"id(\"kiji\")/child::node()",
"url":"^http://itpro\\.nikkeibp\\.co\\.jp/",
"nextLink":"id(\"naviBottom\")//a[@class=\"toNext\"]|id(\"naviBottom\")//a[@class=\"now\"]/following-sibling::a"
},
{
"pageElement":"id(\"primary\")/table/tbody/tr",
"url":"^http://[^.]+\\.getuploader\\.com/.",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"predictad_div\")/../table[.//a/@class=\"menu\"]",
"url":"^http://www\\.demonoid\\.com/files/",
"nextLink":"id(\"fslispc\")//a[@class=\"menu\"][contains(.,\"Next >>\")]"
},
{
"pageElement":"//table[@class=\"plist\"]",
"url":"^http://(?:www\\.)?tuhan\\.ne\\.jp/",
"nextLink":"//a[text()=\">>\"]"
},
{
"pageElement":"id(\"main-content\")",
"url":"^http://www\\.fringebloggers\\.com/",
"nextLink":".//div[@class=\"Nav\"]/strong[@class=\"on\"]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"middleFooter\")",
"pageElement":"id(\"middleContent\")",
"url":"^http://(?:www\\.)?xkcd\\.com/\\d+/",
"nextLink":"//a[@accesskey=\"n\" and @href!= \"#\"]"
},
{
"pageElement":"id(\"headmenu\")/following-sibling::*[descendant::*[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\" or text()=\"\u524d\u306e\u30da\u30fc\u30b8\"]][1]/following-sibling::*[following-sibling::*/descendant::*[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\" or text()=\"\u524d\u306e\u30da\u30fc\u30b8\"]]",
"url":"^http://jibun\\.atmarkit\\.co\\.jp/",
"nextLink":"//a[descendant-or-self::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]]"
},
{
"pageElement":"//div[@class=\"mainbox\"]/div/table[@class=\"tl2\"]",
"url":"^http://www\\.kyoto-u\\.com/lounge/",
"nextLink":"//a[contains(text(), '\u3088\u308a\u53e4\u304430\u4ef6')]"
},
{
"insertBefore":"id(\"actions_bottom\")",
"pageElement":"id(\"bodycontent\")",
"url":"^http://(?:www\\.)?mdconsult\\.com/",
"nextLink":"id(\"bookPage\")/div[@class=\"prevnext_btm\"]/a[last()]"
},
{
"pageElement":"(//div[@class=\"PageHeadline\"])[2]/ancestor::tr[1]/following-sibling::tr[1]/td/node()[not(self::div[a[contains(@href, \"/jobs/\")]])]",
"url":"^https?://secunia\\.com/advisories/",
"nextLink":"(//div[@class=\"PageHeadline\"])[2]//td[text()=\" ] [ \"]/b[last()]/following-sibling::a[1]"
},
{
"pageElement":"id(\"posts\")",
"url":"^http://www\\.pagalguy\\.com/forum/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//li[@class=\"thumb\"]",
"url":"^http://www\\.animemahou\\.com/post",
"nextLink":"id(\"paginator\")/a[@class=\"arrow\"][last()]"
},
{
"pageElement":"id(\"primary-column\")/div[@class=\"section\"]",
"url":"^http://e0166\\.blog89\\.fc2\\.com/",
"nextLink":"//p[@class=\"prev-next-navi\"]/a[child::strong[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]]"
},
{
"pageElement":"id(\"web\")/ol",
"url":"^http://search\\.yahoo\\.com/search",
"nextLink":"id(\"pg-next\")"
},
{
"pageElement":"id(\"content\")/div[contains(@class,\"post\")]",
"url":"^http://www\\.kagitaku\\.com/diary/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"storybody\")",
"url":"^http://(?:www\\.)?wvgazette\\.com/",
"nextLink":"//a[@class=\"nextPage\"]"
},
{
"pageElement":"//table[@class=\"listtable\"]",
"url":"^http://[^.]+\\.supleks\\.jp/search",
"nextLink":"//td[@class=\"tsp\"]/a[contains(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"),\" entry \")]",
"url":"^http://[^.]+\\.blog\\.drecom\\.jp/",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" entry \") and last()]/following::a[contains(text(),\"\u6b21\") and last()]"
},
{
"pageElement":"id(\"main\")/table/tbody/tr[td]",
"url":"^http://300\\.wi2\\.co\\.jp/area/1/",
"nextLink":"id(\"main\")/a[@title=\"next page\"]"
},
{
"pageElement":"id(\"contentinner\")/*",
"url":"^http://www\\.rapidsharehunt\\.com/",
"nextLink":"id(\"wp_page_numbers\")//li[@class=\"active_page\"]/following-sibling::li[1]//a"
},
{
"insertBefore":"//div[@class=\"wpPagination\"]",
"pageElement":"//div[@class=\"wpDisplay\"]",
"url":"^http://www\\.socwall\\.com/browse/",
"nextLink":"//div[@class=\"wpPagination\"]/a[last()]"
},
{
"insertBefore":"id(\"bodypagelink\")",
"pageElement":"id(\"article\")",
"url":"^http://allabout\\.co\\.jp/finance/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//td[@class=\"outer\"]/table[last()]",
"url":"^https?://www\\.revolutiontt\\.net/",
"nextLink":"//a[not(contains(@href, \"page=-1\")) and b[contains(text(), \"Next\")] or text()=\"Next >>\"]"
},
{
"insertBefore":"id(\"postnavi\")",
"pageElement":"//div[contains(@class,\"post\")]",
"url":"^http://tech\\.lampetty\\.net/tech/",
"nextLink":"//span[contains(@class,\"older\") or contains(@class,\"next\")]/a"
},
{
"pageElement":"//div[contains(@class, \"ytiras-mn2\")]",
"url":"^http://chirashi\\.yahoo\\.co\\.jp/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//p[starts-with(@id, \"story-body\")]",
"url":"^http://www\\.chicagotribune\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"search_result\")/table",
"url":"^http://nico\\.grn-web\\.net/search",
"nextLink":"//div[@class=\"page\"]/a[@class=\"now\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"showCase\")",
"url":"^http://newsweekjapan\\.jp/picture/",
"nextLink":"id(\"showCase\")//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"allfeatures\")/div[.//img]",
"url":"^http://(?:www\\.)?weardrobe\\.com/",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" pagelink \")][last()]"
},
{
"insertBefore":"id(\"YshpMdSearchPagingLarge\")",
"pageElement":"id(\"YshpMdSearchResultItemsDefault\")",
"url":"^http://shopping\\.yahoo\\.co\\.jp/",
"nextLink":"//td[@class=\"elNxt\"]/a"
},
{
"pageElement":"//div[@class=\"blackborder\"]",
"url":"^http://(?:www\\.)?hel-looks\\.com/",
"nextLink":"//a[text()=\"NEXT >>\"]"
},
{
"pageElement":"id(\"tile_box\")/*",
"url":"^http://(?:[^./]+\\.)?giveapp\\.jp/",
"nextLink":"id(\"tile_boxs\")/div[@class=\"pager\"]/a[@title=\"next page\"]"
},
{
"pageElement":"id(\"content\")/*[not(@id=\"paginateLinks\")]",
"url":"^http://(?:www\\.)?egotastic\\.com/",
"nextLink":"//a[contains(translate(text(), \"next\", \"NEXT\"), \"NEXT\")]"
},
{
"pageElement":"//div[@class=\"site\"]",
"url":"^http://(?:www\\.)?usejquery\\.com/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" latest-story \")]|id(\"story\")/*|//ul[@class=\"archive-listing\"]",
"url":"^http://www\\.builderau\\.com\\.au/",
"nextLink":"//div[@class=\"pages\"]//a[contains(., \">\")]"
},
{
"pageElement":"id(\"videosPofileVideos favoritesPofileVideos user_friends-body user_subscribers-body user_subscriptions-body\")",
"url":"^http://www\\.youtube\\.com/profile",
"nextLink":"id(\"videosPofileVideos favoritesPofileVideos user_friends-body user_subscribers-body user_subscriptions-body\")//a[contains(@href, \"start=\") and position()=last()]"
},
{
"insertBefore":"//table[@class=\"highlighttable\"][2]",
"pageElement":"//table[@class=\"highlighttable\"][1]/following-sibling::table",
"url":"^http://(?:www\\.)?shoutcast\\.com/",
"nextLink":"//a[text()=\"[ Next ]\"]"
},
{
"pageElement":"//div[@class=\"column\"]",
"url":"^http://bizplus\\.nikkei\\.co\\.jp/",
"nextLink":"//div[@class=\"page_nation\"]/a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://(?:[^.]+\\.)+typepad\\.com/",
"nextLink":"//a[span=\"Next\"]"
},
{
"insertBefore":"id(\"content\")/ul",
"pageElement":"id(\"content\")/*[self::div or self::h2]",
"url":"^http://www\\.newsfirex\\.com/blog/",
"nextLink":"id(\"content\")/ul[@class=\"postfoot\"]/li[@class=\"icon prev\"]/a[last()]"
},
{
"pageElement":"id(\"contents\")/div[contains(@class,\"res-box\")]",
"url":"^http://jp\\.forum\\.appbank\\.net/",
"nextLink":"(//a[descendant::img[@src=\"/images/arrow-r_off.gif\"]])[last()]"
},
{
"pageElement":"//p[@class=\"ArticleBody\"]",
"url":"^http://(?:www\\.)?infoworld\\.com/",
"nextLink":"//div[@class=\"nextLink\"]/a"
},
{
"pageElement":"id(\"reviewList\")",
"url":"^http://review\\.rakuten\\.co\\.jp/",
"nextLink":"id(\"reviewList\")/p[contains(concat(\" \",normalize-space(@class),\" \"), \" pager \")]/a[contains(text(),\">>\")]"
},
{
"insertBefore":"//span[@class=\"Pagination\"]",
"pageElement":"//div[@class=\"Story\"]",
"url":"^http://www\\.dallasobserver\\.com/",
"nextLink":"//span[@class=\"Pagination\"]/a[starts-with(text(), \"Next\")]"
},
{
"insertBefore":"//a[@class=\"pagination\"]/parent::span/parent::div/preceding-sibling::div[1]",
"pageElement":"id(\"searchResults\")",
"url":"^http://www\\.cafepress\\.com/buy/*",
"nextLink":"//a[@class=\"pagination\"][text()=\" Next >\"]"
},
{
"pageElement":".//div[@class=\"r\"]",
"url":"^http://(?:www\\.)?fileshunt\\.com/",
"nextLink":".//div[@class=\"pager\"]/span[@class=\"ap\"]/following-sibling::a[1]"
},
{
"pageElement":"//table[@class=\"brdr\"]",
"url":"^http://mai-net\\.ath\\.cx/bbs/sst/",
"nextLink":"//table[@class=\"brdr\"]//a[contains(text(), \"\u6b21\u3092\u8868\u793a\u3059\u308b\")]"
},
{
"pageElement":"id(\"contents_inner\")/div[contains(@class, \"latest_posts\")]",
"url":"^http://www\\.secondtimes\\.net/vw/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"incontents\")/div[./div[@class=\"pagePos\"]]",
"url":"^http://dictionary\\.goo\\.ne\\.jp/",
"nextLink":"id(\"incontents\")//a[@title=\"next page\"]"
},
{
"pageElement":"//ul[@class=\"users\"]/li",
"url":"^http://stack\\.nayutaya\\.jp/users",
"nextLink":"id(\"content-body-inner\")/div[last()]/div[@class=\"pagination\" and last()]/a[last()]"
},
{
"pageElement":"//div[@class=\"entryBodyset\" or @class=\"pagetop\"]",
"url":"^http://sumitan\\.sakura\\.ne\\.jp/",
"nextLink":"//div[@class=\"pagemove\"]/a[text()=\"\u904e\u53bb>>\"]"
},
{
"pageElement":"id(\"results\")/div[@id=\"newresult\"]",
"url":"^http://(?:www\\.)?filestube\\.com/",
"nextLink":"id(\"pager\")/a[text()=\"Next\"]"
},
{
"pageElement":"id(\"page6_contents\")/*[following::div[@class=\"article_paging\"]]",
"url":"^http://jp\\.ibtimes\\.com/article/",
"nextLink":"//a[text()=\"\u6b21\"]"
},
{
"pageElement":"id(\"contents_area\")/div/div[4]/p",
"url":"^http://www\\.japan-manganews\\.jp/",
"nextLink":"id(\"contents_area\")/div/div[3]/p/a"
},
{
"pageElement":"id(\"_____01\")",
"url":"^http://fashion\\.chintai\\.net/pc/",
"nextLink":"id(\"_____3\")//img[@src=\"images/memberunder1_03.gif\"]/parent::node()"
},
{
"pageElement":"//table[contains(concat(\" \",@class,\" \"),\" blog \")]//tr",
"url":"^http://(?:www\\.)?2lifeblog\\.com/",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" pagenav \") and starts-with(text(),\"Next\")]"
},
{
"pageElement":"id(\"yui-main\")/*[contains(concat(\" \",normalize-space(@class),\" \"), \" photo \") or self::br]",
"url":"^http://idoolphooot\\.oooooz\\.com/",
"nextLink":"//a[contains(concat(\" \",normalize-space(@class),\" \"), \" nextprev \") and contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"ctl00_cphBody_divButtom\")",
"url":"^http://www\\.shufuni\\.com/videos/",
"nextLink":"id(\"ctl00_cphBody_divPagingTop\")/a[last()]"
},
{
"pageElement":"id(\"main\")/ol",
"url":"^http://pulpsite\\.net/erohoo/word/",
"nextLink":"id(\"navi\")/b/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"threadlist\") | //div[@class=\"body_wrapper\"]/div[@class=\"block\" or @class=\"postlist\"]",
"url":"^http://xsellize\\.com/(?!threads/)",
"nextLink":"//span[@class=\"prev_next\"]/a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"spell_form\")",
"pageElement":"id(\"quickModForm\")",
"url":"^http://foro\\.lawebdeltenis\\.net/",
"nextLink":"id(\"quickModForm\")//td[@class=\"middletext\"]/b[.!=\" ... \"]/following-sibling::a[1]"
},
{
"pageElement":".//div[@class=\"section entry\"]",
"url":"^http://(?:www\\.)?ideaxidea\\.com/",
"nextLink":".//a[parent::li[@class=\"older\"]]"
},
{
"pageElement":"//div[@class=\"section\" or @class=\"chapter\" or @class=\"book\"]",
"url":"^http://diveintogreasemonkey\\.org/",
"nextLink":"//div[contains(text(), \"\u2192\")]/a"
},
{
"pageElement":"//div[1]",
"url":"^http://www\\.freerangestock\\.com/",
"nextLink":"//span[@class=\"current\"]/following-sibling::a"
},
{
"pageElement":"//table[@class='maintable']",
"url":"^http://bitgamer\\.com/browse\\.php",
"nextLink":"//b[contains(text(),'Next >>')]"
},
{
"pageElement":"id(\"scored_results\")",
"url":"^http://(?:www\\.)?macupdate\\.com/",
"nextLink":"id(\"pagedNavigation\")/a[@class=\"navpage curpage\"]/following-sibling::a[@class=\"navpage\"]"
},
{
"insertBefore":"id(\"contents\")/div[@class=\"paging\"]",
"pageElement":"id(\"contents\")",
"url":"^http://www\\.appbrain\\.com/search",
"nextLink":"id(\"contents\")/div/div[@class=\"paging\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"tutorial\"]",
"url":"^http://www\\.good-tutorials\\.com/",
"nextLink":"//div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"id(\"primary\")/ul[@class=\"applications\"]",
"url":"^http://[^./]+\\.androidzoom\\.com/",
"nextLink":"id(\"primary\")/ul[@class=\"pagination\"]/li[@class=\"next\"]/a"
},
{
"pageElement":"//ul[@class='novel-list']",
"url":"^http://tategakibunko\\.mydns\\.jp/",
"nextLink":"//a[@rel='next']"
},
{
"pageElement":"id(\"GALLERY\")//table[@class=\"maintableb\"]/tbody/tr[position()<last()-1]",
"url":"^http://moefactor\\.fan-site\\.net/",
"nextLink":"id(\"GALLERY\")//td[@class=\"tableb_compact\"]/following-sibling::td[@class=\"navmenu\"][1]/a"
},
{
"pageElement":".//div[@class='mediaItem']",
"url":"^http://(?:www\\.)?humorpix\\.com/",
"nextLink":".//div[@class='paginate']/span[@class='current']/following-sibling::a[1]"
},
{
"pageElement":"//ol[@class=\"goodsList\"]",
"url":"^http://books\\.rakuten\\.co\\.jp/",
"nextLink":"//div[@class=\"pageNav\"]/ul/li[last()]/a"
},
{
"insertBefore":"id(\"hatena-search-pager\")",
"pageElement":"//div[@class=\"hatena-search-result-item\" or @class=\"hatena-search-result-item \" or @class=\"rakuten-item\" or @class=\"video-item-imagelist\"]",
"url":"^http://search\\.hatena\\.ne\\.jp/",
"nextLink":"id(\"hatena-search-pager\")//a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":".//div[@class='section']/div[@class='video-box']",
"url":"^http://(?:www\\.)?alotporn\\.com/",
"nextLink":".//a[@class='pagination_next']"
},
{
"pageElement":"id(\"article_main\") | //div[@class=\"article_main\"] | //tr[td[span[a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\") or contains(text(), \"\u524d\u306e\u30da\u30fc\u30b8\")]]]]/following-sibling::*[following::*[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\") or contains(text(), \"\u524d\u306e\u30da\u30fc\u30b8\")]]",
"url":"^https?://www\\.thinkit\\.co\\.jp/",
"nextLink":"descendant::a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")][last()]"
},
{
"pageElement":"id(\"main-article-content\")/*[not(@class=\"ui-page-list clear\")]",
"url":"^http://[^.]+\\.ign\\.com/articles",
"nextLink":"//a[starts-with(text(),\"Next\")]"
},
{
"pageElement":"id(\"resultBaidu\")/div[@class=\"web\"]",
"url":"^http://(?:www\\.)?baidu\\.jp/s\\?",
"nextLink":"id(\"pg\")/a[@class=\"nx\"]"
},
{
"insertBefore":"//*[@class=\"list-more\"]",
"pageElement":"//ol[@class=\"organic\"]",
"url":"^http://clusty\\.(?:com|jp)/search",
"nextLink":"//a[@class=\"listnext\"][1]"
},
{
"pageElement":"id(\"siteTable\")",
"url":"^http://(?:[^.]+\\.)?reddit\\.com/",
"nextLink":"//p[@class=\"nextprev\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"container\"]/div[@class=\"wrapper\"]/div[@class=\"main_cont\"]/div[@class=\"entry_box\"]",
"url":"^http://fc23\\.blog63\\.fc2\\.com/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"wrapper\")/div[@class=\"clip-global\"]",
"url":"^http://clip\\.livedoor\\.com/hot/",
"nextLink":"//a[contains(@class,\"pager-yesterday\")]"
},
{
"pageElement":"//table[@class=\"blog\"]",
"url":"^http://www\\.clustermonkey\\.net/",
"nextLink":"//a[@class=\"pagenav\"][@title=\"Next\"]"
},
{
"pageElement":"id(\"body\")/div",
"url":"^http://book\\.cakephp\\.org/view/",
"nextLink":"//span[contains(concat(\" \",@class,\" \"),\" next \")]/a[last()]"
},
{
"pageElement":".//div[@class=\"result result_0\" or @class=\"result result_1\"]",
"url":"^http://(?:www\\.)?dilandau\\.com/",
"nextLink":"id(\"next_page\")"
},
{
"pageElement":"//table[@class=\"list\"]",
"url":"^http://twitter\\.1x1\\.jp/search/",
"nextLink":"//a[text()=\">>\"]"
},
{
"insertBefore":"//div[@class=\"pagination\"]",
"pageElement":"//div[@class=\"content_text\"]|id(\"column_full_length\")/p",
"url":"^http://www\\.computerworld\\.com/",
"nextLink":"id(\"next_page\")/a"
},
{
"pageElement":"//div[@class=\"blog-posts hfeed\"]",
"url":"^http://www\\.nowimyourblog\\.com/",
"nextLink":"//a[text()=\"Older Posts\"]"
},
{
"pageElement":"id(\"content\")//div[contains(concat(\" \",@class,\" \"), \"post\")]",
"url":"^http://www\\.twingly\\.com/search",
"nextLink":"//div[@class=\"page\"]//li[contains(concat(\" \",@class,\" \"), \"active\")]/following-sibling::*[position()=1]//a"
},
{
"insertBefore":"//div[@class=\"footer\"]",
"pageElement":"//div[@class=\"t4\"]/following-sibling::*[self::div[@class=\"path\"] or self::ul]",
"url":"^http://search\\.cpan\\.org/recent",
"nextLink":"//td[1]/a[starts-with(@href, \"/recent?d=\")]"
},
{
"pageElement":"id(\"presentation\")",
"url":"^http://www\\.swtspts\\.com/taste/",
"nextLink":"id(\"navigation\")/div/a[last()]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" columnleft \")]",
"url":"^http://(?:www\\.)?web2rain\\.com/",
"nextLink":"//a[starts-with(text(), \"Next\")]"
},
{
"pageElement":"//table[@class=\"search_result\"]/../*[not(self::hr and position() = last())]",
"url":"^http://(?:[^.]+\\.)?dlsite\\.com/",
"nextLink":"id(\"newsearch\")//a[@title=\"next page\"]"
},
{
"pageElement":"id(\"content3\")/table",
"url":"^http://www\\.pixiv\\.net/ranking.",
"nextLink":"//div[1]/strong/following-sibling::a[1]"
},
{
"pageElement":"//div[starts-with(@id, \"illust_c\")]|//div[starts-with(@id, \"illust_c\")]/following-sibling::div[@class=\"clear\"]",
"url":"^http://www\\.pixiv\\.net/response",
"nextLink":"id(\"pixiv\")//a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"contArt\")/*[following-sibling::div[@class=\"pager\"]]",
"url":"^http://news\\.dengeki\\.com/elem/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":".//div[@class='entry']",
"url":"^http://fmusic\\.sakura\\.ne\\.jp/",
"nextLink":".//div[@class='ArchivePage-navi']/a[contains(text(),'Next')] | .//div[@class='main-next']/a[contains(text(),'NEXT')]"
},
{
"pageElement":"id(\"news-contents\") | id(\"right-box\")/table",
"url":"^http://(?:www\\.)?carp\\.co\\.jp/",
"nextLink":"//a[contains(text(), \"\uff1c\uff1c\u524d\u3078\")] | //a[contains(text(), \"<<BACK\")]"
},
{
"pageElement":"id(\"mu\")/*[((self::table and ./tbody/tr/td[./div//a and .//a/img]) or self::hr) and ./preceding-sibling::table[@class=\"text\" or @id=\"overmenu\"] and ./following-sibling::table[@class=\"text\" or @id=\"undermenu\"]]",
"url":"^http://www\\.dmm\\.co(?:m|\\.jp)/",
"nextLink":"id(\"mu\")/table[@class=\"text\" or @id=\"overmenu\"]//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"insertBefore":"(//div[@class=\"navigator\"])[last()]",
"pageElement":"//div[@class=\"navigator\"]/ancestor::center/*[not(@class=\"navigator\")]",
"url":"^http://knuttz\\.net/hosted_pages/",
"nextLink":"((//div[@class=\"navigator\"])[last()]//a)[last()]"
},
{
"pageElement":"id(\"lft\")/div[starts-with(@class,\"pst-bx\")]",
"url":"^http://www\\.feecle\\.jp/blog/\\?",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"listings_jovanna\")/div[@class=\"listing-summary\"]",
"url":"^http://www\\.traderjoesfan\\.com/",
"nextLink":"//a[@title=\"Next\"][@class=\"pagenav\"]"
},
{
"pageElement":"//comment()[string()=\"results\"]/following-sibling::*[following::comment()[string()=\"end results\"]]",
"url":"^http://search\\.cpan\\.org/search",
"nextLink":"//div[@class=\"pages\"]//td//a[last()]"
},
{
"pageElement":"id(\"articleBody\") | //div[@class=\"articleBody\"]",
"url":"^http://(?:\\w+\\.)?nytimes\\.com/",
"nextLink":"id(\"pageLinks\")/a[@class=\"next\"] | //a[@class=\"nextPage\"]"
},
{
"pageElement":"//table[contains(concat(\" \", @class, \" \"), \" revisions \")]",
"url":"^http://dic\\.nicovideo\\.jp/revs/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pager \")]/a[starts-with(text(), \"\u6b21\")]"
},
{
"insertBefore":"//div[contains(@class,\"dbTabAreaBtm\") or contains(@class,\"myTabAreaBtm\") or contains(@class,\"myTab40AreaBtm\")]",
"pageElement":"//div[contains(@class,\"dbCntBoxInnerList\") or contains(@class,\"dbCntBoxInnerListNoPb\") or contains(@class,\"myCntBoxInnerList\")]",
"url":"^http://(?:[^.]+\\.)*?ganref\\.jp/",
"nextLink":"//a[@class=\"tabNext\"]"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"id(\"article\")",
"url":"^http://www\\.onlamp\\.com/pub/a/.",
"nextLink":"id(\"page-break\")//td/p[@class=\"secondary\"]/a"
},
{
"pageElement":"id(\"content\")/ol",
"url":"^http://www\\.nature\\.com/search/",
"nextLink":"id(\"constrain\")//ol[@class=\"pagination\"]/li[last()]/a"
},
{
"pageElement":"id(\"content\")//div[@class=\"entry\"]",
"url":"^http://akane-m\\.net/lo/rakugaki/",
"nextLink":"id(\"content\")//p[@class=\"content-nav\"]/a[last()]"
},
{
"pageElement":"id(\"article-body\")",
"url":"^http://sourceforge\\.jp/magazine/",
"nextLink":"//a[@class=\"next-page\"]"
},
{
"pageElement":"id(\"content\")/ul",
"url":"^http://userscripts\\.org/jetpacks",
"nextLink":"id(\"content\")/div[@class=\"pagination\"]/a[contains(@rel,\"next\")]"
},
{
"pageElement":"//p[@class=\"story2\"]",
"url":"^http://www\\.telegraph\\.co\\.uk/",
"nextLink":"//div[@class=\"psnext\"]/a"
},
{
"pageElement":"//table/tbody/tr/td[2]/table",
"url":"^http://www\\.boxshots\\.org/style",
"nextLink":"//a[text()=\"Prev \u00bb\"]"
},
{
"pageElement":"//div[@class=\"content\"]/div[@class=\"title\"]/following-sibling::*[following::a[text()=\"\u524d\u30da\u30fc\u30b8\" or text()=\"\u6b21\u30da\u30fc\u30b8\"]]",
"url":"^http://www\\.security-next\\.com/",
"nextLink":"//div[@class=\"content\"]//a[text()=\"\u6b21\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://www3?\\.atword\\.jp/gnome/",
"nextLink":"id(\"content\")//a[contains(text(), \"Previous Entries\")]"
},
{
"pageElement":"//div[@class=\"huP\"]",
"url":"^http://einestages\\.spiegel\\.de/",
"nextLink":"//a[@class=\"huGoRight\"]"
},
{
"pageElement":"id(\"slide\")",
"url":"^http://www\\.ew\\.com/ew/gallery/",
"nextLink":"id(\"galnavlinks\")/li[@class=\"next\"]//a"
},
{
"pageElement":"//div[@class=\"day\" and child::div[@class=\"body\"]]",
"url":"^http://www\\.rubyist\\.net/~matz/",
"nextLink":"//div[@class=\"adminmenu\"]//a[contains(text(),\"\u524d\")]"
},
{
"pageElement":"//div[@class=\"article_content\"]",
"url":"^http://www\\.thetechlounge\\.com/",
"nextLink":"//a[text()=\"Next \"]"
},
{
"pageElement":"//ul[contains(concat(\" \", @class, \" \"), \" results \")]",
"url":"^http://www\\.apple\\.com/webapps/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"main\")/div[1]/div",
"url":"^http://backtweets\\.com/search\\?",
"nextLink":"id(\"main\")/div[1]/ol/li[2]/a"
},
{
"pageElement":"//div[contains(@class,\"Column1\")]",
"url":"^http://(?:www\\.)?buzzfeed\\.com/",
"nextLink":"//ul[@class=\"paging\"]//a[contains(text(),\"Older\")]"
},
{
"pageElement":"/descendant::form[@name=\"cart\"][1]/ancestor::table[@width][1]/preceding-sibling::node()/following-sibling::table",
"url":"^http://www\\.e-hon\\.ne\\.jp/bec/",
"nextLink":"//a[./b[contains(text(), \">>\")]]"
},
{
"pageElement":"id(\"body\")/center[./a/img]",
"url":"^http://www\\.share-amateur\\.com/",
"nextLink":"id(\"body\")/div/a[1]"
},
{
"pageElement":"id(\"rightCol\")/div[@class=\"block\"]",
"url":"^http://www\\.photoshoplady\\.com/",
"nextLink":"id(\"rightCol\")/div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://www\\.deletedimages\\.com/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]/div[@class=\"alignright\"]/a"
},
{
"pageElement":"id(\"itemindex\")",
"url":"^http://www\\.kagoo-cabinet\\.com/",
"nextLink":"//a[contains(text(),\"\u6b21\u3078 \uff1e\")]"
},
{
"pageElement":"id(\"wrap\")",
"url":"^http://iorel69\\.wordpress\\.com/",
"nextLink":"//a[contains(text(),\"\u00ab Previous Entries\")]"
},
{
"pageElement":"//div[@class='spotHyoujiContents']/div[4]",
"url":"^http://www\\.mapple\\.net/byarea/",
"nextLink":"//a[contains(text(),'\u6b21\u306e')]"
},
{
"pageElement":"//table[starts-with(@id, \"table_\")]",
"url":"^http://aucfan\\.com/search[12]/s.",
"nextLink":"//a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://(?:www\\.)?mp3realm\\.org/",
"nextLink":".//li[@class=\"nextpage\"]/a"
},
{
"pageElement":"id(\"Blog1\")/node()[contains(@class,\"blog-posts\") or position()=last()]",
"url":"^http://labslog\\.scaltinof\\.net/",
"nextLink":"id(\"blog-pager-older-link\")[not(id(\"comments\"))]/a|id(\"blog-pager-newer-link\")/a[@title=\"\u6b21\u306e\u6295\u7a3f\"]"
},
{
"pageElement":"id(\"view-photo-main\")/node()",
"url":"^http://twitpic\\.com/(?!photos/).",
"nextLink":"id(\"view-photo-more\")/a[1]"
},
{
"pageElement":"//div[@class=\"q\"]",
"url":"^http://bash\\.org\\.ru/(?!comics)",
"nextLink":"//a[text()=\">>\" or text()=\"\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f\"]"
},
{
"insertBefore":"//table[@cellpadding=\"30\"]/following-sibling::node()",
"pageElement":"//table[@cellpadding=\"30\"]",
"url":"^http://(?:www\\.)?419eater\\.com/",
"nextLink":"//a[child::img[contains(@src, \"nxt_page.gif\")]]"
},
{
"pageElement":"id(\"mnc\")/div[contains(@class, \"yfas-wr mg10\")]",
"url":"^http://fashion\\.yahoo\\.co\\.jp/",
"nextLink":"//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"insertBefore":"//div[@class=\"pageNumBottom\"][last()]",
"pageElement":"//div[@class=\"modules\"][1]",
"url":"^http://(?:www\\.)?ednjapan\\.com/",
"nextLink":"//a[@class=\"end\"][last()]"
},
{
"pageElement":"id(\"bdy\")/div[contains(concat(\" \",@class,\" \"),\" triple_wrap \")]",
"url":"^http://www\\.cuil\\.com/search\\?",
"nextLink":"id(\"a_next\")"
},
{
"pageElement":"id(\"contenedor\")",
"url":"^http://(?:www\\.)?espalpsp\\.com/",
"nextLink":"//a[@class=\"pagi_pv\" and contains(text(),\"Siguiente \u00bb\")]"
},
{
"pageElement":"//table[@summary=\"files\"]",
"url":"^http://foobar2000\\.xrea\\.jp/up/",
"nextLink":"//p[@class=\"tline\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"contents_main\")/*",
"url":"^http://e-days\\.cc/music/feature/",
"nextLink":"//a[img[contains(@src,\"ico_next_on.gif\")]]"
},
{
"pageElement":"id(\"ctl00_Main_GalleryList\")/tbody/tr",
"url":"^http://(?:www\\.)?ieaddons\\.com/",
"nextLink":"id(\"ctl00_Main_NavigationControl_NavigationContainer\")/div[@class=\"navpagination\"]/a[@class=\"PageNext\"]"
},
{
"pageElement":"//table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/p",
"url":"^http://slnn\\.com/article/[^/]+/",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" non_active_page \")][contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"school-detail-body\") | //p[@class=\"next-vol\"] | id(\"contact-section\")",
"url":"^http://www\\.phppro\\.jp/school/",
"nextLink":"//li[@class=\"page-now\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//div[starts-with(@id, \"post-\")]",
"url":"^http://www\\.slconvention\\.org/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" alignleft \")]/a[contains(text(), \"Older\")]"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"node\")]",
"url":"^http://(?:www\\.)?slcn\\.tv/blog",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" pager \")]/a[contains(concat(\" \",@class,\" \"),\" pager-next active \")]"
},
{
"pageElement":"//form[@name=\"articlelist\"]",
"url":"^http://ci\\.nii\\.ac\\.jp/search",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"infobox\")",
"pageElement":"id(\"photobox\")",
"url":"^http://(?:www\\.)?jpgaday\\.com/",
"nextLink":"id(\"image-navigate\")/ul/li[@class=\"left\"]/a"
},
{
"pageElement":"id(\"content\")//table[@class=\"color\"]/ancestor::tr[1]|id(\"content\")/*[(self::div and @class=\"item\") or self::br and not(./preceding-sibling::table)]",
"url":"^http://freegamejp\\.com/modules/",
"nextLink":"id(\"content\")//a[./u[text()=\"\u00bb\"]]"
},
{
"pageElement":"//ul[@class=\"databases autopagerize_page_element\"]",
"url":"^http://wedata\\.net/databases\\?",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"vidCont\")",
"url":"^http://(?:www\\.)?empflix\\.com/",
"nextLink":"id(\"pagination_holder\")/div/a[last()]"
},
{
"pageElement":"id(\"search_results\")",
"url":"^http://(?:www\\.)?tnaflix\\.com/",
"nextLink":"id(\"search_results\")/div[last()]/div/a[last()]"
},
{
"pageElement":"id(\"contents\")//div[starts-with(@id, \"entry-\")]",
"url":"^http://guremike\\.chicappa\\.jp/",
"nextLink":"id(\"contents\")//a[text()=\"\u3064\u304e\u3078\"]"
},
{
"pageElement":"//div[starts-with(@class,\"bg\")]",
"url":"^http://kanpoo\\.jp/search\\.cgi/",
"nextLink":"//div/a[contains(text(),\">>\")][@href]"
},
{
"insertBefore":"id(\"view_photo\")/div[@class=\"pagetext_bottom inlineList\"]",
"pageElement":"id(\"view_photo\")/div[@class=\"inner_line_list\"]",
"url":"^http://mixi\\.jp/view_album\\.pl",
"nextLink":"//a[starts-with(text(), \"\u6b21\u3092\")]"
},
{
"pageElement":"//ul[@class=\"countlist\"]/li[contains(@class,\"countbox\")]",
"url":"^http://counting\\.hatelabo\\.jp/",
"nextLink":"(//div[contains(concat(\" \",@class,\" \"),\" pager-next \")][last()]/a[last()])[1]"
},
{
"pageElement":"id(\"quickModForm\")",
"url":"^http://sc4devotion\\.com/forums/",
"nextLink":"id(\"quickModForm\")/table/tbody/tr/td[@class=\"middletext\"]/b[not(contains(text(),\"...\"))]/following-sibling::a[1]"
},
{
"insertBefore":"//table[tbody/tr/td/span[@class=\"navartc\"]]",
"pageElement":"id(\"articletext\")",
"url":"^http://(?:[^.]+\\.)?pravda\\.ru/",
"nextLink":"//a[preceding-sibling::span[@class=\"navartc\"]]"
},
{
"insertBefore":"id(\"pagelink_bottom\")",
"pageElement":"id(\"main\")/div[@class=\"genre\"]",
"url":"^http://diskunion\\.net/clubt/ct/",
"nextLink":"id(\"pagelink_bottom\")/a[contains(text(),\"\u6b21\u306e10\u4ef6\")]"
},
{
"insertBefore":"id(\"diaryComment\")/following-sibling::node()[1]",
"pageElement":"//div[@class=\"viewDiaryBox\"] | id(\"diaryComment\")",
"url":"^http://mixi\\.jp/view_diary\\.pl",
"nextLink":"//div[@class=\"diaryPagingLeft\"]/a"
},
{
"pageElement":"id(\"selectTemplate\")/div[@class=\"formArea clearfix\"]/div[@class=\"templateArea\"]/form/div[@class=\"itemboxL clearfix\"]",
"url":"^http://order\\.mixi-nenga\\.jp/.",
"nextLink":"id(\"selectTemplate\")/div[@class=\"formArea clearfix\"]/div[@class=\"templateArea\"]/form/div[@class=\"pagerNaviClass\"]/p[@class=\"pagerBtn\"]/a[last()]"
},
{
"pageElement":"//table[@cellspacing=\"0\"][@cellpadding=\"2\"]",
"url":"^http://(?:[^.]+\\.)*?xnxx\\.com/",
"nextLink":"//a[@class=\"nP\"]"
},
{
"pageElement":"//p",
"url":"^http://(?:www\\.)?gahako\\.com/.",
"nextLink":"//a[text()=\"\u2192\"]"
},
{
"pageElement":"id(\"content\")/*[not(@class=\"navigation\")]",
"url":"^http://openlab\\.dino\\.co\\.jp/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]//a[text()=\"\u2190 Previous Entries\"]"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"id(\"footer\")/preceding-sibling::p/preceding-sibling::p",
"url":"^http://[^.]+\\.craigslist\\.org/",
"nextLink":"id(\"footer\")/preceding-sibling::p/font/a"
},
{
"pageElement":"id(\"blog\")/div[contains(@class, \"blogbody\")]",
"url":"^http://blog\\.willcomnews\\.com/",
"nextLink":"id(\"blog\")/div[last()]/a[last()]"
},
{
"pageElement":"id(\"main\")/table",
"url":"^http://up2?\\.pandoravote\\.net/",
"nextLink":"id(\"main\")/p/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"article\")",
"url":"^http://mrs\\.allabout\\.co\\.jp/",
"nextLink":"id(\"pageChange\")//a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"id(\"contents\")//div[@class=\"item-list\"]",
"url":"^http://www\\.minimalsites\\.com/",
"nextLink":"//a[@class=\"pager-next\"]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://jp\\.makezine\\.com/blog/",
"nextLink":"id(\"main\")/p[@class=\"box\"]/span/a[@rel=\"next\"]"
},
{
"pageElement":"//form[@name=\"delform\"]/br[@clear=\"left\"][last()]/following-sibling::node()[1]/preceding-sibling::node()",
"url":"^http://[a-z0-9-]+\\.4chan\\.org/",
"nextLink":"//table[@class=\"pages\"]//b/following-sibling::*[1][self::a]"
},
{
"pageElement":".//table[@class=\"resultbox\"] | //table[@class=\"resultbox\"]/following-sibling::br",
"url":"^http://(?:www\\.)?skreemr\\.com/",
"nextLink":".//a[child::img[@alt=\"next\"]]"
},
{
"pageElement":"id(\"contents_column\")/div/div/node()[@id=false() or @id!=\"media_navi\"]",
"url":"^http://photozou\\.jp/photo/show/",
"nextLink":"//link[@rel=\"next\"]"
},
{
"pageElement":"id(\"ssimg articlebody\")",
"url":"^http://(?:[^.]+\\.)?about\\.com/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"bodyMainArea\")//table/tbody/tr",
"url":"^http://mixi\\.jp/list_appli\\.pl",
"nextLink":"id(\"bodyMainArea\")//div[contains(@class,\"pageNavigation\")]/div[contains(@class,\"pageList\")]/ul/li/a[starts-with(text(),\"\u6b21\")]"
},
{
"pageElement":"//table",
"url":"^http://crystal\\.opal\\.ne\\.jp/",
"nextLink":"//a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://keiba100bai\\.jrdb\\.com/",
"nextLink":"(id(\"contentin\")/div[@class=\"menu\"]/a)|(//li[@class=\"paging-first\"]/a)"
},
{
"insertBefore":"//div[@class=\"pageCtrl\"]/following-sibling::*[2]",
"pageElement":"//div[@class=\"pageCtrl\"]/following-sibling::*[1]",
"url":"^http://album\\.blog\\.yam\\.com/",
"nextLink":"//a[text()=\"\u4e0b\u4e00\u9801\"]"
},
{
"pageElement":".//div[@class=\"post\"]",
"url":"^http://icanhascheezburger\\.com/",
"nextLink":".//div[@class=\"navigation\"]//a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://www\\.miraikonishi\\.com/",
"nextLink":"id(\"blog-pager-older-link\")/a[contains(text(),\"\u524d\u306e\u6295\u7a3f\")]"
},
{
"pageElement":"//ul[@class=\"wallpapers\"]",
"url":"^http://(?:www\\.)?photos8\\.com/",
"nextLink":"//div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"iArea_top\"]",
"url":"^http://www\\.selectsquare\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"contents\")//div[contains(concat(\" \", @class, \" \"), \" genre_box \")]",
"pageElement":"id(\"contents\")//div[contains(concat(\" \", @class, \" \"), \" inner \")]/div[contains(concat(\" \", @class, \" \"), \" text_l \")]",
"url":"^http://www\\.sbbit\\.jp/article/",
"nextLink":"id(\"contents\")//li[contains(concat(\" \", @class, \" \"), \" next \")]/a"
},
{
"pageElement":"id(\"blogBody\")/div[@class=\"entryBody\"]/div",
"url":"^http://secondlife\\.drops\\.bz/.",
"nextLink":"id(\"blogBody\")/div[@class=\"pagingLink\"]/a[1]"
},
{
"pageElement":"//div[@class=\"videosTable\"]/*",
"url":"^http://(?:www\\.)?redtube\\.com/",
"nextLink":"//a[@title=\"Next page\"]"
},
{
"pageElement":"id(\"main\")//table[@class=\"product_list\"][last()]",
"url":"^http://www\\.junodownload\\.com/",
"nextLink":"//table[@class=\"pagination\"]//a[text()=\"Next Page\"]"
},
{
"pageElement":"id(\"contentPageShadow\")",
"url":"^http://www\\.ifixit\\.com/Guide/",
"nextLink":"id(\"contentPageFooter\")//a[contains(text(), \"next\")]"
},
{
"pageElement":"id(\"browse2-stream shop-browse browse-collections\")/descendant-or-self::div[contains(concat(\" \", @class, \" \"), \" stream \")][1]/div",
"url":"^http://[^.]+\\.deviantart\\.com/",
"nextLink":"id(\"output\")//div[contains(concat(\" \", @class, \" \"), \" nav \")]//a[text()=\"Next Page\"]"
},
{
"pageElement":"id(\"container\")/table",
"url":"^http://q\\.hatena\\.ne\\.jp/list",
"nextLink":"id(\"container\")/div[@class=\"pager\"]/strong/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"SrchObj\")/*",
"url":"^http://search\\.biccamera\\.com/",
"nextLink":"id(\"SrchBaseMain\")//a[contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\u2192\")]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://fake\\.dj/secondlife/txp/",
"nextLink":"id(\"content\")/p[last()]/a[text()=\"\u53e4\u3044\u9806\"]"
},
{
"pageElement":"//table[contains(@id,'post')]|//tr[contains(td/@id,'td_threadstatusicon_')]|id('message_list')|id('pagenumbers')/following-sibling::*[following-sibling::div[@id='copyright']]",
"url":"^http://forums\\.animesuki\\.com/",
"nextLink":"//a[@rel='next']|id('pagenumbers')/b[2]/following-sibling::a"
},
{
"pageElement":"//center/table/tbody/tr[3]/td/table",
"url":"^http://news\\.ycombinator\\.com/",
"nextLink":"//a[text()=\"More\"]"
},
{
"pageElement":"id(\"tableTab\")/following-sibling::table",
"url":"^http://table\\.yahoo\\.co\\.jp/t",
"nextLink":"//a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"//dl",
"url":"^http://dic\\.nicovideo\\.jp/b/c/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pager \")]/a[starts-with(text(), \"\u6b21\")]"
},
{
"pageElement":"id(\"Discussions\")/*",
"url":"^http://forum\\.userstyles\\.org/",
"nextLink":"id(\"Content\")//ol[@class=\"PageList\"]/li[last()]/a"
},
{
"pageElement":"id(\"userPhotos\")",
"url":"^http://photo\\.ameba\\.jp/user/.",
"nextLink":"//a[@class=\"nextOn\"]"
},
{
"pageElement":"//div[@class=\"text\"]",
"url":"^http://www\\.rollingstone\\.com/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//td[contains(text(), 'Page') and contains(text(), 'of')]/ancestor::table[1]/following-sibling::*[following::table[descendant::td[contains(text(), 'Page') and contains(text(), 'of')]]]",
"url":"^http://(?:www\\.)?lingoes\\.net/",
"nextLink":"//td[contains(text(), 'Page') and contains(text(), 'of')]//a[preceding-sibling::*[descendant::b]][1]"
},
{
"pageElement":"//div[@class=\"listArea\"]",
"url":"^http://matome\\.naver\\.jp/odai/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"list\"]",
"url":"^http://(?:[^./]+\\.)*?bis\\.org/",
"nextLink":"//div[@class=\"navigation\"]//span[@class=\"navigate\"]/a[last()]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" idea_twit \")]",
"url":"^http://ryo\\.hayamin\\.com/idea/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"insertBefore":"id(\"archive\")/div[@class=\"pagination\" and position()=2]",
"pageElement":"id(\"mini\")",
"url":"^http://www\\.mostinspired\\.com/",
"nextLink":"id(\"archive\")/div[@class=\"pagination\"]/a[contains(text(), \"\u00bb\")]"
},
{
"pageElement":"id(\"contents\")",
"url":"^http://twitpaint\\.com/graffiti/",
"nextLink":"id(\"pagenation\")/a[last()]"
},
{
"pageElement":"id(\"main\")/div[@class=\"entry\"]",
"url":"^http://memo\\.andperseand\\.com/",
"nextLink":"id(\"main\")/div[@class=\"entry_state\"]/a[contains(text(), \">>\")]"
},
{
"pageElement":"id(\"posts\")/li",
"url":"^http://www\\.tumblr\\.com/iphone",
"nextLink":"id(\"footer\")/a[last()]"
},
{
"pageElement":"id(\"searchList searchList_text\")//tr",
"url":"^http://www\\.sports-ws\\.com/fp/",
"nextLink":"//img[@class=\"pageNext\"]/parent::a"
},
{
"pageElement":"//div[@class=\"story_copy\"]",
"url":"^http://www\\.linux-mag\\.com/id/",
"nextLink":"//a[text()=\"Next \u00bb\"]"
},
{
"insertBefore":"id(\"container\")/div[@class=\"basic\"]/div[@class=\"footer block-center\"]",
"pageElement":"id(\"search-item-body\")",
"url":"^https://www\\.moshimo\\.com/shop",
"nextLink":"id(\"search-item-body\")/div[@class=\"bottom-pager inline-center\"]/div[@class=\"pager\"]/a[number(last())-1]"
},
{
"insertBefore":"//div[1]/img[2]",
"pageElement":"//div[1]/node()[self::text() or self::img[not(preceding-sibling::img)] or self::br or self::font[not(preceding-sibling::font)]][preceding-sibling::div[@align=\"center\"]]",
"url":"^http://no-ichigo\\.jp/read/page/",
"nextLink":"//a[@alt=\"#\"]"
},
{
"pageElement":"//dl[contains(@class,\"article\")]/parent::td/*",
"url":"^http://www\\.graniph\\.com/news/",
"nextLink":"//img[@name=\"arrownext\"]/parent::a"
},
{
"pageElement":"//table[3]",
"url":"^http://pentax\\.mydns\\.jp/exif/",
"nextLink":"//a[text()='+']"
},
{
"pageElement":"//table[@class=\"repo\"]",
"url":"^http://github\\.com/repositories",
"nextLink":"//a[@hotkey=\"l\"]"
},
{
"pageElement":"id(\"container\")/a[img[@class=\"thumbnail\"]]",
"url":"^http://www\\.tumblr\\.com/photos",
"nextLink":"id(\"footer\")/a[contains(text(), \"next page\")]"
},
{
"insertBefore":"id(\"page_foot\")",
"pageElement":"id(\"content\")",
"url":"^http://ja\\.doukaku\\.org/unread",
"nextLink":"id(\"content\")/a[starts-with(text(),\"next\")]"
},
{
"insertBefore":"id(\"content\")/div[last()]/following-sibling::node()",
"pageElement":"id(\"content\")/div",
"url":"^http://www\\.android-app\\.info/",
"nextLink":"//div[@class=\"navlink\"]/a[text()=\"\u53e4\u3044\u6295\u7a3f \u00bb\"]"
},
{
"insertBefore":"//h3[@class=\"main-navi\"]",
"pageElement":"//div[@class=\"entry\"][position()!=1]",
"url":"^http://labs\\.ceek\\.jp/hbnews/.",
"nextLink":"//h3[@class=\"main-navi\"]/a[last()]"
},
{
"pageElement":"//ol[contains(@class, \"bookmarks\")]",
"url":"^http://vi\\.sualize\\.us/[\\w-]+",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" next \")]"
},
{
"insertBefore":"//table[@class=\"MainTable\"]/tbody/tr/td[@class=\"Main\"]/div[@class=\"Menu\"]",
"pageElement":"//table[@class=\"MainTable\"]/tbody/tr/td[@class=\"Main\"]/div[@class=\"MessageParagraph\"]",
"url":"^http://bbs1\\.oebit\\.jp/amiami/",
"nextLink":"id(\"PageTextLinkBack\")/a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://(?:www\\.)?kamamoto\\.jp/",
"nextLink":"id(\"content\")/div[last()]/a[last()]"
},
{
"pageElement":"id(\"gsAllArticle665\")",
"url":"^http://tag\\.allabout\\.co\\.jp/",
"nextLink":"id(\"mainCulumnAllPager\")/div[@class=\"next\"]/a"
},
{
"pageElement":"id(\"headmenu\")/following-sibling::*[not(position()=1 and local-name()=\"a\") and not(local-name()=\"h1\" and position()<10) and not(local-name()=\"font\" and @size=\"2\" and position()<10) and not(local-name()=\"blockquote\" and position()<10) and not(local-name()=\"br\" and position()<10) and not(local-name()=\"hr\" and position()<10) and following-sibling::table//img[(contains(@src, \"/next\") or contains(@src, \"/prev\")) and contains(@src, \".gif\")]] | id(\"centercol\")/div[@class=\"articleBox\"]/*[following-sibling::table//img[(contains(@src, \"next\") or contains(@src, \"prev\")) and contains(@src, \".gif\")]]",
"url":"^http://www\\.atmarkit\\.co\\.jp/",
"nextLink":"id(\"centercol\")//img[contains(@src, \"next\") and contains(@src, \".gif\")]/parent::a"
},
{
"pageElement":"id(\"intellitxt\")",
"url":"^http://www\\.pcmag\\.com/article",
"nextLink":"//a[text()=\"Next >\"]"
},
{
"pageElement":"id(\"article_body\")",
"url":"^http://(?:www\\.)?itworld\\.com/",
"nextLink":"//a[text()=\"next\"]"
},
{
"pageElement":".//div[@class=\"gallery-box\"]",
"url":"^http://(?:www\\.)?pixdaus\\.com/",
"nextLink":".//ul[@class=\"menu-page\"]//a[contains(text(),\"next\")]"
},
{
"pageElement":".//div[@class=\"contents-area\"]",
"url":"^http://eco\\.nikkeibp\\.co\\.jp/",
"nextLink":"id(\"article-navi-right-on\")/a"
},
{
"pageElement":"//h1 | //div[contains(concat(\" \",normalize-space(@class),\" \"),\" entry \")]",
"url":"^http://rapeme\\.org/mt/archives/",
"nextLink":"//li[@class=\"older\"]/a"
},
{
"pageElement":"//*[@id=\"dResultSet\" or @class=\"liversltset\"]",
"url":"^http://search\\.microsoft\\.com/",
"nextLink":"//*[@class=\"apPaginationNext\" or @class=\"nxt\"]/a"
},
{
"pageElement":"//ol[@class=\"suggestions\"]",
"url":"^http://[^.]+\\.uservoice\\.com/.",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"timeline\"]",
"url":"^https?://mobile\\.twitter\\.com/",
"nextLink":"//div[@class=\"list-more\"]/a"
},
{
"pageElement":"//div[@class=\"post\"] | //p[@class=\"page\"]",
"url":"^http://moeboard\\.net/egoboard/",
"nextLink":"//p[@class=\"page\"][1]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"container\")/div/div/table",
"url":"^http://www\\.nicomimi\\.com/new",
"nextLink":"//a[@next=\"\"]"
},
{
"pageElement":"id(\"content\")/div[contains(concat(\" \", @class, \" \"), \" entry \")]",
"url":"^http://www\\.xuldev\\.org/blog/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]/a[contains(text(), \"\u00ab\")]"
},
{
"pageElement":"id(\"content\")//div[@class=\"dmpi_pagination\"]/div[contains(concat(\" \", @class, \" \"), \" dmpi_list \")]/div",
"url":"^http://www\\.dailymotion\\.com/",
"nextLink":"id(\"content\")//div[@class=\"dmpi_pagination\"]//div[@class=\"next\"]/a"
},
{
"pageElement":"id(\"gallery\")/ul/li[contains(@class,\"gallery-item\")]",
"url":"^http://www\\.getpersonas\\.com/",
"nextLink":"id(\"pagination\")/ul/li[last()]/a"
},
{
"insertBefore":"//div[@id=\"content\" or @id=\"container\"]/div[last()]",
"pageElement":"//div[@id=\"content\" or @id=\"container\"]/div[@class!=\"footer\" or @class!=\"navigation\"]",
"url":"http://cornmeal.me/(page/\\d+)?$",
"nextLink":"//div[@id=\"content\" or @id=\"container\"]/div[last()]/a[last()]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://pics\\.livedoor\\.com/u/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"body\")/div[@class=\"smallPreview\"]",
"url":"^http://www\\.freevectors\\.net/",
"nextLink":"id(\"body\")/p[@class=\"pageNumbers\"]/a[last()]"
},
{
"pageElement":"id(\"leftcolumn\")",
"url":"^http://www\\.designflavr\\.com/",
"nextLink":"//div[@class=\"pagination\"]/a[position()=last()]"
},
{
"pageElement":"//div[@class=\"cover\"]",
"url":"^http://www\\.nearch\\.jp/[^/]+/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"//table[@class=\"outside_table\"]/tbody/tr/td[@class=\"outer_content_cell\"]/table[@class=\"content_table\"]/tbody/tr/td[@class=\"content_cell\"]/table[@class=\"freestuff_result_table\"]",
"url":"^http://www\\.renderosity\\.com/",
"nextLink":"//table[@class=\"outside_table\"]/tbody/tr/td[@class=\"outer_content_cell\"]/table[@class=\"content_table\"]/tbody/tr/td[@class=\"content_cell\"]/div[@class=\"resultPageDisplay\"]/a[contains(text(), \"\u203a\")]"
},
{
"insertBefore":"id(\"copy\")",
"pageElement":"id(\"entry\")",
"url":"^http://labs\\.gmo\\.jp/blog/ku/",
"nextLink":"//li[@class=\"previousentry\"]/a"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://bungu\\.blueblack\\.net/",
"nextLink":"//div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a[1]"
},
{
"pageElement":"id(\"articleTextnews1\")//div[@class=\"child c2 cf\"]/div[@class=\"_LSUCS\" or (@class=\"image\" and following::div[@id=\"newsBack\"])]",
"url":"^http://sankei\\.jp\\.msn\\.com/",
"nextLink":"id(\"newsNext\")[self::a]|//div[@class=\"_LSUCS\"]/p[contains(text(),\"\uff1d\")]/a[contains(text(),\"\u7d9a\u304f\")]"
},
{
"pageElement":"id(\"main\")/table[@class=\"tbl-compare01\"]",
"url":"^http://kakaku\\.com/used/search",
"nextLink":"//a[img/@class=\"vm\"]"
},
{
"pageElement":"id(\"resultList\")//li",
"url":"^http://www\\.yahoo-search\\.jp/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//td[@class=\"CELL_140\"]/..",
"url":"^http://cart\\d+\\.lolipop\\.jp/",
"nextLink":"//td[@style=\"text-align: left;\"]/a"
},
{
"pageElement":"//tr[following-sibling::tr//a[@class=\"storypaginator\"] and td/div[contains(@class,\"roundedcornr_box\")]]",
"url":"^http://(?:www\\.)?doggdot\\.us/",
"nextLink":"//a[@title=\">>>\"]"
},
{
"pageElement":"id(\"table_side\")/table/tbody/tr",
"url":"^http://www\\.searchplugin\\.jp/",
"nextLink":"id(\"table_side\")/table/caption/div[@class=\"nextnumber_b\"]/div[@class=\"navi\"]/span/following-sibling::a"
},
{
"pageElement":"//table[contains(@class,\"pastes\")]",
"url":"^http://(?:www\\.)?hpaste\\.org/",
"nextLink":"//div[contains(@class,\"pager\")]//a[last()]"
},
{
"insertBefore":"id(\"pagination\")",
"pageElement":"//div[@class=\"body\"]",
"url":"^http://blogs\\.citypages\\.com/",
"nextLink":"id(\"pagination\")/a[starts-with(text(), \"Next\")]"
},
{
"pageElement":"id(\"photos\")/p[contains(@class, \"entry\")]",
"url":"^http://(?:www\\.)?photie\\.com/",
"nextLink":"//span[last()]/a[last()]"
},
{
"pageElement":"id('PageBody')/*",
"url":"^http://pentax\\.photoble\\.net/",
"nextLink":"//a[contains(text(),'>>')]"
},
{
"insertBefore":"id(\"pageNav\")",
"pageElement":"//div[@class=\"ListBetaItems\"]",
"url":"^http://www\\.betamarker\\.com/*",
"nextLink":"id(\"pageNav\")//a[@class=\"Next\"]"
},
{
"pageElement":"id(\"centerarea\")/div/h1/following-sibling::*[position()>1 and following::*[@class=\"pagenum\"]]",
"url":"^http://(?:[^.]+\\.)?tedia\\.jp/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"id(\"result\")",
"url":"^http://sale\\.adpark\\.co\\.jp/",
"nextLink":"//a[contains(text(),\"\u6b21\u3078\")]"
},
{
"pageElement":"id(\"liveList\")/div[3]/div[@id=\"liveItemsWrap\"]",
"url":"^http://live\\.nicovideo\\.jp/my",
"nextLink":"id(\"liveList\")/div[@class=\"liveListInner4\"]/div[@class=\"pager\"]/a[@class=\"next\"]"
},
{
"insertBefore":"id(\"trackback\")/following-sibling::node()",
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" blog \")]",
"url":"^http://yamarena\\.seesaa\\.net/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//div[@class=\"node_body\"] | id(\"squeeze\")//div[contains(concat(\" \",normalize-space(@class),\" \"), \" view \")]",
"url":"^http://www\\.edge-online\\.com/",
"nextLink":"//a[contains(@title, \"Go to next page\")]"
},
{
"pageElement":"//td[@class=\"bg_01\"]/table | //div[@class=\"border_01\"]/table",
"url":"^http://yonige\\.so-netsns\\.jp/",
"nextLink":"//div[@class=\"padding_s\"]/a[last()]"
},
{
"pageElement":"id(\"result\")",
"url":"^http://video\\.baidu\\.com/v\\?",
"nextLink":"id(\"pg\")/a[last()][child::font]"
},
{
"pageElement":"//div[@class=\"posts\"]",
"url":"^http://blog\\.iphone-dev\\.org/",
"nextLink":"//a[text()=\"Older Posts\"]"
},
{
"pageElement":"//table[(@class=\"show\" or @id=\"ad_square\") and position()=1]",
"url":"^http://www\\.wretch\\.cc/album/",
"nextLink":"//a[@id=\"next\"]"
},
{
"insertBefore":"id(\"content\")/div[@class=\"navigation\"]",
"pageElement":"id(\"content\")/div[not(@class=\"navigation\")]",
"url":"^http://blog\\.secondlife\\.com/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a[text()=\"\u00ab Previous Entries\"]"
},
{
"pageElement":"id(\"main\")/div[@class=\"blogbox\"]",
"url":"^http://blog\\.piapro\\.jp/\\d+/",
"nextLink":"id(\"main\")/div[contains(concat(\" \", @class, \" \"), \" blog_page_navi \")]/ul/li[last()]/a"
},
{
"pageElement":"id(\"alpha-block\")/div[@class=\"results-body\"]/ol[@class=\"entry\"]",
"url":"^http://search\\.blogmura\\.com/",
"nextLink":"id(\"alpha-block\")/div[@class=\"page-tab\"]//span[.=\"\u6b21\u3078\"]/parent::a"
},
{
"pageElement":"//a[contains(text(), \"\u00bb\")]/ancestor::table/following-sibling::table[1]",
"url":"^http://(www\\.)?noisemp3\\.com/",
"nextLink":"//a[contains(text(), \"\u00bb\")]"
},
{
"pageElement":"id(\"contents\")/div[@class=\"thumbBox\"]",
"url":"^http://(?:www\\.)?bookma\\.org/",
"nextLink":"id(\"page_next\")/a"
},
{
"insertBefore":"id(\"column-inner-2\")/following-sibling::node()",
"pageElement":"id(\"main\")/div[@class=\"column-inner\"]/div[@class=\"column-inner-2\"]/div[@class=\"article-outer hentry\"]/div[@class=\"article-outer-2\"]/div[@class=\"article-outer-3\"]/div[@class=\"article-header\"]|id(\"main\")/div[@class=\"column-inner\"]/div[@class=\"column-inner-2\"]/div[@class=\"article-outer hentry\"]/div[@class=\"article-outer-2\"]/div[@class=\"article-outer-3\"]/div[@class=\"article-body entry-content\"]|id(\"main\")/div[@class=\"column-inner\"]/div[@class=\"column-inner-2\"]/div[@class=\"article-outer hentry\"]/div[@class=\"article-outer-2\"]/div[@class=\"article-outer-3\"]/div[@class=\"article-footer\"]|id(\"article-options\")",
"url":"^http://netatama\\.net/archives/",
"nextLink":"id(\"main\")/div[@class=\"column-inner\"]/div[@class=\"column-inner-2\"]/div[@class=\"article-outer hentry\"]/div[@class=\"article-outer-2\"]/div[@class=\"article-outer-3\"]/div[@class=\"pager article-pager-type2\"]/div[@class=\"pager-inner\"]/div[@class=\"article-pager-outer\"]/ul[@class=\"article-pager\"]/li[@class=\"prev\"]/a[1]"
},
{
"pageElement":"id(\"ystcon\")/div[@class=\"yst-photo\"]/table",
"url":"^http://one\\.cn\\.yahoo\\.com/s",
"nextLink":"id(\"page\")/a[@class=\"nxt\"]"
},
{
"pageElement":".//div[@class=\"clear_box\"]",
"url":"^http://yourfilehost-navi\\.com/",
"nextLink":".//a[child::img[contains(@src,\"/next.jpg\")]]"
},
{
"pageElement":"id(\"pbox\")/div[contains(@class, \"post\")]",
"url":"^http://(?:www\\.)?theync\\.com/",
"nextLink":"id(\"pbox\")//div[contains(@class, \"navi\")]/a"
},
{
"pageElement":"//div[@class=\"story\"]|//table[@class=\"admin-list-table\"]/tbody/tr[position()>1]",
"url":"^http://www\\.macosxhints\\.com/",
"nextLink":"//div[@class=\"pagenav\"]/b/following-sibling::a[1]"
},
{
"insertBefore":"//div[contains(concat(\" \", @class, \" \"), \" hr \") and contains(concat(\" \", @class, \" \"), \" footline \")]",
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" hfeed \")]",
"url":"^http://unknownplace\\.org/memo/",
"nextLink":"//p[@class=\"pager\"]/span[@class=\"current_page\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"current-content\")/div[starts-with(@id,\"post-\")]",
"url":"^http://www\\.animecanvas\\.net/",
"nextLink":"id(\"nav-below\")/div[@class=\"nav-previous\"]/a"
},
{
"insertBefore":"((//a[@class=\"paging\"])[1]/ancestor::table)[2]",
"pageElement":"((//a[@class=\"paging\"])[1]/ancestor::table)[2]/preceding-sibling::table",
"url":"^http://thomasmayerarchive\\.de/",
"nextLink":"//a[@class=\"paging\"][starts-with(text(),\"Next page\")]"
},
{
"pageElement":"//div[@class=\"section\"]",
"url":"^http://www\\.jsgoal\\.jp/photo/",
"nextLink":"//li[@class=\"backV\" or @class=\"backI\"]/a"
},
{
"pageElement":"id(\"main-contents\")",
"url":"^http://diamond\\.jp/articles/-/",
"nextLink":"id(\"next-info\")/a"
},
{
"pageElement":"//div[@class=\"list\"]/table",
"url":"^http://smcb\\.jp/_photo_tr_list",
"nextLink":"//div[@class=\"pagelink\"]/table/tbody/tr/td[last()]/a[last()]"
},
{
"pageElement":"//center/center/div",
"url":"^ttp://(?:[^./]+\\.)+mocosoft\\.",
"nextLink":"//font[@color=\"#ffff33\" and @size=7]/a"
},
{
"pageElement":"//div[@class=\"community_find_all_result\"]/ul",
"url":"^http://cu\\.yahoo\\.co\\.jp/\\?",
"nextLink":"//div[@class=\"page_manage2\"]/ul/li[@class=\"pager\" and last()]/a[contains(text(),\"\u6b21\u3092\u8868\u793a\")]"
},
{
"pageElement":"id(\"articlePhotonews1\")",
"url":"^http://sankei\\.jp\\.msn\\.com/",
"nextLink":"id(\"photoNext\")"
},
{
"pageElement":"//div[@class=\"profile_seach_result\"]/dl",
"url":"^http://cu\\.yahoo\\.co\\.jp/\\?",
"nextLink":"//div[@class=\"page_manage1\"]/ul/li[@class=\"pager\" and last()]/a[contains(text(),\"\u6b21\u3092\u8868\u793a\")]"
},
{
"pageElement":"//div[./div/a/img]",
"url":"^http://www\\.pixiv\\.net/comike",
"nextLink":"//a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"pageElement":"id(\"contents\")/table",
"url":"^http://(?:www\\.)?saiyasu\\.in/",
"nextLink":"id(\"pagination-flickr\")/li[contains(@class, \"next\")]/a"
},
{
"pageElement":"id(\"sweepers\")/li",
"url":"^http://ffhh\\.sakura\\.ne\\.jp/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//div",
"url":"^http://mt\\.advenbbs\\.net/bbs/",
"nextLink":"//div/p/table/tbody/tr/td/div/b[1]/following-sibling::a[1]"
},
{
"pageElement":"id(\"result-list-spot\")",
"url":"^http://local\\.yahoo\\.co\\.jp/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"content\")/li[@class=\"post\"]",
"url":"^http://www\\.dailykitten\\.com/",
"nextLink":".//ul[@class=\"navigation\"]/li[@class=\"previous\"]/a"
},
{
"pageElement":"//form[table/@class='forumline'] | //div[@id='page-body']",
"url":"^https?://.+?/viewforum\\.php\\?",
"nextLink":"//span[@class='gensmall']/b/b/following-sibling::a[1] | (//table/tbody/tr/td[@class='nav'])[last()]/b[last()]/following-sibling::a[1]  | //div[@class=\"pagination\"]/span/strong/following-sibling::a[1] | //a[text()='Next']"
},
{
"insertBefore":"//table[@class=\"nextprevious\"]",
"pageElement":"//div[@class=\"articlePageDiv\"]",
"url":"^http://www\\.startribune\\.com/",
"nextLink":"//td[@class=\"nextcell\"]/a"
},
{
"pageElement":"//table[@class='ipbtable' or @class='tablepad' or @class='tborder'] | //div[@class='borderwrap' and div[1]/@class='maintitle' and div[2]/@class='tablepad'] | //table[tbody/tr/td/span/@id='page-jump']",
"url":"^http[^?]+\\?.*?\\bshowtopic=\\d",
"nextLink":"//a[text()='>' or text()='\u203a' or text()='Next']"
},
{
"pageElement":"id(\"ipbwrapper\")",
"url":"^http[^?]+\\?.*?\\bshowforum=\\d",
"nextLink":"//a[text()=\">\" or text()=\"\u203a\" or text()=\"Next\"]"
},
{
"pageElement":"//div[@class=\"blog\"] | //table[@class=\"entry\"]",
"url":"^http://blog\\.oricon\\.co\\.jp/",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"imageMain\")",
"url":"^http://ameblo\\.jp/[^/]+/image-",
"nextLink":"id(\"frame mainArea\")//ul/li[@class=\"nextLink\"]/p/a"
},
{
"insertBefore":"id(\"content\")/text()[last()]",
"pageElement":"id(\"content\")/div[contains(@id,\"post-\")]",
"url":"^http://www\\.sakurasaori\\.net/",
"nextLink":"id(\"content\")//div[@class=\"navigation\"]/div[@class=\"alignright\"]/a"
},
{
"pageElement":"id(\"top_main\")/div",
"url":"^http://wintelmac\\.net/sqmovie/",
"nextLink":"id(\"next_navi_box\")/div[@class=\"l\"]/a"
},
{
"pageElement":"//table[@class=\"file\"]",
"url":"^http://balsamic\\d?\\.fam\\.cx/",
"nextLink":"//div[@class=\"page_info\"][2]/a[preceding-sibling::em]"
},
{
"pageElement":"id('content')/node()[not(@id='ad-footer') and not(@class='wp-pagenavi')]",
"url":"^http://www\\.cinemaonline\\.jp/",
"nextLink":".//div[@class='wp-pagenavi']/span[@class='current']/following-sibling::a[1]"
},
{
"pageElement":"//div[@id=\"m2\"]",
"url":"^http://www\\.yaoi-d\\.com/yaoi/",
"nextLink":"//div[@id=\"m2\"]/a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"//div[@class=\"primaryContent\"]/div[starts-with(@id,\"post\")]",
"url":"^http://(?:[^.]+\\.)?woot\\.com/",
"nextLink":"//a[@class=\"next\"]"
},
{
"insertBefore":"//form[@name=\"nr_form\"]",
"pageElement":"//p[@class=\"mainSearchUrls\"]",
"url":"^http://web\\.archive\\.org/web/",
"nextLink":"//a/b[text()=\"Next\"]/.."
},
{
"pageElement":"//center[1]/*[self::a or self::img][1]",
"url":"^http://s[^.]\\.artemisweb\\.jp/",
"nextLink":"//center[1]/p//a[contains(.,\">>\")]"
},
{
"pageElement":"//ul[@class=\"listStumble\" or contains(concat(\" \", @class, \" \"), \" gridUrls \")]",
"url":"^http://www\\.stumbleupon\\.com/",
"nextLink":"id(\"paginationNext\")"
},
{
"pageElement":"//div[@class=\"postunit\"]",
"url":"^http://[^.]+\\.posterous\\.com/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"insertBefore":"id(\"oshi-contentsIn\")/div[@class=\"pageTop\"]",
"pageElement":"id(\"q-list\")",
"url":"^http://oshiete\\.goo\\.ne\\.jp/",
"nextLink":"id(\"page_link_next\")"
},
{
"pageElement":"//td[@class=\"full_content\"]/table//table[contains(.//div,\"\u4ef6\u3092\u8868\u793a\")]/following-sibling::node()[self::table[not(contains(.//div,\"\u4ef6\u3092\u8868\u793a\"))] or position()=last()]",
"url":"^http://(?:www\\.)?amiz\\.jp/\\?",
"nextLink":"//div[@class=\"padding_s\"]/a[contains(.,\"\uff1c\uff1c\") and not(following::div[@class=\"padding_s\"]/a=\"\u6b21\u3092\u8868\u793a\") or .=\"\u6b21\u3092\u8868\u793a\"]"
},
{
"insertBefore":"id(\"mainArea\")/p[last()]",
"pageElement":"id(\"nowListArea\")/li",
"url":"^http://now\\.ameba\\.jp/now/top",
"nextLink":"id(\"mainArea\")/div[@class=\"paging\"]/a[@class=\"right\"]"
},
{
"pageElement":"id(\"left\")/div[contains(concat(\" \", normalize-space(@class), \" \"), \" post \")]",
"url":"^http://www\\.melon-peach\\.com/",
"nextLink":"id(\"left\")/descendant::a[starts-with(normalize-space(text()), \"Next\")]"
},
{
"insertBefore":"id(\"content\")/div[@class=\"nav\"]",
"pageElement":"id(\"content\")",
"url":"^http://www\\.cssimpress\\.com/",
"nextLink":"id(\"content\")/div[@class=\"nav\"]/a[last()]"
},
{
"insertBefore":"//hr[last()]",
"pageElement":"(//html/body/node() | //html/node())[preceding-sibling::hr and following-sibling::hr]",
"url":"^http://(?:www\\.)?c-faq\\.com/",
"nextLink":"//a[img[@alt=\"next\"]]"
},
{
"pageElement":"id(\"main\")/div[@class=\"column-inner\"]",
"url":"^http://4koma\\.livedoor\\.com/",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\")]"
},
{
"insertBefore":"id(\"contents_left\")/div[@class=\"wp-pagenavi\"]",
"pageElement":"id(\"contents_left\")/div[@class=\"content\"]",
"url":"^http://anjo\\.dekiteharu\\.jp/",
"nextLink":"id(\"contents_left\")/div[@class=\"wp-pagenavi\"]/a[contains(text(), \"\u00bb\")]"
},
{
"pageElement":"id(\"rankingGeneralContents\")/div[@class=\"mainContents\"]/node()[contains(@class,\"resultList\") or position()=last()]",
"url":"^http://ranking\\.cosme\\.net/.",
"nextLink":"id(\"rankingGeneralContents\")/div[@class=\"mainContents\"]/div[contains(@class,\"resultNo\")]//li[contains(@class,\"cr\")]/following-sibling::li/a"
},
{
"pageElement":"//table[@class=\"contentpaneopen\"]/tbody//p",
"url":"^http://www\\.geek-pages\\.com/",
"nextLink":"//a[starts-with(text(), \"Next\")]"
},
{
"pageElement":".//div[@class=\"result\"]",
"url":"^http://www\\.playlistnow\\.fm/",
"nextLink":"id(\"pagination\")/span[@class=\"selected\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"Content\")",
"url":"^http://userstyles\\.org/forum/",
"nextLink":"//ol[@class=\"PageList\"]/li[last()]/a"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://www\\.japanprobe\\.com/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]//a[contains(text(),\"Previous Entries\")]"
},
{
"insertBefore":"//div[@class=\"pager\" or @id=\"pager\"]",
"pageElement":"//div[@class=\"node\"]/div[@class=\"content\"]",
"url":"^http://[^.]+\\.impressrd\\.jp/",
"nextLink":"//a[@class=\"pager-next active\" or @class=\"pager-last active\"]"
},
{
"pageElement":"id(\"browse-artists genres\")/table[@width=\"100%\"]",
"url":"^http://(?:www\\.)?drimr\\.com/",
"nextLink":".//p[@class=\"pagination\"]/strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"postlist\")",
"url":"^http://xsellize\\.com/threads/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//li[contains(concat(\" \",@class,\" \"),\" post \")]",
"url":"^http://(?:us\\.)?kotaku\\.com/",
"nextLink":"id(\"searchpager\")/li/a[contains(text(),\"next\")]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://zeak\\.air-nifty\\.com/",
"nextLink":"//div[@class=\"entry-nav\"]//a[1]"
},
{
"pageElement":"id(\"ajaxcontentarea\")/p[last()]/preceding-sibling::*",
"url":"^http://www\\.metafilter\\.com/",
"nextLink":"id(\"ajaxcontentarea\")/p[last()]/a[text()=\"Older posts\"]"
},
{
"pageElement":"id(\"oldfish\")/p[contains(concat(\" \",@class,\" \"),\" urllist \")]",
"url":"^http://megalodon\\.jp/history/",
"nextLink":"id(\"next\")/a"
},
{
"pageElement":"id(\"leftColumn\")/div[contains(@class,\"bookmarkItem\")]",
"url":"^http://www\\.diigo\\.com/user/",
"nextLink":"(//span[contains(concat(\" \",@class,\" \"),\" pagination \")]/a[last() - 1])[last()]"
},
{
"pageElement":"id(\"tableItems\")/tbody/tr",
"url":"^http://www\\.esnips\\.com/web/",
"nextLink":"//a[text()=\"Next \u00bb\"]"
},
{
"insertBefore":"//div[@class=\"videorownormal\"]/ul[@class=\"pagination\"]",
"pageElement":"//div[@class=\"videorownormal\"]",
"url":"^http://(?:www\\.)?flurl\\.com/",
"nextLink":"//ul[@class=\"pagination\"]/li[last()]/a[@class=\"prevnext\"]"
},
{
"pageElement":"id(\"nav\")/preceding-sibling::ul",
"url":"^http://www\\.googlelabs\\.com/",
"nextLink":"id(\"nav\")//td[@class=\"cur\"]/following-sibling::td[1]/a"
},
{
"pageElement":"id(\"body\")/div[contains(concat(\" \", normalize-space(@class), \" \"), \" section \")]/div[contains(concat(\" \",normalize-space(@class),\" \"),\" entries \")]",
"url":"^http://bottle\\.hatelabo\\.jp/",
"nextLink":"id(\"body\")/div[@class=\"pager\"]/a[last()]"
},
{
"pageElement":"id(\"pagingTop\")/following-sibling::*[id(\"pagingBottom\")/preceding-sibling::*]",
"url":"^http://onsen\\.nifty\\.com/cs/",
"nextLink":"id(\"pagingTop\")//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"textresize\")",
"url":"^http://www\\.globalpost\\.com/",
"nextLink":"//li[@class=\"pager-next\"]/a"
},
{
"pageElement":"//ul[contains(concat(\" \", @class, \" \"), \" bigList \")]",
"url":"^http://www\\.slideshare\\.net/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//table[@class=\"t1\"]",
"url":"^http://mp3\\.sogou\\.com/music",
"nextLink":"id('pagebar')/a[contains(text(),'\u4e0b\u4e00\u9875')]"
},
{
"pageElement":"id(\"art-main\")",
"url":"^http://japan\\.internet\\.com/",
"nextLink":"id(\"art-pager-next\")/a | //a[contains(concat(\" \",@class,\" \"), \" nav \")]"
},
{
"pageElement":".//div[@class='result']",
"url":"^http://(?:www\\.)?vpleer\\.ru/",
"nextLink":".//div[@class='pageactive']/following-sibling::div[@class='pages']/a"
},
{
"pageElement":"id(\"main-contents\")",
"url":"^http://www\\.mudaijp\\.com/wp/",
"nextLink":".//div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"topContent\"]",
"url":"^http://www\\.47news\\.jp/news/",
"nextLink":"id(\"bt_body\")/a"
},
{
"insertBefore":"(//div[@class=\"blog-pager\"])[last()]",
"pageElement":"//div[contains(@class, \"blog-posts\")]",
"url":"^http://[^.]+\\.blogspot\\.com/",
"nextLink":"id(\"blog-pager-older-link\")/a"
},
{
"pageElement":"id(\"content\")",
"url":"^https?://[^?#]+/torrents\\.php",
"nextLink":"//a[starts-with(strong/text(), \"Next\")]"
},
{
"pageElement":"id(\"novel_view\")",
"url":"^http://ncode\\.syosetu\\.com/n",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"searchList\")",
"url":"^http://search\\.takamiya\\.jp/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"content\")//h3/following-sibling::table",
"url":"^http://rubyforge\\.org/search/",
"nextLink":"id(\"content\")//a[contains(text(),\"Next Results\")]"
},
{
"pageElement":"//div[@class=\"item\"]",
"url":"^http://www\\.esnips\\.com/_t_/",
"nextLink":"//a[text()=\"Next \u00bb\"]"
},
{
"pageElement":"id(\"Stores\")/li",
"url":"^http://cat\\.gnavi\\.co\\.jp/.",
"nextLink":"//ol[@class=\"pages\"]/li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"bodytext\")",
"url":"^http://www\\.theatlantic\\.com",
"nextLink":"//a[text()=\"next>\"]"
},
{
"pageElement":"id(\"resultBaidu\")/div[@class=\"container\"]",
"url":"^http://video\\.baidu\\.jp/v\\?",
"nextLink":"id(\"pg\")/a[@class=\"nx\"]"
},
{
"pageElement":"id(\"content\")/div[contains(@class,\"post\")]",
"url":"http://www\\.syuhari\\.jp/blog/",
"nextLink":"//span[contains(concat(\" \",@class,\" \"),\" previous-entries \")]/a"
},
{
"pageElement":"id(\"ResultSet\")",
"url":"^http://shop\\.ebay\\.com\\.au/",
"nextLink":"//td[@class=\"next\"]/a[@class=\"enabled\" and text()=\"Next\"]"
},
{
"pageElement":"//table[@class=\"torr_list_main_table\"]/tbody/tr[position() > 2]",
"url":"^http://www\\.cinemascope\\.ru/",
"nextLink":"//p[@align=\"center\"]/a[font[starts-with(text(), \"\u0412\u043f\u0435\u0440\u0435\u0434\")]]"
},
{
"pageElement":"//div[@class=\"articlebody\"]",
"url":"^http://discovermagazine\\.com/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"insertBefore":"//form/table/tbody/tr/td[@class=\"subnormal\"]",
"pageElement":"//form/table/tbody/tr/td[@class=\"bgctblframe\"]/table",
"url":"^https?://www2\\.it-ex\\.com/va",
"nextLink":"//form/table/tbody/tr/td/table/tbody/tr/td/a[@class=\"subnormal\"]"
},
{
"insertBefore":"//h2[@class=\"shirttail\"]",
"pageElement":"id(\"storyBody\")",
"url":"^http://www\\.kansascity\\.com/",
"nextLink":"//a[b=\"Next page >\"]"
},
{
"pageElement":"id(\"articlebody\")",
"url":"^http://www\\.vanityfair\\.com/",
"nextLink":"//a[@class=\"paginationNext\"]"
},
{
"pageElement":"//div[@class=\"thumbnail_format\"]",
"url":"^http://(?:www\\.)?vimeo\\.com/",
"nextLink":"(//li[@class=\"arrow\"])[last()]/a"
},
{
"pageElement":"//div[@id=\"tbl\"]",
"url":"^http://dl\\.rakuten\\.co\\.jp/",
"nextLink":"//div[@class=\"bg2\"]//b[@class=\"next\"]/a | //div[@class=\"bg2\"]/span[@class=\"lnk\"][last()]/a"
},
{
"pageElement":"//div[@class=\"dirbox\"]",
"url":"^http://appjet\\.com/directory/",
"nextLink":"//div[@class=\"pagenav\"]/a[text()=\"next\"]"
},
{
"pageElement":"//div[@class=\"left\"]/div[contains(@class, \"lbox_list\")]",
"url":"^http://www\\.sharenator\\.com/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" pages \")][last()]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" results \")]/*",
"url":"^http://(?:www\\.)?woopie\\.jp/",
"nextLink":"id(\"page-navigation-area\")//a[@class=\"page-next\"]"
},
{
"pageElement":"id(\"blog-posts\")",
"url":"^http://www\\.hanselman\\.com/.",
"nextLink":"//div[@class=\"previous-posts\"]/a"
},
{
"pageElement":"//div[@class=\"day\"]",
"url":"^http://diary\\.lampetty\\.net/",
"nextLink":"//span[@class=\"adminmenu\"][contains(string(.), \"\u524d\")]/a"
},
{
"pageElement":"id(\"text\")/div[@class=\"body\"]",
"url":"^http://(?:www\\.)?cactco\\.jp/",
"nextLink":"//a[@title=\"next page\"]"
},
{
"insertBefore":"//ul[@class=\"bookmark-list\"]/following-sibling::node()",
"pageElement":"//ul[@class=\"bookmark-list\"]",
"url":"^http://bm\\.straightline\\.jp/",
"nextLink":"//li[@class=\"next-page\"]/a"
},
{
"pageElement":"//div[@class=\"NewsBody\"]",
"url":"^http://(?:www\\.)?mainichi.jp/",
"nextLink":"//a[@class=\"Next\"]"
},
{
"pageElement":"//div[@class=\"container\"]/div[@id=\"welcome\" or @class=\"content\"]",
"url":"^http://learn\\.github\\.com/p/",
"nextLink":"//a[contains(text(), \"next\")]"
},
{
"pageElement":"id('t_qcar')",
"url":"^http://www\\.funso\\.com\\.tw/",
"nextLink":"//a[text()=\"\u4e0b\u4e00\u9801\"]"
},
{
"insertBefore":"//*[contains(concat(\" \",@class,\" \"), \" autopagerize_insert_before \")]",
"pageElement":"//*[contains(concat(\" \",@class,\" \"), \" autopagerize_page_element \")]",
"url":"^.+://[^/]+\\.tumblr\\.com/.*.*",
"nextLink":"//a[@rel=\"next\"] | //link[@rel=\"next\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://(?:www\\.)?globis\\.jp/",
"nextLink":"//a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8>>\"]"
},
{
"insertBefore":"id(\"content\")/text()[last()]",
"pageElement":"id(\"content\")/div[@class!=\"navigation\"]",
"url":"^http://www\\.avenew\\.jp/blog/",
"nextLink":"id(\"content\")//div[@class=\"navigation\"]/div[@class=\"alignright\"]/a"
},
{
"insertBefore":"id(\"ad_b\")",
"pageElement":"id(\"content\")/*[not(starts-with(@id, \"ad_\")) and not(@class=\"navigation\")]",
"url":"^http://www\\.rue89japon\\.com/",
"nextLink":"//a[contains(concat(\" \", normalize-space(@class), \" \"), \" next \")]"
},
{
"pageElement":"id(\"content\")/div[contains(@class,\"post\")]",
"url":"^http://modelrr\\.net/taksware/",
"nextLink":"(//div[contains(concat(\" \",@class,\" \"),\" alignleft \")]/a)[contains(text(),\"Previous Entries\")]"
},
{
"insertBefore":"//table[@class=\"pager\"][2]",
"pageElement":"id(\"issues-table\")",
"url":"^https?://[^.]+\\.backlog\\.jp/",
"nextLink":"id(\"pager-next\")"
},
{
"pageElement":"//div[@class=\"listingBar\"]/preceding-sibling::*[not(@id or self::h1)]",
"url":"^http://(?:www\\.)?nanasi\\.jp/",
"nextLink":"//div[@class=\"listingBar\"]/span[@class=\"next\"]/a"
},
{
"insertBefore":"//div[@id=\"page\"][last()]",
"pageElement":"id(\"showtbl\")/tbody/tr[2]/td[2]/table[2]",
"url":"^http://(?:www\\.)?gavie\\.net/",
"nextLink":"//a[text()=\"NEXT\"]"
},
{
"pageElement":"//div[@id='rightcontent']",
"url":"^http://www\\.elotrolado\\.net/",
"nextLink":"//a[contains(text(),'Siguiente')]"
},
{
"pageElement":"//table[3]/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table[2]",
"url":"^http://www\\.freepixels\\.com/",
"nextLink":"//p[@class=\"text\"]/b/following-sibling::a"
},
{
"pageElement":".//div[@class=\"post\"]",
"url":"^http://www\\.fastpasstv\\.com/",
"nextLink":".//div[@class=\"pagenavi\"]/span[@class=\"alignleft\"]/a"
},
{
"pageElement":"//div[@class=\"post_container\"]",
"url":"^http://(?:www\\.)?picvi\\.com/",
"nextLink":"//li[@class=\"page_numbers_floating_selected\"]/following-sibling::li[1]/a"
},
{
"pageElement":"//ul[@class=\"logList01\"]",
"url":"^http://mixi\\.jp/show_log\\.pl",
"nextLink":"//div[@class=\"pageNavigation01 top\"]//a[starts-with(@href, \"show_log.pl?page=2\")]"
},
{
"insertBefore":"id(\"pagenr\")",
"pageElement":"//div[@class=\"individualapps\" or @class=\"comment\"] | //table[@class=\"list\"]",
"url":"^http://[^.]+\\.iusethis\\.com/",
"nextLink":"id(\"pagenr\")//a[text()=\"next\"]"
},
{
"pageElement":"id(\"story\")/div[@class=\"body\"]/node()",
"url":"^http://arstechnica\\.com/\\w+/",
"nextLink":"id(\"story\")//div[@class=\"next-page\"]/a"
},
{
"insertBefore":"//div[@class=\"othergame\"]",
"pageElement":"id(\"gametable\") | id(\"main\")/table[2]/following-sibling::*[self::br or self::table]",
"url":"^http://www\\.jsgoal\\.jp/game/",
"nextLink":"//div[@class=\"gamemore\"]/a"
},
{
"pageElement":"//table",
"url":"^http://labs\\.ceek\\.jp/wassr/",
"nextLink":"//div[@class=\"navi\"]/a[last()]"
},
{
"pageElement":"id(\"block_story\")/node() | //div[@class=\"module_wrap\"][.//div[contains(concat(\" \", @class, \" \"), \" item \")]]",
"url":"^http://japan\\.gamespot\\.com/",
"nextLink":"id(\"main_col\")//a[@class=\"next\"]"
},
{
"insertBefore":"//div[@class=\"item-list\"]",
"pageElement":"//ul[@class=\"images\"]",
"url":"^http://drupal\\.org/image/tid/",
"nextLink":"//li[@class=\"pager-next\"]/a"
},
{
"pageElement":"id(\"news-box\")/div[contains(concat(\" \", @class, \" \"), \" box2-body \")]",
"url":"^http://www\\.phppro\\.jp/news/",
"nextLink":"id(\"page-navi\")/p[last()]/a[last()]"
},
{
"pageElement":"//ul[@class=\"linksOverview\" or @id=\"links\"]//li[@class=\"link\"]",
"url":"^http://www\\.cosmiq\\.de/lili/",
"nextLink":"//div[@id=\"pageNav\"]//span[@class=\"next\"]/a"
},
{
"pageElement":"//div[@class=\"content\"]/div[contains(concat(\" \",@class,\" \"),\" post \")]",
"url":"^http://satully\\.lolipop\\.jp/",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" content \")]/p/a[text()=\"\u00ab Previous Entries\"]"
},
{
"pageElement":"id(\"body\")/div[@class=\"entries\"]/div[@class=\"entry\"]",
"url":"^http://hhs\\.trashsuite\\.org/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"postcontainer\")",
"url":"^http://www\\.siliconera\\.com/",
"nextLink":"//div[@id='nextprev']/div[@class='alignright']/p/a | //div[@id='nextprev2']/div[@class='alignleft']/p/a"
},
{
"pageElement":"id(\"result\")",
"url":"^http://www\\.iconseeker\\.com/",
"nextLink":".//div[@class=\"pager\"]/div/form/strong/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://usami-mi\\.jugem\\.jp/",
"nextLink":"/descendant::a[contains(., \"old\")][last()]"
},
{
"pageElement":"id(\"wrapper\")//div[@class=\"entry\"]",
"url":"^http://lapilazu\\.jugem\\.jp/",
"nextLink":"id(\"wrapper\")//li[contains(@class,\"next\")]/a[contains(text(),\">>\")]"
},
{
"pageElement":"//div[@class=\"diary\"]|id(\"disqus_thread\")/following-sibling::text()",
"url":"^http://youkoseki\\.com/diary/",
"nextLink":"//div[@class=\"arrow_menu_l\"]/a"
},
{
"pageElement":"id(\"fourColumnFrame\")",
"url":"^http://dsc\\.discovery\\.com/",
"nextLink":"id(\"pagination\")/div/a[@class=\"nextprev\" and contains(text(),\"Next\")]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" searchresult \")]",
"url":"^http://www\\.similarr\\.com/.",
"nextLink":"//a[@class=\"linknext\"]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://blog\\.makezine\\.com/",
"nextLink":"id(\"main\")/div[@class=\"box\"]/div/a[last()]"
},
{
"pageElement":"//h2/a",
"url":"^http://www\\.taikaisyu\\.com/",
"nextLink":"//h2/a"
},
{
"pageElement":"id(\"main-contents\")",
"url":"^http://number\\.bunshun\\.jp/",
"nextLink":".//div[@class=\"next_p\"]/a"
},
{
"insertBefore":"id(\"navright\")",
"pageElement":"//div[contains(@class,\"content\")]",
"url":"^http://www\\.citeulike\\.org/",
"nextLink":"//div[contains(@class,\"content\")]/table/tbody/tr/td/b/a"
},
{
"pageElement":"//ul[@class=\"article_list\"]/li",
"url":"^http://web\\.meet-i\\.com/\\?",
"nextLink":"//li[last()]/a[contains(concat(\" \",@class,\" \"),\" page_num \") and text()=\">>\"]"
},
{
"pageElement":"id(\"list\")",
"url":"^http://(?:[^.]+\\.)?asg\\.to/",
"nextLink":"id(\"list\")/p/node()[not(self::a) and (number(translate(self::text(),\"|\",\" \"))>0)]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"content\")/p",
"pageElement":"id(\"content\")/div",
"url":"^http://aquapple\\.jugem\\.jp/",
"nextLink":"id(\"content\")/div[@class=\"pagingLink\"]/p/a[last()]"
},
{
"pageElement":"id(\"view-detail view-simple picture-content member-wrapper recent-photo mycure-simpleview guestbook-body\") | id(\"album-view-simple album-view-list recent-photos recent-diary-list schedule-content\")/table",
"url":"^http://[^.]+\\.curecos\\.com/",
"nextLink":"//li[@class=\"next\"]/a | //a[@class=\"next-navi\"]"
},
{
"insertBefore":"id(\"pagenavi\")",
"pageElement":"id(\"main\")/div",
"url":"^http://www\\.juangotoh\\.net/",
"nextLink":"id(\"pagenavi\")/span[@class=\"older\"]/a"
},
{
"pageElement":"id(\"profile-header\")/following-sibling::div[following-sibling::div[last()]]",
"url":"^http://twitpic\\.com/photos/.",
"nextLink":"//a[@class=\"nav\"][contains(text(),\"OLDER\")]"
},
{
"pageElement":"//div[@class=\"topic-path\"]//following-sibling::*",
"url":"^http://jintrick\\.net/agenda/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"contentInnerPack\")",
"url":"^http://blog\\.sharplab\\.net/",
"nextLink":"//div[@class=\"nextLink\"]/a"
},
{
"insertBefore":"//div[contains(@class, \" tar\")]",
"pageElement":"//span[starts-with(@id, \"UC_FeatureArticle1_lblBody\")]",
"url":"^http://www\\.hollywood\\.com/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"//div[@class=\"articlePost\"]",
"url":"^http://posterous\\.com/reader",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"//div[contains(@class, \"archives\")]/div[@class=\"archive\"]",
"url":"^http://tnzwtmfm\\.jugem\\.cc/",
"nextLink":"//div[contains(@class, \"pager\")]/span/a[last()]"
},
{
"insertBefore":"id(\"box-entry-page\")",
"pageElement":"id(\"box-entry-page\")/preceding-sibling::*",
"url":"^http://blog-log\\.jugem\\.jp/",
"nextLink":"id(\"txt-page-next\")/a"
},
{
"pageElement":"id(\"content\")/ul",
"url":"^http://www\\.brusheezy\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"//div[@class=\"basicMainDotted clearfix\" and div[@class=\"paginationContainer\"]]",
"pageElement":"id(\"news-content\")",
"url":"^http://www\\.tomsguide\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"maincolumn\")/div[@class=\"post\"]",
"url":"^http://www\\.baysidenet\\.tv/",
"nextLink":"id(\"maincolumn\")/div[@class=\"browse\"]/a[1]"
},
{
"pageElement":".//div[@class=\"result_block\"]//index",
"url":"^http://(?:www\\.)?tagoo\\.ru/",
"nextLink":".//div[@class=\"pages\"]/a[@class=\"next\"]"
},
{
"pageElement":"id(\"article\")/div[@class=\"section\"]",
"url":"^http://r25\\.yahoo\\.co\\.jp/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"//div[contains(@class, \"blog-posts\")]",
"url":"^http://blog\\.kamicopi\\.net/",
"nextLink":"id(\"Blog1_blog-pager-older-link\")"
},
{
"pageElement":"id(\"container\")",
"url":"^http://h2\\.hatena\\.ne\\.jp/",
"nextLink":"//a[@accesskey=\"6\"]"
},
{
"pageElement":"//div[@class=\"Story\"]",
"url":"^http://www\\.citypages\\.com/",
"nextLink":"//span[@class='Pagination']/a[starts-with(text(), \"Next\")]"
},
{
"insertBefore":"id(\"sgmtMain\")/div[last()]",
"pageElement":"id(\"sgmtMain\")/ul",
"url":"^http://mediajam\\.info/topic/",
"nextLink":"id(\"sgmtMain\")/div[last()]//li[@class=\"nextPage\"]/a"
},
{
"pageElement":"id(\"main\")/div[@id]/ul[@class=\"commonMovieList\"]",
"url":"^http://pia-eigaseikatsu\\.jp/",
"nextLink":"id(\"main\")/div[@id]/p[@class=\"pagedLink\"]/a[@title=\"next page\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://figure\\.seesaa\\.net/",
"nextLink":"id(\"content\")/div[@class=\"wp-pagenavi\"]//a[last()]"
},
{
"insertBefore":"//tr[td[@class=\"catBottom\"]]",
"pageElement":"//table[@class=\"forumline\"]/tbody/tr[th[@class=\"thLeft\"]]/following::node()[following::node()[@class=\"catBottom\"]]",
"url":"^http://spacefellowship\\.com/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"id(\"photo-area\")",
"url":"^http://(?:www\\.)?jiji\\.com/",
"nextLink":"//span[@class=\"bt_next\"]/a"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"id(\"comic\")",
"url":"^http://www\\.abominable\\.cc/",
"nextLink":"//div[@class=\"nav\"]/a[contains(text(),\"Next\")]"
},
{
"insertBefore":"id(\"pagination\")",
"pageElement":"//div[@class=\"articlePage\"]",
"url":"^http://www\\.portfolio\\.com/",
"nextLink":"//a[starts-with(text(), \"NEXT\")]"
},
{
"pageElement":"id(\"content\")/div[@class=\"navigation\" or @class=\"post\"] | id(\"content\")/h2",
"url":"^http://blog\\.suki\\.gr\\.jp/",
"nextLink":"id(\"content\")/div[last()]/a[contains(.,\"\u00bb\")]"
},
{
"pageElement":"id(\"conts\")",
"url":"^http://[^.]+\\.dtiblog\\.com/",
"nextLink":"id(\"entry_guide\")/a"
},
{
"pageElement":"//div[@class=\"list\"]",
"url":"^http://fridge\\.nettabo\\.jp/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"posts\")/li",
"url":"^http://www\\.davidslog\\.com/",
"nextLink":"id(\"pagination\")/a[contains(text(),\"\u2192\")]"
},
{
"pageElement":".//div[@id=\"contentcolumn\" or @id=\"contentcolumn2\"]/table",
"url":"^http://(?:[^.]+\\.)*?tu\\.tv/",
"nextLink":".//a[@class=\"enlace_si\"]"
},
{
"pageElement":"id(\"wideMainColumn\")//div[contains(@class,\"widePopList\")]",
"url":"^http://tv\\.rayrac\\.co\\.jp/",
"nextLink":"id(\"wideMainColumn\")//div[@class=\"page\"]/a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//div[@class=\"imagegallery2\"] ",
"url":"^http://cyanatrendland\\.com/ ",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[last()-1] "
},
{
"pageElement":"id(\"quotes\")",
"url":"^http://bash\\.org\\.ru/comics",
"nextLink":"//a[text()=\"\u2190\"]"
},
{
"pageElement":"//div[contains(@class, \"middleware\")]",
"url":"^http://coderack\\.org/entries",
"nextLink":"//a[contains(text(), \"Next \u00bb\")]"
},
{
"pageElement":".//div[@class=\"post\"]",
"url":"^http://thisisphotobomb\\.com/",
"nextLink":".//div[@class=\"navigation\"]//a[contains(text(),\"Next\")]"
},
{
"pageElement":"//div[@class=\"NewsRank\"]/ol/li",
"url":"^http://www\\.2nn\\.jp/search/",
"nextLink":"id(\"SearchNavi\")/a[last()]"
},
{
"pageElement":"id(\"status_list\")",
"url":"^http://ibeer\\.appspot\\.com/",
"nextLink":"id(\"older\")"
},
{
"insertBefore":"//p[@class=\"sort bottom\"]",
"pageElement":"//table[@class=\"list\"]",
"url":"^http://www\\.askul\\.co\\.jp/",
"nextLink":"//a[@class=\"linkArrowRR\"][last()]"
},
{
"pageElement":"//div[@class=\"article\"]|//div[@class=\"tags\"]|//div[@class=\"article-meta clearfix\"]",
"url":"^http://(?:[^.]+\\.)?nnm\\.ru/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"//div[(contains(@class, \"SlidePhoto\") and child::a/child::img) or (contains(@class, \"caption\"))]",
"url":"^http://mainichi.jp/.+?/graph/",
"nextLink":"//li[contains(@class, \"Next\")]//a"
},
{
"pageElement":"//div[@class='post-content']",
"url":"^http://www\\.thoranime\\.org/",
"nextLink":"//a[contains(text(),'\u00ab Older Entries')]"
},
{
"pageElement":"id(\"main\")//div[contains(@class, \"newtopics\")]/div[@class=\"summary-a\"]",
"url":"^http://diamond\\.jp/category/",
"nextLink":"id(\"main\")//div[contains(@class, \"pagination\")]//a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"segment\"]",
"url":"^http://lifestyle\\.msn\\.com/",
"nextLink":"//a[contains(., \"Next\")]"
},
{
"pageElement":"//div[@class=\"block_line_solid_b\"]",
"url":"^http://(:?www\\.)?meeda\\.jp/",
"nextLink":"//a[@class=\"page_next\"]"
},
{
"pageElement":"id(\"siteContentWrap\")//a[starts-with(@name, \"m\")]/following-sibling::table[position()=1]",
"url":"^http://www\\.fatwallet\\.com/",
"nextLink":"//a[@class=\"copyReverse\" and text()=\"Next\"]"
},
{
"insertBefore":"//div[@class=\"pages\"]",
"pageElement":"//div[@class=\"gallery\"]",
"url":"^http://smile-pro\\.net/photo/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"primary-column\")/div[@class=\"section\"]",
"url":"^http://hlywd\\.dtiblog\\.com/",
"nextLink":"id(\"primary-column\")/center/p[@class=\"prev-next-navi\"] /a[contains(@title,\"\u6b21\")]"
},
{
"pageElement":"//li[contains(@id,\"rank\")]",
"url":"^http://www\\.nicochart\\.jp/.",
"nextLink":"//ul[@class=\"pager\"]//em/../following-sibling::li/a"
},
{
"pageElement":"id(\"gallery\")/div[contains(@class,\"app\")]",
"url":"^http://www\\.appsafari\\.com/",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" pagenext \")]"
},
{
"pageElement":"id(\"main\")/div[@class=\"entry\"][./div[@class=\"inner\"]/div[@class=\"entry_title\"]]",
"url":"^http://macholic\\.jugem\\.jp/",
"nextLink":"id(\"main\")/*[last()][self::div and @class=\"entry\"]/div[@class=\"entry_navi\"]/a[contains(.,\">>\")]"
},
{
"insertBefore":"//div[@class=\"block-geturls-GetUrls\"]",
"pageElement":"id(\"gsImageView\")",
"url":"^http://pix\\.jj\\.am/gallery/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"resultBaidu\")/div[@class=\"blog\"]",
"url":"^http://blog\\.baidu\\.jp/s\\?",
"nextLink":"id(\"pg\")/a[@class=\"nx\"]"
},
{
"pageElement":"id(\"BlockTable\")/div[@class=\"OddResultBlock\"]/div[@class=\"MusicAtomBoulder Boulder\"]",
"url":"^http://www\\.imeem\\.com/tag/",
"nextLink":"//a[@id=\"ctl00_ContentPlaceHolder1_Pager_NextPageLink\"]"
},
{
"pageElement":"id(\"body\")/div[@class=\"day\"]",
"url":"^http://anond\\.hatelabo\\.jp/",
"nextLink":"id(\"body\")/div[@class=\"pager-l\"]/strong/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"col1\")/div[starts-with(@id, \"post-\")]",
"url":"^http://jp\\.techcrunch\\.com/",
"nextLink":"id(\"col1\")/div[@class=\"navigation\"]/div[contains(concat(\" \", @class, \" \"), \" alignright \")]/a"
},
{
"pageElement":"id(\"content-body-inner\")/div[@class=\"books\"]",
"url":"^http://stack\\.nayutaya\\.jp/",
"nextLink":"id(\"content-body-inner\")/div[@class=\"pagination\" and last()]/a[last()]"
},
{
"insertBefore":"id(\"body\")/following-sibling::node()",
"pageElement":"id(\"body\")",
"url":"^http://serif\\.hatelabo\\.jp/",
"nextLink":"//a[@class=\"pager-next\"][1]"
},
{
"pageElement":"id(\"innerframe\")/table/tbody//tr",
"url":"^http://sourceforge\\.net/top/",
"nextLink":"d(\"innerframe\")/table//a[contains(text(),\"More\")]"
},
{
"pageElement":"id(\"main\")/div[h2]",
"url":"^http://www\\.milanello\\.net/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/arn"
},
{
"insertBefore":"//div[@class=\"paging\"]",
"pageElement":"id(\"estresult\")/dl",
"url":"^https?://[^?]+?/estseek\\.cgi",
"nextLink":"//a[@class=\"navi\"][text()=\"NEXT\"]"
},
{
"insertBefore":"id(\"paging\")",
"pageElement":"id(\"content\")/*[not(self::ul[@id=\"paging\"])]",
"url":"^http://\\w+\\.engadget\\.com/",
"nextLink":"id(\"paging\")/li/a[contains(.,\"\u2192\")]"
},
{
"insertBefore":"//div[@class=\"pager\"]",
"pageElement":"//div[@class=\"article_body\"]",
"url":"^http://www\\.maximumpc\\.com/",
"nextLink":"//a[text()=\"next \u203a\"]"
},
{
"pageElement":"id(\"center\")/div[@class=\"article_box\"]",
"url":"^http://blog\\.innx\\.co\\.jp/",
"nextLink":"id(\"center\")/div[@class=\"pagenavi\"]/a[contains(., \">\")]"
},
{
"pageElement":"id(\"content\")/div/div[@class=\"entFlm\"]",
"url":"^http://akiba\\.kakaku\\.com/.",
"nextLink":"id(\"content\")/div/div[@class=\"page\"]/*[last()][@href]"
},
{
"pageElement":"id(\"squeeze\")/div[@class=\"node\"]|id(\"project-overview\")/div[contains(concat(\" \", @class, \" \"), \" project-item \")]",
"url":"^http://drupal\\.org/project/",
"nextLink":"//li[@class=\"pager-next\"]/a"
},
{
"pageElement":"//ul[@class=\"fotolist\"] | //div[@class=\"foto-body\"]",
"url":"^http://f\\.hatena\\.ne\\.jp/",
"nextLink":"//a[text()=\"next>\"]"
},
{
"insertBefore":"id(\"contents\")/div[@class=\"internalBlock\"]/div/form/a[last()]",
"pageElement":"id(\"contents\")/div[@class=\"internalBlock\"]/div/form/table",
"url":"^http://tv\\.yahoo\\.co\\.jp/",
"nextLink":"id(\"contents\")/div[@class=\"internalBlock\"]/div/form/a[last()]"
},
{
"pageElement":"//div[@class=\"blog\"]",
"url":"^http://[^.]+\\.slmame\\.com/",
"nextLink":"id(\"content\")/div[@class=\"blog\"]/div[@class=\"blogbody\"]/div[@class=\"posted\"]/div[@class=\"menu\"]/a[@class=\"amenu\" and (position()=2)]"
},
{
"insertBefore":"id(\"content\")/div[@class=\"blog\"]/div[@class=\"menu\"]",
"pageElement":"id(\"content\")/div[@class=\"blog\"]",
"url":"^http://[^.]+\\.slmame\\.com/",
"nextLink":"id(\"content\")/div[@class=\"blog\"]/div[@class=\"menu\"]/a[last()]"
},
{
"insertBefore":"id(\"main\")/div[@class=\"pager\"]",
"pageElement":"id(\"main-body\")",
"url":"^http://r\\.hatena\\.ne\\.jp/",
"nextLink":"id(\"next_page\")"
},
{
"pageElement":"//table[@class=\"table-list\"]/tbody/tr",
"url":"^http://i\\.hatena\\.ne\\.jp/",
"nextLink":"//div[@class=\"pager-r\"]/a[starts-with(text(), \"\u6b21\u306e\")]"
},
{
"insertBefore":"id(\"pager_bottom\")",
"pageElement":"//ol[2]",
"url":"^http://a\\.hatena\\.ne\\.jp/",
"nextLink":"id(\"pager_bottom\")/a[@class=\"navi_next\"]"
},
{
"pageElement":"//div[@class=\"content\"]/p",
"url":"^http://www\\.observer\\.com/",
"nextLink":"//div[@class=\"content\"]/div[@class=\"pager\"]/a[@class=\"active\"]"
},
{
"pageElement":"//div[@class=\"rightColumnAreaCnt\"]|//div[@id=\"Contents\" and count(child::div[@class=\"entryBody\"]) > 0]/*[contains(@class, \"entry\")]|//div[@class=\"entryWrapper\"]",
"url":"^http://blog\\.kcg\\.ne\\.jp/",
"nextLink":"//div[@class=\"pager\"]/a[contains(child::text(), \">>\")]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://www\\.monotaro\\.com/",
"nextLink":"//img[@alt=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]/parent::a"
},
{
"pageElement":".//div[@class=\"post_item clearfix\"]",
"url":"^http://pornrapidshare\\.com/",
"nextLink":".//div[contains(@class,\"paginator\")]/a[contains(text(),\"Next\")]"
},
{
"insertBefore":"//span[@class=\"text\"]/p[last()-1]",
"pageElement":"//span[@class=\"text\"]",
"url":"^http://www\\.king-mag\\.com/",
"nextLink":"//a[text()=\"NEXT\"]"
},
{
"pageElement":"//div[table/@class=\"cuerpo\"]",
"url":"^http://www\\.espalwii\\.com/",
"nextLink":"//a[@class=\"pagi_pv\" and contains(text(),\"Siguiente \u00bb\")]"
},
{
"pageElement":"id(\"content\")/div[2]",
"url":"^http://pcpp\\.jp/search/list",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//*[contains(concat(\" \", @class, \" \"), \" hentry \")]",
"url":"^.+://[^/]+\\.tumblr\\.com/.*",
"nextLink":"//link[contains(concat(\" \", translate(normalize-space(@rel),\"NEXT\",\"next\"), \" \"), \" next \")] | //a[contains(concat(\" \", translate(normalize-space(@rel),\"NEXT\",\"next\"), \" \"), \" next \")]"
},
{
"insertBefore":"//div[@class=\"banner_top\"][last()]",
"pageElement":"//table[@class=\"thumb\"]",
"url":"^http://up\\.nm78\\.com/thumb",
"nextLink":"//p[@class=\"menu\"]/a[last()]"
},
{
"pageElement":"id(\"dle-content\")/div[@class=\"shortdiv\"]",
"url":"^http://www\\.infanata\\.org/",
"nextLink":"id(\"dle-content\")/div[@class=\"navigation\"][1]/a[text()=\"\u0412\u043f\u0435\u0440\u0435\u0434\"]"
},
{
"pageElement":"id(\"files\")/*",
"url":"^http://gist\\.github\\.com/.",
"nextLink":"//a[@hotkey=\"l\"]"
},
{
"pageElement":"//div[@class=\"thumn-line\"]",
"url":"^http://www\\.nicovide\\.jp/.",
"nextLink":"//ul[@class=\"navi\"]/following-sibling::h4/a"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://www\\.j-tokkyo\\.com/",
"nextLink":"id(\"content\")/a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//div[@class=\"main-center\"]/div[not(@style=\"font-size: 10pt; text-align: center;\")]",
"url":"^http://[^.]+\\.cscblog\\.jp/",
"nextLink":"//div[@style=\"font-size: 10pt; text-align: center;\"]/a[starts-with(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":"//table[tbody/tr/td[text()=\"Name\"]] | //table[tbody/tr/td/a[text()=\"Name\"]]",
"url":"^https?://[^?#]+/browse\\.php",
"nextLink":"//a[starts-with(b/text(), \"Next\")]"
},
{
"pageElement":".//td[@width='630' and @valign='top']//table[@cellspacing='0' and @cellpadding='13' and @border='0' and @width='100%']",
"url":"^http://www\\.tubeseek\\.com/",
"nextLink":".//tr[@class='tr_page_numbers']/td/a[contains(text(),'Next')]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" brush_list \")]/ul",
"url":"^http://www\\.brushking\\.eu/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pagination \")]/a[starts-with(text(), \"next\")]"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://upsidedowndogs\\.com/",
"nextLink":"id(\"footer\")/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//dl",
"url":"^https?://[^?]+?/namazu\\.cgi",
"nextLink":"//strong[text()=\"Page:\" or text()=\"\u30da\u30a4\u30b8:\"]/following-sibling::strong/following-sibling::a[1]"
},
{
"pageElement":"id(\"content-body\")",
"url":"^http://rozen\\.sync2ch\\.cc/",
"nextLink":"id(\"roozen-next\")/a"
},
{
"pageElement":"//table[@class=\"MB_BL_TBblock\" or @class=\"MB_LIdata\" or @class=\"MB_SCN_TB\"]/ancestor::tr[1]",
"url":"^http://www\\.itoyokado\\.jp/",
"nextLink":"//a[starts-with(text(),\"\u6b21\u306e\")]"
},
{
"insertBefore":"//div[@class=\"day\"][last()]/following-sibling::node()",
"pageElement":"//div[@class=\"day\"]",
"url":"^http://[^.]+\\.tdiary\\.net/",
"nextLink":"//span[@class=\"adminmenu\"][contains(string(.), \"\u524d\")]/a"
},
{
"pageElement":"//div[@class=\"story\"]",
"url":"^http://www\\.newsweek\\.com/",
"nextLink":"//a[text()=\"Next Page \u00bb\"]"
},
{
"pageElement":"//table[@background=\"Images/fondo_02.jpg\"]",
"url":"^http://www\\.espalnds\\.com/",
"nextLink":"//a[@class=\"pagi_pv\" and position()=last()]"
},
{
"pageElement":"id(\"content\")/table[@class=\"suf-tiles\"]",
"url":"^http://mvl\\.coolpage\\.biz/",
"nextLink":".//div[starts-with(@class,\"suf-page-nav\")]/span[starts-with(@class,\"page-numbers\")]/following-sibling::a[1]"
},
{
"pageElement":"id(\"images\")/*",
"url":"^http://pigmag\\.com/gallery/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"content\")/div[contains(@id,\"post-content-\") or @class=\"rule\"]",
"url":"^http://macguffin\\.sub\\.jp/",
"nextLink":".//div[@class=\"pagination\"]/span[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"NewsDetail\")/div[@class=\"PageNavigation\"]",
"pageElement":"id(\"NewsDetail\")/div[@class=\"TextArea\"]",
"url":"^http://www\\.sankeibiz\\.jp/",
"nextLink":"id(\"NewsDetail\")/div[@class=\"PageNavigation\"]/ul/li[last()]/a"
},
{
"pageElement":".//table[@class=\"maintable\"]",
"url":"^http://www\\.filecrop\\.com/",
"nextLink":".//td/a[contains(text(),\"Next\")]"
},
{
"pageElement":"//table[@class=\"maintable\"]//tr",
"url":"^http://www\\.mininova\\.org/",
"nextLink":"id(\"pagination\")//li[last()]//a"
},
{
"insertBefore":"//a[@class='cT-articleMore']",
"pageElement":"//div[@class='articleBody']",
"url":"^http://www\\.smh\\.com\\.au/",
"nextLink":"//a[@class='cT-articleMore']"
},
{
"pageElement":"id('SelectAristByGenre')/div[@class='ListingRow1' or @class='ListingRow2']",
"url":"^http://www\\.mp3\\.com\\.au/",
"nextLink":".//li[@class='LHPagingSelected']/following-sibling::li[1]/a[1]"
},
{
"pageElement":"id(\"gallery\")",
"url":"^http://123freevectors\\.com/",
"nextLink":"id(\"wp_page_numbers\")//li[last()]/a"
},
{
"pageElement":"//div[@class=\"ArticleText\"]/ul[./li/a[contains(., \"Next\")]][last()]/preceding-sibling::*[not(self::ul and ./li/a[contains(., \"Previous\")])]",
"url":"^https?://lwn\\.net/Articles/",
"nextLink":"(//div[@class=\"ArticleText\"]/ul/li/a[contains(., \"Next\")])[last()]"
},
{
"pageElement":"//div[@class=\"story-text\"]",
"url":"^http://www\\.politico\\.com/",
"nextLink":"//ul[@class=\"pagination\"]/li[@class=\"current\"]/following-sibling::li[1]/a"
},
{
"insertBefore":"id(\"content\")/div[last()]",
"pageElement":"id(\"content\")/div[@class=\"blog\"]",
"url":"^http://[^.]+\\.seesaa\\.net/",
"nextLink":"id(\"content\")/div[@class=\"navi\"]/a[contains(text(), \">>\")]"
},
{
"pageElement":".//div[@class='blog-posts hfeed']",
"url":"^http://cd\\.tamahobby\\.com/",
"nextLink":"id('blog-pager-older-link')/a[contains(@title,'\u524d\u306e\u6295\u7a3f')]"
},
{
"insertBefore":"//span[@class=\"Pagination\"]",
"pageElement":"//div[@class=\"Story\"]",
"url":"^http://www\\.sfweekly\\.com/",
"nextLink":"//a[starts-with(text(), \"Next\")]"
},
{
"insertBefore":"id(\"contentFooter\")",
"pageElement":"id(\"contentBody\")",
"url":"^http://[^.]+\\.pixnet\\.net/",
"nextLink":"//a[@class=\"pageNext\"]"
},
{
"pageElement":"//table[@class=\"question-table\"]/tbody/tr",
"url":"^http://www\\.phppro\\.jp/qa/",
"nextLink":"id(\"newly-arrived-bbs-box\")/div[@class=\"pager-nav-box\"]/div[@class=\"pager-nav-box-contents\"]/a[text()=\"<< \u524d\u3092\u8868\u793a\"]"
},
{
"pageElement":".//div[@class=\"movie_row\"]",
"url":"^http://www\\.all4divx\\.com/",
"nextLink":".//div[@class=\"movie_row_nav_m\"]/a[2]"
},
{
"pageElement":"//div[@class=\"Story\"]",
"url":"^http://www\\.ocweekly\\.com/",
"nextLink":"//a[starts-with(text(), \"Next\")]"
},
{
"pageElement":"//td[@class=\"main\"]/div[@class=\"binder_data\"]",
"url":"^http://mediamarker\\.net/u/.",
"nextLink":"//div[@class=\"navi_binder\"]/a[last()]"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://www\\.netoshin\\.com/",
"nextLink":"id(\"next\")"
},
{
"pageElement":"id(\"article_body\")",
"url":"^http://thinkit\\.jp/article/",
"nextLink":"(//*[@class=\"article_page\"]//a)[last() and contains(text(), \"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"//div[@class=\"ldb-entryies\"]",
"url":"^http://blog\\.lovedol\\.net/",
"nextLink":"//div[@class=\"back-entries\"]/a"
},
{
"pageElement":"id(\"content\")/div[@class=\"apost\"]",
"url":"^http://\\w+\\.engrish\\.com/",
"nextLink":"id(\"content\")//li[@class=\"prev\"]/a"
},
{
"pageElement":"id(\"Center\")/div[contains(@class,\"tryBox\")]|//td[preceding-sibling::td[@class=\"sidebar\"] and following-sibling::td[@class=\"sidebar\"]]/table[position()<last()]|//table[@class=\"entry\"]",
"url":"^http://www\\.zkaiblog\\.com/",
"nextLink":"//a[normalize-space(text())=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"EntryMessages\")",
"url":"^https?://wassr\\.(?:jp|com)/",
"nextLink":"id(\"PagerNextLink\")"
},
{
"pageElement":"//form[@action=\"futaba.php\"][last()]/hr[last()]/preceding-sibling::node()",
"url":"^http://[a-z]+\\.2chan\\.net/",
"nextLink":"//form[substring(@action, string-length(@action) - 3) = \".htm\"][last()]/preceding-sibling::*[1][self::td]/b/following-sibling::*[1][self::a]"
},
{
"pageElement":"//div[@class=\"article_body\"]",
"url":"^http://media\\.yucasee\\.jp/",
"nextLink":"//li[@class=\"nextback\"]/a[contains(text(), \"\u6b21\u3078 >\")]"
},
{
"pageElement":"id(\"main-content\")",
"url":"^http://www\\.idollook\\.com/",
"nextLink":"//strong[@class=\"on\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"content_box\"]",
"url":"^http://www\\.voiceblog\\.jp/",
"nextLink":"//div[@class=\"content_next\"]/a"
},
{
"pageElement":".//div[@class=\"entry\"]",
"url":"^http://scenereleases\\.info/",
"nextLink":".//div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//table[@width=760][last()]",
"url":"^http://www\\.gse\\.jp/format",
"nextLink":"//div[@align=\"right\"]/a[last()]"
},
{
"pageElement":"id(\"content\")/div[@class=\"content-block\"]/div[starts-with(@id, \"post\")]",
"url":"^http://www\\.wowebook\\.com/",
"nextLink":"id(\"content\")/div[@class=\"content-block\"]/div[@class=\"wpmn_page_navi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"report\"]",
"url":"^http://mrtweet\\.net/report/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"//div[@class=\"footercontainer\"]/div[@class=\"navigation\"]",
"pageElement":"id(\"container\")",
"url":"^http://www\\.webcreme\\.com/",
"nextLink":"//div[@class=\"footercontainer\"]/div[@class=\"navigation\"]/a[contains(text(), \"\u00bb\")]"
},
{
"pageElement":"//div[@class=\"OneTopic\"]/div[contains(@class,\"OneMsg\")]",
"url":"^https?://wassr\\.com/status/",
"nextLink":"id(\"PagerNextLink\")"
},
{
"pageElement":"id(\"the_body\")/p",
"url":"^http://www\\.alternet\\.org/",
"nextLink":"id(\"the_body\")/div[@class=\"paging_options\"]//li[@class=\"last_option\"]/a"
},
{
"insertBefore":"//span[@class='Pagination']",
"pageElement":"//div[@class=\"Story\"]",
"url":"^http://www\\.laweekly\\.com/",
"nextLink":"//a[starts-with(text(), \"Next\")]"
},
{
"pageElement":"id(\"content\")/div[@class=\"entry\"]",
"url":"^http://www\\.digitaldj\\.jp/",
"nextLink":"id(\"content\")//a[text()=\"\u00bb\"]"
},
{
"pageElement":"//table[ .//div[contains(@class, \"post_uppers\")] ]",
"url":"^http://[^.]+\\.mopoto\\.com/",
"nextLink":"id(\"previous_page\")"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://initial-kurita\\.com/",
"nextLink":"id(\"content\")/div[@class=\"navi\"]/a[contains(.,\">>\") and not(following::div/@class=\"navi\") or .=\"<<\" and following::div[@class=\"navi\"][2]/a[last()]!=\">>\"]"
},
{
"pageElement":"id(\"mainBlock\")",
"url":"^http://www\\.phileweb\\.com/",
"nextLink":"id(\"pagenext\")/a"
},
{
"insertBefore":"id(\"left-col\")/p[@class=\"wp-pagenavi\"]",
"pageElement":"id(\"left-col\")/div[@class=\"content\"]",
"url":"^http://bestwebgallery\\.com/",
"nextLink":"id(\"left-col\")/p[@class=\"wp-pagenavi\"]/a[contains(text(), \"\u203a\")]"
},
{
"pageElement":"//div[a/@id='top']",
"url":"^http://www\\.ds-scene\\.net/",
"nextLink":"//td[contains(text(),'\u203a')]"
},
{
"pageElement":"//div[contains(concat(\" \",normalize-space(@class),\" \"),\" container \")]/div[not(contains(concat(\" \",normalize-space(@class),\" \"),\" header \") or contains(concat(\" \",normalize-space(@class),\" \"),\" footer \") or contains(concat(\" \",@class,\" \"),\" last \"))]",
"url":"^http://book\\.git-scm\\.com/",
"nextLink":"//div[@class=\"nav\"]/a[normalize-space(text())=\"Next\"]"
},
{
"pageElement":"id(\"content\")/div[contains(@class,\"tweet\")]",
"url":"^http://twitter\\.memol\\.us/",
"nextLink":"//a[contains(concat(\" \",@class,\" \"),\" next_page \")]"
},
{
"pageElement":"id(\"content\")/div[starts-with(@id, \"post\")]",
"url":"^http://www\\.textdrop\\.net/",
"nextLink":"//span[@class=\"previous\" or @class=\"previous-entries\"]/a"
},
{
"pageElement":"//div[@class=\"articleBody\"]",
"url":"^http://www\\.techradar\\.com",
"nextLink":"//a[span=\"Next\"]"
},
{
"pageElement":"id(\"cColContent\")",
"url":"^http://[a-z]+\\.hexus\\.net/",
"nextLink":"//td[@class=\"nextPage\"]/a"
},
{
"pageElement":"//*[contains(concat(\" \",@class,\" \"), \" itg \")] | //div[contains(concat(\" \",@class,\" \"), \" ido \")]/table[2] | id(\"gtt\") | //div[contains(@class,\"ssb\")]/*[@style or @href or @class=\"if\"]",
"url":"^http://gm?\\.e-hentai\\.org/",
"nextLink":"//a[normalize-space()=\">\"] | //div[contains(@class,\"ssb\")]/a"
},
{
"pageElement":"//div[@class=\"chapter-container\"]",
"url":"^http://dzfl\\.tumblr\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"id(\"maincontent\")/div[@class=\"inside\"]/div[@class=\"wp-pagenavi\"]",
"pageElement":"id(\"maincontent\")/div[@class=\"inside\"]",
"url":"^http://www\\.cssclip\\.com/",
"nextLink":"id(\"maincontent\")/div[@class=\"inside\"]/div[@class=\"wp-pagenavi\"]/a[contains(text(), \"\u00bb\")]"
},
{
"pageElement":"//hr[1]/following-sibling::node()[following-sibling::hr]",
"url":"^http://www\\.lua\\.org/pil/",
"nextLink":"//img[@alt=\"Next\"]/.."
},
{
"pageElement":"id(\"mainContents\")/div[contains(@class, \"contentsKijiSpace\")]",
"url":"^http://find\\.teacup\\.com/",
"nextLink":"id(\"mainContents\")/div[@class=\"searchPage\" and position()=3]/a[last()]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://www\\.apptism\\.com/",
"nextLink":"//a[@class=\"next_page\" and text()=\"Next \u00bb\"]"
},
{
"pageElement":"id(\"main\")/div[starts-with(@id, \"post-\")]",
"url":"^http://thereifixedit\\.com/",
"nextLink":"//span[@class=\"older\"]/a"
},
{
"pageElement":"id(\"questions\")/div[contains(@class,\"question-summary\")] | //div[starts-with(@class,\"answer\")]",
"url":"^http://stackoverflow\\.com/",
"nextLink":"//div[@class=\"pager\"]/a[last()]"
},
{
"pageElement":"id(\"gallery-row-list\")",
"url":"^http://www\\.behance\\.net/",
"nextLink":"id(\"gallery-right\")//a[.=\"Next\"]"
},
{
"pageElement":".//div[@class='listchannel']",
"url":"^http://www\\.wisevid\\.com/",
"nextLink":".//div[@class='pagingnav']/span[@class='pagingnav']/following-sibling::a[1]"
},
{
"insertBefore":"id(\"navigation\")",
"pageElement":"id(\"contents\")",
"url":"^http://blog\\.smatch\\.jp/.",
"nextLink":"id(\"unnext\")/a"
},
{
"insertBefore":"//div[@class=\"in\"]/div[@class=\"ido\"]",
"pageElement":"//div[@class=\"in\"]/*[@class=\"btitle\" or @class=\"bitem\" or @class=\"more\" or @class=\"iitem\"]",
"url":"^http://zapanet\\.info/blog/",
"nextLink":"//div[@class=\"in\"]/div[@class=\"ido\"]/span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"channel-list\")/ul[@class=\"listing\"]",
"url":"^http://www\\.mogulus\\.com/",
"nextLink":".//div[@class=\"footer\"]/ul[@class=\"buttons right\"]/li/a[@class=\"next\"]"
},
{
"pageElement":"//ul[@class=\"pipelist\"]",
"url":"^http://pipes\\.yahoo\\.com/",
"nextLink":"//a[starts-with(text(),\"Next\")]"
},
{
"insertBefore":"id(\"footer\")",
"pageElement":"id(\"comic\")",
"url":"^http://mulele\\.com/comics/",
"nextLink":"//div[@class=\"nav\"]/a[last()]"
},
{
"insertBefore":"//div[@class=\"paging\"]",
"pageElement":"//ul[@class=\"stream\"]",
"url":"^http://[^.]+\\.jaiku\\.com/",
"nextLink":"//div[@class=\"paging\"]/a[last()]"
},
{
"pageElement":".//div[@class=\"white-back\" or @class=\"channel-one\"]",
"url":"^http://(?:www\\.)?b92\\.fm/",
"nextLink":".//div[@class=\"next-active\"]/a"
},
{
"pageElement":"id(\"left\")/div[@class=\"entry\"]",
"url":"^http://www\\.moongift\\.jp/",
"nextLink":"id(\"left\")/div[@class=\"navigation\"]/div[@class=\"alignright\"]/a"
},
{
"pageElement":"id(\"contentsInner\")/div[@class=\"entry\"]'",
"url":"^http://bm\\.s5-style\\.com/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[contains(text(),\"\u00bb\")]'"
},
{
"pageElement":"id(\"gsArticle\")",
"url":"^http://allabout\\.co\\.jp/.",
"nextLink":"id(\"mainCulumnPager\")/div[@class=\"next\"]/a"
},
{
"insertBefore":"//div[a[starts-with(text(), \"Next Page\")]]",
"pageElement":"id(\"storyText\")",
"url":"http://www\\.politico\\.com/",
"nextLink":"//a[starts-with(text(), \"Next Page\")]"
},
{
"insertBefore":"id(\"page\")/div[@class=\"purple\"]",
"pageElement":"id(\"page\")/div[@id=\"wallpaper\"]",
"url":"^http://interfacelift\\.com/",
"nextLink":"id(\"page\")/div[@class=\"pagenums_bottom\"]/div/a[text()=\"next page >\"]"
},
{
"pageElement":"//table[@class=\"list\"]",
"url":"^http://www\\.infocart\\.jp/",
"nextLink":"//td[@class=\"normal\"]/a[last()]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://www\\.joystiq\\.com/",
"nextLink":"//a[@class=\"next-page\" and text()=\"Next Page\"]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://www\\.web2null\\.de/",
"nextLink":"//div[@class=\"pagenavi\"]//span[@class=\"curpage\"]/following-sibling::a"
},
{
"insertBefore":"id(\"contentarea\")/div[@class=\"padding\"][last()]",
"pageElement":"id(\"contentarea\")/div[3]",
"url":"^http://interfacelift\\.com/",
"nextLink":"id(\"pagenums\")/div/div/a[text()=\"next page >\"]"
},
{
"insertBefore":"id(\"pg\")",
"pageElement":"id(\"c\")",
"url":"^http://image\\.baidu\\.jp/i",
"nextLink":"id(\"pg\")/a[@class=\"nx\"]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://garari\\.jugem\\.jp/",
"nextLink":"//div[@class=\"paging\"]/a[contains(text(), \"old\")]"
},
{
"pageElement":"id(\"maincolumn\")/table[@class=\"nopad\"]//tr/td[1]/table",
"url":"^http://www\\.slpulse\\.com/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" pagenav \") and contains(text(), \"Next\")]"
},
{
"pageElement":"id(\"story-body story-body2\")",
"url":"^http://www\\.newsday\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"updates\")/div[contains(@class,\"url\")]",
"url":"^http://www\\.browzmi\\.com/",
"nextLink":"//div[@class=\"next\"]/span/a"
},
{
"pageElement":"//td[@valign=\"top\"]/div/following-sibling::node()[ following::div[@class=\"nextprev\"] ]",
"url":"^http://blog\\.waybig\\.com/",
"nextLink":"//a[contains(strong/text(),\"Next Page(Older) \u00bb\")]"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://www\\.appbank\\.net/",
"nextLink":"//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id('content-left')//div[@class='entrytitle-container']/parent::div/parent::div",
"url":"^http://blog\\.iwa-ya\\.net/",
"nextLink":"//div[@class='wp-pagenavi']/span[@class='current']/following-sibling::a[1]"
},
{
"insertBefore":"id(\"flip2\")",
"pageElement":"id(\"main\")/div",
"url":"^http://blog\\.nrpg-a\\.com/",
"nextLink":"id(\"flip2\")/a[contains(text(), \">>\")]"
},
{
"pageElement":"//div[@class=\"cnnStoryContent\"]",
"url":"^http://[^.]+\\.cnn\\.com/rn",
"nextLink":"//div[@class=\"cnnContinue\"]//a"
},
{
"insertBefore":"//table[@width=533]/td/div[last()-1]",
"pageElement":"//table[@width=533]//div[contains(@style, \"525px\") and contains(@style, \"padding: 0px\") or contains(@style, \"ber02\\.jpg\")]",
"url":"^http://www\\.naps-jp\\.com/",
"nextLink":"//div[@class=\"j10\"]/a[@title=\"next page\"]"
},
{
"pageElement":"//div[@class=\"boxBody\"]/div[@class=\"thickline_box\"]",
"url":"^http://www\\.jognote\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"left\")/li[contains(@class, \"story\")]",
"url":"^http://www\\.rssmeme\\.com/",
"nextLink":"//span[contains(concat(\" \", @class, \" \"), \" next \")]/a[last()]"
},
{
"pageElement":"//form[@action=\"/servlet/Delete\"]",
"url":"^http://i-bbs\\.sijex\\.net/",
"nextLink":"//table//td[@class=\"normal\"]//b[text()=\"\uff1e\"]/parent::a"
},
{
"pageElement":"id(\"article_content\")",
"url":"^http://www\\.esquire\\.com/",
"nextLink":"//a[@class=\"next_img\"]"
},
{
"pageElement":"id(\"contents\")/div",
"url":"^http://wii\\.com/jp/.+/crv/",
"nextLink":"id(\"next_page_btn\")/a"
},
{
"pageElement":"id(\"story-body\")",
"url":"^http://www\\.latimes\\.com/",
"nextLink":"//li[@class=\"next\"]/a[text()=\"next\"]"
},
{
"pageElement":"//div[@class=\"video\"]",
"url":"^http://www\\.stagehd\\.com/",
"nextLink":"//a[@class=\"pagination-number\"][contains(text(), \">>\")]"
},
{
"pageElement":"id(\"alpha-inner\")",
"url":"^http://www\\.hiroike\\.com/",
"nextLink":"//link[@rel=\"prev\"]"
},
{
"pageElement":"//table[contains(@class, \"ebItemlist\")]",
"url":"^http://stores\\.ebay\\.com/",
"nextLink":"//img[@title=\"Continue\"]/parent::a"
},
{
"pageElement":"//div[@id=\"m2\"]",
"url":"^http://bara\\.blue12\\.net/",
"nextLink":"//div[@id=\"dt3\"]/a[text()=\"\u6b21\u3078\"]"
},
{
"insertBefore":"id(\"subMsg\")/following-sibling::*|//div[@class=\"Cont\"]/following-sibling::*",
"pageElement":"//*[preceding-sibling::table[.//@class=\"pg\"]][following-sibling::table[.//@class=\"pg\"]]|id(\"tbList\")|//div[@class=\"Cont\"]",
"url":"^http://tieba\\.baidu\\.com/",
"nextLink":"//*[@class=\"pg\"]/a[.//text()=\"\u4e0b\u4e00\u9875\"]"
},
{
"pageElement":"id(\"annaininBG\")/p[2]",
"url":"^http://allatanys\\.jp/B001/",
"nextLink":"id(\"movePage\")/ul/li[contains(concat(\" \",@class,\" \"), \" on \")]/following-sibling::*[1][self::li]/a"
},
{
"insertBefore":"//form[@name=\"form2\"]",
"pageElement":"id(\"contents\")//div[@class=\"goods\"]",
"url":"^http://www\\.hmv\\.co\\.jp/",
"nextLink":"id(\"contents\")//p[@class=\"nextPage\"]/a"
},
{
"insertBefore":"//div[contains(@class, 'pagination')]",
"pageElement":"//div[div[@id='articleText']]",
"url":"^http://www\\.pcworld\\.com/",
"nextLink":"//a[contains(translate(text(), 'next', 'NEXT'), 'NEXT')]"
},
{
"pageElement":"id(\"ctl00_ctl00_ctl00_DocumentBody\")/div[3]",
"url":"^http://forums\\.xbox\\.com/",
"nextLink":"id(\"ctl00_ctl00_ctl00_MainContent_PageContent_BodyContentRegion_PostFlatView_ctl00_Pager_Next\")"
},
{
"pageElement":"id(\"main\")/div[1]/div[2]/ul",
"url":"^http://twicco\\.jp/channels",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"section\")]",
"url":"^http://blog\\.kyosuke\\.jp/",
"nextLink":"//li[contains(concat(\" \",@class,\" \"),\" older \")]/a"
},
{
"pageElement":"//ul",
"url":"^https?://m\\.twitter\\.com/",
"nextLink":"//a[@accesskey=\"6\"]"
},
{
"pageElement":"id(\"bukkenList\")",
"url":"^http://www\\.jj-navi\\.com/",
"nextLink":"//a[contains(text(),'\u6b21\u306e50\u4ef6')]"
},
{
"pageElement":"id(\"contentBody\")/node()[./preceding-sibling::div[@class=\"storyMedia\"] and ./following-sibling::div[contains(concat(\" \", @class, \" \"), \" contBox \")]]",
"url":"^http://www\\.cbsnews\\.com/",
"nextLink":"id(\"contentBody\")//li[@class=\"next\"]/a"
},
{
"insertBefore":"id(\"mainResult\")/p",
"pageElement":"id(\"generalResult\")",
"url":"^http://search\\.ameba\\.jp/",
"nextLink":"id(\"mainResult\")/div[@class=\"paging\"]/a[contains(@class,\"nextPage\")]"
},
{
"pageElement":"//div[@class=\"content MT\"]",
"url":"^http://www\\.cracked\\.com/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"//h2/following-sibling::node()[following-sibling::address]",
"url":"^http://tabesugi\\.net/memo/",
"nextLink":"//p[@class=\"nav\"]/a[not(contains(@href,\"index\"))]"
},
{
"pageElement":"id(\"entries\")",
"url":"^http://blog\\.volume2\\.jp/",
"nextLink":"//ul[@class=\"pageBute\"]/li[@class=\"nextBtn\"]/a"
},
{
"pageElement":"(//table[@width=478])[1]/tbody/*[preceding::*[@class=\"news_title_\"] and following::img[@alt=\"\u6b21\u306b\u9032\u3080\" or @alt=\"\u524d\u306b\u623b\u308b\"]] | (//table[@width=478])[2]/tbody/*[following::img[@alt=\"\u6b21\u306b\u9032\u3080\" or @alt=\"\u524d\u306b\u623b\u308b\"]]",
"url":"^http://zai\\.diamond\\.jp/",
"nextLink":"//a[descendant::img[@alt=\"\u6b21\u306b\u9032\u3080\"]]"
},
{
"pageElement":"id(\"content\")/*",
"url":"^http://api\\.jquery\\.com/",
"nextLink":"//link[@rel=\"next\"]"
},
{
"insertBefore":"id(\"page-bottom\")",
"pageElement":"id(\"wrap\")",
"url":"^http://www\\.verycd\\.com/",
"nextLink":"//a[@class=\"next\" and text()=\"\u4e0b\u4e00\u9875 \u00bb\"]"
},
{
"pageElement":"id(\"table13\")",
"url":"^http://rapidlibrary\\.com/",
"nextLink":"//span[@class='now']/following-sibling::a[1]"
},
{
"insertBefore":"//div[@class=\"pagebreaknav\" and @id=\"teaserdiv\"]",
"pageElement":"//div[@class=\"pagebreaknav\" and @id=\"pagecntltop\"]/../p",
"url":"^http://health\\.msn\\.com/",
"nextLink":"//a[text()=\"Next >\"]"
},
{
"pageElement":"id(\"contents-wrap\")/div[@class=\"statuses\"]",
"url":"^http://twiple\\.jp/status/",
"nextLink":"id(\"contents-wrap\")/div[@class=\"paging\"]/a[last()]"
},
{
"pageElement":"id(\"posts\")/*",
"url":"^http://www\\.tumblr\\.com/",
"nextLink":"id(\"next_page_link\")"
},
{
"pageElement":"//div[@class=\"message\"] | //div[@class=\"listforum\"]",
"url":"^http://forum\\.golem\\.de/",
"nextLink":"//span[@class=\"right\"]/a[contains(@rel,\"next\")]"
},
{
"pageElement":"//div[@class=\"frame_col_left\" or @class=\"frame_col_left_type3\" or @class=\"eventch\"]/div[contains(concat(\" \", @class, \" \"), \" section08 \")]/ul|//div[@class=\"block_headline_top\"]/dl|//div[@class=\"showcase\"]/table/tbody/tr|id(\"block_story\")/*|//div[@class=\"story_body\"]/*",
"url":"^http://japan\\.cnet\\.com/",
"nextLink":"//li[@class=\"next\"][1]/a"
},
{
"pageElement":"id(\"column-main\")/node()[self::ul or position()=last()]",
"url":"^http://r\\.tabelog\\.com/.",
"nextLink":"id(\"column-main\")//div[@class=\"list-controll\"]/div[@class=\"page-move\"]/a[@rel=\"next\" or contains(text(),\"next\")]"
},
{
"pageElement":"id(\"article_listing\")",
"url":"^http://www\\.avclub\\.com/",
"nextLink":".//div[@class=\"pager onpage_\"]/a[@class=\"pager_nav next\"]"
},
{
"insertBefore":"//div[@class=\"pager\"][2]",
"pageElement":"//div[@class=\"dot_list\"]",
"url":"^http://favicon2dots\\.com/",
"nextLink":"//div[@class=\"pager\"][1]/a[@class=\"pager-next\"]"
},
{
"insertBefore":"//div[@class=\"PageNav\"][last()]",
"pageElement":"//div[@class=\"ChannelMessages\"][last()]",
"url":"^http://wassr\\.jp/channel/",
"nextLink":"id(\"PagerNextLink\")[last()]"
},
{
"pageElement":"//div[@class=\"showPage\"]",
"url":"^http://www\\.boston\\.com/",
"nextLink":"id(\"next\")/a"
},
{
"insertBefore":"//div[@class=\"pagination\"]",
"pageElement":"//div[@class=\"result\"]",
"url":"^http://github\\.com/search",
"nextLink":"//span[@class=\"current\"]/following-sibling::a[contains(@href, \"start_value=\")]"
},
{
"pageElement":"//table[@class=\"tbl_sl\"]",
"url":"^http://www\\.coneco\\.net/",
"nextLink":"//div[@class=\"txt06re\"]/a[last()]"
},
{
"pageElement":"id(\"main\")/div[contains(@class,\"section\")]",
"url":"^http://youtube-spot\\.com/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"content\"]",
"url":"^http://www\\.zerosec\\.ws/",
"nextLink":"//a[text()=\"\u00bb\"]"
},
{
"pageElement":"id(\"textArea\")/p | id(\"photoBox\")",
"url":"^http://www\\.sanspo\\.com/",
"nextLink":"//span[@class=\"nextP\"]/a"
},
{
"pageElement":"id(\"content\")/div[contains(@id,\"post-\")]",
"url":"^http://cuteoverload\\.com/",
"nextLink":".//div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"main\")/table",
"url":"^http://[^.]+\\.20ch\\.net/",
"nextLink":"//a[contains(text(), \"\u6b21\u3078\")]"
},
{
"pageElement":".//ul[@class=\"fullTileList\" or @class=\"smallThumbList\"]",
"url":"^http://www\\.ustream\\.tv/",
"nextLink":".//ul[@class=\"pager\"]/li[last()]/a"
},
{
"insertBefore":"id(\"content\")/table[last()]",
"pageElement":"id(\"content\")/table[last() - 1]",
"url":"^http://f1000biology\\.com/",
"nextLink":"//*[starts-with(@href, \"/browse?page\") and text()=\">>\"][position()=last()]"
},
{
"pageElement":"id(\"MCEntryBody\")",
"url":"^http://www\\.j-cast\\.com/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"//table[@width=\"520\"]",
"url":"^http://mago\\.pepper\\.jp/",
"nextLink":"//a[img[@src=\"index-img/tonexticon.jpg\"]]"
},
{
"pageElement":"id('contentarea')/div[@align='center']/table",
"url":"^http://moviesforfree\\.tv/",
"nextLink":"id('contentarea')/div[@align='center']/a[contains(text(),'Next')]"
},
{
"pageElement":"//div[@class=\"contentpaneopen\"]/*[position() < last() - 1]",
"url":"^http://www\\.ryuzee\\.com/",
"nextLink":"//div[@class=\"contentpaneopen\"]/p/a[contains(text(), \"\u524d\")]"
},
{
"pageElement":"id(\"primary\")",
"url":"^http://www\\.gnarbs\\.com/",
"nextLink":"id(\"paging\")/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"content\")/div[@class=\"feed all_mixes\"]/div[@class=\"section clear\"]",
"url":"^http://8tracks\\.com/mixes",
"nextLink":"id(\"content\")/div[@class=\"pagination clear\"]/a[@class=\"next_page\"]"
},
{
"pageElement":"//td[@colspan=\"6\"]/..",
"url":"^http://beta\\.vreel\\.net/",
"nextLink":"//a[contains(text(), \"next\")]"
},
{
"pageElement":"//div[@class=\"modB\"]/table",
"url":"^http://www\\.emusic\\.com/",
"nextLink":"//span[@class=\"pager\"]/span[@class=\"pagerCurrentPage\"]/following-sibling::a[1]"
},
{
"pageElement":"id('content')",
"url":"^http://www\\.irfree\\.com/",
"nextLink":".//div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"article_body\")",
"url":"^http://www\\.avclub\\.com/",
"nextLink":"//a[text()=\"Next \u00bb\"]"
},
{
"pageElement":"//div[@id=\"post_content\"]]/div[@class=\"post clear_fix\"]",
"url":"^http://www\\.cotopa\\.com/",
"nextLink":"//div[@id=\"foot-navi\"]/div[@class=\"wp-pagenavi clear_fix\"]/ul/li/a"
},
{
"pageElement":"id(\"content-inner\")/div[contains(concat(\" \", @class, \" \"), \" content-main \")]/div[@class=\"content-main-section\"]",
"url":"^http://www\\.akiyan\\.com/",
"nextLink":"id(\"content-inner\")/div[contains(concat(\" \", @class, \" \"), \" content-main \")]/div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"id(\"search_result\")/* | id(\"container\")//ul[contains(concat(\" \", @class, \" \"), \" thumb_movie \")]",
"url":"^http://www\\.fooooo\\.com/",
"nextLink":"id(\"container\")//li[@class=\"next\"]/a"
},
{
"pageElement":"//*[count(child::*[.//a[@class=\"permalink\"] | .//a[child::img[@class=\"permalink\"]] | .//*[@class=\"date\"]/a | .//div[contains(concat(\" \",normalize-space(@class),\" \"),\" permalink \")]/a | .//a[contains(@title,\"permalink\")] | .//a[@class=\"fecha\"] |.//a[contains(@href,\"/post/\")]])>=4]/*[.//a[@class=\"permalink\"] | .//a[child::img[@class=\"permalink\"]] | .//*[@class=\"date\"]/a | .//div[contains(concat(\" \",normalize-space(@class),\" \"),\" permalink \")]/a | .//a[contains(@title,\"permalink\")] | .//a[@class=\"fecha\"] |.//a[contains(@href,\"/post/\")]]",
"url":"^.+://[^/]+\\.tumblr\\.com/",
"nextLink":"//a[contains(@href,\"/page/\")][number(substring-after(self::a/@href,\"/page/\"))-number(substring-after(preceding::a[contains(@href,\"/page/\")][1]/@href,\"/page/\")) = 2 or number(substring-after(self::a/@href,\"/page/\"))-number(substring-after(following::a[contains(@href,\"/page/\")][1]/@href,\"/page/\")) = 2]|//a[contains(@href,\"/page/\")][number(substring-after(self::a/@href,\"/page/\")) = 2][number(substring-after(following::a[contains(@href,\"/page/\")][1]/@href,\"/page/\")) != 4 and number(substring-after(preceding::a[contains(@href,\"/page/\")][1]/@href,\"/page/\")) != 4]"
},
{
"pageElement":"id(\"main\")/div[@class=\"inner\"]",
"url":"^http://ipodtouchlab\\.com/",
"nextLink":"//div[@class=\"inner\"]/p[last()]/a[contains(text(),\"\u6b21\")]"
},
{
"pageElement":"//div[@class=\"result_tag_body\"]/div[contains(concat(\" \",@class,\" \"),\" result_tag_box \")]",
"url":"http://search\\.zoome\\.jp/",
"nextLink":"//ul[@class=\"change_page_ul\"]/li[@class=\"next change_page_li\"]/a[starts-with(text(),\"\u25b6\")]"
},
{
"insertBefore":"//div[@class=\"bottom_pages\"]",
"pageElement":"//div[@class=\"description\"]",
"url":"^http://www\\.askmen\\.com/",
"nextLink":"//a[@class=\"nav_prev_next\" and starts-with(text(), \"Next\")]"
},
{
"pageElement":"//tr[contains(@class,\"latestchap\")]|id(\"picture\")/../..",
"url":"^http://mangahelpers\\.com/",
"nextLink":"id(\"nextpage\")|//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://pinktentacle\\.com/",
"nextLink":"id(\"content\")/div[@class=\"navigation_1\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"//div[@class=\"maintxt\"]",
"url":"^http://www\\.4gamer\\.net/",
"nextLink":"//div[@class=\"paging\"]/*[last()][self::a]"
},
{
"pageElement":"id(\"spArticleBody\")",
"url":"^http://www\\.spiegel\\.de/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"insertBefore":"//div[@class=\"navigation nav-top\"]",
"pageElement":"//div[starts-with(@id, \"post-\")]",
"url":"^http://lolfbmoments\\.com/",
"nextLink":"//div[@id=\"wp_page_numbers\"]//a[text()=\">\"]"
},
{
"insertBefore":"id(\"CONTENTS_MAIN\")/div[@class=\"cmn-section cmn-indent\"]/div[@class=\"cmn-article_keyword cmn-clearfix\"]",
"pageElement":"id(\"CONTENTS_MAIN\")",
"url":"^http://www\\.nikkei\\.com/",
"nextLink":"id(\"CONTENTS_MAIN\")/div[@class=\"cmn-section cmn-indent\"]/div[@class=\"cmn-article_nation\"]/ul/li/a"
},
{
"pageElement":"//div[@class=\"plurk\"]",
"url":"^http://www\\.plurk\\.com/m",
"nextLink":"//div[@class=\"pagination\"]/a[last()]"
},
{
"pageElement":"//div[@id=\"content\"]/div[@class=\"heightLine\"]",
"url":"^http://www\\.zzrock\\.net/",
"nextLink":"id(\"foot-navi\")/div[@class=\"wp-pagenavi\"]/a[contains(text(), \"\u00bb\")]"
},
{
"pageElement":"id(\"spArticleColumn\")/*[not(following-sibling::p/@id=\"spIntroTeaser\")][not(preceding-sibling::div/@id=\"spMultiPagerHeadlines\")][not(@class=\"spPhotoGallery\")]",
"url":"^http://www\\.spiegel\\.de/",
"nextLink":"id(\"spMultiPagerControl\")/ul/li[@class=\"spMultiPagerLink\"]/a"
},
{
"pageElement":"//table[@class=\"catalog_row\"] | //table[@class=\"catalog_row\"]/following::div[1]",
"url":"^http://store\\.otaku\\.ru/",
"nextLink":"/descendant::table[@class=\"catalog_row\"][1]/preceding::p[1]/text()[starts-with( normalize-space(), \"[\" )]/following-sibling::a[1]"
},
{
"pageElement":"//table[@class=\"MessageTableOut\"]/parent::div|//table[@class=\"MessageTableOut\"]/parent::div/following-sibling::p[1][not(node())]",
"url":"^http://[^.]+\\.oebit\\.jp/",
"nextLink":"//b[.=\"BACK\"]/parent::a"
},
{
"pageElement":"//ul[starts-with(@class,\"articleList\")]",
"url":"^http://gihyo\\.jp/.*serial",
"nextLink":"//p[@class=\"next\"]/a[last()]"
},
{
"pageElement":"id(\"feed\")/div | id(\"page\")//table[@class=\"usergrid\"]",
"url":"^https?://friendfeed\\.com/",
"nextLink":"id(\"page\")//div[contains(concat(\" \",@class,\" \"),\" pager \")]/a[last()]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://blog\\.stco\\.info/",
"nextLink":"//div[@class=\"page\"]/a[last()]"
},
{
"pageElement":"id(\"main\")/div[h2]",
"url":"^http://www\\.hide10\\.com/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/a|//a[contains(text(),'\u6b21\u3078\u00bb')]"
},
{
"pageElement":"//div[@class=\"post\"]",
"url":"^http://www\\.health\\.com/",
"nextLink":"//div[@class=\"next-page-link\"]/a"
},
{
"pageElement":"id(\"table13\")",
"url":"^http://4megaupload\\.com/",
"nextLink":".//span[@class=\"now\"]/following-sibling::a[@class=\"navigate\"][1]"
},
{
"pageElement":"//div[@class=\"thumb-wrapper\"]|//div[@class=\"thumb-wrapper\"][last()]/following-sibling::*[1][self::div]",
"url":"^http://www\\.tube8\\.com/",
"nextLink":"//li[@class=\"active-pag\"]/following-sibling::li[1]/a"
},
{
"insertBefore":"//div[@class=\"wp_link_pages\"]",
"pageElement":"//div[@class=\"postbody\"]",
"url":"^http://venturebeat\\.com/",
"nextLink":"//div[@class=\"wp_link_pages\"]/p/a[string-length(../text()[1])=9 and position()=1 or position()=number(../text()[number()>0])]"
},
{
"pageElement":"id('main')/div[@class='entry']",
"url":"^http://poab\\.jugem\\.jp/",
"nextLink":".//ul[@class='navi']/li[@class='next']/a"
},
{
"pageElement":"id(\"main\")",
"url":"^http://blog\\.s21g\\.com/",
"nextLink":"//a[@class=\"back\"]"
},
{
"pageElement":"id(\"contents\")",
"url":"^http://nyarla\\.net/blog/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"contentmiddle\")/div[contains(@id,\"post_wide\") or contains(@class,\"entry\") or contains(@id,\"comment_top\") or contains(@id,\"commentblock\")]",
"url":"^http://www\\.slzin\\.com/",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" navigation \")]//a[text()=\"NEXT:>\"]"
},
{
"insertBefore":"id(\"mainContent\")/div[@class=\"pages pkg\"]/div[@class=\"paginator\"]",
"pageElement":"id(\"mainContent\")/ol[@class=\"bookmarks clear\"]",
"url":"^http://vi\\.sualize\\.us/",
"nextLink":"id(\"mainContent\")/div[@class=\"pages pkg\"]/div[@class=\"paginator\"]/a[@class=\"next\"]"
},
{
"pageElement":"//div[@class=\"BodyTxt\"]",
"url":"^http://www\\.asahi\\.com/",
"nextLink":"//p[@class=\"Next\"]/a"
},
{
"insertBefore":"//a[p[text()=\"click here for more >\"] or div[@class=\"mag_link\"]]",
"pageElement":"id(\"news_article\")/p[2]",
"url":"^http://men\\.style\\.com/",
"nextLink":"//a[p[text()=\"click here for more >\"] or div[@class=\"mag_link\"]]"
},
{
"insertBefore":"id(\"content\")/table[3]",
"pageElement":"id(\"content\")/table[2]",
"url":"^http://infinitemma\\.com/",
"nextLink":"//a[text()=\"Next\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://progit\\.org/book/",
"nextLink":"id(\"nav\")/a[text()=\"next\"]"
},
{
"pageElement":".//div[@class=\"post\"]",
"url":"^http://ihasahotdog\\.com/",
"nextLink":".//div[@class=\"navigation\"]//a[contains(text(),\"Next\")]"
},
{
"insertBefore":"//*[contains(@class, \"autopagerize_insert_before\")]",
"pageElement":"//*[contains(@class, \"autopagerize_page_element\")]",
"url":"^http://hail2u\\.net/blog/",
"nextLink":"//a[@class=\"autopagerize_follow_location\"]"
},
{
"pageElement":"id(\"search-result\")/ul[contains(concat(\" \", @class, \" \"), \" result \")]",
"url":"^http://nanapi\\.jp/search",
"nextLink":"id(\"search-result\")//em[contains(concat(\" \", @class, \" \"), \" next \")]/a"
},
{
"pageElement":"id(\"main\")/div[h2]",
"url":"^http://blog\\.f14s\\.biz/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/a"
},
{
"insertBefore":"id(\"stream\")/hr[21]",
"pageElement":"id(\"stream\")",
"url":"^http://brightkite\\.com/.",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"main\")/div[h2]",
"url":"^http://blog\\.y17e\\.com/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/a"
},
{
"pageElement":"//div[@class=\"view-content\"]",
"url":"^http://extendopera\\.org/",
"nextLink":"//a[@title=\"Go to next page\"]"
},
{
"pageElement":"id(\"contents\")",
"url":"^http://typing-tube\\.net/",
"nextLink":"id(\"nextPage\")"
},
{
"pageElement":"id(\"w\")/div[@class]/table",
"url":"^http://www\\.shobon\\.jp/",
"nextLink":"id(\"w\")/div[@class]/font/a[position()!=text()]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://www\\.spike\\.com/",
"nextLink":"//li[@class=\"pagenext\"]/a"
},
{
"pageElement":"id(\"Blog1\")/div[contains(concat(\" \", @class, \" \"), \" blog-posts \")]",
"url":"^http://blog\\.takuo\\.jp/",
"nextLink":"id(\"Blog1_blog-pager-older-link\")"
},
{
"pageElement":"//div[@class=\"pagination\"]/preceding-sibling::*[contains(concat(\" \", @class, \" \"), \" inset \")]",
"url":"^http://www\\.ohloh\\.net/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//body/div",
"url":"^https?://.+/bbstcon\\.php",
"nextLink":"//a[contains(text(),\"\u4e0b\u4e00\u9875\")]"
},
{
"pageElement":"//div[contains(@class, \"news\")]/div[contains(@class, \"alert\")]",
"url":"^http://github\\.com/[^/?]",
"nextLink":"//a[@hotkey=\"l\"]"
},
{
"pageElement":"//div[@class=\"blogbody\"]",
"url":"^http://la\\.ma\\.la/blog/",
"nextLink":"//div[@class=\"prev\"]/a"
},
{
"pageElement":"id('content')",
"url":"^http://interflicks\\.net/",
"nextLink":".//strong[@class='on']/following-sibling::a[1]"
},
{
"insertBefore":"//div[@class=\"entry\"][last()]/p",
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://flickrbabes\\.com/",
"nextLink":"//span[@class=\"previous\"]/a"
},
{
"pageElement":"//div[starts-with(@id,\"entry\")]",
"url":"^http://alice\\.in2d\\.jp/",
"nextLink":"//div[@class=\"content-nav\"]/a[starts-with(text(),\"\u00ab\")]"
},
{
"insertBefore":"id(\"main\")/table/following-sibling::node()",
"pageElement":"id(\"main\")/table",
"url":"^http://cal\\.syoboi\\.jp/",
"nextLink":"//a[text()=\"\u6b21\u30da\u30fc\u30b8\"]"
},
{
"pageElement":"//div[@class=\"POST\" or @class=\"post\"]",
"url":"^http://blog\\.auone\\.jp/",
"nextLink":"//table//a[text()=\"\u6b21\u3078\"]"
},
{
"pageElement":".//div[@class='section'] | .//div[@class='section']/following-sibling::div[1]",
"url":"http://ffffoundtape\\.com/",
"nextLink":".//div[@class='pagination']/span[@class='current']/following-sibling::a[1]"
},
{
"pageElement":"id(\"main\")/div[h2]",
"url":"^http://f14s\\.biz/makoto/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/a"
},
{
"insertBefore":"id(\"articlenavwrap\")",
"pageElement":"id(\"articlecontent\")",
"url":"^http://www\\.trutv\\.com/",
"nextLink":"id(\"nextchapter\")"
},
{
"pageElement":"id(\"news-item\")",
"url":"^http://arstechnica\\.com/",
"nextLink":"id(\"pager-wrapper\")/ul/li/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"mainContent\")/div[@class=\"box\"]",
"url":"^http://vector4free\\.com/",
"nextLink":"id(\"mainContent\")/div[@class=\"pagination\"]/strong/following-sibling::a[1]"
},
{
"insertBefore":"id(\"content\")/div[@class=\"wp-pagenavi\"]",
"pageElement":"id(\"content\")",
"url":"^http://stylecrunch\\.com/",
"nextLink":"id(\"content\")/div[@class=\"wp-pagenavi\"]/a[contains(text(), \"\u00bb\")]"
},
{
"pageElement":"id(\"textArea\")/div[@class=\"subhead_fmt\"]/following-sibling::*",
"url":"^http://www\\.webmd\\.com/",
"nextLink":"//a[starts-with(text(),\"Next Page\")]"
},
{
"insertBefore":"id(\"afoot\")",
"pageElement":"id(\"abody\")",
"url":"^http://www\\.salon\\.com/",
"nextLink":"//p[@class=\"next_page\"]/a"
},
{
"pageElement":"//ul[contains(@class, \"people\")]/li[contains(@class,\"vcard\")]",
"url":"^http://tatsuj\\.in/people",
"nextLink":"(//a[contains(concat(\" \",@class,\" \"),\" next_page \")])[last()]"
},
{
"pageElement":"//div[@class=\"mains\"]/div[contains(concat(\" \", @class, \" \"),\" rpas \")]",
"url":"^http://www\\.kumby\\.com/",
"nextLink":"//div[@class=\"navigation\"]//a[contains(text(),\"Older\")]"
},
{
"pageElement":"id(\"photos\")/ul",
"url":"^http://idoltube\\.in/i/.",
"nextLink":"id(\"photos\")/div[contains(concat(\" \",@class,\" \"),\" nextpage \")]/a"
},
{
"pageElement":"id(\"Main\")/div[contains(@class, \"Review01\")]",
"url":"^http://crossreview\\.jp/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"contents\")//div[contains(@class, \"article-body\")]",
"url":"^http://kankyomedia\\.jp/",
"nextLink":"id(\"contents\")//img[contains(@title, \"\u6b21\u306e\u30da\u30fc\u30b8\")]/parent::a"
},
{
"pageElement":"//div[@id=\"content\"]/ul",
"url":"^http://dailybooth\\.com/",
"nextLink":"//div[@id=\"pagination\"]/p[@class=\"right\"]/a"
},
{
"pageElement":"//div[@class=\"text\"]",
"url":"^http://www\\.more\\.com/",
"nextLink":"//a[contains(text(), \"NEXT\")]"
},
{
"pageElement":"//div[@id=\"content\" and @class=\"narrowcolumn\"]/div[contains(@class, \"post\")]",
"url":"^http://mozillazine\\.jp/",
"nextLink":"//div[@class=\"alignleft\"]/a[last()]"
},
{
"pageElement":"id(\"main\")/div[contains(@class, \"section\")]",
"url":"^http://barca\\.daa\\.jp/",
"nextLink":"//p[@class=\"archives\"]/a"
},
{
"pageElement":"id(\"results_list\")",
"url":"^http://www\\.hulu\\.com/",
"nextLink":"//a[img[starts-with(@id,\"pagination-arrow-next.gif\")]]"
},
{
"pageElement":"id(\"content_inner\")/ul",
"url":"^http://identi\\.ca/group",
"nextLink":"//li[@class=\"nav_next\"]/a"
},
{
"pageElement":"id('cnbc_textbody')",
"url":"^http://www\\.cnbc\\.com/",
"nextLink":"//a[text()=\"Next >\"]"
},
{
"insertBefore":"(//a[text()=\"Next page\"]/ancestor::table)[last()]",
"pageElement":"id(\"ctl00_ContentPlaceHolder1_dlImages\")",
"url":"^http://supermodels\\.nl/",
"nextLink":"//a[text()=\"Next page\"]"
},
{
"pageElement":"id(\"rowsTbl\")//tr",
"url":"^http://gigapedia\\.info/",
"nextLink":"//a[@class=\"paginateLink\"][starts-with(text(), \"next\")]"
},
{
"pageElement":"id(\"content\")/div[@*=\"blog\"]/*|(//h2[@class=\"date\"]|//div[starts-with(@class,\"cont_body\")])[../div/@class=\"blogbody\"]|//div[@class=\"blogbody\"][../h2/@class=\"date\"]",
"url":"^http://pub\\.ne\\.jp/\\w",
"nextLink":"id(\"menu page\")/a[contains(.,\"\u6b21\u306e\") or contains(.,\"\u00bb\") and not(contains(.,\"\u524d\u306e\"))]"
},
{
"pageElement":"//div[contains(concat(\" \",@class,\" \"), \" image_thread \")] | //div[contains(concat(\" \",@class,\" \"), \" thumbview \")] | id(\"tag_list\")",
"url":"^http://e-shuushuu\\.net/",
"nextLink":"/descendant::li[contains(concat(\" \",@class,\" \"), \" active \")]/following-sibling::*[1][self::li]/a"
},
{
"pageElement":"//div[@class=\"contents entry_list\"]",
"url":"^http://mashupaward\\.jp/",
"nextLink":"//div[@class=\"pager\"]/ul/li[last()]/a"
},
{
"insertBefore":"id(\"content\")/div[last()]",
"pageElement":"id(\"content\")/div[@class=\"blog\"]rn",
"url":"^http://nekoyanagi\\.net/",
"nextLink":"id(\"content\")/div[@class=\"navi\"]/a[contains(text(), \">>\")]"
},
{
"pageElement":"id(\"AutoNumber300\")/ancestor::tr[1]/following-sibling::tr",
"url":"^http://www\\.eyje\\.com/",
"nextLink":"//div[contains(concat(\" \", @class, \" \"), \" pagination \")]/a[starts-with(text(), \"next\")]"
},
{
"insertBefore":"//div[@class='partner']",
"pageElement":"//div[@class='segment']",
"url":"^http://tech\\.msn\\.com/",
"nextLink":"//a[contains(text(), 'Next >')]"
},
{
"pageElement":"id(\"body\")/div[@class=\"wrap\"]",
"url":"^http://ejohn\\.org/blog/",
"nextLink":"id(\"body\")/div[@class=\"wrap\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"artTxt\"]",
"url":"^http://www\\.time\\.com/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"//ul[@class=\"appdetails\"]",
"url":"^http://appshopper\\.com/",
"nextLink":"//div[@class=\"pages\"]/a[contains(text(), \"Next\")]"
},
{
"pageElement":"id(\"content\")/div[@class=\"post\"]",
"url":"^http://infoisland\\.org/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]/div[@class=\"alignleft\"]/a"
},
{
"pageElement":"id(\"businessresults\")/div[@class=\"businessresult clearfix\"]",
"url":"^http://www\\.yelp\\.com/",
"nextLink":"id(\"pager_page_next\")"
},
{
"pageElement":"id(\"content\")/div[@class=\"navigation\"]/preceding-sibling::*",
"url":"^http://lifehacking\\.jp/",
"nextLink":"id(\"content\")/div[@class=\"navigation\"]/div[@class=\"previous\"]/a"
},
{
"pageElement":"//div[@class=\"artikeltext\"]",
"url":"^http://www\\.golem\\.de/",
"nextLink":"//div[@class=\"artikeltext\"]/a[text()=\"weiter...\"]"
},
{
"pageElement":"id(\"bottom-paginator\")/preceding-sibling::ol",
"url":"^http://technorati\\.com/",
"nextLink":"id(\"bottom-paginator\")/strong/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"content_pane\"]//dl",
"url":"^http://find\\.2ch\\.net/",
"nextLink":"//a[text()=\"\u6b21\u3078\"] "
},
{
"pageElement":"id(\"searchResultsDisplay\")",
"url":"^http://www\\.bebe\\.com/",
"nextLink":"//span[@class=\"nextPage\"]/a"
},
{
"pageElement":"id(\"posts\")/div[contains(concat(\" \",@class,\" \"),\" list \")]/ul/li",
"url":"^http://github\\.com/blog",
"nextLink":"//div[contains(concat(\" \",@class,\" \"),\" pagination \")]/a[contains(text(),\"Next\")]"
},
{
"insertBefore":"//div[@class=\"referrerArea\"]",
"pageElement":"//ul[@class=\"memo\"]",
"url":"^http://1470\\.net/user/",
"nextLink":"//div[@class=\"pageNavigationArea\"][2]/a[1]"
},
{
"pageElement":"//div[@class=\"gems border\"]",
"url":"^http://gemcutter\\.org/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":".//div[@class=\"entry\"]",
"url":"^http://allulook4\\.com/",
"nextLink":"id(\"wp_page_numbers\")/ul/li[@class=\"active_page\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"KIZI\")",
"url":"^http://furosiki\\.net/_",
"nextLink":"id(\"KIZI\")//a[starts-with(text(),\"NEXT\")]"
},
{
"pageElement":"id(\"maininfo\")/div/div",
"url":"^http://kakaku\\.com/tv/",
"nextLink":"//a[@class=\"next\" and text()=\"\u6b21\u3078\"]"
},
{
"pageElement":"id(\"content\")/div[@class=\"content_c\"]",
"url":"^http://iralog\\.net/b/.",
"nextLink":"id(\"content\")/div/div[@class=\"head_pager\"]/a[contains(text(), \"\u6b21\")]"
},
{
"insertBefore":"//div[@class=\"NAV\"]",
"pageElement":"//div[@class=\"SC\"]",
"url":"^http://northisup\\.com/",
"nextLink":"//a[text()=\"\u00bb\"][1]"
},
{
"pageElement":"id(\"content\") ",
"url":"^http://fbrushes\\.com/ ",
"nextLink":"//div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::node() "
},
{
"pageElement":"id(\"content\")",
"url":"^http://nicometer\\.net/",
"nextLink":"//a[contains(@id, \"pager\")][@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"STR_StripFrame\"]",
"url":"^http://comics\\.com/\\w",
"nextLink":"//a[contains(@class,\"PAG_Next\")]"
},
{
"pageElement":"id(\"myTable\")/tbody/tr",
"url":"^http://loda\\.jp/[^/]+/",
"nextLink":"//span[@class=\"pages\"]/strong/following-sibling::*[1][self::a[not(self::a[contains(text(),\"ALL\")])]]"
},
{
"pageElement":"id('entry_block')/a/img | id('entry_block')/img",
"url":"^http://newsmanga\\.com/",
"nextLink":"//ul/li[@class=\"next_button\"]/a"
},
{
"pageElement":"id(\"pagination_area\")/preceding-sibling::div[@class=\"entry\" or @class=\"clear\"]",
"url":"^http://weheartit\\.com/",
"nextLink":"id(\"pagination\")/div[@class=\"older\"]/a"
},
{
"insertBefore":"id(\"pagination_container\")",
"pageElement":"id(\"main_content\")//ul[@class=\"photo_list_centering\"]",
"url":"^http://photohito\\.com/",
"nextLink":"id(\"pagination\")//a[contains(concat(\" \", normalize-space(@rel), \" \"), \" next \")]"
},
{
"insertBefore":"id(\"rcol\")/*[last() + 1]",
"pageElement":"id(\"rcontent\")",
"url":"^http://lart\\.no/lpaste",
"nextLink":"//link[@rel=\"next\"]"
},
{
"pageElement":"//div[contains(concat(\" \",normalize-space(@class),\" \"), \" container \")]",
"url":"^http://loda\\.jp/[^/]+/",
"nextLink":"//span[@class=\"desc_pager_inline\"]/a[last()]"
},
{
"pageElement":"//div[@class=\"entry\"]",
"url":"^http://eniyilogo\\.com/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/a[last()]"
},
{
"pageElement":"id(\"PageContainer\")//table[@class=\"minidetail\"][following-sibling::br]/ancestor::tr[1]",
"url":"^http://www\\.ozon\\.ru/",
"nextLink":"id(\"PageContainer\")//td[1][@class=\"nowrap\"][normalize-space()=\"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430:\"]/following-sibling::td[child::b][1]/following-sibling::td[1]/a"
},
{
"pageElement":"id(\"content\")//div[@class=\"post\"]",
"url":"^http://ikubon\\.com/wp/",
"nextLink":".//div[@class=\"navigation\"]//a[contains(text(),\"Older\")]"
},
{
"pageElement":"//div[@class=\"dot\"]/table[contains(@class,\"zalk_table\")]",
"url":"^http://memori\\.ru/\\w+",
"nextLink":"//div[@class=\"dot_new\"]//b/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")//ul[contains(concat(\" \", @class, \" \"), \" bookmarks \") and not(@id=\"bookmarklist_your\")]//li[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://delicious\\.com/",
"nextLink":"id(\"pagination\")/a[contains(@class, \"next\")]"
},
{
"pageElement":"//div[@class=\"mod projects\"]/div[@class=\"bd\"]",
"url":"^http://repopular\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"main\")/div[contains(concat(\" \", @class, \" \"), \" section \")]",
"url":"^http://sasapanda\\.net/",
"nextLink":"id(\"flip2\")/li[@class=\"older\"]/a"
},
{
"pageElement":"//div[@class=\"shop\"]",
"url":"^http://tabetime\\.com/.",
"nextLink":"//p[@class=\"nextback\"]/a[text()=\"\u6b21\u3092\u8868\u793a\"]"
},
{
"pageElement":"//div[@id='main_nobg']/div[@id='thumbs']",
"url":"^http://www\\.sxc\\.hu/",
"nextLink":"//form[@id='nav_form_2']/div/table/tbody/tr/td/a[contains(text(),'Next')]"
},
{
"pageElement":"id(\"webr\")",
"url":"^http://jp\\.ask\\.com/",
"nextLink":"id(\"paging\")//a[contains(text(),\"\u6b21\u3078\")]"
},
{
"insertBefore":"//p[a[starts-with(text(), \"Next\")]]",
"pageElement":"//div[@class=\"fstory\"]/p",
"url":"^http://www\\.nj\\.com/",
"nextLink":"//a[starts-with(text(), \"Next\")]"
},
{
"insertBefore":"id(\"content\")//div[@class=\"pagination\"]",
"pageElement":"id(\"content\")",
"url":"^http://logopond\\.com/",
"nextLink":"id(\"content\")//div[@class=\"pagination\"]/a[contains(text(), \"\u00bb\")]"
},
{
"pageElement":"id(\"main\")/div[@class=\"content\"]/div[@class=\"entrys\"]",
"url":"^http://dezignus\\.com/",
"nextLink":"id(\"bg\")/div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"content\")/div[@class=\"pagination\"]",
"pageElement":"id(\"content\")/ul[@class=\"gallery\"]",
"url":"^http://welovewp\\.com/",
"nextLink":"id(\"content\")/div[@class=\"pagination\"]/a[contains(text(), \"\u00bb\")]"
},
{
"pageElement":"id(\"main_wrapper\")//div[contains(@class,\"articleBody\")]",
"url":"^http://www\\.rr\\.com/",
"nextLink":"id(\"main_wrapper\")//p[@class=\"articlePagination\"]/span[last()]/a"
},
{
"insertBefore":"id(\"content\")/div[@class=\"entry_area\"]/following-sibling::node()",
"pageElement":"//div[@class=\"entry_area\"]",
"url":"^http://jigokuno\\.com/",
"nextLink":"id(\"page_area\")/div[@class=\"page_navi\"]/a[text()=\">>\"]"
},
{
"pageElement":"//table[@cellspacing=\"4\"]",
"url":"^http://say-move\\.org/",
"nextLink":"//div[@class=\"page\"]/a[contains(text(),\"\u9032\u3080\")]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://oneclip\\.jp/my",
"nextLink":"id(\"users_view\")/div[2]/a[contains(text(),\"\u524d\u306e\")]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" post \")]",
"url":"^http://faildogs\\.com/",
"nextLink":"id(\"footer\")/a[last()]"
},
{
"pageElement":"id(\"lvl-3\")/div[contains(concat(\" \", @class, \" \"), \" pagination \")]/preceding-sibling::*",
"url":"^http://cssremix\\.com/",
"nextLink":"id(\"lvl-3\")//div[@class=\"bar-next\"]/a"
},
{
"pageElement":"id(\"primary\")/div[@class=\"post-list\"]/div",
"url":"^http://mashable\\.com/",
"nextLink":"id(\"primary\")/div[@class=\"post-list\"]/ul/li[@class=\"current\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id('content')",
"url":"^http://fleshbot\\.com/",
"nextLink":"id('searchpager')/li[child::span[@class='currentPage']]/following-sibling::li[1]/a[1]"
},
{
"pageElement":"//div[contains(@class, \"hentry\")]",
"url":"^http://habrahabr\\.ru/",
"nextLink":"//a[@class=\"next\"]"
},
{
"pageElement":"id(\"contents_date\")/following-sibling::*[following-sibling::p[@id=\"page_index\"]]",
"url":"^http://manganavi\\.jp/",
"nextLink":"id(\"page_navigation\")/a[text()=\"\u6b21\u306e\u30da\u30fc\u30b8\u3078\"]"
},
{
"pageElement":"//td[@class=\"content\"]/table/tbody/tr/td/table[not(contains(.,\"Preis:\") and contains(.,\"aufsteigend\") and contains(.,\"absteigend\"))]/tbody/tr",
"url":"^http://www\\.elv\\.de/",
"nextLink":"//td[@class=\"content\"]/table/tbody/tr/td/table[contains(.,\"Preis:\") and contains(.,\"aufsteigend\") and contains(.,\"absteigend\")]//a[contains(./b,\"\u00bb\")]"
},
{
"pageElement":"id(\"content\")/div[@class=\"entry\"]",
"url":"^http://digimaga\\.net/",
"nextLink":"//div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"insertBefore":"id(\"assets\")/div[last()]",
"pageElement":"//blockquote",
"url":"^http://ffffound\\.com/",
"nextLink":"id(\"paging-next\")"
},
{
"pageElement":"//table[@width=\"100%\" and @cellspacing=\"0\" and @cellpadding=\"0\" and @border=\"0\" and @bgcolor=\"white\"]",
"url":"^http://joshinweb\\.jp/",
"nextLink":"//td[@class=\"fsM\" and @valign=\"bottom\" and @align=\"right\"]/a[font[@color=\"blue\" and @style=\"font-weight: bold;\"]]/following-sibling::a[1]"
},
{
"pageElement":"//div[@class=\"unit\"]",
"url":"^http://authority\\.jp/",
"nextLink":"//div[@class=\"pagination\"][2]//a[@class=\"prevnext\"]"
},
{
"pageElement":"id(\"contents\")/div[@class=\"entry\"]",
"url":"^http://lab\\.3fl\\.jp/",
"nextLink":"id(\"contents\")/p[@class=\"pnnavi\"]/span[@class=\"next\"]/a"
},
{
"pageElement":".//div[@class=\"postbox\"]",
"url":"^http://thechive\\.com/",
"nextLink":"id(\"wp_page_numbers\")/ul/li[@class=\"active_page\"]/following-sibling::li[1]/a"
},
{
"pageElement":".//div[@class=\"post\"]",
"url":"^http://failblog\\.org/",
"nextLink":".//div[@class=\"navigation\"]//a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"content\")/table",
"url":"^http://sadsteve\\.com/",
"nextLink":".//td[@class=\"right\"]/a[contains(text(),\"Next\")]"
},
{
"pageElement":"id(\"content\")/div[@class=\"item\"]",
"url":"^http://cssmania\\.com/",
"nextLink":"id(\"paging\")/a[@class=\"next\"] | id(\"content\")/div[@class=\"mtpag\"]/strong[last()]/a | id(\"content\")/div[@class=\"mtpag\"]/p/strong[last()]/following-sibling::*[1][self::a]"
},
{
"pageElement":"//div[contains(concat(\" \",normalize-space(@class),\" \"),\" content \")]/div[contains(concat(\" \",normalize-space(@class),\" \"),\" aa-wrapper \")]",
"url":"^http://aahosyu\\.com/",
"nextLink":"//ul[contains(concat(\" \",normalize-space(@class),\" \"),\" pager \")]/li[contains(concat(\" \",normalize-space(@class),\" \"),\" next \")]/a"
},
{
"pageElement":"id(\"Image ctl00_BodyPlaceHolder_ProductListProductListing1_GridDataListPanel\")",
"url":"^http://myprops\\.org/",
"nextLink":"id(\"NextImageHyperLink ctl00_BodyPlaceHolder_ProductListProductListing1_ProductPager_HyperLinkNext\")"
},
{
"pageElement":"id(\"bookmarks\")",
"url":"^http://pinboard\\.in/",
"nextLink":"//a[contains(text(), \"earlier\")]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://tabetie\\.com/",
"nextLink":"//a[text()=\"next \u00bb\"]"
},
{
"pageElement":"id(\"notices_primary\")//ol[contains(@class, \"notices\")]",
"url":"^http://chuitter\\.jp/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"insertBefore":"//div[contains(@id, \"footer_ad\")]",
"pageElement":"id(\"sub_main\")/div[contains(@class, \"entry\") or @id=\"comment_module\"]",
"url":"^http://ameblo\\.jp/.+",
"nextLink":"id(\"sub_main\")/div[contains(@class, \"page\")]/a[@class=\"nextPage\"]"
},
{
"pageElement":"id(\"one-col\")//div[@class=\"recipe-preview\"]|id(\"tsukurepo-list\")/div[not(contains(@class, \"paginate\"))]",
"url":"^http://cookpad\\.com/",
"nextLink":"id(\"one-col\")//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"search_results\")|//table[@class=\"tabular_data\"]",
"url":"^http://pledgie\\.com/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"main\")/*",
"url":"^http://greenpig\\.ru/",
"nextLink":"//a[text()=\"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u00bb\"]"
},
{
"pageElement":"id(\"content\")//div[contains(@class,\"hentry post\")]",
"url":"^http://hotjav\\.asia/",
"nextLink":".//div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::a[1]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://tv-dome\\.net/",
"nextLink":".//a[child::span[@class=\"navforward\"]]"
},
{
"insertBefore":"id(\"paging\")",
"pageElement":"id(\"content\")/div[@class=\"section day\"]",
"url":"^http://lowreal\\.net/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"contents\")/div[contains(concat(\" \",@class,\" \"),\" list \")]",
"url":"^http://quetter\\.com/",
"nextLink":"id(\"contents\")/div[contains(concat(\" \",@class,\" \"),\" pagination \")]/span/a[contains(text(),\">\")]"
},
{
"insertBefore":"//div[@class=\"paging marg\"][2]",
"pageElement":"//ol[@class=\"snippets marg\"]",
"url":"^http://snipplr\\.com/",
"nextLink":"//div[@class=\"paging marg\"]/a[contains(text(), \"Next\")]"
},
{
"pageElement":"//article[@class=\"entry\"]",
"url":"^http://rewish\\.org/",
"nextLink":"//div[@class=\"next\"]/a"
},
{
"pageElement":"//table[@class=\"app_list\"]/tbody/tr",
"url":"^http://buzzapp\\.jp/",
"nextLink":"//span[last()]/a"
},
{
"pageElement":"id(\"BlogContents\")/div",
"url":"^http://fidgit\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"contentarea\")/div[@class=\"post\"]",
"url":"^http://usakura\\.jp/",
"nextLink":"id(\"contentarea\")/p/a[text()=\"Next \u00bb\"]"
},
{
"pageElement":"id(\"content\")/div[@class=\"page_full\"]/*[(self::a and @name) or (self::div and @id)]",
"url":"^http://faveup\\.com/",
"nextLink":"id(\"content\")//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"pankuzu\")/following-sibling::*",
"url":"^http://twilog\\.org/",
"nextLink":"//a[contains(text(),\"\u6b21\u306e\u30da\u30fc\u30b8 \u00bb\")]"
},
{
"pageElement":"id(\"divTipBody\")",
"url":"^http://twitxr\\.com/",
"nextLink":"id(\"divTipBody\")/div/p/a[last()]"
},
{
"pageElement":"id(\"content\")/div[@class=\"article_preview\"]",
"url":"^http://pshero\\.com/",
"nextLink":"id(\"nav_below\")/div[@class=\"wp-pagenavi\"]/span[@class=\"current\"]/following-sibling::*[1][self::a]"
},
{
"pageElement":"id(\"list_item\")/table[@class=\"list_itembox\"]",
"url":"^http://calamel\\.jp/",
"nextLink":"id(\"pagenate_bottom\")/p[@class=\"number\"]/*[last()][self::a]"
},
{
"pageElement":"//td[@class=\"td_w532\"]/node()[@class=\"topics-news\" or @class=\"table_w532\" or contains(@id,\"entry-\") or @width=\"528\"]",
"url":"^http://newsing\\.jp/",
"nextLink":"//a[child::img[@id=\"pager_next\"] or child::img[@id=\"pager-next-bottom\"]]"
},
{
"pageElement":"//div[contains(concat(\" \", @class, \" \"), \" article \")]",
"url":"^http://breakr\\.net/",
"nextLink":"//a[contains(concat(\" \", @class, \" \"), \" next_page \")]"
},
{
"pageElement":"id(\"container\")",
"url":"^http://kidol\\.jp/i/",
"nextLink":"//a[contains(text(),\"\u2192\")]"
},
{
"pageElement":"//form[@name=\"FrmPrdCompare\"]/table",
"url":"^http://kakaku\\.com/",
"nextLink":"//span[@class=\"next\"]/a"
},
{
"pageElement":"id(\"content\")",
"url":"^http://cyblog\\.jp/",
"nextLink":"id(\"content\")//a[child::u[contains(text(), \"\u00bb\")] or contains(text(), \"\u524d\u306e\u30a8\u30f3\u30c8\u30ea\")]"
},
{
"pageElement":"id(\"recently-posted\")",
"url":"^http://hypem\\.com/",
"nextLink":"//span[@class=\"this-page\"]/following-sibling::a"
},
{
"insertBefore":"//div[@class=\"ft\"]",
"pageElement":"//div[@class=\"mtb\"]",
"url":"^http://oekyo\\.org/",
"nextLink":"//li[last()]/a"
},
{
"pageElement":"id(\"content\")/node()[self::div[contains(concat(\" \",@class,\" \"),\" post \") or contains(concat(\" \",@class,\" \"),\" navigation \")] or self::h2]",
"url":"^http://s-tomo\\.jp/",
"nextLink":"id(\"content\")/div[last()]/a[contains(text(),\"\u00bb\")]"
},
{
"pageElement":"id(\"content Content mainContent\")/node()[following::*[@class=\"pager\"]]",
"url":"^http://okyuu\\.com/",
"nextLink":"id(\"content Content mainContent\")//div[@class=\"pager\"]//a[@rel=\"next\"]"
},
{
"pageElement":"//a[text()=\"<<\u524d\u3078\" or text()=\"\u6b21\u3078>>\"][1]/following-sibling::table[1]",
"url":"^http://hissi\\.org/",
"nextLink":"//a[text()=\"\u6b21\u3078>>\"][1]"
},
{
"pageElement":"id(\"search_result\")",
"url":"^http://zigsow\\.jp/",
"nextLink":"//span[@class=\"next\"][last()]/a"
},
{
"pageElement":"id(\"story\")",
"url":"^http://nymag\\.com/",
"nextLink":"//li[@class=\"next\"]/a"
},
{
"pageElement":"id(\"first-time\")/div",
"url":"^http://sinri\\.net/",
"nextLink":"id(\"first-time\")/p/a"
},
{
"pageElement":"id(\"zigsow-item-list\")",
"url":"^http://zigsow\\.jp/",
"nextLink":"//li[@class=\"selected-page\"]/following-sibling::li[1]/a"
},
{
"pageElement":"id(\"bodyArea\")//div[contains(concat(\" \", @class, \" \"), \" pageNavigation01 \")]/following-sibling::*[not(contains(translate(@class, \"NOPRS\", \"noprs\"), \"sponsor\")) and ./following-sibling::div[contains(concat(\" \", @class, \" \"), \" pageNavigation01 \")]]",
"url":"^https?://mixi\\.jp/",
"nextLink":"id(\"bodyArea\")//div[@class=\"pageList01\"]//li[@class=\"on\"]/following-sibling::li[1]/a|id(\"bodyArea\")//div[@class=\"pageList02\"]//a[starts-with(text(),\"\u6b21\")]"
},
{
"insertBefore":"//div[@class=\"pagination\"]",
"pageElement":"id(\"note_list\")",
"url":"^http://jisko\\.net/",
"nextLink":"//div[@class=\"pagination\"]/*[position() = last() and local-name() = \"A\"]"
},
{
"pageElement":"//div[contains(concat(\" \", normalize-space(@class), \" \"), \" ui-widget \")][not(contains(concat(\" \", normalize-space(@class), \" \"), \" pagemove \") or contains(concat(\" \", normalize-space(@class), \" \"), \" news-area-content \"))]",
"url":"^http://bokete\\.jp/",
"nextLink":"//a[contains(concat(\" \", normalize-space(@class), \" \"), \" next-link \")]"
},
{
"insertBefore":"rn",
"pageElement":"id(\"main\")//ul[@class]|id(\"main\")/div[@class=\"grid\"]/*|id(\"wrapper\")/div[@class=\"pagination\"]/preceding-sibling::*",
"url":"^http://mitter\\.jp/",
"nextLink":"id(\"main\")//div[@class=\"pagination\"]/a[@rel=\"next\"]"
},
{
"pageElement":"id(\"txtlist\")/div[contains(concat(\" \",normalize-space(@class),\" \"), \" txt \")]",
"url":"^http://txt\\.io/\\w",
"nextLink":"id('content')//div[@class='pagination']/text()[contains(translate(.,'0123456789','**********'),'*')]/following-sibling::a[1]"
},
{
"pageElement":"//ol[@id=\"conversations-shouts\" or parent::div/@id=\"shouts\" or parent::div/@class=\"results\"]",
"url":"^http://rejaw\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"id(\"content\")",
"url":"^http://drawr\\.net/",
"nextLink":"(//li[@class=\"left-food-link\"])[last()]/a"
},
{
"pageElement":"//ol[contains(concat(\" \", @class, \" \"), \" item-list \")]/li",
"url":"^http://cotoe\\.net/",
"nextLink":"//ul[contains(concat(\" \", @class, \" \"), \" pager \")]/li[last()]/a"
},
{
"pageElement":"id(\"notices\")",
"url":"^http://identi\\.ca/",
"nextLink":"id(\"nav_pagination\")/li[@class=\"after\"]/a[1]"
},
{
"pageElement":"id(\"honbun wpMainContent\")",
"url":"^http://kudok\\.com/",
"nextLink":"//a[@rel=\"next\"]"
},
{
"pageElement":"//ul[@class=\"mw-search-results\"]",
"url":".\\?(?:.+&)?search=",
"nextLink":"//a[@class=\"mw-nextlink\"]"
},
{
"pageElement":"//p[contains(@class, \"c\")]",
"url":"^http://eiga\\.com/",
"nextLink":"//a[@title=\"Next\"]"
},
{
"pageElement":"//ul[@class=\"salelist_money\"]",
"url":"^http://duga\\.jp/.",
"nextLink":"//a[contains(text(),\"\u6b21\u306e10\u4ef6\")]"
},
{
"pageElement":"id(\"wrapper\")/div/div[contains(@class, \"news-summary\")]",
"url":"^http://digg\\.com/",
"nextLink":"id(\"wrapper\")/div/div[@class=\"pages\"]/a[last()][@class=\"nextprev\"]"
},
{
"pageElement":"//div[@class=\"section\"]/div[@class=\"box\" and position()=3]",
"url":"^http://mf247\\.jp/",
"nextLink":"//a[@class=\"next\" or child::img[@class=\"next\"]]"
},
{
"pageElement":"//div",
"url":"^http://rara\\.jp/",
"nextLink":"//div/p/table/tbody/tr/td/b[1]/following-sibling::a[1]"
},
{
"pageElement":"id(\"main\")",
"url":"^http://pettan.jp/",
"nextLink":"//a[contains(@title,\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"blog\")/div[@class=\"boxs\"]",
"url":"^http://cyta\\.jp/",
"nextLink":"//link[@rel=\"prev\"]"
},
{
"pageElement":"//div[contains(@class, \"mainmaru\")]",
"url":"^http://10e\\.org/",
"nextLink":"//div[contains(@class, \"page\")]/a[text()=\"Next\"]"
},
{
"pageElement":"id(\"mini\")//h2[./*]/following-sibling::node()[./following-sibling::hr[./following-sibling::div/a[contains(.,\"\u6b21\u306e\u30da\u30fc\u30b8\")]]]",
"url":"^http://gazo\\.in/",
"nextLink":"id(\"mini\")/form/div/a[contains(.,\"\u6b21\u306e\u30da\u30fc\u30b8\")] | id(\"mini\")/div/a[contains(.,\"\u6b21\u306e\u30da\u30fc\u30b8\")]"
},
{
"pageElement":"id(\"main\")/*",
"url":"^http://miau\\.jp/",
"nextLink":"//a[@accesskey=\"n\"]"
},
{
"pageElement":"id(\"entry-list-target\")/div[contains(concat(\" \",normalize-space(@class),\" \"),\" page-title \") or contains(concat(\" \",normalize-space(@class),\" \"),\" entry \")]",
"url":"^http://femo\\.jp/",
"nextLink":"//p[contains(concat(\" \",normalize-space(@class),\" \"),\" pagenate \")]/a[contains(text(),\">\")]"
},
{
"pageElement":"id(\"header_holder\")/table[7]",
"url":"^http://eztv\\.it/",
"nextLink":"//a[contains(text(),\"next page\")]"
},
{
"pageElement":"id(\"blips userFavorites\")",
"url":"^http://blip\\.fm/",
"nextLink":"//div[@class=\"next\"]/a"
},
{
"pageElement":"id(\"box_list\")",
"url":"^http://omyc\\.jp/",
"nextLink":"//a[@class=\"next_page\"]"
},
{
"pageElement":"id(\"quotes\")/div[contains(@class,\"quote\") and not(.//*[@class=\"paging-big\"])]",
"url":"^http://inyo\\.jp/",
"nextLink":"id(\"paging-next\")"
},
{
"pageElement":"//*[contains(concat(\" \", @class, \" \"), \" hentry \")]",
"url":"^https?://.",
"nextLink":"//link[contains(concat(\" \", translate(normalize-space(@rel),\"NEXT\",\"next\"), \" \"), \" next \")] | //a[contains(concat(\" \", translate(normalize-space(@rel),\"NEXT\",\"next\"), \" \"), \" next \")]"
},
{
"pageElement":"//div[@class=\"pico_container\"]",
"url":"^https?:",
"nextLink":"//td[@align=\"right\"]/a[@accesskey=\"F\"]"
},
{
"pageElement":"id(\"xigg-main-shownodes\")",
"url":"^https?:",
"nextLink":"//li[@class=\"pagesNext\"]/a"
},
{
"insertBefore":"//div[@class=\"d3f_iconexps\"]",
"pageElement":"//table[@class=\"outer d3f_table\"]",
"url":"^https?:",
"nextLink":"//div[@class=\"d3f_pagenav\"]/b/following-sibling::a"
},
{
"pageElement":"//div[@class=\"d3blogEntry clearFix\"]",
"url":"^https?:",
"nextLink":"//li[@class=\"pageNext\"]/a"
}
];

})();
