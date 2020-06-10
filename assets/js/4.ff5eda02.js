(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{166:function(v,_,t){},248:function(v,_,t){"use strict";var r=t(166);t.n(r).a},266:function(v,_,t){"use strict";t.r(_);t(248);var r=t(28),n=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"a-b测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-b测试"}},[v._v("#")]),v._v(" A/B测试")]),v._v(" "),t("p",[v._v("将实验分成两个组开展，在两组中，一般会有一组采用现有的标准处理，或者是不执行任何处理，称为对照组，而另一组称为实验组。"),t("br"),v._v("\n实验中的一个典型假设是实验组要优于对照组。")]),v._v(" "),t("ul",[t("li",[v._v("主要术语")])]),v._v(" "),t("p",[v._v("处理 ：实验对象所接触的东西，例如药品、价格、Web 标题等。\n实验组 ： 执行特定处理的一组对象。\n对照组 ： 执行标准处理或不执行处理的一组对象。\n随机化 ： 随机地分配实验对象以进行处理的过程。\n实验对象 ： 接受处理者，例如 Web 访问者、病人等。\n检验统计量 ： 用于检验处理效果的度量。")]),v._v(" "),t("ul",[t("li",[v._v("应用场景")])]),v._v(" "),t("p",[v._v("A/B 测试的结果易于测量，因此被广泛地用于 Web 设计和营销中")]),v._v(" "),t("p",[v._v("测试两种土壤处理，以确定哪种土壤更适合育种"),t("br"),v._v("\n测试两种疗法，以确定哪种疗法对于抑制癌症更有效"),t("br"),v._v("\n测试两种价格，以确定哪种价格的净利润更高"),t("br"),v._v("\n测试两个 Web 标题，以确定哪个标题会带来更多的点击量"),t("br"),v._v("\n测试两条网络广告，以确定哪条广告能转化为更多的购买行为")]),v._v(" "),t("ul",[t("li",[v._v("实验对象")])]),v._v(" "),t("p",[v._v("对象会分配给两组处理中的一组，对象可能是一个人、一种植物种子 或一位 Web 访问者。"),t("br"),v._v("\n在理想情况下，对象是随机指定(即随机分配)给一组处理的，这样，两个实验组之间的任何差异，只可能是由下面两个因素所导致的。")]),v._v(" "),t("ol",[t("li",[v._v("不同处理的效果")]),v._v(" "),t("li",[v._v("将对象分配到不同处理过程中的运气因素\n一些对象的效果本来就很好，而随机分配可能会导致效果好的对象集中在处理 A 或处理 B 中。")])]),v._v(" "),t("ul",[t("li",[v._v("检验统计量")])]),v._v(" "),t("p",[v._v("在 A/B 测试中，我们也需要关注比较 A 组和 B 组使用的检验统计量(即度量)。"),t("br"),v._v("\n在数据科学中，最常用的度量可能是"),t("strong",[v._v("二元变量")]),v._v("，"),t("br"),v._v("\n例如点击或未点击，购买或不购买，作弊或未作弊，等等。")]),v._v(" "),t("p",[v._v("在比较中所使用的度量，可以是连续变量(例如购买数量、利润等)，"),t("br"),v._v("\n也可以是计数(例 如住院天数、访问的页面数量)，两者的结果显示存在着差异。")]),v._v(" "),t("ul",[t("li",[v._v("表3-1:电子商务实验结果的2×2表格")])]),v._v(" "),t("table",[t("tr",[t("th",[v._v("结果")]),v._v(" "),t("th",[v._v("价格A")]),v._v(" "),t("th",[v._v("价格B")])]),v._v(" "),t("tr",[t("th",[v._v("点击转化为购买")]),v._v(" "),t("td",[v._v("200")]),v._v(" "),t("td",[v._v("182")])]),v._v(" "),t("tr",[t("th",[v._v("点击未转化为购买")]),v._v(" "),t("td",[v._v("23 539")]),v._v(" "),t("td",[v._v("22 406")])])]),v._v(" "),t("p",[v._v("这是一个价格测试的结果。")]),v._v(" "),t("p",[v._v("在比较中所使用的度量，可以是连续变量(例如购买数量、利润等)，也可以是计数(例如住院天数、访问的页面数量)。"),t("br"),v._v("\n两者的结果显示存在着差异。"),t("br"),v._v("\n如果关注的并非点击广告的转化情况，而是每次页面浏览的收益情况，那么在常见的软件输出中，表 3-1 的价格测试结果大致如下：")]),v._v(" "),t("p",[v._v("Revenue/page-view with price A: mean = 3.87, SD = 51.10\nRevenue/page-view with price B: mean = 4.11, SD = 62.98")]),v._v(" "),t("p",[v._v("SD 表示的是各组中值的标准偏差。")]),v._v(" "),t("p",[v._v("注意："),t("br"),v._v("\n些统计软件(包括 R 在内)会默认生成输出，但不能因此认为所有的输 出信息都是有用的，或是与结果相关的。")]),v._v(" "),t("p",[v._v("我们可以看到，上面给出的标准偏 差就并非十分有用。"),t("br"),v._v("\n它们表明数据中可能存在大量的负值，但我们知道，收入值是不可能为负的。"),t("br"),v._v("\n这是由于数据集由少量较大的值(表示点击转化为购买)以及大量的零值(表示点击未转化为购买)组成。")]),v._v(" "),t("p",[v._v("此类数据的变异性很 难用单个数字总结。"),t("br"),v._v("\n相对于标准偏差而言，更合理的度量是偏离均值的绝对偏差均值(A 组是 7.68，B 组是 8.15)。")]),v._v(" "),t("h2",{attrs:{id:"_3-1-1-为什么要有对照组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-为什么要有对照组"}},[v._v("#")]),v._v(" 3.1.1 为什么要有对照组")]),v._v(" "),t("p",[v._v("因为，如果没有对照组，就不能确保“其他条件均一样”，也不能确保所有差异的确是由处理（注：应该理解为人为产生的变化）还是偶然导致的，"),t("br"),v._v("\n除了处理，对照组与处理组具有相同的条件。")]),v._v(" "),t("p",[v._v("如果我们只对比“基线”或先前的经验，那么除了处理，可能还有其他一些因素存在差异。")]),v._v(" "),t("ul",[t("li",[v._v("单盲研究和双盲研究")])]),v._v(" "),t("p",[v._v("在单盲研究中，实验对象本身并不知道自己接受的是处理 A 还是处理 B，如果对象知道自身所接受的处理，那么会对响应产生影响。"),t("br"),v._v("\n双盲研究是指研究者和协助者，(例如医学研究中的医生和护士)，都不知道哪个对象接受了哪种处理。")]),v._v(" "),t("p",[v._v("如果处理是公开透明的，则盲测是不可行的，例如电脑与心理学家间的认知疗法。")]),v._v(" "),t("p",[t("strong",[v._v("如何遵守随机化的原则？")])]),v._v(" "),t("p",[v._v("在标准的 A/B 测试中，需要预先确定一个度量，"),t("br"),v._v("\n如果希望实验能在处理 A 和处理 B 这两者之间做出一个决策，那么就需要预先确立一个度量，即检验统计量。")]),v._v(" "),t("p",[v._v("如果在实验开展后再去选择某个检验统计量，这无疑会引入研究人员的一些偏好。")]),v._v(" "),t("h2",{attrs:{id:"_3-1-2-为什么只有处理a和b，没有c、d"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-为什么只有处理a和b，没有c、d"}},[v._v("#")]),v._v(" 3.1.2 为什么只有处理A和B，没有C、D......")]),v._v(" "),t("p",[v._v("传统的统计实验设计关注的是如何回答有关具体处理的效果的静态问题，对于下面列出的两个问题，数据科学家更关注的是问题2。")]),v._v(" "),t("p",[v._v("问题 1: 价格 A 和价格 B 之间的差异是否是统计显著的?"),t("br"),v._v("\n问题 2: 在多种可能的价格中，哪种价格最好?")]),v._v(" "),t("p",[v._v("鉴于此，数据科学家采用的是一种相对新颖的实验设计方法，即多臂老虎机算法。")]),v._v(" "),t("ul",[t("li",[v._v("获得实验许可")])]),v._v(" "),t("p",[v._v("2014 年，Facebook 就在这个普遍接受的问题上碰了壁，该公司当时开展了 一项有关用户新闻推送中的情感影响的实验。")]),v._v(" "),t("ul",[t("li",[v._v("本节要点")])]),v._v(" "),t("ol",[t("li",[v._v("将实验对象分配给两组或更多组，各组的条件完全相同，只是要接受的处理不同。")]),v._v(" "),t("li",[v._v("在理想情况下，实验对象是随机分配给各组的。")])]),v._v(" "),t("h2",{attrs:{id:"_3-1-3-拓展阅读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-拓展阅读"}},[v._v("#")]),v._v(" 3.1.3 拓展阅读")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("Peter Bruce 撰写的 Introductory Statistics and Analytics: A Resampling Perspective，"),t("br"),v._v("\n重介绍了如何在数据科学场景中 使用 A/B 测试和重抽样。")])]),v._v(" "),t("li",[t("p",[v._v("在 Web 测试中，测试的逻辑性和统计学方法同样具有挑战性，推荐从 Google Analytics 中关于实验的帮助章节入手。")])]),v._v(" "),t("li",[t("p",[v._v("互联网上有大量的 A/B 测试指南，其中给出的建议须谨慎对待。"),t("br"),v._v("\n例如:  “等到大约有 1000 名访问者后，确保运行测试一周时间。”\n在统计学中，此类通用经验法则毫无意义。")])])])])}),[],!1,null,null,null);_.default=n.exports}}]);