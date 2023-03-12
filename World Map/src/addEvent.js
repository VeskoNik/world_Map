let allAreas = Array.from(document.querySelectorAll('area'));
allAreas.forEach(area => {
    area.addEventListener('mouseover', onHover)
    area.addEventListener('mouseout', outHover)
});
document.getElementById('child').addEventListener('click', onClick)
const coords = {
    "amazon": "453,362,441,370,435,375,425,377,416,378,411,374,405,374,399,372,392,375,385,372,376,371,369,372,362,376,360,383,362,390,366,395,371,400,377,406,384,408,392,412,396,417,401,422,406,424,413,421,422,418,415,409,411,404,421,403,426,413,436,407,447,398,455,389,459,384,463,378,468,374,462,367",
    "arctic": "231,81,243,90,266,94,280,98,296,100,322,103,355,103,365,89,377,79,392,73,403,71,420,61,436,54,450,47,461,30,479,26,479,13,480,0,457,0,439,0,416,0,238,2,231,25,227,31,222,39,221,48,219,58,220,68",
    "greenland": "475,177,461,168,451,155,447,148,444,141,439,132,436,122,431,114,426,107,417,99,407,97,396,95,385,89,377,81,389,75,393,69,401,62,415,58,424,51,436,45,449,49,457,47,471,47,482,44,503,41,517,41,532,41,546,44,553,49,565,52,585,54,590,60,576,68,570,73,570,80,572,89,574,98,574,105,567,115,561,125,555,133,532,137,524,143,512,151,503,162,490,169,484,178,475,177,480,158,491,148,510,139,525,127,534,116,544,106,554,93,559,77,556,65,535,56,521,58,506,54,497,56,481,59,463,60,448,61,432,60,418,68,412,77,407,84,425,84,433,94,444,99,453,113,459,124,463,135,468,146,477,163",
    "permafrost1": "675,143,692,144,718,143,745,143,764,142,774,143,792,145,809,145,826,144,844,145,869,148,893,146,924,152,957,151,983,149,1005,149,1032,146,1061,150,1084,152,1110,149,1126,155,1141,154,1159,155,1170,151,1186,146,1196,145,1206,145,1216,142,1232,143,1252,140,1269,134,1262,128,1237,127,1225,128,1212,128,1198,127,1188,119,1175,122,1167,118,1157,115,1142,112,1136,105,1131,100,1140,98,1144,100,1150,99,1158,102,1167,100,1160,95,1145,93,1133,91,1119,93,1119,99,1124,103,1130,108,1133,114,1124,119,1114,115,1102,118,1098,124,1090,116,1090,107,1082,107,1067,107,1059,110,1051,107,1037,106,1036,98,1034,89,1015,87,1009,86,1004,77,992,71,978,65,970,60,960,66,960,72,967,76,985,78,991,80,994,85,990,89,978,95,966,93,959,96,949,96,939,102,930,107,917,107,907,110,894,109,885,105,877,110,874,118,869,124,878,135,869,133,861,130,850,126,841,125,834,121,832,114,835,108,841,104,850,98,861,96,877,93,882,86,873,86,856,89,839,95,831,100,822,109,817,118,823,123,831,127,849,132,836,134,825,134,812,136,802,137,794,133,770,134,755,127,739,123,724,121,707,126,687,131",
    "permafrost2": "0,661,6,662,13,662,24,662,31,664,39,664,48,664,56,664,65,660,76,659,84,655,96,652,114,648,130,642,145,641,156,639,166,639,181,634,190,634,197,635,210,634,219,637,236,637,246,638,264,637,268,642,277,640,272,633,275,625,285,624,297,625,303,627,312,628,324,631,335,631,347,632,352,632,361,628,369,628,367,618,381,610,390,604,408,592,418,583,431,575,440,574,453,573,449,581,440,585,426,595,424,609,424,616,421,624,424,631,423,638,420,643,426,646,435,649,445,651,460,655,469,659,477,660,489,659,501,658,513,658,524,653,541,643,555,637,568,632,582,624,591,623,604,620,618,618,629,618,633,610,641,615,648,618,663,618,672,617,682,617,693,615,708,616,723,616,737,613,748,606,753,597,761,607,766,610,775,610,784,607,806,601,823,596,838,596,844,599,859,602,882,606,892,610,899,614,908,611,920,605,922,596,937,601,946,595,954,597,968,597,974,593,981,590,996,591,1005,596,1015,596,1029,596,1046,597,1062,599,1077,595,1090,595,1104,596,1124,597,1139,600,1158,605,1177,611,1198,617,1224,621,1236,626,1244,632,1227,636,1220,644,1212,650,1214,657,1220,662,1232,661,1241,658,1252,660,1261,661,1268,664,1268,699,1,699",
    "permafrost3": "0,152,9,151,16,152,23,154,29,149,36,145,27,140,16,138,9,135,1,132",
    "permafrost4": "66,142,79,142,101,141,129,142,162,143,187,143,228,144,270,144,312,148,332,143,340,144,348,141,347,134,355,128,360,128,367,133,372,139,379,145,392,144,408,144,416,143,404,132,394,124,370,109,355,105,356,94,367,82,381,72,392,66,404,59,413,51,403,47,384,47,358,48,338,53,297,59,296,70,284,67,263,73,264,84,245,76,201,94,209,100,192,105,190,118,200,119,212,118,217,123,220,128,184,125,164,127,142,128,127,126,112,124,102,123,93,122,81,118,68,123,59,128,52,132,46,136,50,141",
    "permafrost5": "469,172,452,159,445,130,439,118,436,109,426,99,420,91,405,93,392,91,380,80,394,71,403,71,402,63,417,59,427,51,439,51,447,54,453,56,459,50,475,50,491,45,515,41,527,45,542,48,558,52,553,62,565,58,576,56,586,57,590,60,569,75,563,84,572,87,572,95,568,104,560,114,556,124,546,131,530,135,521,141,512,152,501,149,495,156,490,167,479,177",
    "permafrost6": "931,259,907,268,914,282,927,285,939,287,945,289,956,289,966,288,974,280,975,273,967,266,956,261,944,259,917,263",
    "taiga1": "88,169,101,165,116,165,139,167,145,169,150,174,159,178,166,184,173,184,181,189,187,196,195,196,204,193,211,187,221,188,231,189,239,191,250,198,260,195,269,196,279,197,279,204,286,209,295,209,301,214,306,224,319,220,329,221,337,226,345,231,352,229,357,232,364,231,370,225,380,220,391,220,400,215,407,213,416,213,424,212,433,210,438,204,433,198,422,193,414,183,405,184,395,183,382,188,366,187,360,194,358,201,358,209,352,212,346,205,343,197,337,193,327,189,319,188,312,185,303,182,301,174,297,166,288,164,279,161,268,158,262,154,250,154,241,147,233,146,225,142,219,138,204,136,195,137,187,138,200,147,192,154,182,148,180,141,165,146,160,151,148,156,141,154,130,147,122,146,116,147,105,144,98,146,92,151,81,156,81,163",
    "taiga2": "657,172,661,178,667,178,675,173,683,174,694,172,699,163,704,159,712,152,723,145,729,152,723,160,716,164,716,172,721,174,729,171,738,170,746,168,753,170,756,177,766,179,774,179,779,180,791,180,796,183,803,183,810,195,815,190,822,187,831,188,837,201,840,212,843,197,849,192,863,186,868,189,876,187,885,187,893,187,904,189,920,191,924,196,932,191,939,189,946,192,943,199,939,206,931,211,937,216,943,219,949,218,953,211,963,207,971,203,977,210,983,214,994,216,1002,211,1006,215,1012,210,1016,215,1021,223,1026,219,1033,216,1039,211,1049,214,1060,218,1075,226,1084,230,1088,238,1089,244,1097,242,1113,236,1118,232,1125,221,1131,215,1132,206,1128,200,1118,200,1112,195,1122,190,1128,184,1136,182,1144,178,1154,178,1163,177,1181,177,1186,170,1188,159,1180,154,1172,149,1164,143,1160,137,1152,129,1138,128,1124,128,1119,135,1113,133,1101,133,1091,132,1085,128,1078,132,1070,127,1053,127,1042,125,1034,128,1028,128,1020,126,1014,131,1003,126,994,128,981,131,965,132,956,132,942,135,933,137,920,142,909,143,902,145,887,146,875,146,863,146,859,153,853,151,837,151,826,151,812,151,804,155,795,154,783,154,771,155,764,156,757,152,751,144,758,142,767,142,775,142,772,134,764,133,754,131,743,131,731,130,723,133,714,136,700,142,690,148,683,149,674,159,668,160,662,165",
    "coral1": "1037,458,1037,451,1037,442,1041,437,1047,434,1052,432,1058,431,1065,426,1070,419,1076,416,1083,413,1089,409,1096,409,1103,408,1110,408,1116,409,1113,415,1118,421,1125,424,1132,422,1134,414,1135,405,1141,410,1142,415,1146,416,1148,422,1152,427,1157,432,1162,436,1168,443,1174,450,1176,458,1173,464,1180,453,1180,445,1175,436,1169,427,1159,415,1147,405,1143,397,1153,403,1160,405,1168,406,1175,406,1161,399,1142,395,1137,400,1130,400,1127,397,1116,387,1110,386,1103,382,1098,377,1093,372,1104,370,1106,377,1121,376,1127,378,1132,379,1138,380,1147,382,1151,388,1157,395,1162,391,1158,383,1147,376,1138,372,1129,364,1119,362,1103,356,1095,356,1088,349,1087,340,1087,332,1069,309,1063,302,1054,301,1046,304,1037,307,1027,309,1017,310,1009,316,1009,322,1015,327,1020,335,1015,343,1008,346,999,343,991,337,985,343,985,348,990,352,996,355,997,357,999,363,1002,372,994,370,990,364,987,357,981,352,977,344,982,337,980,329,974,331,971,339,972,348,975,356,983,359,989,362,995,370,1006,380,1009,387,1017,391,1026,391,1040,395,1037,387,1031,383,1023,377,1019,369,1024,364,1032,362,1039,361,1042,354,1050,351,1057,355,1052,364,1049,373,1043,382,1038,385,1043,391,1046,403,1033,407,1025,418,1025,426,1029,436,1030,444",
    "coral2": "786,335,777,329,771,326,767,318,763,309,756,302,752,290,747,282,755,285,760,290,765,294,769,302,773,308,779,314,784,323,792,333",
    "coral3": "297,298,303,303,308,306,316,303,326,300,332,300,340,299,348,297,363,297,368,301,374,306,380,307,388,309,397,311,411,314,403,318,384,312,373,311,366,321,359,323,356,325,354,334,344,334,323,324,302,317,294,314,290,306,291,299,303,303",
    "coral4": "340,334,342,342,348,347,353,347,365,348,369,341,376,339,384,339,393,338,399,340,407,341,421,343,427,342,431,335,429,328,420,325,423,331,423,339,417,340,407,335,393,333,381,334,369,337,360,343,350,341",
    "coral5": "771,389,775,399,777,406,779,412,776,417,766,425,761,428,757,432,760,440,764,432,771,428,776,425,783,418,784,408,783,399,783,379,774,384,771,389",
    "coral6": "792,446,789,440,792,433,792,426,789,420,802,415,807,406,812,408,812,416,812,422,818,422,822,414,822,406,818,398,810,396,802,397,800,407,793,408,789,414,784,422,783,430,783,440",
    "coral7": "597,354,602,357,614,357,620,357,628,358,635,356,642,354,648,353,654,357,659,361,665,361,669,365,668,375,671,382,669,384,665,377,664,371,660,367,654,364,648,361,645,364,639,365,632,363,626,364,619,366,607,366,596,364,595,357,588,352",
    "coral8": "1170,323,1179,328,1187,336,1190,348,1205,356,1213,347,1221,356,1232,367,1242,366,1250,375,1259,366,1249,357,1234,349,1220,338,1204,339,1195,333,1187,319,1175,318",
    "coral9": "1181,300,1205,303,1215,313,1220,320,1230,325,1237,334,1250,342,1248,350,1232,340,1226,330,1211,319,1202,311,1188,307",
    "mountain1": "903,241,891,251,890,258,892,265,898,267,903,270,910,277,918,283,929,289,940,293,951,293,958,290,967,285,966,276,958,279,948,270,936,266,920,261,911,259,907,251",
    "mountain2": "381,541,393,553,375,544,371,534,371,517,375,503,377,490,379,475,385,472,386,460,392,445,399,445,401,452,396,466,392,475,385,492,383,505,378,521,380,529",
    "mountain3": "710,85,701,90,693,91,684,84,675,77,675,71,682,68,690,68,698,68,706,66,716,66,726,66,730,74,712,75,717,82",
    "mountain4": "838,70,826,70,816,72,802,72,795,62,812,59,826,58,844,58,858,58,868,63,855,67",
    "mountain5": "1001,81,991,82,981,77,969,75,959,72,958,63,966,59,974,59,984,67,991,68,998,70,1010,79",
    "mountain6": "562,157,553,151,555,144,562,146,571,146,580,144,585,147,589,151,582,156,572,159",
    "mountain7": "108,175,119,175,131,174,141,176,149,181,160,193,171,204,180,211,190,210,199,211,193,204,186,195,180,187,173,184,167,178,178,179,187,184,195,188,205,192,215,204,218,211,223,214,230,212,223,201,214,192,203,183,188,177,177,173,157,168,144,168,126,168,117,168",
    "westAntarctica": "0,655,6,658,19,661,27,661,37,661,46,661,56,660,66,658,76,655,86,651,95,649,104,649,121,644,130,638,140,639,146,639,154,638,171,634,194,631,210,631,228,632,239,631,254,631,264,630,272,624,286,624,306,618,315,622,331,627,340,624,356,619,366,610,393,595,407,585,425,577,447,569,453,569,468,573,460,579,454,584,448,590,439,592,433,596,433,606,433,616,430,624,430,634,435,644,448,651,459,652,467,653,479,657,495,657,514,655,512,665,506,671,490,683,482,690,479,698,2,699",
    "wilkes": "994,592,1003,610,1003,619,1002,635,1002,645,1016,652,1018,663,1023,670,1036,674,1053,678,1067,662,1080,665,1087,657,1092,650,1096,643,1102,636,1096,627,1110,617,1107,605,1120,600,1129,595,1114,589,1097,589,1089,595,1078,593,1074,597,1065,593,1047,590,1028,590,1010,589,1000,586,993,586",

}

let amazon = [`   
<video autoplay muted loop id="myVideo">
<source src="./amazon/video.mp4" type="video/mp4">
</video>
<h1 id="area">Амазонска екваториална гора</h1>
<button  id="backBtn" >Назад</button>
<section class="fade">
<img id="infoImg" src="./amazon/amazon.webp" alt="amazon">
<button id="infoBtn" >Научи повече</button>
</section>`, `https://bg.wikipedia.org/wiki/Амазонска_екваториална_гора`,
    `Амазонската екваториална гора или просто Амазония (на испански: Amazonia, на португалски: Amazônia, Floresta Amazônica или Selva Amazônica), често наричана Амазонска джунгла, е огромен горски пояс от екваториални гори, разположен във водосборния басейн на река Амазонка в Южна Америка.

Заема територия от около 5,5 милиона km², което я прави най-обширната екваториална гора на планетата. Обхваща територии от 8 държави – Бразилия, Колумбия, Перу, Венецуела, Еквадор, Боливия, Гвиана и Суринам, както и на Френска Гвиана (със статут на отвъдморски департамент на Република Франция).

Амазонската екваториална гора притежава най-голямото биоразнообразие на планетата. Значителна част от територията и все още е слабо проучена. През Амазония протичат някои от най-дългите и пълноводни реки на Земята, сред които и най-пълноводната – Амазонка, която е дала наименованието на целия регион. Тя е и най-голямата гора в света.`, "./amazon/amazon.webp", 'amazon'];

let permafrost = [`<video autoplay muted loop id="myVideo">
<source src="./permafrost/permafrost.mp4" type="video/mp4">
</video>
<h1 id="area">Пермафрост</h1>
<button  id="backBtn" >Назад</button>
<section class="fade">
<img id="infoImg" src="./permafrost/permafrost.png" alt="perfmafrost">
<button id="infoBtn" >Научи повече</button>`,'https://bg.wikipedia.org/wiki/Вечна_замръзналост',
`Вечна замръзналост (също трайно замръзнала земя) е най-горната част на земната кора на местата, където температура ѝ от минимум 2 години до хилядолетия не надвишава 0 °C.[1] В англоезичната литература понятието се среща като permafrost (срещано и на български като пермафрост), в руската като вечная мерзлота, което е въведено през 1927 г. от съветския изследовател М. И. Сумгин.

        Площта на вечната замръзналост е около 35 милиона km². Разпространена е в северните части на Америка (Аляска, Канада), Европа, Азия, островите в Северния ледовит океан[2]. Вечна замръзналост се среща и под вода, в континенталните шелфове на континентите около Северния ледовит океан, части от които са били суша по време на последния ледников период.[3] Възможно е да се открие вечна замръзналост и в по-малките географски ширини, но на по-висока надморска височина. През 2009 г. в планината Килиманджаро, близо до екватора е открита вечна замръзналост.[4] В зоната на трайно замръзналата земя подземните води са замръзнали, а дълбочината на замръзналата кора понякога е над 1500 m.[1]
        
        Вечната замръзналост заема около 24% от земната суша в северното полукълбо и съдържа 0,022% от общото количество вода. Значителна част от нея е следствие от последния ледников период, като в днешно време бавно се топи.[1] Към 2100 г. ще бъде 4 пъти по-малка на площ от сега.`       
    ,"./permafrost/permafrost.png",'permafrost'];
let arctic = [`
<video autoplay muted loop id="myVideo">
<source src="./arctic/arctic.mp4" type="video/mp4">
</video>
<h1 id="area">Акртика</h1>
<button  id="backBtn" >Назад</button>
<section class="fade">
<img id="infoImg" src="./arctic/arctic.jpg" alt="arctic">
<button id="infoBtn" >Научи повече</button>`, 'https://bg.wikipedia.org/wiki/%D0%90%D1%80%D0%BA%D1%82%D0%B8%D0%BA%D0%B0',
`Арктика (на гръцки: ἄρκτος, мечка) е северната полярна област на Земята, включваща краищата на материците Евразия и Северна Америка, почти целия Северен ледовит океан с островите (освен крайбрежните острови на Норвегия), а така също и прилежащите части на Атлантическия и Тихия океан. Южната граница на Арктика съвпада със северната граница на тундрата.

        Площ около 27 млн. кв. км. Понякога ограничават Арктика от юг със Северния полярен кръг (66° 33′ с. ш.), като в този случай нейната площ е 21 млн. кв. км. Площта на моретата и океаните е 14,8 млн. кв. км, а максималната дълбочина е 5571 м.`,
    './arctic/arctic.jpg','arctic']
let greenland = [`
<video autoplay muted loop id="myVideo">
<source src="./greenland/greenland.mp4" type="video/mp4">
</video>
<h1 id="area">Ледниците на Гренландия</h1>
<button  id="backBtn" >Назад</button>
<section class="fade">
<img id="infoImg" src="./greenland/greenland.jpeg" alt="greenland">
<button id="infoBtn" >Научи повече</button>`, 'https://bg.wikipedia.org/wiki/%D0%93%D1%80%D0%B5%D0%BD%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F', `Гренландия (на гренландски: Kalaallit Nunaat; на датски: Grønland; букв. на български: „Земя на гренландците“, „Зелена земя“) е самоуправляваща се провинция, намираща се между Северния ледовит океан и Атлантическия океан. Тя представлява арктическа островна държава и е част от континента Северна Америка както в географски, така и в етнически смисъл. В политически и исторически план Гренландия е много по-тясно свързана с Европа и по-специално с Исландия, Дания и Норвегия. Страната е едновременно най-голямата зависима територия и най-големият остров. (Австралия и Антарктика са по-големи от Гренландия, но се считат за континенти, а не за острови.[1]) С население от 55 847 души (януари 2016) тя е една от най-рядко населените страни в света.

През 1979 г. Дания предоставя на Гренландия известна автономия и я прави равнопоставен член на Кралство Дания. През 2008 г. Гренландия провежда референдум за по-голяма автономия. Това се осъществява през следващата година, като Дания запазва контрола над външната политика, отбраната, финансовата политика и осигурява годишна помощ от 3,4 млрд. датски крони или около 11 300 щатски долара на гренландец.`,
'./greenland/greenland.jpeg','greenland']
let taiga = [`<video autoplay muted loop id="myVideo">
<source src="./taiga/Taiga.mp4" type="video/mp4">
</video>
<h1 id="area">Бореална Гора/Тайга</h1>
<button  id="backBtn" >Назад</button>
<section class="fade">
<p id="info" >Бореалната гора (тайга) заема около 17% от площта на земята в земния пояс на далечното северно полукълбо. На север отвъд тази граница, тайгата се слива в циркулярна тундра. Бореалът представлява 29% от световната горска покривка.

Това е биомон на растителност, съставен главно от конусовидни иглолистни дървета с  иглолистна форма, в среда, характеризиращи се с дълги зими и умерени до високи годишни валежи. Почвата на тайгата има малко хранителни вещества. Тя също може да замръзне, което затруднява установяването на много растения.

Коренни дървета, като смърч, бор, лиственица и ела, са често срещани, тъй като са много добре приспособяеми  към климатичните условия. Тяхната тънка, конична форма минимизира натрупването на сняг по клоните, което позволява на дърветата да издържат тежестта на снега през зимата, без да се счупят. Малките окръжност и повърхност на иглите и восъчното покритие, позволяват на дървото да устои на силните студени ветрове. Поддържането на иглите през зимата позволява на дървото да фотосинтезира понякога през слънчевия, топъл зимен ден, и да започне фотосинтезията през пролетта, веднага щом температурите позволят.

Животните, живеещи в тайгата, включват лисици, мечки, норки, катерици, докато по-големите включват: сиви вълци и техните разновидности: карибу (Канада), елени и лосове.


</p>
<button id="infoBtn" >Научи повече</button>`,'https://bg.wikipedia.org/wiki/%D0%A2%D0%B0%D0%B9%D0%B3%D0%B0']
let corals = [`<video autoplay muted loop id="myVideo">
<source src="./coralReef/coralReefs.mp4" type="video/mp4">
</video>
<h1 id="area">Коралови Рифове</h1>
<button  id="backBtn" >Назад</button>
<section class="fade">
<img id="infoImg" src="./coralReef/corals.jpg" alt="CoralReefs">
<button id="infoBtn" >Научи повече</button>`,'https://bg.wikipedia.org/wiki/Коралов_риф',
`Коралов риф се нарича геологическа структура, образувана от колонии от коралови полипи и някои видове водорасли, можещи да извличат калциев карбонат от морската вода. Образуват се в плитчините на тропическите морета. Общата площ на кораловите рифове в света превишава 27 млн. км2. Намират се основно в Тихия и Индийския океан.

        Коралите отделят твърд карбонатен екзоскелет, който поддържа и защитава корала. Повечето рифове растат най-добре в топли, плитки, чисти, слънчеви и вълнисти води. Кораловите рифове се образуват преди около 485 милиона години, в зората на ранен ордовик, замествайки микробните рифове на камбрия.
        
        Плитките коралови рифове образуват едни от най-разнообразните екосистеми на Земята. Те заемат по-малко от 0,1% от общата площ на световните океани, но представляват дом за поне 25% от всички морски видове, включително риби, мекотели, червеи, ракообразни, бодлокожи, водни гъби, опашнохордови и мешести. Кораловите рифове процъфтяват в океански води с малко хранителни вещества. Срещат се най-често в плитки тропични води, но дълбоководни и студеноводни коралови рифове също съществуват, макар и в по-малък мащаб.`,
    './coralReef/corals.jpg']
let mountains =[`<video autoplay muted loop id="myVideo">
<source src="./mountainGletchers/mountains.mp4" type="video/mp4">
</video>
<h1 id="area">Планински Глетчери(Ледници)</h1>
<button  id="backBtn" >Назад</button>
<section class="fade">
<p id="info" >Лѐдникът (още глѐтчер от немската дума: Gletscher) представлява голяма, бавноподвижна ледена маса, която се образува от слоеве пресован сняг и е подложена на постепенни деформации под действието на гравитацията.

Ледниците се изучават от науката глациология. Те образуват криосферата на Земята и са най-големият резервоар на прясна вода в твърдо състояние. Те покриват огромни площи в полярните области, докато в тропиците заемат само най-високите части на планините. Другаде в Слънчевата система – на Марс – полярните шапки на полюсите съперничат на земните.

Ледниците са сред най-мощните релефоформиращи сили в света. Днес те се срещат само в полярните области и по високите планински върхове, но все още покриват една десета от сушата. Огромните ледени полета на Гренландия и Антарктида са известни като континентални ледници. Те постоянно се движат от своя център към периферията, където ледът се разтопява или се отчупва и пада в морето, образувайки айсберги.</p>
<button id="infoBtn" >Научи повече</button>`,'https://bg.wikipedia.org/wiki/%D0%9B%D0%B5%D0%B4%D0%BD%D0%B8%D0%BA']
let westAntactic = [`<video autoplay muted loop id="myVideo">
<source src="./westAntarctica/antarctic.mp4" type="video/mp4">
</video>
<h1 id="area">Западни антарктически ледници</h1>
<button  id="backBtn" >Назад</button>
<section class="fade">
<img id="infoImg" src="./westAntarctica/antarctic.png" alt="westAntarctica">
<button id="infoBtn" >Научи повече</button>`,'https://bg.wikipedia.org/wiki/Западен_шелфов_ледник',
`Западният шелфов ледник (на немски: West-Schelfeis; на английски: West Ice Shelf) е деветият по големина (16 370 km²) шелфов ледник край бреговете на Антарктида. Заема част от крайбрежието на Източна Антарктида, край Брега Леополд и Астрид на Земя принцеса Елизабет, в акваторията на море Съдружество на запад и акваторията на море Дейвис на север и изток в Индоокеанския сектор на Южния океан. Простира се на протежение от 288 km между 81°20’ и.д. (залива Бариера) на запад и 87°40’ и.д. (залива Позадовски) на изток. Площ 16 370 km² (заедно с постоянно изменящата си конфигурация и територия северен полуостров Челюскинци площта му нараства до 26 010 km²), обем 9350 km³. От север в него се вдават заливите Николаев и Карелин. `  ,
'./westAntarctica/antarctic.png','westAntarctica']
let wilkes = [`<video autoplay muted loop id="myVideo">
<source src="./wilkesLand/wilkes.mp4" type="video/mp4">
</video>
<h1 id="area">Уилкс Земя</h1>
<button  id="backBtn" >Назад</button>
<section class="fade">
<img id="infoImg" src="./wilkesLand/wilkes.jpg" alt="wilkesLand">
<button id="infoBtn" >Научи повече</button>`,'https://bg.wikipedia.org/wiki/Земя_Уилкс',
`Земя Уилкс (на английски: Wilkes Land) е територия от Източна Антарктида, простираща се между 65°45’ и 67°10’ ю.ш. и 100°30’ и 136°10’ и.д., покрай Индоокеанския сектор на Южния океан. На запад граничи със Земя кралица Мери, а на изток – със Земя Адели. Крайбрежните и участъци от запад на изток носят названията Бряг Нокс, Бряг Бад, Бряг Сабрина, Бряг БАНЗАРЕ и Бряг Клари.Бреговата линия на Земя Уилкс, с дължина около 1800 km, в общи линии е слабо разчленена, като западната ѝ част попада в акваторията на море Моусън. На запад се простира големия шелфов ледник Шакълтън, а в централните части – шелфовите ледници Московски университет и Воейков. Около 110° и.д. е разположен големия залив Винсенс, а на 128° и.д. – залива Порпес. Крайбрежните острови са малко, основно в крайната западна част, „зазидани“ в шелфовия ледник Шакълтън – Мил, Новосилски, Боумън.`,
'./wilkesLand/wilkes.jpg','wilkesLand']

const views = {
    'Амазонска екваториална гора': amazon,
    'Пермафрост': permafrost,
    'Акртика': arctic,
    'Ледниците на Гренландия': greenland,
    'Тайга': taiga,
    'Коралови Рифове': corals,
    'Планински глетчери': mountains,
    'Западни антарктически ледници': westAntactic,
    'Уилкс Земя': wilkes,
}



function onClick(ev) {

    ev.preventDefault()
    const clicked = ev.target
    const html = views[clicked.title]
    fill(html);

}

function onHover(event) {

    const h1 = document.getElementById('text');
    let hoveredTarget = event.target;
    let name = hoveredTarget.getAttribute('title')
    document.getElementById('text').style.display = 'block'
    allAreas.forEach(area => {
        if (!(area.title == hoveredTarget.title) && !(area.title.includes(name))) {
            area.coords = ''
        }

    });

    h1.textContent = name;
    $('.map').maphilight({
        alwaysOn: true,
        fill: true,
        strokeColor: "00FF00",
        strokeWidth: 2,
        shadow: true,
        shadowRadius: 10,
        fillOpacity: 0.8
    });


}

function outHover() {



    allAreas.forEach(area => {
        area.coords = coords[area.alt]
    });
    $('.map').maphilight({
        alwaysOn: true,
        fill: false,
        strokeColor: "ffff00",
        strokeWidth: 2,
        shadow: true,
        shadowRadius: 10,
    });
    document.getElementById('text').style.display = 'none'
}
function fill(html) {
    document.querySelector('body').innerHTML = html[0];
    
    const infoBtn = document.getElementById('infoBtn')
    const backBtn = document.getElementById('backBtn')
    let target = html[1]
    if (html.length > 2) {
        infoBtn.addEventListener('click', () => { more(html) })
        
    } else {
        infoBtn.addEventListener('click', () => {
            window.open(target, '_blank')
        })
  
    }
  
        backBtn.addEventListener('click', () => {
            location.href = './index.html'
        })
        
}


function more(html) {
    document.getElementById('infoBtn').remove()
    document.getElementById('infoImg').remove()
    const parent = document.querySelector('.fade');
    const p = document.createElement('p');
    p.textContent = html[2];
    const button2 = document.createElement('button');
    button2.id = 'moreBtn';
    button2.textContent = 'Още информация';
    parent.appendChild(p);
    parent.appendChild(button2);
    button2.addEventListener('click', () => {
        window.open(html[1], '_blank')
    })
    document.getElementById('backBtn').remove();
    const btn = document.createElement('button');
    btn.innerText = 'Назад';
    btn.id = 'backBtn'
    btn.addEventListener('click', () => { backfill(html) });
    document.querySelector('body').appendChild(btn);

}
function backfill(html) {
    const parent = document.querySelector('.fade');
    document.querySelector('p').remove();
    document.getElementById('moreBtn').remove();
    const img = document.createElement('img');
    img.src = html[3]
    img.id = 'infoImg'
    img.alt = html[4]
    const button = document.createElement('button');
    button.id = 'infoBtn'
    button.textContent = 'Научи повече';
    button.addEventListener('click' , ()=>{more(html)})
    parent.appendChild(img)
    parent.appendChild(button)
    document.getElementById('backBtn').remove()
    const btn = document.createElement('button');
    btn.innerText = 'Назад';
    btn.id = 'backBtn'
    btn.addEventListener('click', () => {
        location.href = './index.html'
    })
   document.querySelector('body').appendChild(btn);

}
