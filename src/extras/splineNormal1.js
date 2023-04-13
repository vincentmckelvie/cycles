import * as THREE from '../build/three.module.js';const splineNormal1 = new THREE.CatmullRomCurve3([new THREE.Vector3(-0.1172635480761528, -0.36892789602279663, 0.32886257767677307),new THREE.Vector3(-0.11051928997039795, -0.3344079852104187, 0.33048778772354126),new THREE.Vector3(-0.10424643754959106, -0.30114907026290894, 0.3316383957862854),new THREE.Vector3(-0.09843197464942932, -0.26912733912467957, 0.33232682943344116),new THREE.Vector3(-0.09306290000677109, -0.23831894993782043, 0.332565575838089),new THREE.Vector3(-0.08812619745731354, -0.20870007574558258, 0.33236706256866455),new THREE.Vector3(-0.08360885083675385, -0.18024688959121704, 0.3317437469959259),new THREE.Vector3(-0.07949785888195038, -0.15293556451797485, 0.3307080864906311),new THREE.Vector3(-0.07578020542860031, -0.12674225866794586, 0.3292725384235382),new THREE.Vector3(-0.07244287431240082, -0.1016431599855423, 0.3274495601654053),new THREE.Vector3(-0.06947286427021027, -0.0776144340634346, 0.32525157928466797),new THREE.Vector3(-0.06685715913772583, -0.05463225394487381, 0.32269105315208435),new THREE.Vector3(-0.06458275020122528, -0.03267279267311096, 0.3197804391384125),new THREE.Vector3(-0.06263662874698639, -0.011712223291397095, 0.3165321946144104),new THREE.Vector3(-0.06100578233599663, 0.008273284882307053, 0.3129587769508362),new THREE.Vector3(-0.05967719852924347, 0.027307558804750443, 0.3090726137161255),new THREE.Vector3(-0.058637868613004684, 0.04541442543268204, 0.3048861622810364),new THREE.Vector3(-0.057874780148267746, 0.0626177191734314, 0.3004118800163269),new THREE.Vector3(-0.057374924421310425, 0.07894125580787659, 0.2956622242927551),new THREE.Vector3(-0.057125288993120193, 0.09440887719392776, 0.2906496524810791),new THREE.Vector3(-0.05711286514997482, 0.1090444028377533, 0.2853865921497345),new THREE.Vector3(-0.057324640452861786, 0.12287165969610214, 0.27988550066947937),new THREE.Vector3(-0.057747602462768555, 0.13591447472572327, 0.2741588354110718),new THREE.Vector3(-0.0583687424659729, 0.14819668233394623, 0.2682190537452698),new THREE.Vector3(-0.059175051748752594, 0.15974211692810059, 0.2620786130428314),new THREE.Vector3(-0.06015351414680481, 0.1705745905637741, 0.2557499408721924),new THREE.Vector3(-0.06129112467169762, 0.18071794509887695, 0.2492455095052719),new THREE.Vector3(-0.06257487088441849, 0.1901959925889969, 0.24257776141166687),new THREE.Vector3(-0.0639917403459549, 0.19903257489204407, 0.23575913906097412),new THREE.Vector3(-0.06552872061729431, 0.20725151896476746, 0.22880211472511292),new THREE.Vector3(-0.06717280298471451, 0.21487663686275482, 0.22171911597251892),new THREE.Vector3(-0.06891097873449326, 0.22193177044391632, 0.2145226150751114),new THREE.Vector3(-0.07073023915290833, 0.22844074666500092, 0.20722505450248718),new THREE.Vector3(-0.07261756807565689, 0.23442739248275757, 0.19983889162540436),new THREE.Vector3(-0.07455995678901672, 0.23991553485393524, 0.19237656891345978),new THREE.Vector3(-0.0765443965792656, 0.2449290156364441, 0.1848505437374115),new THREE.Vector3(-0.07855787128210068, 0.2494916468858719, 0.17727325856685638),new THREE.Vector3(-0.08058737218379974, 0.2536272704601288, 0.1696571707725525),new THREE.Vector3(-0.08261989057064056, 0.25735968351364136, 0.16201473772525787),new THREE.Vector3(-0.08464241772890091, 0.26071274280548096, 0.1543584167957306),new THREE.Vector3(-0.08664193749427795, 0.26371026039123535, 0.1467006355524063),new THREE.Vector3(-0.08860544115304947, 0.2663760781288147, 0.13905386626720428),new THREE.Vector3(-0.09051991999149323, 0.26873400807380676, 0.13143055140972137),new THREE.Vector3(-0.092372365295887, 0.2708078920841217, 0.12384314835071564),new THREE.Vector3(-0.09414976090192795, 0.2726215720176697, 0.11630409955978394),new THREE.Vector3(-0.09583909809589386, 0.27419885993003845, 0.10882586240768433),new THREE.Vector3(-0.0974273681640625, 0.2755635678768158, 0.10142088681459427),new THREE.Vector3(-0.09890155494213104, 0.27673953771591187, 0.09410163015127182),new THREE.Vector3(-0.10024864971637726, 0.2777506113052368, 0.08688053488731384),new THREE.Vector3(-0.10145564377307892, 0.2786206007003784, 0.0797700583934784),new THREE.Vector3(-0.1025095283985138, 0.27937331795692444, 0.07278265058994293),new THREE.Vector3(-0.10339728742837906, 0.28003260493278503, 0.06593076139688492),new THREE.Vector3(-0.10410591214895248, 0.28062230348587036, 0.05922684073448181),new THREE.Vector3(-0.10462239384651184, 0.2811662256717682, 0.05268334597349167),new THREE.Vector3(-0.1049337238073349, 0.28168821334838867, 0.04631272330880165),new THREE.Vector3(-0.10502688586711884, 0.2822120785713196, 0.04012742638587952),new THREE.Vector3(-0.10488887131214142, 0.28276166319847107, 0.034139908850193024),new THREE.Vector3(-0.10450667142868042, 0.2833608090877533, 0.028362618759274483),new THREE.Vector3(-0.10386727005243301, 0.28403329849243164, 0.022808007895946503),new THREE.Vector3(-0.10295765846967697, 0.28480300307273865, 0.017488528043031693),new THREE.Vector3(-0.10176482796669006, 0.2856937348842621, 0.01241663284599781),new THREE.Vector3(-0.10027576982975006, 0.2867293059825897, 0.007604771759361029),new THREE.Vector3(-0.09847746789455414, 0.2879335582256317, 0.0030653965659439564),new THREE.Vector3(-0.09635691344738007, 0.2893303334712982, -0.0011890409514307976),new THREE.Vector3(-0.0939013734459877, 0.29094332456588745, -0.00514630600810051),new THREE.Vector3(-0.09233486652374268, 0.2918335497379303, -0.00702543742954731),new THREE.Vector3(-0.09029927104711533, 0.2927606999874115, -0.008822161704301834),new THREE.Vector3(-0.08781403303146362, 0.2937261462211609, -0.010532130487263203),new THREE.Vector3(-0.08489859849214554, 0.2947312891483307, -0.01215099636465311),new THREE.Vector3(-0.08157241344451904, 0.29577749967575073, -0.013674410991370678),new THREE.Vector3(-0.07785492390394211, 0.29686620831489563, -0.0150980269536376),new THREE.Vector3(-0.0737655833363533, 0.2979987859725952, -0.016417495906352997),new THREE.Vector3(-0.0693238377571106, 0.2991766333580017, -0.017628468573093414),new THREE.Vector3(-0.06454913318157196, 0.30040112137794495, -0.018726598471403122),new THREE.Vector3(-0.059460919350385666, 0.30167368054389954, -0.019707538187503815),new THREE.Vector3(-0.05407864227890968, 0.3029956817626953, -0.02056693844497204),new THREE.Vector3(-0.04842175170779228, 0.3043685257434845, -0.02130044996738434),new THREE.Vector3(-0.042509693652391434, 0.3057935833930969, -0.02190372720360756),new THREE.Vector3(-0.03636191412806511, 0.3072722852230072, -0.022372420877218246),new THREE.Vector3(-0.029997864738106728, 0.30880600214004517, -0.022702183574438095),new THREE.Vector3(-0.02343699149787426, 0.31039613485336304, -0.0228886678814888),new THREE.Vector3(-0.016698740422725677, 0.31204405426979065, -0.022927524521946907),new THREE.Vector3(-0.00980256125330925, 0.3137511909008026, -0.02281440608203411),new THREE.Vector3(-0.0027679014019668102, 0.31551891565322876, -0.022544963285326958),new THREE.Vector3(0.004385791718959808, 0.3173486292362213, -0.02211485058069229),new THREE.Vector3(0.011639069765806198, 0.3192417025566101, -0.021519716829061508),new THREE.Vector3(0.0189724862575531, 0.32119956612586975, -0.020755216479301453),new THREE.Vector3(0.026366593316197395, 0.3232235908508301, -0.01981700025498867),new THREE.Vector3(0.03380194306373596, 0.3253151774406433, -0.018700720742344856),new THREE.Vector3(0.04125908762216568, 0.3274756968021393, -0.017402030527591705),new THREE.Vector3(0.04871857911348343, 0.3297065794467926, -0.015916580334305763),new THREE.Vector3(0.05616097152233124, 0.3320091962814331, -0.0142400236800313),new THREE.Vector3(0.06356681138277054, 0.3343849182128906, -0.01236801128834486),new THREE.Vector3(0.07091666013002396, 0.33683517575263977, -0.01029619574546814),new THREE.Vector3(0.07819106429815292, 0.3393613398075104, -0.008020228706300259),new THREE.Vector3(0.08537057787179947, 0.34196481108665466, -0.005535761825740337),new THREE.Vector3(0.09243574738502502, 0.34464699029922485, -0.002838447690010071),new THREE.Vector3(0.09936713427305222, 0.34740927815437317, 7.606181316077709e-05),new THREE.Vector3(0.10614528506994247, 0.35025304555892944, 0.0032121147960424423),new THREE.Vector3(0.11275075376033783, 0.3531796932220459, 0.006574058905243874),new THREE.Vector3(0.11916409432888031, 0.35619062185287476, 0.010166242718696594),new THREE.Vector3(0.12536585330963135, 0.35928720235824585, 0.01399301365017891),new THREE.Vector3(0.13133658468723297, 0.3624708652496338, 0.018058720976114273),new THREE.Vector3(0.1370568424463272, 0.3657429814338684, 0.02236771211028099),new THREE.Vector3(0.1425071805715561, 0.36910492181777954, 0.026924334466457367),new THREE.Vector3(0.14766815304756165, 0.3725581169128418, 0.03173293545842171),new THREE.Vector3(0.1525203138589859, 0.376103937625885, 0.036797866225242615),new THREE.Vector3(0.1570442020893097, 0.3797437846660614, 0.042123470455408096),new THREE.Vector3(0.16122038662433624, 0.3834790587425232, 0.047714099287986755),new THREE.Vector3(0.1650294065475464, 0.3873111307621002, 0.0535741001367569),new THREE.Vector3(0.16845183074474335, 0.3912414312362671, 0.059707820415496826),new THREE.Vector3(0.17146819829940796, 0.39527133107185364, 0.06611960381269455),new THREE.Vector3(0.17405906319618225, 0.3994022011756897, 0.07281380891799927),new THREE.Vector3(0.17620497941970825, 0.4036354720592499, 0.07979477196931839),new THREE.Vector3(0.1778864860534668, 0.407972514629364, 0.08706685155630112),new THREE.Vector3(0.1790841519832611, 0.4124147295951843, 0.09463438391685486),new THREE.Vector3(0.17977853119373322, 0.41696351766586304, 0.10250172764062881),new THREE.Vector3(0.17995016276836395, 0.42162024974823, 0.11067322641611099),new THREE.Vector3(0.17957961559295654, 0.4263863265514374, 0.11915323138237),new THREE.Vector3(0.17864742875099182, 0.43126314878463745, 0.12794607877731323),new THREE.Vector3(0.17713415622711182, 0.4362521171569824, 0.1370561271905899),new THREE.Vector3(0.17502035200595856, 0.4413546323776245, 0.14648772776126862),new THREE.Vector3(0.17228657007217407, 0.44657206535339355, 0.15624523162841797),new THREE.Vector3(0.1689133644104004, 0.4519058167934418, 0.16633297502994537),new THREE.Vector3(0.16488127410411835, 0.457357257604599, 0.17675530910491943),new THREE.Vector3(0.16017086803913116, 0.46292781829833984, 0.18751658499240875),new THREE.Vector3(0.15476268529891968, 0.46861886978149414, 0.19862113893032074),new THREE.Vector3(0.1486372947692871, 0.4744318127632141, 0.2100733369588852),new THREE.Vector3(0.1417754888534546, 0.4803679585456848, 0.22187742590904236),new THREE.Vector3(0.13453014194965363, 0.48652297258377075, 0.233212411403656),new THREE.Vector3(0.1272708624601364, 0.4929848611354828, 0.24327315390110016),new THREE.Vector3(0.12000216543674469, 0.49974387884140015, 0.25208818912506104),new THREE.Vector3(0.11272856593132019, 0.506790280342102, 0.25968608260154724),new THREE.Vector3(0.10545457154512405, 0.5141143798828125, 0.266095370054245),new THREE.Vector3(0.09818468987941742, 0.5217064023017883, 0.2713446021080017),new THREE.Vector3(0.09092344343662262, 0.5295566320419312, 0.2754623293876648),new THREE.Vector3(0.0836753398180008, 0.5376553535461426, 0.2784770727157593),new THREE.Vector3(0.07644489407539368, 0.5459928512573242, 0.28041741251945496),new THREE.Vector3(0.06923661381006241, 0.5545593500137329, 0.28131186962127686),new THREE.Vector3(0.062055014073848724, 0.5633451342582703, 0.2811889946460724),new THREE.Vector3(0.05490460991859436, 0.5723404884338379, 0.28007733821868896),new THREE.Vector3(0.047789912670850754, 0.5815356373786926, 0.278005450963974),new THREE.Vector3(0.04071543365716934, 0.5909208655357361, 0.2750018537044525),new THREE.Vector3(0.03368568420410156, 0.6004864573478699, 0.2710951268672943),new THREE.Vector3(0.0267051812261343, 0.6102226972579956, 0.2663137912750244),new THREE.Vector3(0.019778436049818993, 0.6201198101043701, 0.26068639755249023),new THREE.Vector3(0.012909960001707077, 0.630168080329895, 0.2542414963245392),new THREE.Vector3(0.006104267202317715, 0.6403577923774719, 0.24700763821601868),new THREE.Vector3(-0.0006341300904750824, 0.6506792306900024, 0.23901335895061493),new THREE.Vector3(-0.007300719153136015, 0.6611226201057434, 0.23028720915317535),new THREE.Vector3(-0.013890987262129784, 0.6716782450675964, 0.22085773944854736),new THREE.Vector3(-0.02040042169392109, 0.6823363900184631, 0.21075348556041718),new THREE.Vector3(-0.026824509724974632, 0.6930873394012451, 0.2000029981136322),new THREE.Vector3(-0.033158738166093826, 0.7039213180541992, 0.18863482773303986),new THREE.Vector3(-0.039398595690727234, 0.714828610420227, 0.17667752504348755),new THREE.Vector3(-0.04553956910967827, 0.7257995009422302, 0.1641596257686615),new THREE.Vector3(-0.051577143371105194, 0.7368242144584656, 0.15110966563224792),new THREE.Vector3(-0.057506807148456573, 0.7478930354118347, 0.13755621016025543),new THREE.Vector3(-0.06332404911518097, 0.7589962482452393, 0.12352779507637024),new THREE.Vector3(-0.06902435421943665, 0.7701241374015808, 0.10905297100543976),new THREE.Vector3(-0.07460321485996246, 0.7812669277191162, 0.0941602811217308),new THREE.Vector3(-0.08005611598491669, 0.7924149036407471, 0.07887826859951019),new THREE.Vector3(-0.08537854254245758, 0.803558349609375, 0.06323548406362534),new THREE.Vector3(-0.09056597948074341, 0.8146875500679016, 0.04726047068834305),new THREE.Vector3(-0.09561391919851303, 0.8257927298545837, 0.030981773510575294),new THREE.Vector3(-0.10051784664392471, 0.836864173412323, 0.014427939429879189),new THREE.Vector3(-0.10527324676513672, 0.847892165184021, -0.002372484654188156),new THREE.Vector3(-0.10987561196088791, 0.8588669300079346, -0.019390953704714775),new THREE.Vector3(-0.11432042717933655, 0.8697788119316101, -0.036598920822143555),new THREE.Vector3(-0.1186031773686409, 0.8806180357933044, -0.05396784096956253),new THREE.Vector3(-0.12271935492753983, 0.8913748264312744, -0.07146916538476944),new THREE.Vector3(-0.1266644448041916, 0.9020395278930664, -0.08907435089349747),new THREE.Vector3(-0.13043393194675446, 0.9126023650169373, -0.1067548543214798),new THREE.Vector3(-0.13402330875396729, 0.9230536222457886, -0.12448212504386902),new THREE.Vector3(-0.13742806017398834, 0.9333835244178772, -0.14222761988639832),new THREE.Vector3(-0.1406436711549759, 0.9435824155807495, -0.15996278822422028),new THREE.Vector3(-0.1436656266450882, 0.9536405205726624, -0.17765909433364868),new THREE.Vector3(-0.14648942649364471, 0.9635481238365173, -0.19528797268867493),new THREE.Vector3(-0.14911054074764252, 0.9732954502105713, -0.212820902466774),new THREE.Vector3(-0.15152446925640106, 0.9828728437423706, -0.23022931814193726),new THREE.Vector3(-0.1537266969680786, 0.9922705292701721, -0.24748468399047852),new THREE.Vector3(-0.15571270883083344, 1.0014787912368774, -0.26455846428871155),new THREE.Vector3(-0.1574779897928238, 1.0104877948760986, -0.28142207860946655),new THREE.Vector3(-0.15901802480220795, 1.0192879438400269, -0.2980470061302185),new THREE.Vector3(-0.16032831370830536, 1.027869462966919, -0.31440469622612),new THREE.Vector3(-0.1614043414592743, 1.0362225770950317, -0.330466628074646),new THREE.Vector3(-0.16224157810211182, 1.0443376302719116, -0.3462042212486267),new THREE.Vector3(-0.1628355234861374, 1.0522048473358154, -0.3615889251232147),new THREE.Vector3(-0.16318167746067047, 1.0598145723342896, -0.376592218875885),new THREE.Vector3(-0.16327551007270813, 1.0671569108963013, -0.39118555188179016),new THREE.Vector3(-0.16311250627040863, 1.0742223262786865, -0.40534037351608276),new THREE.Vector3(-0.16268816590309143, 1.0810009241104126, -0.4190281331539154),new THREE.Vector3(-0.1619979739189148, 1.0874830484390259, -0.4322188198566437),new THREE.Vector3(-0.1609673947095871, 1.0947209596633911, -0.44642654061317444),new THREE.Vector3(-0.15975427627563477, 1.1020294427871704, -0.45964157581329346),new THREE.Vector3(-0.1583629697561264, 1.1094006299972534, -0.47188425064086914),new THREE.Vector3(-0.1567978411912918, 1.1168265342712402, -0.4831749200820923),new THREE.Vector3(-0.15506324172019958, 1.1242992877960205, -0.4935339391231537),new THREE.Vector3(-0.15316352248191833, 1.1318107843399048, -0.5029816031455994),new THREE.Vector3(-0.15110304951667786, 1.1393532752990723, -0.5115382671356201),new THREE.Vector3(-0.14888615906238556, 1.1469186544418335, -0.519224226474762),new THREE.Vector3(-0.14651721715927124, 1.1544990539550781, -0.5260598659515381),new THREE.Vector3(-0.1440005898475647, 1.1620863676071167, -0.5320655107498169),new THREE.Vector3(-0.14134062826633453, 1.1696728467941284, -0.5372614860534668),new THREE.Vector3(-0.13854168355464935, 1.1772503852844238, -0.5416681170463562),new THREE.Vector3(-0.13560810685157776, 1.1848111152648926, -0.5453057289123535),new THREE.Vector3(-0.13254426419734955, 1.1923470497131348, -0.5481946468353271),new THREE.Vector3(-0.12935450673103333, 1.19985032081604, -0.5503552556037903),new THREE.Vector3(-0.1260431855916977, 1.207312822341919, -0.5518078207969666),new THREE.Vector3(-0.12261465936899185, 1.2147266864776611, -0.5525727272033691),new THREE.Vector3(-0.119073286652565, 1.2220840454101562, -0.5526703000068665),new THREE.Vector3(-0.11542341858148575, 1.2293767929077148, -0.5521208643913269),new THREE.Vector3(-0.11166941374540329, 1.2365970611572266, -0.5509447455406189),new THREE.Vector3(-0.10781563073396683, 1.2437368631362915, -0.5491622686386108),new THREE.Vector3(-0.10386642068624496, 1.2507883310317993, -0.5467938184738159),new THREE.Vector3(-0.0998261421918869, 1.2577433586120605, -0.5438596606254578),new THREE.Vector3(-0.09569915384054184, 1.2645940780639648, -0.5403801798820496),new THREE.Vector3(-0.09148980677127838, 1.2713326215744019, -0.5363757014274597),new THREE.Vector3(-0.08720245212316513, 1.2779508829116821, -0.5318665504455566),new THREE.Vector3(-0.08284145593643188, 1.2844409942626953, -0.5268730521202087),new THREE.Vector3(-0.07841116935014725, 1.290795087814331, -0.5214155912399292),new THREE.Vector3(-0.07391594350337982, 1.2970050573349, -0.5155144333839417),new THREE.Vector3(-0.0693601444363594, 1.3030630350112915, -0.5091899633407593),new THREE.Vector3(-0.064748115837574, 1.308961033821106, -0.5024624466896057),new THREE.Vector3(-0.06008422374725342, 1.3146910667419434, -0.49535226821899414),new THREE.Vector3(-0.05537281930446625, 1.3202452659606934, -0.48787975311279297),new THREE.Vector3(-0.050618257373571396, 1.325615644454956, -0.4800652265548706),new THREE.Vector3(-0.04582489654421806, 1.3307942152023315, -0.47192904353141785),new THREE.Vector3(-0.04099709168076515, 1.3357731103897095, -0.4634915292263031),new THREE.Vector3(-0.036139197647571564, 1.34054434299469, -0.4547730088233948),new THREE.Vector3(-0.0312555693089962, 1.345099925994873, -0.4457938075065613),new THREE.Vector3(-0.026350563392043114, 1.3494319915771484, -0.4365742802619934),new THREE.Vector3(-0.021428536623716354, 1.3535324335098267, -0.42713475227355957),new THREE.Vector3(-0.016493843868374825, 1.3573933839797974, -0.4174955487251282),new THREE.Vector3(-0.011550839990377426, 1.3610069751739502, -0.4076769948005676),new THREE.Vector3(-0.006603882182389498, 1.3643651008605957, -0.3976994454860687),new THREE.Vector3(-0.0016573257744312286, 1.3674598932266235, -0.3875832259654999),new THREE.Vector3(0.0032844734378159046, 1.3702833652496338, -0.3773486614227295),new THREE.Vector3(0.008217159658670425, 1.3728276491165161, -0.36701610684394836),new THREE.Vector3(0.013136377558112144, 1.3750847578048706, -0.3566058874130249),new THREE.Vector3(0.018037771806120872, 1.3770467042922974, -0.3461383283138275),new THREE.Vector3(0.02291698567569256, 1.3787055015563965, -0.3356337547302246),new THREE.Vector3(0.0277696643024683, 1.3800532817840576, -0.325112521648407),new THREE.Vector3(0.032591450959444046, 1.3810820579528809, -0.31459495425224304),new THREE.Vector3(0.037377990782260895, 1.3817838430404663, -0.3041014075279236),new THREE.Vector3(0.042124927043914795, 1.3821507692337036, -0.29365217685699463),new THREE.Vector3(0.046827904880046844, 1.3821748495101929, -0.283267617225647),new THREE.Vector3(0.05148256570100784, 1.3818480968475342, -0.272968053817749),new THREE.Vector3(0.05608455836772919, 1.3811625242233276, -0.2627738118171692),new THREE.Vector3(0.060629524290561676, 1.380110263824463, -0.25270524621009827),new THREE.Vector3(0.0651131123304367, 1.37868332862854, -0.24278268218040466),new THREE.Vector3(0.06953096389770508, 1.3768738508224487, -0.2330264449119568),new THREE.Vector3(0.07387872040271759, 1.3746737241744995, -0.22345687448978424),new THREE.Vector3(0.07815202325582504, 1.372075080871582, -0.21409431099891663),new THREE.Vector3(0.08234652131795883, 1.3690699338912964, -0.20495907962322235),new THREE.Vector3(0.08645786345005035, 1.3656504154205322, -0.19607152044773102),new THREE.Vector3(0.09048160910606384, 1.3618087768554688, -0.1874518245458603),]);export {splineNormal1}